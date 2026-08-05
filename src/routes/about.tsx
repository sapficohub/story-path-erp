import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import { motion } from "framer-motion";
import { Target, Heart, Trophy, Users, Building2, Sparkles } from "lucide-react";
import { LeadForm } from "@/components/LeadForm";
import { JsonLd } from "@/components/JsonLd";
import { canonicalUrl } from "@/components/seo";

import { SITE_URL, breadcrumbSchema, ORGANIZATION_ID, webPageSchema } from "@/lib/schema";
export const Route = createFileRoute("/about")({
  head: () => ({
    links: [
      {
        rel: "canonical",
        href: canonicalUrl("/about"),
      },
    ],

    meta: [
      {
        title: "About Next-Gen ERP Solutions | SAP Training Hyderabad",
      },

      {
        name: "description",
        content:
          "Learn about Next-Gen ERP Solutions, its expert SAP trainers, practical learning approach, live server training and career support in Hyderabad.",
      },

      {
        name: "keywords",
        content:
          "About Next-Gen ERP Solutions, SAP Institute Hyderabad, SAP Training Institute, SAP Placement Institute",
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
        content: "About Next-Gen ERP Solutions",
      },

      {
        property: "og:description",
        content:
          "Discover our SAP training methodology, placement support and career transformation journey.",
      },

      {
        property: "og:url",
        content: `${SITE_URL}/about`,
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
        content: "About Next-Gen ERP Solutions",
      },

      {
        name: "twitter:description",
        content: "Learn more about our SAP training institute and placement programs.",
      },

      {
        name: "twitter:image",
        content: `${SITE_URL}/next-gen-erp-solutions-sap-training-hyderabad.jpg`,
      },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <>
      <JsonLd
        data={webPageSchema({
          type: ["WebPage", "AboutPage"],
          url: `${SITE_URL}/about`,
          name: "About Next-Gen ERP Solutions",
          description:
            "Learn about Next-Gen ERP Solutions, our SAP training methodology, placement support and career transformation mission.",
          aboutId: ORGANIZATION_ID,
        })}
      />

      <JsonLd
        data={breadcrumbSchema([
          {
            name: "Home",
            url: `${SITE_URL}/`,
          },
          {
            name: "About",
            url: `${SITE_URL}/about`,
          },
        ])}
      />

      <SiteLayout>
        <section className="bg-gradient-hero py-20">
          <div className="mx-auto max-w-5xl px-4 text-center">
            <div className="inline-block rounded-full bg-brand-dark px-4 py-1 text-xs font-bold uppercase tracking-widest text-white">
              About Us
            </div>
            <h1 className="mt-4 text-4xl font-black md:text-6xl">
              We turn ambition into <span className="text-gradient-brand">SAP careers</span>
            </h1>
            <p className="mx-auto mt-5 max-w-3xl text-lg text-muted-foreground">
              Next-Gen ERP Solutions is a career transformation platform built by senior SAP
              consultants. We've helped thousands of freshers, working professionals and career-gap
              candidates land high-growth SAP roles at India's leading MNCs.
            </p>
          </div>
        </section>

        <section className="mx-auto grid max-w-6xl gap-8 px-4 py-16 md:grid-cols-3">
          {[
            {
              i: Target,
              t: "Our Vision",
              d: "To make world-class SAP careers accessible to every learner in India — regardless of background, age or experience.",
            },
            {
              i: Heart,
              t: "Our Mission",
              d: "Combine industry-grade training, real projects and dedicated placement support so every student finds their dream role.",
            },
            {
              i: Trophy,
              t: "Our Promise",
              d: "100% placement assistance, lifetime access to learning resources, and mentorship that goes beyond your first job.",
            },
          ].map((card, index) => (
            <motion.div
              key={card.t}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="rounded-2xl border border-border bg-card p-8 shadow-card"
            >
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-brand text-white">
                <card.i className="h-6 w-6" />
              </div>
              <h3 className="mt-4 text-2xl font-extrabold">{card.t}</h3>
              <p className="mt-2 text-muted-foreground">{card.d}</p>
            </motion.div>
          ))}
        </section>

        <section className="bg-secondary py-16">
          <div className="mx-auto max-w-6xl px-4">
            <h2 className="text-center text-3xl font-black md:text-4xl">
              Our Training Methodology
            </h2>
            <div className="mt-10 grid gap-5 md:grid-cols-4">
              {[
                "Live Instructor-Led Classes",
                "Real SAP Server Access",
                "Industry-Grade Projects",
                "Mock Interviews & Placement",
              ].map((step, index) => (
                <div
                  key={step}
                  className="rounded-xl border-2 border-brand-dark bg-card p-5 shadow-[4px_4px_0_#071126]"
                >
                  <div className="text-3xl font-black text-gradient-brand">0{index + 1}</div>
                  <div className="mt-2 font-extrabold">{step}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-4 py-16">
          <h2 className="text-center text-3xl font-black md:text-4xl">
            Transformation by the numbers
          </h2>
          <div className="mt-10 grid gap-6 md:grid-cols-4">
            {[
              { i: Users, n: "5,000+", t: "Students Trained" },
              { i: Trophy, n: "92%", t: "Placement Rate" },
              { i: Building2, n: "120+", t: "Hiring Partners" },
              { i: Sparkles, n: "₹14 LPA", t: "Average CTC" },
            ].map((stat) => (
              <div
                key={stat.t}
                className="rounded-2xl border border-border bg-card p-6 text-center shadow-card"
              >
                <stat.i className="mx-auto h-8 w-8 text-brand" />
                <div className="mt-3 text-3xl font-black text-gradient-brand">{stat.n}</div>
                <div className="text-sm text-muted-foreground">{stat.t}</div>
              </div>
            ))}
          </div>
        </section>

        <section className="bg-gradient-hero py-16">
          <div className="mx-auto grid max-w-5xl items-center gap-8 px-4 md:grid-cols-2">
            <div>
              <h2 className="text-3xl font-black md:text-4xl">Ready to start?</h2>
              <p className="mt-3 text-muted-foreground">
                Book a free demo and let our career advisors design your SAP roadmap.
              </p>
              <Link
                to="/contact"
                className="mt-5 inline-block rounded-full bg-gradient-brand px-6 py-3 font-semibold text-white shadow-glow"
              >
                Talk to Advisor
              </Link>
            </div>
            <LeadForm
              title="Career Counselling"
              subtitle="Free 30-min session with a senior SAP mentor."
            />
          </div>
        </section>
      </SiteLayout>
    </>
  );
}
