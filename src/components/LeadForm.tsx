import { useEffect, useRef, useState } from "react";
import { createServerFn } from "@tanstack/react-start";
import {
  RecaptchaVerifier,
  signInWithPhoneNumber,
  signOut,
  type ConfirmationResult,
} from "firebase/auth";
import { Resend } from "resend";
import { toast } from "sonner";
import { z } from "zod";
import { firebaseAuth } from "@/lib/firebase-client";
import { getReferralAttribution } from "@/lib/referral";

type Field = {
  name: string;
  label: string;
  type?: string;
  required?: boolean;
  options?: string[];
  placeholder?: string;
};

const leadDetailsSchema = z.object({
  name: z.string().trim().min(1).max(100),
  phone: z.string().regex(/^\d{10}$/, "Enter a valid 10-digit phone number."),
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
});

const leadSchema = leadDetailsSchema.extend({
  verification_token: z.string().min(1),
});

type LeadDetails = z.infer<typeof leadDetailsSchema>;

function firebasePhoneError(error: unknown, fallback: string) {
  const code = error && typeof error === "object" && "code" in error ? String(error.code) : "";

  switch (code) {
    case "auth/operation-not-allowed":
      return "Phone verification is temporarily unavailable. Please contact us directly.";
    case "auth/billing-not-enabled":
      return "Phone verification billing is not enabled. Please contact us directly.";
    case "auth/unauthorized-domain":
    case "auth/app-not-authorized":
      return "Phone verification is not authorized on this website.";
    case "auth/invalid-app-credential":
    case "auth/missing-app-credential":
      return "Security verification could not start. Refresh the page and try again.";
    case "auth/invalid-phone-number":
      return "Enter a valid 10-digit phone number.";
    case "auth/too-many-requests":
      return "Too many OTP requests. Please wait and try again later.";
    case "auth/quota-exceeded":
      return "OTP service limit reached. Please contact us directly.";
    case "auth/invalid-verification-code":
      return "The OTP is incorrect. Check the code and try again.";
    case "auth/code-expired":
      return "The OTP has expired. Request a new code.";
    case "auth/captcha-check-failed":
      return "Security verification failed. Refresh the page and try again.";
    default:
      return code ? `${fallback} (${code})` : fallback;
  }
}

async function validatePhoneVerification(phone: string, token: string) {
  try {
    const response = await fetch(
      "https://identitytoolkit.googleapis.com/v1/accounts:lookup?key=AIzaSyBK8bhhFdu84XuumbHkrvpZOa_bNn-Ttes",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ idToken: token }),
      },
    );
    if (!response.ok) return false;

    const result = (await response.json()) as {
      users?: Array<{ disabled?: boolean; phoneNumber?: string }>;
    };
    const user = result.users?.[0];
    return user?.disabled !== true && user?.phoneNumber === `+91${phone}`;
  } catch {
    return false;
  }
}

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

