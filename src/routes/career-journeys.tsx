import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import { motion } from "framer-motion";
import { GraduationCap, Briefcase, RotateCcw, ArrowRight } from "lucide-react";

export const Route = createFileRoute("/career-journeys")({
  head: () => ({
    meta: [
      { title: "Career Journeys — Next-Gen ERP Solutions" },
      { name: "description", content: "Three transformation stories: Fresher, Experienced Professional, and Career Gap restart — told through animated comic chapters." },
      { property: "og:title", content: "Career Journeys" },
      { property: "og:description", content: "Interactive comic-style career transformation stories." },
    ],
  }),
  component: JourneysPage,
});

const J = [
  { to: "/fresher-journey", name: "Arjun", title: "Fresher Journey", desc: "From graduation to first SAP job. 14 chapters of transformation.", icon: GraduationCap, emoji: "🎓", color: "from-[#0B1C9C] to-[#1686F5]" },
  { to: "/experienced-professional", name: "Rahul", title: "Experienced Professional", desc: "From salary stagnation to corporate leadership.", icon: Briefcase, emoji: "💼", color: "from-[#1686F5] to-[#19C7D8]" },
  { to: "/career-gap", name: "Priya", title: "Career Gap Restart", desc: "From career break to confident corporate comeback.", icon: RotateCcw, emoji: "🔄", color: "from-[#19C7D8] to-[#09B83E]" },
] as const;

function JourneysPage() {
  return (
    <SiteLayout>
      <section className="bg-gradient-hero py-20">
        <div className="mx-auto max-w-5xl px-4 text-center">
          <div className="inline-block rounded-full bg-brand-dark px-4 py-1 text-xs font-bold uppercase tracking-widest text-white">Career Journeys</div>
          <h1 className="mt-4 text-4xl font-black md:text-6xl">Three stories. <span className="text-gradient-brand">One transformation.</span></h1>
          <p className="mt-5 mx-auto max-w-3xl text-lg text-muted-foreground">
            Pick the journey that matches your story. Each one is a fully animated comic-style chapter book — like a movie you scroll through.
          </p>
        </div>
      </section>
      <section className="mx-auto max-w-7xl px-4 py-16 grid gap-6 md:grid-cols-3">
        {J.map((j, i) => (
          <motion.div
            key={j.to}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            whileHover={{ y: -8 }}
          >
            <Link to={j.to} className="group relative block overflow-hidden rounded-3xl border-2 border-brand-dark bg-card p-8 shadow-[6px_6px_0_#071126]">
              <div className={`absolute -right-20 -top-20 h-48 w-48 rounded-full bg-gradient-to-br ${j.color} opacity-30 blur-3xl`} />
              <div className="relative">
                <div className="text-6xl">{j.emoji}</div>
                <div className="mt-2 text-xs font-bold uppercase tracking-widest text-brand">Meet {j.name}</div>
                <h3 className="mt-2 text-2xl font-extrabold">{j.title}</h3>
                <p className="mt-2 text-muted-foreground">{j.desc}</p>
                <div className="mt-6 inline-flex items-center gap-2 font-semibold text-brand-dark group-hover:gap-3 transition-all">
                  Read the Story <ArrowRight className="h-4 w-4" />
                </div>
              </div>
            </Link>
          </motion.div>
        ))}
      </section>
    </SiteLayout>
  );
}
