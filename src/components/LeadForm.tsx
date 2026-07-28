import { useState } from "react";
import { createServerFn } from "@tanstack/react-start";
import { Resend } from "resend";
import { toast } from "sonner";
import { z } from "zod";
import { FEATURED_COURSE_TITLES } from "@/lib/courses";

type Field = { name: string; label: string; type?: string; required?: boolean; options?: string[]; placeholder?: string };

const leadSchema = z.object({
  name: z.string().trim().min(1).max(100),
  phone: z.string().trim().min(7).max(20),
  email: z.string().trim().email().max(254),
  message: z.string().trim().max(2000).optional(),
  qualification: z.string().trim().max(100).optional(),
  status: z.string().trim().max(100).optional(),
  module: z.string().trim().max(100).optional(),
});

function escapeHtml(value: string) {
  return value.replace(
    /[&<>"']/g,
    (character) =>
      ({
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&#039;",
      })[character]!,
  );
}

async function sendLeadEmail(data: z.infer<typeof leadSchema>) {
  const apiKey = process.env.RESEND_API_KEY;
  const recipient = process.env.LEAD_NOTIFICATION_EMAIL;
  const from = process.env.RESEND_FROM_EMAIL;
  const phoneNumber = process.env.COMPANY_PHONE_NUMBER || "+91 90003 33859";

  if (!apiKey || !recipient || !from) {
    console.warn(
      "Email notification skipped: RESEND_API_KEY, LEAD_NOTIFICATION_EMAIL, or RESEND_FROM_EMAIL is not configured.",
    );
    return false;
  }

  const rows = [
    ["Name", data.name],
    ["Phone", data.phone],
    ["Email", data.email],
    ["Qualification", data.qualification],
    ["Current status", data.status],
    ["SAP module", data.module],
    ["Message", data.message],
  ].filter((entry): entry is [string, string] => Boolean(entry[1]));

  const resend = new Resend(apiKey);
  const { error: notificationError } = await resend.emails.send({
    from,
    to: [recipient],
    replyTo: data.email,
    subject: `New website enquiry from ${data.name}`,
    html: `
      <div style="font-family:Arial,sans-serif;max-width:640px;margin:auto;color:#172033">
        <h2 style="margin-bottom:8px">New website enquiry</h2>
        <p style="margin-top:0;color:#667085">A new lead was submitted on Next-Gen ERP Solutions.</p>
        <table style="width:100%;border-collapse:collapse">
          ${rows
            .map(
              ([label, value]) => `
                <tr>
                  <th style="padding:10px;text-align:left;vertical-align:top;border-bottom:1px solid #e5e7eb;width:160px">${escapeHtml(label)}</th>
                  <td style="padding:10px;border-bottom:1px solid #e5e7eb;white-space:pre-wrap">${escapeHtml(value)}</td>
                </tr>`,
            )
            .join("")}
        </table>
      </div>
    `,
  });

  if (notificationError) {
    console.error("Resend rejected a lead notification:", notificationError);
    throw new Error("Email notification failed.");
  }

  const { error: confirmationError } = await resend.emails.send({
    from,
    to: [data.email],
    replyTo: recipient,
    subject: "Thank You for Your Interest",
    text: `Thank You for Your Interest

Dear ${data.name},

Greetings from Next-Gen ERP Solutions!

Thank you for showing interest in our training programs and demo sessions. We are happy to assist you with course details, demo schedules, fees, training methods, placement support and any other relevant details you may need

Our team will contact you shortly to understand your requirements and help you choose the right course.

For any immediate assistance, please contact us at ${phoneNumber} or reply to this email.

Best regards,
Next Gen ERP Solutions
Training & Placement Services
${phoneNumber}`,
    html: `
      <div style="font-family:Arial,sans-serif;max-width:640px;margin:auto;color:#172033;line-height:1.65">
        <h2 style="margin-bottom:20px">Thank You for Your Interest</h2>
        <p>Dear ${escapeHtml(data.name)},</p>
        <p>Greetings from Next-Gen ERP Solutions!</p>
        <p>
          Thank you for showing interest in our training programs and demo sessions.
          We are happy to assist you with course details, demo schedules, fees,
          training methods, placement support and any other relevant details you may need
        </p>
        <p>
          Our team will contact you shortly to understand your requirements and help
          you choose the right course.
        </p>
        <p>
          For any immediate assistance, please contact us at
          <a href="tel:${escapeHtml(phoneNumber.replace(/[^\d+]/g, ""))}">${escapeHtml(phoneNumber)}</a>
          or reply to this email.
        </p>
        <p style="margin-top:28px">
          Best regards,<br>
          <strong>Next Gen ERP Solutions</strong><br>
          Training &amp; Placement Services<br>
          ${escapeHtml(phoneNumber)}
        </p>
      </div>
    `,
  });

  if (confirmationError) {
    console.error("Resend rejected the customer confirmation:", confirmationError);
    throw new Error("Customer confirmation email failed.");
  }

  return true;
}

const submitLead = createServerFn({ method: "POST" })
  .validator(leadSchema)
  .handler(async ({ data }) => {
    const webhookUrl = process.env.TELECRM_WEBHOOK_URL;
    const webhookSecret = process.env.TELECRM_WEBHOOK_SECRET;

    let sentToCrm = false;

    if (webhookUrl) {
      const response = await fetch(webhookUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          ...(webhookSecret ? { Authorization: `Bearer ${webhookSecret}` } : {}),
        },
        body: JSON.stringify({
          ...data,
          phone: data.phone.replace(/[^\d+]/g, ""),
          source: "Website",
          submitted_at: new Date().toISOString(),
        }),
      });

      if (!response.ok) {
        console.error(`TeleCRM rejected a lead submission with status ${response.status}`);
      } else {
        sentToCrm = true;
      }
    } else {
      console.warn("TELECRM_WEBHOOK_URL is not configured.");
    }

    const sentByEmail = await sendLeadEmail(data);

    if (!sentToCrm && !sentByEmail) {
      throw new Error("No lead delivery channel is configured.");
    }

    return { success: true };
  });

