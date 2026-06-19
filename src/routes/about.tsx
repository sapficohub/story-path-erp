import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import { motion } from "framer-motion";
import { Target, Heart, Trophy, Users, Building2, Sparkles } from "lucide-react";
import { LeadForm } from "@/components/LeadForm";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Us — Next-Gen ERP Solutions" },
      { name: "description", content: "Our story, mission and training methodology. India's most trusted SAP training & placement institute." },
      { property: "og:title", content: "About Next-Gen ERP Solutions" },
      { property: "og:description", content: "Learn about our mission, trainers and career transformation philosophy." },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <SiteLayout>
      <section className="bg-gradient-hero py-20">
        <div className="mx-auto max-w-5xl px-4 text-center">
          <div className="inline-block rounded-full bg-brand-dark px-4 py-1 text-xs font-bold uppercase tracking-widest text-white">About Us</div>
          <h1 className="mt-4 text-4xl font-black md:text-6xl">We turn ambition into <span className="text-gradient-brand">SAP careers</span></h1>
          <p className="mt-5 mx-auto max-w-3xl text-lg text-muted-foreground">
            Next-Gen ERP Solutions is a career transformation platform built by senior SAP consultants. We've helped thousands of freshers, working professionals and career-gap candidates land high-growth SAP roles at India's leading MNCs.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16 grid gap-8 md:grid-cols-3">
        {[
          { i: Target, t: "Our Vision", d: "To make world-class SAP careers accessible to every learner in India — regardless of background, age or experience." },
          { i: Heart, t: "Our Mission", d: "Combine industry-grade training, real projects and dedicated placement support so every student finds their dream role." },
          { i: Trophy, t: "Our Promise", d: "100% placement assistance, lifetime access to learning resources, and mentorship that goes beyond your first job." },
        ].map((c, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="rounded-2xl border border-border bg-card p-8 shadow-card"
          >
            <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-brand text-white"><c.i className="h-6 w-6" /></div>
            <h3 className="mt-4 text-2xl font-extrabold">{c.t}</h3>
            <p className="mt-2 text-muted-foreground">{c.d}</p>
          </motion.div>
        ))}
      </section>

      <section className="bg-secondary py-16">
        <div className="mx-auto max-w-6xl px-4">
          <h2 className="text-3xl font-black md:text-4xl text-center">Our Training Methodology</h2>
          <div className="mt-10 grid gap-5 md:grid-cols-4">
            {["Live Instructor-Led Classes", "Real SAP Server Access", "Industry-Grade Projects", "Mock Interviews & Placement"].map((s, i) => (
              <div key={i} className="rounded-xl border-2 border-brand-dark bg-card p-5 shadow-[4px_4px_0_#071126]">
                <div className="text-3xl font-black text-gradient-brand">0{i + 1}</div>
                <div className="mt-2 font-extrabold">{s}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16">
        <h2 className="text-3xl font-black md:text-4xl text-center">Transformation by the numbers</h2>
        <div className="mt-10 grid gap-6 md:grid-cols-4">
          {[
            { i: Users, n: "5,000+", t: "Students Trained" },
            { i: Trophy, n: "92%", t: "Placement Rate" },
            { i: Building2, n: "120+", t: "Hiring Partners" },
            { i: Sparkles, n: "₹14 LPA", t: "Average CTC" },
          ].map((s, i) => (
            <div key={i} className="rounded-2xl border border-border bg-card p-6 text-center shadow-card">
              <s.i className="mx-auto h-8 w-8 text-brand" />
              <div className="mt-3 text-3xl font-black text-gradient-brand">{s.n}</div>
              <div className="text-sm text-muted-foreground">{s.t}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-gradient-hero py-16">
        <div className="mx-auto max-w-5xl px-4 grid gap-8 md:grid-cols-2 items-center">
          <div>
            <h2 className="text-3xl font-black md:text-4xl">Ready to start?</h2>
            <p className="mt-3 text-muted-foreground">Book a free demo and let our career advisors design your SAP roadmap.</p>
            <Link to="/contact" className="mt-5 inline-block rounded-full bg-gradient-brand px-6 py-3 font-semibold text-white shadow-glow">Talk to Advisor</Link>
          </div>
          <LeadForm title="Career Counselling" subtitle="Free 30-min session with a senior SAP mentor." />
        </div>
      </section>
    </SiteLayout>
  );
}
