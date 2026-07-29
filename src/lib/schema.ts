export const SITE_URL = "https://www.next-generpsolutions.com";
export const ORGANIZATION_ID = `${SITE_URL}/#organization`;
export const WEBSITE_ID = `${SITE_URL}/#website`;
export const LOCAL_BUSINESS_ID = `${SITE_URL}/#localbusiness`;
export const EDUCATIONAL_ORGANIZATION_ID = `${SITE_URL}/#educationalorganization`;
export const LOGO_URL = `${SITE_URL}/logo.webp`;
export const BUSINESS_EMAIL = "hello@nextgenerpsolutions.com";
export const BUSINESS_PHONE = "+919000333859";

const SOCIAL_PROFILES = [
  "https://www.facebook.com/NextGenERPSolutions",
  "https://www.instagram.com/nextgenerpsolutions/",
  "https://www.youtube.com/@Next-GenERPSolutions",
];

const POSTAL_ADDRESS = {
  "@type": "PostalAddress",
  streetAddress:
    "Flat No. 502, PJR Arcade, Plot No. 129, Sri Sai Nagar Colony, Near JNTU, Opp. Sri Chaitanya Junior College",
  addressLocality: "Hyderabad",
  addressRegion: "Telangana",
  postalCode: "500085",
  addressCountry: "IN",
};

export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": ORGANIZATION_ID,
  name: "Next-Gen ERP Solutions",
  url: SITE_URL,
  logo: LOGO_URL,
  image: LOGO_URL,
  description:
    "Next-Gen ERP Solutions provides industry-focused SAP training, real-time projects, interview preparation, certification guidance and placement assistance.",
  email: BUSINESS_EMAIL,
  telephone: BUSINESS_PHONE,
  sameAs: SOCIAL_PROFILES,
};

export const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": WEBSITE_ID,
  url: SITE_URL,
  name: "Next-Gen ERP Solutions",
  publisher: { "@id": ORGANIZATION_ID },
};

export const educationalOrganizationSchema = {
  "@context": "https://schema.org",
  "@type": "EducationalOrganization",
  "@id": EDUCATIONAL_ORGANIZATION_ID,
  name: "Next-Gen ERP Solutions",
  url: SITE_URL,
  logo: LOGO_URL,
  image: LOGO_URL,
  description:
    "SAP training institute in Hyderabad offering SAP FICO, MM, SD, ABAP, BASIS, HCM and SuccessFactors training with placement assistance.",
  telephone: BUSINESS_PHONE,
  email: BUSINESS_EMAIL,
  address: POSTAL_ADDRESS,
  sameAs: SOCIAL_PROFILES,
  parentOrganization: { "@id": ORGANIZATION_ID },
};

export const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": LOCAL_BUSINESS_ID,
  name: "Next-Gen ERP Solutions",
  url: SITE_URL,
  telephone: BUSINESS_PHONE,
  email: BUSINESS_EMAIL,
  logo: LOGO_URL,
  image: LOGO_URL,
  priceRange: "₹₹",
  address: POSTAL_ADDRESS,
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "https://schema.org/Monday",
        "https://schema.org/Tuesday",
        "https://schema.org/Wednesday",
        "https://schema.org/Thursday",
        "https://schema.org/Friday",
        "https://schema.org/Saturday",
      ],
      opens: "09:00",
      closes: "21:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: "https://schema.org/Sunday",
      opens: "10:00",
      closes: "17:00",
    },
  ],
  contactPoint: {
    "@type": "ContactPoint",
    telephone: BUSINESS_PHONE,
    contactType: "customer service",
    email: BUSINESS_EMAIL,
    availableLanguage: ["English", "Hindi", "Telugu"],
    areaServed: "IN",
  },
  sameAs: SOCIAL_PROFILES,
  hasMap: "https://share.google/4ozjmIOp74J2H7OSs",
  parentOrganization: { "@id": ORGANIZATION_ID },
};

export function breadcrumbSchema(items: { name: string; url: string }[]) {
  const pageUrl = items.at(-1)?.url ?? SITE_URL;

  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "@id": `${pageUrl}#breadcrumb`,
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

export function webPageSchema(page: {
  type?: "WebPage" | "AboutPage" | "ContactPage" | "CollectionPage";
  url: string;
  name: string;
  description: string;
  aboutId?: string;
  mainEntityId?: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": page.type ?? "WebPage",
    "@id": `${page.url}#webpage`,
    url: page.url,
    name: page.name,
    description: page.description,
    isPartOf: { "@id": WEBSITE_ID },
    about: { "@id": page.aboutId ?? ORGANIZATION_ID },
    ...(page.mainEntityId
      ? { mainEntity: { "@id": page.mainEntityId } }
      : {}),
    primaryImageOfPage: {
      "@type": "ImageObject",
      url: LOGO_URL,
    },
    breadcrumb: { "@id": `${page.url}#breadcrumb` },
  };
}

export function courseSchema(course: {
  name: string;
  description: string;
  url: string;
  teaches: string[];
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Course",
    "@id": `${course.url}#course`,
    name: course.name,
    description: course.description,
    provider: { "@id": EDUCATIONAL_ORGANIZATION_ID },
    url: course.url,
    image: LOGO_URL,
    inLanguage: "en-IN",
    teaches: course.teaches,
    educationalCredentialAwarded: "Course completion certificate",
  };
}

export function faqSchema(
  faqs: { question: string; answer: string }[],
  pageUrl?: string,
) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    ...(pageUrl ? { "@id": `${pageUrl}#faq` } : {}),
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}
