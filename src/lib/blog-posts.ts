export type BlogPost = {
  slug: string;
  title: string;
  cat: string;
  desc: string;
  datePublished: string;
  lastModified: string;
  indexable: boolean;
  content: string[];
};

const PUBLICATION_DATE = "2026-07-29";

export const BLOG_POSTS: BlogPost[] = [
  {
    slug: "sap-fico-career-2026",
    title: "SAP FICO Career Roadmap 2026",
    cat: "SAP FICO",
    desc: "Everything you need to know to break into SAP FICO this year.",
    datePublished: PUBLICATION_DATE,
    lastModified: PUBLICATION_DATE,
    indexable: true,
    content: [
      "SAP FICO combines Financial Accounting and Controlling, making it one of the strongest entry points into SAP for commerce, finance and accounting professionals.",
      "A practical 2026 roadmap starts with enterprise structure, general ledger, accounts payable, accounts receivable and asset accounting before moving into cost centres, profit centres and S/4HANA Finance.",
      "Build confidence through live-server practice and an end-to-end project. Then prepare a focused resume, rehearse business-process explanations and practise scenario-based interview questions.",
    ],
  },
  {
    slug: "sap-mm-interview-questions",
    title: "Top 50 SAP MM Interview Questions",
    cat: "Interview Questions",
    desc: "Real questions and practical preparation guidance for SAP MM interviews.",
    datePublished: PUBLICATION_DATE,
    lastModified: PUBLICATION_DATE,
    indexable: true,
    content: [
      "SAP MM interviews test whether you understand the complete procure-to-pay cycle, not whether you can memorise transaction codes.",
      "Prepare to explain material and vendor master data, purchase requisitions, purchase orders, goods receipt, invoice verification, pricing and inventory valuation in business language.",
      "Strong candidates connect configuration decisions to real outcomes. Practise troubleshooting scenarios, integration with FI and SD, and examples from an end-to-end implementation project.",
    ],
  },
  {
    slug: "is-sap-good-for-freshers",
    title: "Is SAP a Good Career for Freshers?",
    cat: "Career Guidance",
    desc: "An honest guide for graduates considering an SAP career in 2026.",
    datePublished: PUBLICATION_DATE,
    lastModified: PUBLICATION_DATE,
    indexable: true,
    content: [
      "SAP can be a strong career choice for freshers who enjoy understanding how businesses operate and are willing to develop both process knowledge and practical system skills.",
      "Choose a module that fits your education: finance graduates often begin with FICO, supply-chain candidates with MM or SD, HR graduates with HCM or SuccessFactors, and programmers with ABAP or Fiori.",
      "The differentiator is hands-on work. Use a live SAP server, complete a realistic project and learn to explain each process clearly during interviews.",
    ],
  },
  {
    slug: "career-gap-restart-with-sap",
    title: "How to Restart Your Career After a 5-Year Gap with SAP",
    cat: "Career Gap",
    desc: "A practical SAP career-restart playbook for returning professionals.",
    datePublished: PUBLICATION_DATE,
    lastModified: PUBLICATION_DATE,
    indexable: true,
    content: [
      "A career gap does not remove the experience, judgement or communication skills you built before your break. The goal is to add a current, demonstrable SAP skill.",
      "Select a module aligned with your earlier education or work, follow a structured learning plan and document practical exercises from a complete implementation project.",
      "Prepare a direct explanation of your break, emphasise your readiness to return and support it with current project work, mock interviews and a role-focused resume.",
    ],
  },
  {
    slug: "successfactors-vs-hcm",
    title: "SuccessFactors vs SAP HCM — Which Should You Learn?",
    cat: "Certification",
    desc: "Compare the two HR platforms, career paths and learning priorities.",
    datePublished: PUBLICATION_DATE,
    lastModified: PUBLICATION_DATE,
    indexable: true,
    content: [
      "SAP HCM is the established on-premise human-capital platform, while SAP SuccessFactors delivers cloud-based HR capabilities through modules such as Employee Central, Recruiting and Performance.",
      "HCM remains relevant in organisations with existing SAP landscapes. SuccessFactors is often the better growth path for professionals targeting cloud HR transformation projects.",
      "Your choice should reflect your experience and target employers. Existing HCM consultants can add SuccessFactors, while new HR technology candidates can begin with Employee Central fundamentals.",
    ],
  },
  {
    slug: "sap-abap-on-hana",
    title: "Why Every ABAP Developer Must Learn HANA Today",
    cat: "SAP ABAP",
    desc: "How ABAP developers can prepare for modern S/4HANA projects.",
    datePublished: PUBLICATION_DATE,
    lastModified: PUBLICATION_DATE,
    indexable: true,
    content: [
      "S/4HANA changes how SAP applications model, access and process data, so modern ABAP work increasingly depends on HANA-aware development.",
      "ABAP developers should learn CDS views, code pushdown, AMDP, modern Open SQL and performance analysis while retaining strong foundations in the Data Dictionary, reports, enhancements and object-oriented ABAP.",
      "Practise by modernising an existing report and building a CDS-based analytical scenario. A working example demonstrates more value than a list of completed topics.",
    ],
  },
];
