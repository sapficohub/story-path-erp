import { useState } from "react";
import { createServerFn } from "@tanstack/react-start";
import { toast } from "sonner";
import { z } from "zod";

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

const submitLead = createServerFn({ method: "POST" })
  .validator(leadSchema)
  .handler(async ({ data }) => {
    const webhookUrl = process.env.TELECRM_WEBHOOK_URL;
    const webhookSecret = process.env.TELECRM_WEBHOOK_SECRET;

    if (!webhookUrl) {
      console.error("TELECRM_WEBHOOK_URL is not configured");
      throw new Error("Lead submission is temporarily unavailable.");
    }

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
      throw new Error("Lead submission failed.");
    }

    return { success: true };
  });

export function LeadForm({
  title = "Book a Free Demo",
  subtitle = "A career advisor will call you within 1 working hour.",
  fields,
  cta = "Book Free Demo",
}: {
  title?: string;
  subtitle?: string;
  fields?: Field[];
  cta?: string;
}) {
  const defaultFields: Field[] = fields ?? [
    { name: "name", label: "Full Name", required: true, placeholder: "Your name" },
    { name: "phone", label: "Phone", type: "tel", required: true, placeholder: "+91" },
    { name: "email", label: "Email", type: "email", required: true, placeholder: "you@email.com" },
    { name: "qualification", label: "Qualification", placeholder: "B.Tech, MBA, B.Com…" },
    { name: "status", label: "Current Status", options: ["Fresher", "Experienced", "Career Gap"] },
    { name: "module", label: "Preferred SAP Module", options: ["SAP FICO", "SAP MM", "SAP SD", "SAP ABAP", "SAP HCM", "SuccessFactors", "Not sure yet"] },
  ];

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
        {defaultFields.map((f) => (
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
