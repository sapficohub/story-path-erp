import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import { COURSES, getCourse } from "@/lib/courses";
import { LeadForm } from "@/components/LeadForm";
import { CheckCircle2, Clock, Award, TrendingUp, Users, Briefcase, MessageCircle } from "lucide-react";
import { motion } from "framer-motion";

export const Route = createFileRoute("/courses/$slug")({
  loader: ({ params }) => {
    const course = getCourse(params.slug);
    if (!course) throw notFound();
    return { course };
  },
  head: ({ loaderData }) => {
    const c = loaderData?.course;
    return {
      meta: [
        { title: c ? `${c.title} Training & Placement — Next-Gen ERP Solutions` : "SAP Course" },
        { name: "description", content: c?.description ?? "SAP training and placement" },
        { property: "og:title", content: c ? `${c.title} Training & Placement` : "SAP Course" },
        { property: "og:description", content: c?.tagline ?? "" },
      ],
    };
  },
  component: CoursePage,
});

function CoursePage() {
  const { course } = Route.useLoaderData();
  const related = COURSES.filter((c) => c.slug !== course.slug).slice(0, 3);

  return (
    <SiteLayout>
      <section className={`relative overflow-hidden bg-gradient-to-br ${course.color} text-white`}>
        <div className="halftone absolute inset-0 opacity-20" />
        <div className="relative mx-auto grid max-w-7xl items-center gap-10 px-4 py-16 md:grid-cols-[1.4fr_1fr]">
          <div>
            <Link to="/courses" className="text-sm text-white/80 hover:underline">← All Courses</Link>
            <div className="mt-3 text-6xl">{course.icon}</div>
            <h1 className="mt-3 text-4xl md:text-6xl font-black">{course.title}</h1>
            <p className="mt-3 text-xl text-white/90">{course.tagline}</p>
            <div className="mt-5 flex flex-wrap gap-2 text-sm">
              <span className="rounded-full bg-white/15 px-3 py-1 backdrop-blur"><Clock className="inline h-4 w-4 mr-1" />{course.duration}</span>
              <span className="rounded-full bg-white/15 px-3 py-1 backdrop-blur"><Award className="inline h-4 w-4 mr-1" />{course.level}</span>
              <span className="rounded-full bg-white/15 px-3 py-1 backdrop-blur"><TrendingUp className="inline h-4 w-4 mr-1" />100% Placement Support</span>
            </div>
            <div className="mt-7 flex flex-wrap gap-3">
              <Link to="/contact" className="rounded-full bg-white px-6 py-3 font-semibold text-brand-dark shadow-glow hover:scale-105 transition">Book Free Demo</Link>
              <a href="https://wa.me/919000333859" target="_blank" rel="noreferrer" className="rounded-full bg-[#25D366] px-6 py-3 font-semibold text-white inline-flex items-center gap-2"><MessageCircle className="h-4 w-4" /> WhatsApp</a>
            </div>
          </div>
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}>
            <LeadForm title={`Apply for ${course.title}`} subtitle="Get curriculum, fees & batch dates instantly." cta="Apply Now" />
          </motion.div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 grid gap-10 lg:grid-cols-3">
        <div className="lg:col-span-2 space-y-12">
          <div>
            <h2 className="text-3xl font-black">What is {course.title}?</h2>
            <p className="mt-3 text-muted-foreground leading-relaxed">{course.description}</p>
          </div>
          <div>
            <h2 className="text-3xl font-black">Who Should Learn</h2>
            <ul className="mt-4 grid gap-3 sm:grid-cols-2">
              {course.who.map((w) => (
                <li key={w} className="flex items-start gap-2 rounded-xl border border-border bg-card p-4">
                  <Users className="h-5 w-5 text-brand mt-0.5" /><span>{w}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="text-3xl font-black">Course Curriculum</h2>
            <div className="mt-4 grid gap-2">
              {course.curriculum.map((m, i) => (
                <motion.div
                  key={m}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.04 }}
                  className="flex items-center gap-3 rounded-xl border border-border bg-card p-4"
                >
                  <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-brand text-sm font-bold text-white">{i + 1}</span>
                  <span className="font-medium">{m}</span>
                </motion.div>
              ))}
            </div>
          </div>
          <div>
            <h2 className="text-3xl font-black">Career Opportunities</h2>
            <div className="mt-4 grid gap-3 sm:grid-cols-2">
              {course.careers.map((c) => (
                <div key={c} className="flex items-center gap-2 rounded-xl bg-secondary p-4 font-semibold">
                  <Briefcase className="h-5 w-5 text-brand" /> {c}
                </div>
              ))}
            </div>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="rounded-2xl border-2 border-brand-dark bg-card p-6 shadow-[6px_6px_0_#071126]">
              <div className="text-xs font-bold uppercase tracking-wider text-muted-foreground">Fresher Salary</div>
              <div className="mt-1 text-3xl font-black text-gradient-brand">{course.salaryFresher}</div>
            </div>
            <div className="rounded-2xl border-2 border-brand-dark bg-card p-6 shadow-[6px_6px_0_#071126]">
              <div className="text-xs font-bold uppercase tracking-wider text-muted-foreground">Experienced Salary</div>
              <div className="mt-1 text-3xl font-black text-gradient-brand">{course.salaryExperienced}</div>
            </div>
          </div>

          <div>
            <h2 className="text-3xl font-black">FAQs</h2>
            <div className="mt-4 space-y-3">
              {[
                { q: `Do I need prior experience for ${course.title}?`, a: "No. Our trainers start from scratch and guide you through every concept with hands-on labs." },
                { q: "Will I get SAP server access?", a: "Yes, every student gets 24x7 access to live SAP servers for the full duration of training and 6 months post-completion." },
                { q: "Is placement guaranteed?", a: "We offer 100% placement assistance with 120+ hiring partners. Our placement rate is 92%." },
                { q: "Can I attend a free demo?", a: "Absolutely. Book a free demo above — our career advisor will set it up within 24 hours." },
              ].map((f, i) => (
                <details key={i} className="group rounded-xl border border-border bg-card p-4">
                  <summary className="cursor-pointer font-semibold flex items-center justify-between">
                    <span>{f.q}</span>
                    <span className="text-brand transition group-open:rotate-180">▼</span>
                  </summary>
                  <p className="mt-2 text-sm text-muted-foreground">{f.a}</p>
                </details>
              ))}
            </div>
          </div>
        </div>

        <aside className="space-y-5 lg:sticky lg:top-24 self-start">
          <div className="rounded-2xl border border-border bg-card p-5 shadow-card">
            <h4 className="font-extrabold">Why this course?</h4>
            <ul className="mt-3 space-y-2 text-sm">
              {["Live SAP Server Access", "Real-Time Industry Projects", "Certification Guidance", "Resume + Mock Interviews", "Lifetime Recording Access"].map((b) => (
                <li key={b} className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-brand-green" />{b}</li>
              ))}
            </ul>
          </div>
          <div className="rounded-2xl bg-gradient-brand p-6 text-white shadow-glow">
            <h4 className="text-xl font-extrabold">Talk to a mentor</h4>
            <p className="mt-1 text-sm text-white/90">Free 30-minute career counselling.</p>
            <a href="tel:+919000333859" className="mt-4 block rounded-full bg-white px-4 py-2.5 text-center font-semibold text-brand-dark">📞 +91 90003 33859</a>
          </div>
        </aside>
      </section>

      <section className="bg-secondary py-16">
        <div className="mx-auto max-w-7xl px-4">
          <h2 className="text-3xl font-black text-center">Related Courses</h2>
          <div className="mt-8 grid gap-5 sm:grid-cols-3">
            {related.map((r) => (
              <Link key={r.slug} to="/courses/$slug" params={{ slug: r.slug }} className="rounded-2xl border border-border bg-card p-5 shadow-card hover:scale-[1.02] transition">
                <div className="text-3xl">{r.icon}</div>
                <div className="mt-2 font-extrabold">{r.title}</div>
                <div className="text-sm text-muted-foreground">{r.tagline}</div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