export function LeadForm({
  title = "Book a Free Demo",
  subtitle = "A career advisor will call you within 1 working hour.",
  fields,
  cta = "Book Free Demo",
  selectedCourse,
}: {
  title?: string;
  subtitle?: string;
  fields?: Field[];
  cta?: string;
  selectedCourse?: string;
}) {
  const defaultFields: Field[] = fields ?? [
    { name: "name", label: "Full Name", required: true, placeholder: "Your name" },
    { name: "phone", label: "Phone", type: "tel", required: true, placeholder: "+91" },
    { name: "email", label: "Email", type: "email", required: true, placeholder: "you@email.com" },
    { name: "qualification", label: "Qualification", placeholder: "B.Tech, MBA, B.Com…" },
    { name: "status", label: "Current Status", options: ["Fresher", "Experienced", "Career Gap"] },
    {
      name: "module",
      label: "SAP Courses",
      required: true,
      options: [...FEATURED_COURSE_TITLES, "Not sure yet"],
    },
  ];
  const visibleFields = selectedCourse
    ? defaultFields.filter((field) => field.name !== "module")
    : defaultFields;

  const [loading, setLoading] = useState(false);

  return (
    <form
      onSubmit={async (e) => {
        e.preventDefault();
        const form = e.currentTarget;
        setLoading(true);

        try {
          const values = Object.fromEntries(new FormData(form).entries());
          await submitLead({ data: leadSchema.parse(values) });
          toast.success("Thank you! A career advisor will call you shortly.");
          form.reset();
        } catch (error) {
          console.error(error);
          toast.error("We couldn't send your details. Please try again or call us.");
        } finally {
          setLoading(false);
        }
      }}
      className="rounded-2xl border border-border bg-card p-6 shadow-card md:p-8"
    >
      <h3 className="text-2xl font-extrabold text-foreground">{title}</h3>
      <p className="mt-1 text-sm text-muted-foreground">{subtitle}</p>
      <div className="mt-5 grid gap-4 sm:grid-cols-2">
        {visibleFields.map((f) => (
          <label key={f.name} className={f.name === "name" || f.name === "module" ? "sm:col-span-2 block" : "block"}>
            <span className="mb-1 block text-xs font-semibold uppercase tracking-wider text-muted-foreground">
              {f.label}{f.required && <span className="text-destructive"> *</span>}
            </span>
            {f.options ? (
              <select required={f.required} name={f.name} className="w-full rounded-lg border border-input bg-background px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-ring">
                <option value="">Select…</option>
                {f.options.map((o) => <option key={o}>{o}</option>)}
              </select>
            ) : (
              <input
                required={f.required}
                name={f.name}
                type={f.type ?? "text"}
                placeholder={f.placeholder}
                className="w-full rounded-lg border border-input bg-background px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-ring"
              />
            )}
          </label>
        ))}
        {selectedCourse && (
          <label className="block sm:col-span-2">
            <span className="mb-1 block text-xs font-semibold uppercase tracking-wider text-muted-foreground">
              SAP Course
            </span>
            <input
              readOnly
              name="module"
              value={selectedCourse}
              className="w-full cursor-default rounded-lg border border-input bg-secondary px-3 py-2.5 text-sm font-semibold text-foreground focus:outline-none"
            />
          </label>
        )}
      </div>
      <button
        type="submit"
        disabled={loading}
        className="mt-5 w-full rounded-full bg-gradient-brand px-6 py-3 font-semibold text-white shadow-glow transition hover:scale-[1.02] disabled:opacity-60"
      >
        {loading ? "Sending…" : cta}
      </button>
      <p className="mt-3 text-center text-xs text-muted-foreground">
        By submitting you agree to be contacted by Next-Gen ERP Solutions.
      </p>
    </form>
  );
}
