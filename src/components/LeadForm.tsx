import { useState } from "react";
import PhoneInput, { isValidPhoneNumber, type Value } from "react-phone-number-input";
import flags from "react-phone-number-input/flags";
import "react-phone-number-input/style.css";
import { CheckCircle2, MessageCircle } from "lucide-react";
import { toast } from "sonner";
import { z } from "zod";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { getReferralAttribution, resolveLeadSource } from "@/lib/referral";

function getBrowserName(userAgent: string) {
  const lower = userAgent.toLowerCase();
  if (lower.includes("edg/")) return "Edge";
  if (lower.includes("opr/") || lower.includes("opera")) return "Opera";
  if (lower.includes("chrome/") && !lower.includes("edg/") && !lower.includes("opr/"))
    return "Chrome";
  if (lower.includes("firefox/")) return "Firefox";
  if (lower.includes("safari/") && !lower.includes("chrome/")) return "Safari";
  if (lower.includes("trident/") || lower.includes("msie")) return "Internet Explorer";
  return "Unknown";
}

function getDeviceType(userAgent: string) {
  const lower = userAgent.toLowerCase();
  if (/mobile|iphone|ipod|android|blackberry|phone/.test(lower)) return "Mobile";
  if (/tablet|ipad|playbook/.test(lower)) return "Tablet";
  return "Desktop";
}

type Field = {
  name: string;
  label: string;
  type?: string;
  required?: boolean;
  options?: string[];
  placeholder?: string;
};

type LeadSourceForm = "Free Demo" | "Course Application" | "Contact Message" | "Placement Enquiry";

const analyticsFormNames: Record<LeadSourceForm, string> = {
  "Free Demo": "Book Free Demo",
  "Course Application": "Course Application",
  "Contact Message": "Contact Form",
  "Placement Enquiry": "Placement Enquiry",
};

function trackLeadSubmission(formName: LeadSourceForm, course: string) {
  const analyticsWindow = window as Window & {
    dataLayer?: Array<Record<string, unknown>>;
  };

  analyticsWindow.dataLayer = analyticsWindow.dataLayer || [];
  analyticsWindow.dataLayer.push({
    event: "lead_submit",
    form_name: analyticsFormNames[formName],
    course,
    page_path: window.location.pathname,
  });
}

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
  utm_content: z.string().trim().max(200).optional(),
  utm_term: z.string().trim().max(200).optional(),
  fbclid: z.string().trim().max(200).optional(),
  gclid: z.string().trim().max(200).optional(),
  ref: z.string().trim().max(200).optional(),
  referrer: z.string().trim().max(1000).optional(),
  landing_page: z.string().trim().max(1000).optional(),
  lead_source: z.string().trim().max(200).optional(),
  browser: z.string().trim().max(200).optional(),
  device: z.string().trim().max(200).optional(),
  ip: z.string().trim().max(100).optional(),
  country: z.string().trim().max(100).optional(),
  source_form: z.enum(["Free Demo", "Course Application", "Contact Message", "Placement Enquiry"]),
});

// `resolveLeadSource` is imported from `src/lib/referral.ts` and derives a
// human-readable `lead_source` without modifying existing attribution fields.

const leadTrackerWebhookPayloadSchema = leadSchema.extend({
  submitted_at: z.string().trim().min(1),
});

