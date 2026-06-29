import { createFileRoute } from "@tanstack/react-router";
import { JourneyExperience, type JourneyConfig } from "@/components/journey-experience";
import { FresherVisuals as V } from "@/components/chapter-visuals";

const config: JourneyConfig = {
  character: "Arjun",
  theme: "From Graduate to SAP Professional",
  tagline: "A 15-chapter story of struggle, discovery, and transformation.",
  emoji: "🎓",
  accentLabel: "Fresher Journey",
  meterLabel: "Career Readiness Score",
  chapters: [
    { num: 1,  title: "Graduation", scene: "Cap in the air. Degree in hand. The world looks wide open.", bubble: "I thought graduation was enough.", visual: V.graduation, accent: "blue" },
    { num: 2,  title: "Friends Started Getting Jobs", scene: "One by one, classmates post 'I'm joining…' updates. Arjun scrolls quietly.", visual: V.friendsJobs, accent: "blue" },
    { num: 3,  title: "Endless Applications", scene: "LinkedIn. Naukri. Indeed. Monster. Applications fly. Rejections fall.", bubble: "Why is nobody hiring me?", visual: V.jobSearch, accent: "blue" },
    { num: 4,  title: "Feeling Stuck", scene: "Months blur past. Confidence drops. Parents look concerned.", visual: V.monthsPassing, accent: "blue" },
    { num: 5,  title: "A Helpful Suggestion", scene: "His sister sits beside him. A simple sentence — and a door opens.", bubble: "Bhaiya, have you heard about SAP?", visual: V.sisterSuggest, accent: "teal" },
    { num: 6,  title: "Research Begins", scene: "Late night. Search bar glowing. Tab after tab — a whole new world appears.", visual: V.researchSearch, accent: "teal" },
    { num: 7,  title: "Discovering Next-Gen ERP Solutions", scene: "Generic institutes scroll past. One stands out — glowing, trusted.", visual: V.searchInstitute, accent: "teal" },
    { num: 8,  title: "Learning the Right Skills", scene: "MM. SD. FICO. ABAP. S/4 HANA. Modules unlock one by one.", visual: V.learningJourney, accent: "teal" },
    { num: 9,  title: "Working on Projects", scene: "Real workflows. Real business cases. Confidence becomes capability.", visual: V.projects, accent: "green" },
    { num: 10, title: "Mock Interviews", scene: "Round after round. Questions get sharper. So do the answers.", visual: V.mockInterview, accent: "green" },
    { num: 11, title: "Applying Again", scene: "Same job portals — completely different response. Shortlists pour in.", visual: V.applyingAgain, accent: "green" },
    { num: 12, title: "The Job Offer", scene: "The email arrives. The number is real. Confetti, hugs, tears.", visual: V.offerLetter, accent: "green" },
    { num: 13, title: "A New Beginning", scene: "Corporate campus. ID card. Laptop bag. A new Arjun walks in.", visual: V.firstDay, accent: "green" },
    { num: 14, title: "Growth Over The Years", scene: "Consultant. Senior. Lead. Manager. The graph keeps climbing.", visual: V.careerGrowth, accent: "green" },
    { num: 15, title: "Success", scene: "Home. Car. Family. Travel. The old Arjun becomes the successful Arjun.", bubble: "Everything changed when I learned the right skill.", visual: V.success, accent: "green" },
  ],
};

export const Route = createFileRoute("/journey/fresher")({
  head: () => ({
    meta: [
      { title: "Fresher Journey — Arjun's Story | Next-Gen ERP Solutions" },
      { name: "description", content: "Follow Arjun's transformation from struggling graduate to successful SAP professional. A 15-chapter interactive story." },
      { property: "og:title", content: "Fresher Journey — From Graduate to SAP Professional" },
      { property: "og:description", content: "An interactive 15-chapter career transformation story." },
      { property: "og:url", content: "/journey/fresher" },
    ],
    links: [{ rel: "canonical", href: "/journey/fresher" }],
  }),
  component: () => <JourneyExperience config={config} />,
});
