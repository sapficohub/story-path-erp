export type PaidModuleKey = "sap-fico" | "sap-mm" | "sap-abap";

type Audience = { title: string; description: string };
type FAQ = { question: string; answer: string };

export type PaidLandingPageConfig = {
  key: PaidModuleKey;
  courseName: string;
  badge: string;
  headline: string;
  subheadline: string;
  heroBullets: string[];
  audience: Audience[];
  learningSteps: string[];
  trainerSpecialty: string;
  careerRoles: string[];
  faqs: FAQ[];
};

const commonFaqs = (courseName: string): FAQ[] => [
  {
    question: `Do I need previous SAP experience for ${courseName}?`,
    answer:
      "No. The training starts with foundations and builds toward practical, interview-ready scenarios.",
  },
  {
    question: "Is the free demo really free?",
    answer:
      "Yes. There is no payment required to attend the demo and understand the training approach.",
  },
  {
    question: "Will I get live SAP server access?",
    answer: "Yes. Practical exercises use live SAP server access so you can learn by doing.",
  },
  {
    question: "Are online and classroom options available?",
    answer:
      "Batch formats depend on current availability. Our team will confirm the suitable option after your request.",
  },
  {
    question: "Does the course include interview preparation?",
    answer:
      "Yes. The learning journey includes resume guidance, topic-wise interview preparation and mock interviews.",
  },
  {
    question: "Is placement support included?",
    answer:
      "Yes. Next-Gen provides placement assistance and guided job-search preparation; employment is not guaranteed.",
  },
  {
    question: "What happens after I submit the form?",
    answer:
      "A career advisor discusses your profile, confirms the demo, and shares the relevant course roadmap and batch details.",
  },
  {
    question: "Can working professionals attend?",
    answer: "Yes. Ask the career team about currently available weekday and weekend schedules.",
  },
];

export const PAID_LANDING_PAGES: Record<PaidModuleKey, PaidLandingPageConfig> = {
  "sap-fico": {
    key: "sap-fico",
    courseName: "SAP FICO",
    badge: "Practical SAP FICO Training",
    headline: "Build Practical SAP FICO Skills for Your Next Career Move",
    subheadline:
      "Learn SAP Financial Accounting & Controlling through trainer-led sessions, live SAP practice, real-time business scenarios and structured interview preparation.",
    heroBullets: [
      "Live SAP Server Practice",
      "Real-Time Business Scenarios",
      "Mock Interview Preparation",
      "Career & Placement Assistance",
    ],
    audience: [
      {
        title: "Commerce / Finance Graduates",
        description: "B.Com, M.Com and MBA Finance learners",
      },
      {
        title: "Accounting Professionals",
        description: "Accountants, AP/AR and finance executives",
      },
      {
        title: "Working Professionals",
        description: "Finance operations, shared services and ERP users",
      },
      { title: "Career Restart", description: "Professionals returning to finance or ERP careers" },
    ],
    learningSteps: [
      "Enterprise Structure",
      "General Ledger",
      "Accounts Payable & Receivable",
      "Asset Accounting",
      "Controlling",
      "Integration & Real-Time Scenarios",
    ],
    trainerSpecialty: "SAP finance processes, configuration and end-to-end business scenarios",
    careerRoles: [
      "SAP FICO Consultant",
      "S/4HANA Finance Consultant",
      "Functional Analyst",
      "Finance ERP User",
    ],
    faqs: commonFaqs("SAP FICO"),
  },
  "sap-mm": {
    key: "sap-mm",
    courseName: "SAP MM",
    badge: "Practical SAP MM Training",
    headline: "Build Practical SAP MM Skills for Procurement & Supply Chain Careers",
    subheadline:
      "Learn procurement, purchasing, inventory and vendor processes through practical SAP scenarios, live system practice and structured interview preparation.",
    heroBullets: [
      "Procurement Cycle",
      "Inventory Management",
      "Vendor Processes",
      "Real-Time SAP Practice",
    ],
    audience: [
      { title: "Supply Chain Learners", description: "Supply chain and logistics graduates" },
      {
        title: "Procurement Professionals",
        description: "Purchasing, sourcing and vendor operations",
      },
      { title: "Inventory / Operations", description: "Warehouse, inventory and plant operations" },
      { title: "Manufacturing Background", description: "Production and operations professionals" },
    ],
    learningSteps: [
      "Master Data",
      "Procurement Cycle",
      "Inventory Management",
      "Invoice Verification",
      "Pricing / MRP / S/4HANA",
      "Real-Time Procurement Scenarios",
    ],
    trainerSpecialty: "procure-to-pay, inventory and real-world supply chain scenarios",
    careerRoles: [
      "SAP MM Consultant",
      "Procurement Analyst",
      "Supply Chain Consultant",
      "Materials Planner",
    ],
    faqs: commonFaqs("SAP MM"),
  },
  "sap-abap": {
    key: "sap-abap",
    courseName: "SAP ABAP",
    badge: "Practical SAP ABAP Training",
    headline: "Turn Your Programming Skills Into Practical SAP ABAP Development",
    subheadline:
      "Build practical SAP development skills through ABAP programming, reports, enhancements, integrations and S/4HANA-oriented technical scenarios.",
    heroBullets: ["Hands-On Coding", "Reports & ALV", "BAPI / BADI / Enhancements", "ABAP on HANA"],
    audience: [
      { title: "Technical Graduates", description: "B.Tech, BE, BCA and MCA learners" },
      { title: "Developers", description: "Java, .NET and other programming backgrounds" },
      { title: "IT Professionals", description: "Support and technical operations teams" },
      { title: "Career Switchers", description: "People moving into SAP development" },
    ],
    learningSteps: [
      "ABAP Foundations & Dictionary",
      "Internal Tables & Reports",
      "ALV / Module Pool",
      "BAPI / BADI / Enhancements",
      "OOABAP",
      "CDS / AMDP / S/4HANA Scenarios",
    ],
    trainerSpecialty: "hands-on ABAP development, enhancements and S/4HANA technical scenarios",
    careerRoles: [
      "SAP ABAP Developer",
      "S/4HANA Technical Consultant",
      "SAP Technical Analyst",
      "Fiori Developer Path",
    ],
    faqs: commonFaqs("SAP ABAP"),
  },
};
