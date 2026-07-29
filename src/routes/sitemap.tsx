import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, BookOpen, GraduationCap } from "lucide-react";
import { SiteLayout } from "@/components/SiteLayout";
import { COURSES } from "@/lib/courses";
import { HTML_SITEMAP_SECTIONS } from "@/lib/site-pages";
import { SITE_URL } from "@/lib/schema";

export const Route = createFileRoute("/sitemap")({
  head: () => ({
    links: [{ rel: "canonical", href: `${SITE_URL}/sitemap` }],
    meta: [
      { title: "HTML Sitemap | Next-Gen ERP Solutions" },
      {
        name: "description",
        content:
          "Browse all SAP courses, career journeys, placement support, success stories, blogs, resources, and company pages from one place.",
      },
      { name: "robots", content: "index,follow" },
    ],
  }),
  component: HtmlSitemapPage,
});

function HtmlSitemapPage() {
  return (
    <SiteLayout>
      <main>
        <section className="bg-gradient-hero py-16 md:py-20">
          <div className="mx-auto max-w-5xl px-4 text-center">
            <div className="inline-flex items-center gap-2 rounded-full bg-brand-dark px-4 py-1 text-xs font-bold uppercase tracking-widest text-white">
              <BookOpen className="h-4 w-4" />
              Explore the website
            </div>
            <h1 className="mt-4 text-4xl font-black md:text-6xl">
              HTML <span className="text-gradient-brand">Sitemap</span>
            </h1>
            <p className="mx-auto mt-5 max-w-3xl text-lg text-muted-foreground">
              Find SAP courses, career guidance, placement support, resources,
              and company information from one place.
            </p>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-4 py-14 md:py-20">
          <div className="rounded-2xl border border-border bg-card p-6 shadow-card md:p-8">
            <div className="mb-6 flex items-center gap-3">
              <span className="rounded-xl bg-brand/10 p-3 text-brand">
                <GraduationCap className="h-6 w-6" />
              </span>
              <h2 className="text-2xl font-black md:text-3xl">SAP Courses</h2>
            </div>
            <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {COURSES.map((course) => (
                <li key={course.slug}>
                  <Link
                    to="/courses/$slug"
                    params={{ slug: course.slug }}
                    className="group flex items-center justify-between rounded-xl border border-border px-4 py-3 font-semibold transition hover:border-brand/40 hover:bg-brand/5 hover:text-brand"
                  >
                    {course.title} Training
                    <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {HTML_SITEMAP_SECTIONS.map((section) => (
              <section
                key={section.title}
                className="rounded-2xl border border-border bg-card p-6 shadow-card"
              >
                <h2 className="text-xl font-black">{section.title}</h2>
                <ul className="mt-4 space-y-2">
                  {section.links.map((link) => (
                    <li key={link.path}>
                      <Link
                        to={link.path}
                        className="group flex items-center justify-between rounded-lg px-3 py-2 text-muted-foreground transition hover:bg-brand/5 hover:text-brand"
                      >
                        {link.label}
                        <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
                      </Link>
                    </li>
                  ))}
                </ul>
              </section>
            ))}
          </div>
        </section>
      </main>
    </SiteLayout>
  );
}
