import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import { LeadForm } from "@/components/LeadForm";
import { motion } from "framer-motion";

export const Route = createFileRoute("/placements")({
  head: () => ({
    meta: [
      { title: "Placements — Next-Gen ERP Solutions" },
      { name: "description", content: "92% placement rate. 120+ hiring partners. End-to-end placement support for every SAP student." },
      { property: "og:title", content: "SAP Placements at Next-Gen" },
      { property: "og:description", content: "Real placements. Real numbers. Real careers." },
    ],
  }),
  component: PlacementsPage,
});

const COMPANIES = ["TCS", "Infosys", "Wipro", "Accenture", "Capgemini", "Deloitte", "IBM", "HCL", "Tech Mahindra", "Cognizant", "LTI", "Mindtree"];

function PlacementsPage() {
  return (
    <SiteLayout>
      <section className="bg-gradient-hero py-20">
        <div className="mx-auto max-w-5xl px-4 text-center">
          <div className="inline-block rounded-full bg-brand-dark px-4 py-1 text-xs font-bold uppercase tracking-widest text-white">Placements</div>
          <h1 className="mt-4 text-4xl font-black md:text-6xl">Where our students <span className="text-gradient-brand">land</span></h1>
          <p className="mt-5 mx-auto max-w-3xl text-lg text-muted-foreground">
            A dedicated placement cell, 120+ hiring partners and a 92% placement record. We don't stop until you sign your offer letter.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16">
        <div className="grid gap-4 sm:grid-cols-4">
          {[
            { n: "5,000+", t: "Students Placed" },
            { n: "92%", t: "Placement Rate" },
            { n: "₹14 LPA", t: "Average CTC" },
            { n: "₹42 LPA", t: "Highest CTC" },
          ].map((s, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }} className="rounded-2xl border-2 border-brand-dark bg-card p-6 text-center shadow-[4px_4px_0_#071126]">
              <div className="text-3xl font-black text-gradient-brand">{s.n}</div>
              <div className="text-sm text-muted-foreground">{s.t}</div>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="bg-secondary py-16">
        <div className="mx-auto max-w-7xl px-4">
          <h2 className="text-center text-3xl font-black md:text-4xl">Our Hiring Partners</h2>
          <div className="mt-10 grid grid-cols-3 gap-4 md:grid-cols-6">
            {COMPANIES.map((c) => (
              <div key={c} className="flex h-20 items-center justify-center rounded-xl border border-border bg-card font-extrabold text-brand-dark shadow-card">{c}</div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16">
        <h2 className="text-center text-3xl font-black md:text-4xl">Placement Process</h2>
        <div className="mt-10 grid gap-4 md:grid-cols-3 lg:grid-cols-6">
          {["Skill Assessment", "Resume Building", "Mock Interviews", "Soft Skills", "Company Drives", "Offer Negotiation"].map((p, i) => (
            <div key={p} className="rounded-2xl border-2 border-brand-dark bg-card p-5 shadow-[4px_4px_0_#071126]">
              <div className="text-3xl font-black text-gradient-brand">0{i + 1}</div>
              <div className="mt-2 font-extrabold">{p}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-gradient-hero py-16">
        <div className="mx-auto max-w-5xl px-4 grid gap-8 md:grid-cols-2 items-center">
          <div>
            <h2 className="text-3xl font-black md:text-4xl">Want placement help today?</h2>
            <p className="mt-3 text-muted-foreground">Submit your details and our placement team will call you within 24 hours.</p>
          </div>
          <LeadForm title="Talk to Placement Cell" subtitle="Free, no obligations." />
        </div>
      </section>
    </SiteLayout>
  );
}
