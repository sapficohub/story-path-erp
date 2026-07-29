export type BlogPost = {
  slug: string;
  title: string;
  cat: string;
  desc: string;
  lastModified: string;
  indexable: boolean;
};

export const BLOG_POSTS: BlogPost[] = [
  {
    slug: "sap-fico-career-2026",
    title: "SAP FICO Career Roadmap 2026",
    cat: "SAP FICO",
    desc: "Everything you need to know to break into SAP FICO this year.",
    lastModified: "2026-07-29",
    indexable: false,
  },
  {
    slug: "sap-mm-interview-questions",
    title: "Top 50 SAP MM Interview Questions",
    cat: "Interview Questions",
    desc: "Real questions, real answers from recent MNC interviews.",
    lastModified: "2026-07-29",
    indexable: false,
  },
  {
    slug: "is-sap-good-for-freshers",
    title: "Is SAP a Good Career for Freshers?",
    cat: "Career Guidance",
    desc: "An honest, data-backed answer for 2026 graduates.",
    lastModified: "2026-07-29",
    indexable: false,
  },
  {
    slug: "career-gap-restart-with-sap",
    title: "How to Restart Your Career After a 5-Year Gap with SAP",
    cat: "Career Gap",
    desc: "A practical playbook for returning professionals.",
    lastModified: "2026-07-29",
    indexable: false,
  },
  {
    slug: "successfactors-vs-hcm",
    title: "SuccessFactors vs SAP HCM — Which Should You Learn?",
    cat: "Certification",
    desc: "Compare modules, salaries and demand in 2026.",
    lastModified: "2026-07-29",
    indexable: false,
  },
  {
    slug: "sap-abap-on-hana",
    title: "Why Every ABAP Developer Must Learn HANA Today",
    cat: "SAP ABAP",
    desc: "The shift to S/4HANA is real — here's how to ride it.",
    lastModified: "2026-07-29",
    indexable: false,
  },
];
