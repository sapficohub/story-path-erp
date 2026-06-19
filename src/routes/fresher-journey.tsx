import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import { ComicPanel } from "@/components/ComicPanel";
import { ComicCharacter, SalaryGraph } from "@/components/ComicCharacter";
import { LeadForm } from "@/components/LeadForm";
import { motion, useScroll, useSpring } from "framer-motion";
import { useEffect, useState } from "react";

export const Route = createFileRoute("/fresher-journey")({
  head: () => ({
    meta: [
      { title: "Fresher Journey — Arjun's SAP Story | Next-Gen ERP Solutions" },
      { name: "description", content: "Follow Arjun's animated journey from graduation to a six-figure SAP career. Interactive comic chapters built for freshers." },
      { property: "og:title", content: "Arjun's Fresher to SAP Professional Story" },
      { property: "og:description", content: "An interactive comic-style transformation journey for SAP freshers." },
    ],
  }),
  component: FresherJourney,
});

const CHAPTERS = [
  { c: "Chapter 1", t: "Graduation", n: "Arjun receives his degree. The crowd claps. The future feels limitless.", b: "I thought graduation was enough.", mood: "neutral" as const },
  { c: "Chapter 2", t: "The Job Search", n: "Day after day, he applies. Rejection emails pile up. The room grows quiet.", b: "Why is nobody hiring me?", mood: "sad" as const },
  { c: "Chapter 3", t: "Time Slips Away", n: "Calendar pages fly. Friends post office selfies. Confidence wavers.", b: "I'm falling behind.", mood: "worried" as const },
  { c: "Chapter 4", t: "Discovering SAP", n: "A late-night scroll. SAP roles glow brighter — bigger salaries, bigger futures.", b: "Wait… what is SAP?", mood: "neutral" as const },
  { c: "Chapter 5", t: "Finding Next-Gen", n: "Reviews, ratings, a glowing reputation. One name keeps coming up.", b: "This looks different.", mood: "neutral" as const },
  { c: "Chapter 6", t: "Joining Next-Gen", n: "Doors slide open. A warm welcome. A trainer who actually listens.", b: "I finally found direction.", mood: "happy" as const },
  { c: "Chapter 7", t: "Learning SAP", n: "Notes. Labs. Late-night sessions. Confidence climbs with every module.", b: "I'm actually getting this!", mood: "happy" as const },
  { c: "Chapter 8", t: "Real-Time Projects", n: "End-to-end implementation. Real business workflows. Real ownership.", b: "Now I understand how companies work.", mood: "confident" as const },
  { c: "Chapter 9", t: "Interview Preparation", n: "Mock interviews. Resume polish. Soft-skills coaching. Green ticks everywhere.", b: "I'm ready.", mood: "confident" as const },
  { c: "Chapter 10", t: "The Interview", n: "Skyscraper. Glass doors. Calm answers. Heads nodding.", b: "I belong here.", mood: "confident" as const },
  { c: "Chapter 11", t: "The Offer Letter", n: "A phone call. An email. Confetti everywhere. The family celebrates.", b: "I did it!", mood: "celebrating" as const },
  { c: "Chapter 12", t: "First Day in the MNC", n: "ID card. Laptop bag. Elevator ride. A whole new world begins.", b: "This is my office.", mood: "happy" as const },
  { c: "Chapter 13", t: "Career Growth", n: "Associate. Consultant. Senior. Manager. The graph keeps rising.", b: "I'm not just working — I'm growing.", mood: "confident" as const },
  { c: "Chapter 14", t: "Success", n: "New home. New car. Family smiles. Old Arjun would be proud.", b: "Learning SAP changed my life.", mood: "celebrating" as const },
];

function FresherJourney() {
  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });

  return (
    <SiteLayout>
      <motion.div style={{ scaleX: progress }} className="fixed left-0 top-[64px] z-30 h-1 w-full origin-left bg-gradient-brand" />
      <JourneyHero
        eyebrow="Fresher Journey"
        name="Arjun"
        title="From Graduate to SAP Professional"
        gradient="from-[#0B1C9C] to-[#1686F5]"
      />
      <section className="mx-auto max-w-6xl space-y-24 px-4 py-20">
        {CHAPTERS.map((ch, i) => (
          <ComicPanel
            key={ch.c}
            chapter={ch.c}
            title={ch.t}
            narration={ch.n}
            bubble={ch.b}
            reverse={i % 2 === 1}
          >
            {i === 13 || i === 10 ? (
              <div className="w-full">
                <SalaryGraph growth={1} />
              </div>
            ) : (
              <ComicCharacter mood={ch.mood} name="Arjun" showConfetti={ch.mood === "celebrating"} />
            )}
          </ComicPanel>
        ))}
      </section>
      <FinalCTA name="Arjun" />
    </SiteLayout>
  );
}

export function JourneyHero({ eyebrow, name, title, gradient }: { eyebrow: string; name: string; title: string; gradient: string }) {
  return (
    <section className={`relative overflow-hidden bg-gradient-to-br ${gradient} text-white`}>
      <div className="halftone absolute inset-0 opacity-30" />
      <div className="relative mx-auto grid max-w-7xl items-center gap-10 px-4 py-20 md:grid-cols-2">
        <div>
          <div className="inline-block rounded-full bg-white/15 px-4 py-1 text-xs font-bold uppercase tracking-widest backdrop-blur">{eyebrow}</div>
          <h1 className="mt-4 text-5xl md:text-7xl font-black">Meet {name}</h1>
          <p className="mt-3 text-2xl text-white/90 font-display font-bold">{title}</p>
          <p className="mt-5 max-w-xl text-white/80">Scroll through every chapter of {name}'s transformation. Each panel is an animated moment — narrated like a comic, real like a documentary.</p>
        </div>
        <div className="relative max-w-sm mx-auto w-full">
          <div className="comic-panel p-6 aspect-square">
            <ComicCharacter mood="neutral" name={name} />
          </div>
          <div className="speech-bubble absolute -bottom-6 -left-6">"My story starts here…"</div>
        </div>
      </div>
    </section>
  );
}

export function FinalCTA({ name }: { name: string }) {
  return (
    <section className="bg-brand-dark py-20 text-white">
      <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 md:grid-cols-2">
        <div>
          <div className="speech-bubble inline-block bg-white text-foreground">"Now it's your turn."</div>
          <h2 className="mt-6 text-4xl md:text-6xl font-black">Your SAP Success Story <span className="text-gradient-brand">Starts Here</span></h2>
          <p className="mt-4 text-white/80 text-lg">{name}'s story could be yours. Talk to a career advisor today — it's free.</p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link to="/contact" className="rounded-full bg-gradient-brand px-6 py-3 font-semibold text-white shadow-glow">Book Free Demo</Link>
            <a href="https://wa.me/919000333859" target="_blank" rel="noreferrer" className="rounded-full bg-[#25D366] px-6 py-3 font-semibold">WhatsApp Us</a>
          </div>
        </div>
        <LeadForm />
      </div>
    </section>
  );
}
