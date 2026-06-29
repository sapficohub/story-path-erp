import { createFileRoute } from "@tanstack/react-router";
import { JourneyExperience, type JourneyConfig } from "@/components/journey-experience";
import { CareerGapVisuals as V } from "@/components/chapter-visuals";

const config: JourneyConfig = {
  character: "Priya",
  theme: "Restarting A Career After A Gap",
  tagline: "A 15-chapter story of courage, learning, and a powerful comeback.",
  emoji: "🔄",
  accentLabel: "Career Gap Journey",
  meterLabel: "Confidence Comeback Index",
  chapters: [
    { num: 1,  title: "A New Chapter In Life", scene: "Marriage. A new home. A new identity. A fresh start.", visual: V.marriage, accent: "blue" },
    { num: 2,  title: "Choosing Family First", scene: "Motherhood. Long nights. Tiny hands. A career put on pause.", visual: V.motherhood, accent: "blue" },
    { num: 3,  title: "Years Passed", scene: "Calendar pages flip. Children grow. The career break grows too.", visual: V.afterBreak, accent: "blue" },
    { num: 4,  title: "Self-Doubt", scene: "Quiet questions echo. The mirror feels heavier than before.", bubble: "Am I too late?", visual: V.selfDoubt, accent: "blue" },
    { num: 5,  title: "Deciding To Restart", scene: "One quiet morning, a decision lands. Soft, but unshakeable.", bubble: "I'm restarting. For me. For my family.", visual: V.decideRestart, accent: "teal" },
    { num: 6,  title: "Searching For The Right Career", scene: "Tabs open. Options weighed. The right field begins to surface.", visual: V.searchSkills, accent: "teal" },
    { num: 7,  title: "Discovering SAP", scene: "Work-life balance. Strong demand. Real comeback stories appear.", visual: V.discover, accent: "teal" },
    { num: 8,  title: "Finding Next-Gen ERP Solutions", scene: "A counsellor listens. A roadmap appears. The fear softens.", visual: V.findNextgen, accent: "teal" },
    { num: 9,  title: "Learning Around Family Responsibilities", scene: "10 PM to 1 AM. Children asleep. Laptop open. Dreams alive.", visual: V.learningFamily, accent: "teal" },
    { num: 10, title: "Real-Time Projects", scene: "Live workflows. Real configurations. The skill becomes hers.", visual: V.projects, accent: "green" },
    { num: 11, title: "Mock Interviews & Placement Program", scene: "Mock interviews. Resume rebuilt. Profile shortlisted. Momentum returns.", visual: V.mockPlace, accent: "green" },
    { num: 12, title: "Applying Again", scene: "She applies — and this time, companies reply.", visual: V.applyAgain, accent: "green" },
    { num: 13, title: "The Opportunity", scene: "The offer letter arrives. The family celebrates. Tears of pride.", visual: V.firstJob, accent: "green" },
    { num: 14, title: "Balancing Success", scene: "Career and family. Strength and softness. Both flourishing together.", visual: V.balancing, accent: "green" },
    { num: 15, title: "Success", scene: "Independent. Respected. Confident. A working mother — and a story of her own.", bubble: "My career wasn't over. It was waiting for a restart.", visual: V.success, accent: "green" },
  ],
};

export const Route = createFileRoute("/journey/career-gap")({
  head: () => ({
    meta: [
      { title: "Career Gap Journey — Priya's Story | Next-Gen ERP Solutions" },
      { name: "description", content: "Follow Priya's powerful comeback after a career break, building a thriving SAP career. A 15-chapter interactive story." },
      { property: "og:title", content: "Career Gap Journey — Priya's Story" },
      { property: "og:description", content: "Restart your career with SAP and Next-Gen ERP Solutions." },
      { property: "og:url", content: "/journey/career-gap" },
    ],
    links: [{ rel: "canonical", href: "/journey/career-gap" }],
  }),
  component: () => <JourneyExperience config={config} />,
});
