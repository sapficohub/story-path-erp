import { useState } from "react";
import { createServerFn } from "@tanstack/react-start";
import PhoneInput, { isValidPhoneNumber, type Value } from "react-phone-number-input";
import "react-phone-number-input/style.css";
import { toast } from "sonner";
import { z } from "zod";
import { getReferralAttribution } from "@/lib/referral";

type Field = {
  name: string;
  label: string;
  type?: string;
  required?: boolean;
  options?: string[];
  placeholder?: string;
};

const leadSchema = z.object({
  name: z.string().trim().min(1).max(100),
  phone: z.string().refine((value) => isValidPhoneNumber(value), "Enter a valid phone number."),
  email: z.string().trim().email().max(254),
  message: z.string().trim().max(2000).optional(),
  qualification: z.string().trim().max(100).optional(),
  status: z.string().trim().max(100).optional(),
  module: z.string().trim().max(100).optional(),
  utm_source: z.string().trim().max(200).optional(),
  utm_medium: z.string().trim().max(200).optional(),
  utm_campaign: z.string().trim().max(200).optional(),
  ref: z.string().trim().max(200).optional(),
  landing_page: z.string().trim().max(500).optional(),
  source_form: z.enum(["Free Demo", "Course Application", "Contact Message", "Placement Enquiry"]),
});

async function sendLeadToTracker(data: z.infer<typeof leadSchema>) {
  const webhookUrl = process.env.LEAD_TRACKER_WEBHOOK_URL;
  if (!webhookUrl) {
    console.warn("Lead tracker skipped: LEAD_TRACKER_WEBHOOK_URL is not configured.");
    return false;
  }

  const response = await fetch(webhookUrl, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      ...data,
      tracker_secret: process.env.LEAD_TRACKER_WEBHOOK_SECRET,
      submitted_at: new Date().toISOString(),
    }),
  });

  if (!response.ok) {
    console.error(`Lead tracker rejected a submission with status ${response.status}.`);
    return false;
  }

  const result = (await response.json().catch(() => null)) as { success?: boolean } | null;
  return result?.success === true;
}

const submitLead = createServerFn({ method: "POST" })
  .validator(leadSchema)
  .handler(async ({ data }) => {
    if (!(await sendLeadToTracker(data))) {
      throw new Error("Lead tracker delivery failed.");
    }

    return { success: true };
  });

export function LeadForm({
  title = "Book a Free Demo",
  subtitle = "A career advisor will call you within 1 working hour.",
  fields,
  cta = "Book Free Demo",
  defaultModule,
  sourceForm = "Free Demo",
}: {
  title?: string;
  subtitle?: string;
  fields?: Field[];
  cta?: string;
  defaultModule?: string;
  sourceForm?: "Free Demo" | "Course Application" | "Contact Message" | "Placement Enquiry";
}) {
  const standardModules = [
    "SAP FICO",
    "SAP MM",
    "SAP SD",
    "SAP ABAP",
    "SAP HCM",
    "SuccessFactors",
    "Not sure yet",
  ];
  const moduleOptions =
    defaultModule && !standardModules.includes(defaultModule)
      ? [defaultModule, ...standardModules]
      : standardModules;

  const defaultFields: Field[] = fields ?? [
    { name: "name", label: "Full Name", required: true, placeholder: "Your name" },
    { name: "phone", label: "Phone", type: "tel", required: true, placeholder: "+91" },
    { name: "email", label: "Email", type: "email", required: true, placeholder: "you@email.com" },
    { name: "qualification", label: "Qualification", placeholder: "B.Tech, MBA, B.Com…" },
    { name: "status", label: "Current Status", options: ["Fresher", "Experienced", "Career Gap"] },
    {
      name: "module",
      label: "Preferred SAP Module",
      options: moduleOptions,
    },
  ];

  const [loading, setLoading] = useState(false);
  const [phone, setPhone] = useState<Value>();

  return (
    <form
      onSubmit={async (e) => {
        e.preventDefault();
        const form = e.currentTarget;

        setLoading(true);

        try {
          const values = {
            ...Object.fromEntries(new FormData(form).entries()),
            ...getReferralAttribution(),
          };
          await submitLead({ data: leadSchema.parse(values) });
          toast.success("Thank you! A career advisor will call you shortly.");
          form.reset();
          setPhone(undefined);
        } catch (error) {
          console.error(error);
          toast.error("We couldn't send your details. Please try again or call us.");
        } finally {
          setLoading(false);
        }
      }}
      className="w-full max-w-full rounded-2xl border border-border bg-card p-5 text-card-foreground shadow-card sm:p-6 md:p-8"
    >
      <h3 className="text-2xl font-extrabold text-foreground">{title}</h3>
      <p className="mt-2 text-base leading-relaxed text-muted-foreground">{subtitle}</p>
      <div className="mt-5 grid gap-4 sm:grid-cols-2">
        {defaultFields.map((f) => (
          <label
            key={f.name}
            className={f.name === "name" || f.name === "module" ? "sm:col-span-2 block" : "block"}
          >
            <span className="mb-1 block text-xs font-semibold uppercase tracking-wider text-muted-foreground">
              {f.label}
              {f.required && <span className="text-destructive"> *</span>}
            </span>
            {f.name === "phone" ? (
              <PhoneInput
                name={f.name}
                required={f.required}
                defaultCountry="IN"
                international
                countryCallingCodeEditable={false}
                value={phone}
                onChange={setPhone}
                placeholder={f.placeholder ?? "Enter phone number"}
                className="lead-phone-input min-h-12 w-full rounded-lg border border-input bg-background px-3 py-2.5 focus-within:ring-2 focus-within:ring-ring"
              />
            ) : f.name === "module" && defaultModule ? (
              <input
                name={f.name}
                value={defaultModule}
                readOnly
                aria-readonly="true"
                className="min-h-12 w-full cursor-default rounded-lg border border-input bg-muted px-3 py-2.5 text-base font-semibold text-foreground focus:outline-none"
              />
            ) : f.options ? (
              <select
                required={f.required}
                name={f.name}
                style={{ color: "#071126", colorScheme: "light" }}
                className="min-h-12 w-full rounded-lg border border-input bg-background px-3 py-2.5 text-base text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
              >
                <option value="" style={{ backgroundColor: "#ffffff", color: "#071126" }}>
                  Select…
                </option>
                {f.options.map((o) => (
                  <option key={o} style={{ backgroundColor: "#ffffff", color: "#071126" }}>
                    {o}
                  </option>
                ))}
              </select>
            ) : (
              <input
                required={f.required}
                name={f.name}
                type={f.type ?? "text"}
                placeholder={f.placeholder}
                autoComplete={
                  f.name === "name"
                    ? "name"
                    : f.name === "phone"
                      ? "tel"
                      : f.name === "email"
                        ? "email"
                        : undefined
                }
                inputMode={f.type === "email" ? "email" : undefined}
                className="min-h-12 w-full rounded-lg border border-input bg-background px-3 py-2.5 text-base text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
              />
            )}
          </label>
        ))}
      </div>
      <button
        type="submit"
        disabled={loading}
        className="mt-5 min-h-12 w-full rounded-full bg-gradient-brand px-6 py-3 font-semibold text-white shadow-glow transition hover:scale-[1.02] disabled:opacity-60"
      >
        {loading ? "Sending…" : cta}
      </button>
      <input type="hidden" name="source_form" value={sourceForm} />
      <p className="mt-3 text-center text-xs text-muted-foreground">
        By submitting you agree to be contacted by Next-Gen ERP Solutions.
      </p>
    </form>
  );
}
