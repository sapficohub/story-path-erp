import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import { ComicPanel } from "@/components/ComicPanel";
import { ComicCharacter, SalaryGraph } from "@/components/ComicCharacter";
import { JourneyHero, FinalCTA } from "./fresher-journey";
import { motion, useScroll, useSpring } from "framer-motion";

export const Route = createFileRoute("/career-gap")({
  head: () => ({
    meta: [
      { title: "Career Gap Restart — Priya's SAP Comeback Story" },
      { name: "description", content: "A career gap is a pause, not a full stop. Follow Priya's animated SAP restart journey." },
      { property: "og:title", content: "Restart your career with SAP — Priya's Story" },
      { property: "og:description", content: "Career-gap candidates transformed into corporate professionals." },
    ],
  }),
  component: CareerGap,
});

const CHAPTERS = [
  { c: "Chapter 1", t: "The Pause", n: "Priya stepped away for family. Years passed. The world kept moving.", b: "Is it too late for me?", mood: "sad" as const },
  { c: "Chapter 2", t: "The Spark", n: "A friend mentions SAP. Stories of women restarting careers at any age.", b: "Maybe I CAN do this.", mood: "neutral" as const },
  { c: "Chapter 3", t: "Finding Next-Gen", n: "Reviews from real career-gap candidates. Mentors who understand the journey.", b: "This place believes in second chapters.", mood: "neutral" as const },
  { c: "Chapter 4", t: "Joining the Class", n: "First day jitters. Warm welcomes. A fresh notebook. A new beginning.", b: "I belong here.", mood: "happy" as const },
  { c: "Chapter 5", t: "Building Confidence", n: "Modules click. Labs work. Small wins compound into big belief.", b: "I'm still sharp. I always was.", mood: "confident" as const },
  { c: "Chapter 6", t: "Family Cheers", n: "Husband, kids, parents — everyone watches her rise again.", b: "They're proud. I'm proud.", mood: "happy" as const },
  { c: "Chapter 7", t: "Interview Calls", n: "First call. Second call. Calendars fill up. The phone won't stop.", b: "Companies WANT me.", mood: "confident" as const },
  { c: "Chapter 8", t: "The Offer", n: "Offer letter in hand. A team lead role. Hybrid hours that fit her life.", b: "My career wasn't over. It was waiting for a restart.", mood: "celebrating" as const },
  { c: "Chapter 9", t: "Corporate Comeback", n: "ID card. Laptop. A team that values experience and empathy in equal measure.", b: "I'm back — stronger than ever.", mood: "confident" as const },
];

function CareerGap() {
  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });
  return (
    <SiteLayout>
      <motion.div style={{ scaleX: progress }} className="fixed left-0 top-[64px] z-30 h-1 w-full origin-left bg-gradient-brand" />
      <JourneyHero eyebrow="Career Gap Journey" name="Priya" title="From Career Break to Corporate Comeback" gradient="from-[#19C7D8] to-[#09B83E]" />
      <section className="mx-auto max-w-6xl space-y-24 px-4 py-20">
        {CHAPTERS.map((ch, i) => (
          <ComicPanel key={ch.c} chapter={ch.c} title={ch.t} narration={ch.n} bubble={ch.b} reverse={i % 2 === 1}>
            {i === 7 ? <div className="w-full"><SalaryGraph growth={1} /></div> : <ComicCharacter mood={ch.mood} name="Priya" showConfetti={ch.mood === "celebrating"} />}
          </ComicPanel>
        ))}
      </section>
      <FinalCTA name="Priya" />
    </SiteLayout>
  );
}
