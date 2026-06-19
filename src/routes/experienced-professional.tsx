import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import { ComicPanel } from "@/components/ComicPanel";
import { ComicCharacter, SalaryGraph } from "@/components/ComicCharacter";
import { JourneyHero, FinalCTA } from "./fresher-journey";
import { motion, useScroll, useSpring } from "framer-motion";

export const Route = createFileRoute("/experienced-professional")({
  head: () => ({
    meta: [
      { title: "Experienced Professional Journey — Rahul's SAP Story" },
      { name: "description", content: "From salary stagnation to corporate leadership. Follow Rahul's interactive transformation with SAP." },
      { property: "og:title", content: "From Salary Stagnation to Career Growth — Rahul's Story" },
      { property: "og:description", content: "How working professionals double their salary with SAP." },
    ],
  }),
  component: ExperiencedJourney,
});

const CHAPTERS = [
  { c: "Chapter 1", t: "The Daily Grind", n: "Rahul works hard. The hours are long. The salary barely moves.", b: "I work harder than anyone. Why am I stuck?", mood: "worried" as const },
  { c: "Chapter 2", t: "Friends Get Promoted", n: "Notifications light up. Colleagues celebrate new roles. Rahul scrolls past.", b: "Why everyone except me?", mood: "sad" as const },
  { c: "Chapter 3", t: "The Family Conversation", n: "Dinner table. A cousin mentions SAP. Salaries that change lives.", b: "Tell me more about this SAP.", mood: "neutral" as const },
  { c: "Chapter 4", t: "Researching Options", n: "Late-night research. Reviews. Demos. Next-Gen rises to the top.", b: "These people understand professionals like me.", mood: "neutral" as const },
  { c: "Chapter 5", t: "Joining Next-Gen", n: "Weekend batch. A mentor who gets it. A roadmap that finally makes sense.", b: "This time I'll do it right.", mood: "confident" as const },
  { c: "Chapter 6", t: "Mastering SAP", n: "Work by day. Practice by night. Real projects on real servers.", b: "I'm building real skills.", mood: "happy" as const },
  { c: "Chapter 7", t: "Interview Calls", n: "Phone rings. Inbox fills. Top MNCs come knocking.", b: "Recruiters are finding ME now.", mood: "confident" as const },
  { c: "Chapter 8", t: "The Switch", n: "Resignation. Notice period. A new badge, a new floor, a new chapter.", b: "I'm officially an SAP consultant.", mood: "happy" as const },
  { c: "Chapter 9", t: "Salary Triples", n: "Offer letter. Negotiation. Joining bonus. Numbers Rahul never imagined.", b: "I didn't need another job. I needed a better career.", mood: "celebrating" as const },
  { c: "Chapter 10", t: "Corporate Leadership", n: "Team lead. Project lead. Manager. A future that finally compounds.", b: "Now I lead. Now I grow.", mood: "confident" as const },
];

function ExperiencedJourney() {
  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });
  return (
    <SiteLayout>
      <motion.div style={{ scaleX: progress }} className="fixed left-0 top-[64px] z-30 h-1 w-full origin-left bg-gradient-brand" />
      <JourneyHero eyebrow="Experienced Journey" name="Rahul" title="From Salary Stagnation to Career Growth" gradient="from-[#1686F5] to-[#19C7D8]" />
      <section className="mx-auto max-w-6xl space-y-24 px-4 py-20">
        {CHAPTERS.map((ch, i) => (
          <ComicPanel key={ch.c} chapter={ch.c} title={ch.t} narration={ch.n} bubble={ch.b} reverse={i % 2 === 1}>
            {i === 8 || i === 9 ? <div className="w-full"><SalaryGraph growth={1} /></div> : <ComicCharacter mood={ch.mood} name="Rahul" showConfetti={ch.mood === "celebrating"} />}
          </ComicPanel>
        ))}
      </section>
      <FinalCTA name="Rahul" />
    </SiteLayout>
  );
}