async function sendLeadEmail(data: LeadDetails) {
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
    ["UTM source", data.utm_source],
    ["UTM medium", data.utm_medium],
    ["UTM campaign", data.utm_campaign],
    ["Referral code", data.ref],
    ["Landing page", data.landing_page],
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
    if (!(await validatePhoneVerification(data.phone, data.verification_token))) {
      throw new Error("Verify your phone number before submitting.");
    }

    const { verification_token: _verificationToken, ...submittedData } = data;
    const leadData: LeadDetails = { ...submittedData, phone: `+91${submittedData.phone}` };
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
          ...leadData,
          phone: leadData.phone.replace(/[^\d+]/g, ""),
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

    const sentByEmail = await sendLeadEmail(leadData);

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
  defaultModule,
}: {
  title?: string;
  subtitle?: string;
  fields?: Field[];
  cta?: string;
  defaultModule?: string;
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
  const [phone, setPhone] = useState("");
  const [otp, setOtp] = useState("");
  const [otpSent, setOtpSent] = useState(false);
  const [otpSending, setOtpSending] = useState(false);
  const [otpVerifying, setOtpVerifying] = useState(false);
  const [verificationToken, setVerificationToken] = useState("");
  const [resendSeconds, setResendSeconds] = useState(0);
  const recaptchaHostRef = useRef<HTMLDivElement | null>(null);
  const recaptchaVerifierRef = useRef<RecaptchaVerifier | null>(null);
  const confirmationResultRef = useRef<ConfirmationResult | null>(null);

  const resetRecaptcha = () => {
    recaptchaVerifierRef.current?.clear();
    recaptchaVerifierRef.current = null;
    recaptchaHostRef.current?.replaceChildren();
  };

  useEffect(() => {
    if (resendSeconds <= 0) return;
    const timer = window.setInterval(() => {
      setResendSeconds((seconds) => Math.max(0, seconds - 1));
    }, 1000);
    return () => window.clearInterval(timer);
  }, [resendSeconds]);

  useEffect(
    () => () => {
      recaptchaVerifierRef.current?.clear();
      recaptchaVerifierRef.current = null;
    },
    [],
  );

  const handleSendOtp = async () => {
    if (!/^\d{10}$/.test(phone)) {
      toast.error("Enter a valid 10-digit phone number.");
      return;
    }

    setOtpSending(true);
    try {
      resetRecaptcha();
      const recaptchaHost = recaptchaHostRef.current;
      if (!recaptchaHost) throw new Error("Phone verification is not ready. Please try again.");
      const recaptchaElement = document.createElement("div");
      recaptchaHost.appendChild(recaptchaElement);
      const verifier = new RecaptchaVerifier(firebaseAuth, recaptchaElement, {
        size: "invisible",
      });
      recaptchaVerifierRef.current = verifier;
      confirmationResultRef.current = await signInWithPhoneNumber(
        firebaseAuth,
        `+91${phone}`,
        verifier,
      );
      setOtpSent(true);
      setOtp("");
      setVerificationToken("");
      setResendSeconds(30);
      toast.success("OTP sent to your phone.");
    } catch (error) {
      console.error(error);
      resetRecaptcha();
      toast.error(firebasePhoneError(error, "Unable to send OTP. Please try again."));
    } finally {
      setOtpSending(false);
    }
  };

  const handleVerifyOtp = async () => {
    if (!/^\d{6}$/.test(otp)) {
      toast.error("Enter the 6-digit OTP.");
      return;
    }

    setOtpVerifying(true);
    try {
      const confirmationResult = confirmationResultRef.current;
      if (!confirmationResult) throw new Error("Send a new OTP and try again.");
      const credential = await confirmationResult.confirm(otp);
      const idToken = await credential.user.getIdToken(true);
      setVerificationToken(idToken);
      await signOut(firebaseAuth);
      resetRecaptcha();
      toast.success("Phone number verified.");
    } catch (error) {
      console.error(error);
      setVerificationToken("");
      toast.error(firebasePhoneError(error, "Invalid or expired OTP."));
    } finally {
      setOtpVerifying(false);
    }
  };

  return (
    <form
      onSubmit={async (e) => {
        e.preventDefault();
        const form = e.currentTarget;

        if (!verificationToken) {
          toast.error("Verify your phone number before submitting.");
          return;
        }

        setLoading(true);

        try {
          const values = {
            ...Object.fromEntries(new FormData(form).entries()),
            ...getReferralAttribution(),
          };
          await submitLead({ data: leadSchema.parse(values) });
          toast.success("Thank you! A career advisor will call you shortly.");
          form.reset();
          setPhone("");
          setOtp("");
          setOtpSent(false);
          setVerificationToken("");
          setResendSeconds(0);
          confirmationResultRef.current = null;
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
              <>
                <div className="grid min-h-12 grid-cols-[auto_minmax(0,1fr)_auto] overflow-hidden rounded-lg border border-input bg-background focus-within:ring-2 focus-within:ring-ring">
                  <span className="flex items-center border-r border-input px-3 text-base text-foreground">
                    +91
                  </span>
                  <input
                    required={f.required}
                    name={f.name}
                    type="tel"
                    value={phone}
                    onChange={(event) => {
                      setPhone(event.target.value.replace(/\D/g, "").slice(0, 10));
                      setOtp("");
                      setOtpSent(false);
                      setVerificationToken("");
                      setResendSeconds(0);
                      confirmationResultRef.current = null;
                      resetRecaptcha();
                    }}
                    placeholder="Enter 10-digit number"
                    autoComplete="tel-national"
                    inputMode="numeric"
                    pattern="[0-9]{10}"
                    className="min-w-0 bg-transparent px-3 py-2.5 text-base text-foreground placeholder:text-muted-foreground focus:outline-none"
                  />
                  <button
                    type="button"
                    onClick={handleSendOtp}
                    disabled={otpSending || resendSeconds > 0 || verificationToken.length > 0}
                    className="border-l border-input bg-primary px-3 text-sm font-semibold text-primary-foreground disabled:cursor-not-allowed disabled:opacity-60"
                  >
                    {otpSending
                      ? "Sending..."
                      : resendSeconds > 0
                        ? `Resend ${resendSeconds}s`
                        : otpSent
                          ? "Resend OTP"
                          : "Send OTP"}
                  </button>
                </div>

                {otpSent && !verificationToken && (
                  <div className="mt-2 grid min-h-12 grid-cols-[minmax(0,1fr)_auto] overflow-hidden rounded-lg border border-input bg-background focus-within:ring-2 focus-within:ring-ring">
                    <input
                      type="text"
                      value={otp}
                      onChange={(event) =>
                        setOtp(event.target.value.replace(/\D/g, "").slice(0, 6))
                      }
                      placeholder="Enter 6-digit OTP"
                      autoComplete="one-time-code"
                      inputMode="numeric"
                      maxLength={6}
                      className="min-w-0 bg-transparent px-3 py-2.5 text-base tracking-widest text-foreground placeholder:tracking-normal placeholder:text-muted-foreground focus:outline-none"
                    />
                    <button
                      type="button"
                      onClick={handleVerifyOtp}
                      disabled={otpVerifying || otp.length !== 6}
                      className="border-l border-input bg-primary px-3 text-sm font-semibold text-primary-foreground disabled:cursor-not-allowed disabled:opacity-60"
                    >
                      {otpVerifying ? "Verifying..." : "Verify OTP"}
                    </button>
                  </div>
                )}

                {verificationToken && (
                  <p className="mt-2 text-sm font-semibold text-brand-green" role="status">
                    ✓ Phone number verified
                  </p>
                )}
                <div ref={recaptchaHostRef} />
              </>
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
                inputMode={f.type === "tel" ? "tel" : f.type === "email" ? "email" : undefined}
                className="min-h-12 w-full rounded-lg border border-input bg-background px-3 py-2.5 text-base text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
              />
            )}
          </label>
        ))}
      </div>
      <input type="hidden" name="verification_token" value={verificationToken} />
      <button
        type="submit"
        disabled={loading || !verificationToken}
        className="mt-5 min-h-12 w-full rounded-full bg-gradient-brand px-6 py-3 font-semibold text-white shadow-glow transition hover:scale-[1.02] disabled:opacity-60"
      >
        {loading ? "Sending…" : cta}
      </button>
      <p className="mt-3 text-center text-xs text-muted-foreground">
        By submitting you agree to be contacted by Next-Gen ERP Solutions.
      </p>
    </form>
  );
}
