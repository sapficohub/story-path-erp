import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import { motion } from "framer-motion";
import { COURSES } from "@/lib/courses";
import { ArrowRight } from "lucide-react";
import { JsonLd } from "@/components/JsonLd";
import { canonicalUrl } from "@/components/seo";

import {
  SITE_URL,
  breadcrumbSchema,
  EDUCATIONAL_ORGANIZATION_ID,
  itemListSchema,
  webPageSchema,
} from "@/lib/schema";

export const Route = createFileRoute("/courses/")({
  head: () => ({
    links: [
      {
        rel: "canonical",
        href: canonicalUrl("/courses"),
      },
    ],

    meta: [
      {
        title: "SAP Courses in Hyderabad | Next-Gen ERP",
      },
      {
        name: "description",
        content:
          "Explore practical SAP FICO, MM, SD, ABAP, BASIS, HCM and SuccessFactors courses in Hyderabad with expert trainers and live server access.",
      },
      {
        name: "keywords",
        content:
          "SAP Courses Hyderabad, SAP FICO Course, SAP MM Course, SAP SD Course, SAP ABAP Course, SAP BASIS Course, SAP HCM Course, SAP SuccessFactors Course",
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
        content: "SAP Courses | Next-Gen ERP Solutions",
      },
      {
        property: "og:description",
        content: "Choose from industry-leading SAP courses with placement assistance.",
      },
      {
        property: "og:url",
        content: `${SITE_URL}/courses`,
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
        content: "SAP Courses | Next-Gen ERP Solutions",
      },
      {
        name: "twitter:description",
        content: "Explore SAP training programs with live projects and placement support.",
      },
      {
        name: "twitter:image",
        content: `${SITE_URL}/next-gen-erp-solutions-sap-training-hyderabad.jpg`,
      },
    ],
  }),
  component: CoursesPage,
});

function CoursesPage() {
  return (
    <>
      <JsonLd
        data={webPageSchema({
          type: ["WebPage", "CollectionPage"],
          url: `${SITE_URL}/courses`,
          name: "SAP Training Courses",
          description:
            "Explore SAP training courses with live projects, SAP server access and placement support.",
          aboutId: EDUCATIONAL_ORGANIZATION_ID,
        })}
      />
      <JsonLd
        data={breadcrumbSchema([
          {
            name: "Home",
            url: `${SITE_URL}/`,
          },
          {
            name: "Courses",
            url: `${SITE_URL}/courses`,
          },
        ])}
      />
      <JsonLd
        data={itemListSchema(
          `${SITE_URL}/courses`,
          "SAP Training Courses",
          COURSES.map((course) => ({
            name: `${course.title} Training`,
            url: `${SITE_URL}/courses/${course.slug}`,
          })),
        )}
      />

      <SiteLayout>
        <section className="bg-gradient-hero py-20">
          <div className="mx-auto max-w-5xl px-4 text-center">
            <div className="inline-block rounded-full bg-brand-dark px-4 py-1 text-xs font-bold uppercase tracking-widest text-white">
              SAP Courses
            </div>

            <h1 className="mt-4 text-4xl font-black md:text-6xl">
              Explore every <span className="text-gradient-brand">SAP module</span>
            </h1>

            <p className="mt-5 mx-auto max-w-3xl text-lg text-muted-foreground">
              From core finance to cloud HCM — click any module to see curriculum, careers, salaries
              and a complete placement roadmap.
            </p>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-4 py-16">
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {COURSES.map((c, i) => (
              <motion.div
                key={c.slug}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.04 }}
                whileHover={{ y: -6 }}
              >
                <Link
                  to="/courses/$slug"
                  params={{ slug: c.slug }}
                  className="group block h-full overflow-hidden rounded-2xl border border-border bg-card p-6 shadow-card transition"
                >
                  <div
                    className={`mb-4 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br ${c.color} text-3xl shadow-glow`}
                  >
                    {c.icon}
                  </div>

                  <h3 className="text-2xl font-extrabold">{c.title}</h3>

                  <p className="mt-1 text-sm text-muted-foreground">{c.tagline}</p>

                  <div className="mt-5 flex flex-wrap gap-2">
                    <span className="rounded-full bg-secondary px-3 py-1 text-xs font-semibold">
                      {c.duration}
                    </span>

                    <span className="rounded-full bg-secondary px-3 py-1 text-xs font-semibold">
                      {c.level}
                    </span>
                  </div>

                  <div className="mt-5 flex items-center justify-between text-sm">
                    <span className="text-muted-foreground">
                      Avg CTC: <b className="text-brand-green">{c.salaryFresher}</b>
                    </span>

                    <span className="font-semibold text-brand inline-flex items-center gap-1 group-hover:gap-2 transition-all">
                      Explore {c.title} Training <ArrowRight className="h-4 w-4" />
                    </span>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </section>
      </SiteLayout>
    </>
  );
}
