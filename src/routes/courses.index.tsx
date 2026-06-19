import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import { motion } from "framer-motion";
import { COURSES } from "@/lib/courses";
import { ArrowRight } from "lucide-react";

export const Route = createFileRoute("/courses/")({
  head: () => ({
    meta: [
      { title: "SAP Courses — Next-Gen ERP Solutions" },
      { name: "description", content: "All SAP modules with curriculum, duration, careers & placement details. Pick your SAP module and start your transformation." },
      { property: "og:title", content: "SAP Courses" },
      { property: "og:description", content: "Explore SAP FICO, MM, SD, ABAP, BASIS, HCM, SuccessFactors and more." },
    ],
  }),
  component: CoursesPage,
});

function CoursesPage() {
  return (
    <SiteLayout>
      <section className="bg-gradient-hero py-20">
        <div className="mx-auto max-w-5xl px-4 text-center">
          <div className="inline-block rounded-full bg-brand-dark px-4 py-1 text-xs font-bold uppercase tracking-widest text-white">SAP Courses</div>
          <h1 className="mt-4 text-4xl font-black md:text-6xl">Explore every <span className="text-gradient-brand">SAP module</span></h1>
          <p className="mt-5 mx-auto max-w-3xl text-lg text-muted-foreground">
            From core finance to cloud HCM — click any module to see curriculum, careers, salaries and a complete placement roadmap.
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
              <Link to="/courses/$slug" params={{ slug: c.slug }} className="group block h-full overflow-hidden rounded-2xl border border-border bg-card p-6 shadow-card transition">
                <div className={`mb-4 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br ${c.color} text-3xl shadow-glow`}>
                  {c.icon}
                </div>
                <h3 className="text-2xl font-extrabold">{c.title}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{c.tagline}</p>
                <div className="mt-5 flex flex-wrap gap-2">
                  <span className="rounded-full bg-secondary px-3 py-1 text-xs font-semibold">{c.duration}</span>
                  <span className="rounded-full bg-secondary px-3 py-1 text-xs font-semibold">{c.level}</span>
                </div>
                <div className="mt-5 flex items-center justify-between text-sm">
                  <span className="text-muted-foreground">Avg CTC: <b className="text-brand-green">{c.salaryFresher}</b></span>
                  <span className="font-semibold text-brand inline-flex items-center gap-1 group-hover:gap-2 transition-all">View Course <ArrowRight className="h-4 w-4" /></span>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </section>
    </SiteLayout>
  );
}
