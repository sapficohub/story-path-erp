import { createFileRoute } from "@tanstack/react-router";
import { JourneyExperience, type JourneyConfig } from "@/components/journey-experience";
import { ExperiencedVisuals as V } from "@/components/chapter-visuals";

const config: JourneyConfig = {
  character: "Rahul",
  theme: "From Salary Stagnation to Career Growth",
  tagline: "An 18-chapter story of breaking through and leveling up.",
  emoji: "💼",
  accentLabel: "Experienced Professional Journey",
  meterLabel: "Salary Growth Potential",
  chapters: [
    { num: 1,  title: "A Stable Job, But No Growth", scene: "A busy desk. A safe role. A salary that refuses to move.", bubble: "I work hard every day, but my package never grows.", visual: V.currentJob, accent: "blue" },
    { num: 2,  title: "Watching Others Move Ahead", scene: "LinkedIn pings. Friends getting promoted. Rahul feels left behind.", visual: V.comparison, accent: "blue" },
    { num: 3,  title: "Working Harder Didn't Change Anything", scene: "Three years. More hours, more tasks — the same paycheck.", visual: V.workingHarder, accent: "blue" },
    { num: 4,  title: "A Conversation That Changed Everything", scene: "A family dinner. A cousin shares one story. Something clicks.", bubble: "You should explore SAP. It changed my career.", visual: V.familyRec, accent: "teal" },
    { num: 5,  title: "Researching SAP", scene: "Salary charts. Demand curves. Job counts. The graph keeps going up.", visual: V.research, accent: "teal" },
    { num: 6,  title: "Finding Next-Gen ERP Solutions", scene: "Search results scroll. One name keeps surfacing — trusted, real.", visual: V.findNextgen, accent: "teal" },
    { num: 7,  title: "Choosing The Right Training Path", scene: "Regular batch vs personal mentorship. He picks the one built for working pros.", visual: V.trainingPath, accent: "teal" },
    { num: 8,  title: "Learning After Work", scene: "10 PM after office. Live class. Doubts cleared from 6 AM to 10 PM.", visual: V.learningAfterWork, accent: "teal" },
    { num: 9,  title: "Completing Training", scene: "Modules done. Assignments cleared. Certification in hand.", visual: V.training, accent: "green" },
    { num: 10, title: "Working On Projects", scene: "Live business scenarios. Real configurations. Real confidence.", visual: V.projects, accent: "green" },
    { num: 11, title: "Mock Interviews", scene: "Question by question, hesitation turns into clarity.", visual: V.mockInterview, accent: "green" },
    { num: 12, title: "Placement Guaranteed Program", scene: "Dedicated placement cell. 200+ partners. Unlimited interview calls.", visual: V.placementProgram, accent: "green" },
    { num: 13, title: "Becoming Industry Ready", scene: "Old resume rewritten. New profile. New positioning. New Rahul.", visual: V.industryReady, accent: "green" },
    { num: 14, title: "Applying For SAP Opportunities", scene: "Same Rahul, completely different shortlists. Phones don't stop ringing.", visual: V.applying, accent: "green" },
    { num: 15, title: "The Big Breakthrough", scene: "The offer letter opens. The package is 4x what he made before.", visual: V.breakthrough, accent: "green" },
    { num: 16, title: "A New Life", scene: "₹3.5L → ₹8L → ₹12L → ₹18L. The salary graph soars.", visual: V.newJob, accent: "green" },
    { num: 17, title: "International Opportunities", scene: "Global clients. USA, UK, Germany, Singapore — calls across timezones.", visual: V.international, accent: "green" },
    { num: 18, title: "Success", scene: "A leader. A team. A global career. True professional growth.", bubble: "I didn't need another job. I needed a better career.", visual: V.success, accent: "green" },
  ],
};

export const Route = createFileRoute("/journey/experienced")({
  head: () => ({
    meta: [
      { title: "Experienced Professional Journey — Rahul's Story | Next-Gen ERP Solutions" },
      { name: "description", content: "Follow Rahul's transformation from salary stagnation to a thriving SAP career. An 18-chapter interactive story." },
      { property: "og:title", content: "Experienced Professional Journey — Rahul's Story" },
      { property: "og:description", content: "Break through your career plateau with SAP." },
      { property: "og:url", content: "/journey/experienced" },
    ],
    links: [{ rel: "canonical", href: "/journey/experienced" }],
  }),
  component: () => <JourneyExperience config={config} />,
});
