import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import { motion } from "framer-motion";
import { Quote } from "lucide-react";

export const Route = createFileRoute("/success-stories")({
  head: () => ({
    meta: [
      { title: "Success Stories — Real SAP Career Transformations" },
      { name: "description", content: "Before & after stories from Next-Gen ERP Solutions graduates. Real names. Real salaries. Real transformation." },
      { property: "og:title", content: "Real SAP Career Transformations" },
      { property: "og:description", content: "Read how our students transformed their careers with SAP." },
    ],
  }),
  component: SuccessStories,
});

const STORIES = [
  { n: "Arjun K.", m: "SAP FICO", b: "Unemployed", a: "₹6.5 LPA · TCS", q: "From rejection emails to my first offer in 5 months. Next-Gen mentors believed in me before I did." },
  { n: "Rahul M.", m: "SAP MM", b: "₹4.2 LPA · Support", a: "₹14 LPA · Infosys", q: "I didn't need another job. I needed a better career — and Next-Gen built it for me." },
  { n: "Priya S.", m: "SuccessFactors", b: "5-yr career gap", a: "₹7.8 LPA · Capgemini", q: "My career wasn't over. It was waiting for a restart. Thank you, Next-Gen." },
  { n: "Vikram T.", m: "SAP ABAP", b: "₹3.5 LPA · Tester", a: "₹11 LPA · Accenture", q: "Real projects gave me real confidence. Cleared 3 interviews in 2 weeks." },
  { n: "Meera J.", m: "SAP HCM", b: "HR Executive", a: "₹9 LPA · Deloitte", q: "Switching domains felt impossible — until I joined Next-Gen." },
  { n: "Suresh B.", m: "SAP BASIS", b: "Linux Admin · ₹5 LPA", a: "₹16 LPA · IBM", q: "BASIS opened doors I didn't even know existed." },
];

function SuccessStories() {
  return (
    <SiteLayout>
      <section className="bg-gradient-hero py-20">
        <div className="mx-auto max-w-5xl px-4 text-center">
          <div className="inline-block rounded-full bg-brand-dark px-4 py-1 text-xs font-bold uppercase tracking-widest text-white">Success Stories</div>
          <h1 className="mt-4 text-4xl font-black md:text-6xl">Real careers. <span className="text-gradient-brand">Real numbers.</span></h1>
          <p className="mt-5 mx-auto max-w-3xl text-lg text-muted-foreground">Every story is verified. Every number is real. Every transformation began with one decision.</p>
        </div>
      </section>
      <section className="mx-auto max-w-7xl px-4 py-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {STORIES.map((s, i) => (
          <motion.div
            key={s.n}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.06 }}
            className="rounded-2xl border-2 border-brand-dark bg-card p-6 shadow-[6px_6px_0_#071126]"
          >
            <div className="flex items-center gap-3">
              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-gradient-brand text-xl font-black text-white">{s.n[0]}</div>
              <div>
                <div className="font-extrabold">{s.n}</div>
                <div className="text-xs text-muted-foreground">{s.m} Graduate</div>
              </div>
            </div>
            <div className="mt-4 grid grid-cols-2 gap-2 text-xs">
              <div className="rounded-lg bg-destructive/10 p-2"><b>Before:</b><br />{s.b}</div>
              <div className="rounded-lg bg-brand-green/10 p-2"><b className="text-brand-green">After:</b><br />{s.a}</div>
            </div>
            <Quote className="mt-4 h-5 w-5 text-brand opacity-50" />
            <p className="mt-1 italic text-sm text-muted-foreground">{s.q}</p>
          </motion.div>
        ))}
      </section>
    </SiteLayout>
  );
}