async function sendLeadToTracker(data: z.infer<typeof leadSchema>) {
  const lead_source = resolveLeadSource(data);
  const userAgent = typeof navigator !== "undefined" ? navigator.userAgent : "";

  const payload = {
    name: data.name,
    phone: data.phone,
    email: data.email,
    message: data.message ?? "",
    qualification: data.qualification ?? "",
    status: data.status ?? "",
    module: data.module ?? "",
    utm_source: data.utm_source ?? "",
    utm_medium: data.utm_medium ?? "",
    utm_campaign: data.utm_campaign ?? "",
    utm_content: data.utm_content ?? "",
    utm_term: data.utm_term ?? "",
    fbclid: data.fbclid ?? "",
    gclid: data.gclid ?? "",
    ref: data.ref ?? "",
    referrer: data.referrer ?? "",
    landing_page: data.landing_page ?? "",
    browser: getBrowserName(userAgent),
    device: getDeviceType(userAgent),
    source_form: data.source_form,
    lead_source,
    submitted_at: new Date().toISOString(),
  };

  leadTrackerWebhookPayloadSchema.parse(payload);

  const response = await fetch("/api/lead", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
    signal: AbortSignal.timeout(15000),
  });

  if (!response.ok) {
    console.error(`Lead tracker rejected a submission with status ${response.status}.`);
    return false;
  }

  const result = (await response.json().catch(() => null)) as { success?: boolean } | null;
  return result?.success === true;
}

export function LeadForm({
  title = "Book a Free Demo",
  subtitle = "A career advisor will call you within 1 working hour.",
  fields,
  cta = "Book Free Demo",
  defaultModule,
  sourceForm = "Free Demo",
  successVariant = "default",
}: {
  title?: string;
  subtitle?: string;
  fields?: Field[];
  cta?: string;
  defaultModule?: string;
  sourceForm?: LeadSourceForm;
  successVariant?: "default" | "demo";
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
  const [submitted, setSubmitted] = useState(false);

  return (
    <>
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
            const validatedLead = leadSchema.parse(values);
            const success = await sendLeadToTracker(validatedLead);
            if (!success) {
              throw new Error("Lead tracker delivery failed.");
            }

            trackLeadSubmission(sourceForm, validatedLead.module ?? "");
            form.reset();
            setPhone(undefined);
            setSubmitted(true);
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
                  flags={flags}
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
        {defaultModule && !defaultFields.some((field) => field.name === "module") && (
          <input type="hidden" name="module" value={defaultModule} />
        )}
        <p className="mt-3 text-center text-xs text-muted-foreground">
          By submitting you agree to be contacted by Next-Gen ERP Solutions.
        </p>
      </form>

      <Dialog open={submitted} onOpenChange={setSubmitted}>
        <DialogContent className="max-w-md rounded-lg text-center">
          <CheckCircle2 className="mx-auto size-14 text-brand-green" aria-hidden="true" />
          <DialogHeader className="text-center sm:text-center">
            <DialogTitle className="text-2xl font-extrabold">
              {successVariant === "demo" ? "Your Free Demo Request Is Received" : "Thank you!"}
            </DialogTitle>
            <DialogDescription className="text-base leading-relaxed">
              {successVariant === "demo"
                ? `Our career team will contact you regarding the ${defaultModule ?? "SAP"} demo.`
                : "Your details have been received. A career advisor will contact you within 1 working hour."}
            </DialogDescription>
          </DialogHeader>
          {defaultModule && (
            <p className="text-sm font-semibold text-foreground">Course: {defaultModule}</p>
          )}
          {successVariant === "demo" && (
            <div className="rounded-xl bg-secondary p-4 text-left text-sm">
              <p className="font-bold text-foreground">What happens next?</p>
              <ol className="mt-2 grid gap-1 text-muted-foreground sm:grid-cols-2">
                <li>1. Profile discussion</li>
                <li>2. Demo confirmation</li>
                <li>3. Trainer session</li>
                <li>4. Career and course guidance</li>
              </ol>
            </div>
          )}
          <DialogFooter className="mt-2 gap-2 sm:justify-center">
            {successVariant === "demo" && (
              <a
                href="https://wa.me/919000333859"
                target="_blank"
                rel="noreferrer"
                className="inline-flex min-h-11 items-center justify-center gap-2 rounded-lg bg-[#25D366] px-5 py-2.5 font-semibold text-white"
              >
                <MessageCircle className="size-4" /> Chat on WhatsApp
              </a>
            )}
            <DialogClose asChild>
              <button
                type="button"
                className="min-h-11 rounded-lg bg-primary px-5 py-2.5 font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
              >
                Done
              </button>
            </DialogClose>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
}
