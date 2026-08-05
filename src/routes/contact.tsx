import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import { LeadForm } from "@/components/LeadForm";
import { Phone, MessageCircle, Mail, MapPin, Youtube, Instagram, Facebook } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { JsonLd } from "@/components/JsonLd";
import { COURSES } from "@/lib/courses";
import { canonicalUrl } from "@/components/seo";

import {
  SITE_URL,
  breadcrumbSchema,
  GOOGLE_MAP_URL,
  localBusinessSchema,
  LOCAL_BUSINESS_ID,
  webPageSchema,
} from "@/lib/schema";

const HIDDEN_CONTACT_COURSES = new Set([
  "SAP PP",
  "SAP QM",
  "SAP WM",
  "SAP EWM",
  "SAP Ariba",
  "SAP Security & GRC",
  "SAP BASIS",
  "SAP Fiori",
]);

export const Route = createFileRoute("/contact")({
  head: () => ({
    links: [
      {
        rel: "canonical",
        href: canonicalUrl("/contact"),
      },
    ],

    meta: [
      {
        title: "Contact SAP Training Institute Hyderabad | Next-Gen ERP",
      },

      {
        name: "description",
        content:
          "Contact Next-Gen ERP Solutions in Hyderabad for SAP course details, demo sessions, batch timings, fees and placement assistance.",
      },

      {
        name: "keywords",
        content:
          "Contact SAP Institute Hyderabad, SAP Training Contact, SAP Placement Support, SAP Demo Class Hyderabad",
      },

      {
        name: "robots",
        content: "index,follow,max-image-preview:large,max-snippet:-1,max-video-preview:-1",
      },

      {
        property: "og:type",
        content: "website",
      },

      {
        property: "og:title",
        content: "Contact Next-Gen ERP Solutions",
      },

      {
        property: "og:description",
        content: "Book a free SAP demo, career counselling or contact our placement team.",
      },

      {
        property: "og:url",
        content: `${SITE_URL}/contact`,
      },

      {
        property: "og:image",
        content: `${SITE_URL}/next-gen-erp-solutions-sap-training-hyderabad.jpg`,
      },

      {
        name: "twitter:card",
        content: "summary_large_image",
      },

      {
        name: "twitter:title",
        content: "Contact Next-Gen ERP Solutions",
      },

      {
        name: "twitter:description",
        content: "Reach our SAP training experts for admissions and career guidance.",
      },

      {
        name: "twitter:image",
        content: `${SITE_URL}/next-gen-erp-solutions-sap-training-hyderabad.jpg`,
      },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <>
      <JsonLd data={localBusinessSchema} />
      <JsonLd
        data={webPageSchema({
          type: ["WebPage", "ContactPage"],
          url: `${SITE_URL}/contact`,
          name: "Contact Next-Gen ERP Solutions",
          description:
            "Contact Next-Gen ERP Solutions for SAP training, free demos, career counselling and placement support.",
          aboutId: LOCAL_BUSINESS_ID,
          mainEntityId: LOCAL_BUSINESS_ID,
        })}
      />

      <JsonLd
        data={breadcrumbSchema([
          {
            name: "Home",
            url: `${SITE_URL}/`,
          },
          {
            name: "Contact",
            url: `${SITE_URL}/contact`,
          },
        ])}
      />

      <SiteLayout>
        <section className="bg-gradient-hero py-20">
          <div className="mx-auto max-w-5xl px-4 text-center">
            <div className="inline-block rounded-full bg-brand-dark px-4 py-1 text-xs font-bold uppercase tracking-widest text-white">
              Contact
            </div>
            <h1 className="mt-4 text-4xl font-black md:text-6xl">
              Let's talk about <span className="text-gradient-brand">your career</span>
            </h1>
            <p className="mx-auto mt-5 max-w-3xl text-lg text-muted-foreground">
              Career advisors available 9am – 9pm IST. WhatsApp replies within minutes.
            </p>
          </div>
        </section>

        <section className="mx-auto grid max-w-7xl gap-10 px-4 py-16 lg:grid-cols-[1fr_1.2fr]">
          <div className="space-y-4">
            <Card
              icon={Phone}
              title="Call us"
              value="+91 90003 33859"
              href="tel:+919000333859"
              color="bg-brand text-white"
            />
            <Card
              icon={MessageCircle}
              title="WhatsApp"
              value="+91 90003 33859"
              href="https://wa.me/919000333859"
              color="bg-[#25D366] text-white"
            />
            <Card
              icon={Mail}
              title="Email"
              value="hello@nextgenerpsolutions.com"
              href="mailto:hello@nextgenerpsolutions.com"
              color="bg-brand-dark text-white"
            />
            <Card
              icon={MapPin}
              title="Google Business"
              value="View on Google"
              href={GOOGLE_MAP_URL}
              color="bg-brand-green text-white"
            />

            <div className="rounded-2xl border border-border bg-card p-5 shadow-card">
              <div className="text-sm font-bold uppercase tracking-wider text-muted-foreground">
                Follow Us
              </div>
              <div className="mt-3 flex gap-3">
                <a
                  aria-label="YouTube"
                  href="https://www.youtube.com/@Next-GenERPSolutions"
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-full bg-secondary p-3 transition hover:bg-brand hover:text-white"
                >
                  <Youtube className="h-5 w-5" />
                </a>
                <a
                  aria-label="Instagram"
                  href="https://www.instagram.com/nextgenerpsolutions/"
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-full bg-secondary p-3 transition hover:bg-brand hover:text-white"
                >
                  <Instagram className="h-5 w-5" />
                </a>
                <a
                  aria-label="Facebook"
                  href="https://www.facebook.com/NextGenERPSolutions"
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-full bg-secondary p-3 transition hover:bg-brand hover:text-white"
                >
                  <Facebook className="h-5 w-5" />
                </a>
              </div>
            </div>

            <div className="rounded-2xl border border-border bg-card p-5 shadow-card">
              <div className="text-sm font-bold uppercase tracking-wider text-muted-foreground">
                Business Hours
              </div>
              <div className="mt-2 space-y-1 text-sm">
                <div className="flex justify-between">
                  <span>Mon – Sat</span>
                  <b>9:00 AM – 9:00 PM</b>
                </div>
                <div className="flex justify-between">
                  <span>Sunday</span>
                  <b>10:00 AM – 5:00 PM</b>
                </div>
              </div>
            </div>
          </div>

          <LeadForm
            sourceForm="Contact Message"
            title="Send us a message"
            subtitle="We'll get back within 1 working hour."
            fields={[
              { name: "name", label: "Full Name", required: true },
              { name: "phone", label: "Phone", type: "tel", required: true },
              { name: "email", label: "Email", type: "email", required: true },
              {
                name: "module",
                label: "SAP Courses",
                required: true,
                options: [
                  ...["SAP FICO", "SAP ABAP"],
                  ...COURSES.filter(
                    (course) =>
                      !HIDDEN_CONTACT_COURSES.has(course.title) &&
                      course.title !== "SAP FICO" &&
                      course.title !== "SAP ABAP",
                  ).map((course) => course.title),
                  "Not sure yet",
                ],
              },
              { name: "message", label: "Message", placeholder: "Tell us how we can help…" },
            ]}
            cta="Send Message"
          />
        </section>
      </SiteLayout>
    </>
  );
}

function Card({
  icon: Icon,
  title,
  value,
  href,
  color,
}: {
  icon: LucideIcon;
  title: string;
  value: string;
  href: string;
  color: string;
}) {
  return (
    <a
      href={href}
      target={href.startsWith("http") ? "_blank" : undefined}
      rel="noreferrer"
      className="flex items-center gap-4 rounded-2xl border border-border bg-card p-5 shadow-card hover:scale-[1.02] transition"
    >
      <div className={`flex h-12 w-12 items-center justify-center rounded-xl ${color}`}>
        <Icon className="h-6 w-6" />
      </div>
      <div>
        <div className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
          {title}
        </div>
        <div className="font-extrabold">{value}</div>
      </div>
    </a>
  );
}
