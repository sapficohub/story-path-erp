export const SITE_URL = "https://www.next-generpsolutions.com";

export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": `${SITE_URL}#organization`,

  name: "Next-Gen ERP Solutions",

  url: SITE_URL,

  logo: `${SITE_URL}/logo.png`,

  image: `${SITE_URL}/og-image.jpg`,

  description:
    "Next-Gen ERP Solutions provides industry-focused SAP Training, real-time projects, interview preparation, certification guidance and placement assistance.",

  email: "info@next-generpsolutions.com",

  telephone: "+91 90003 33859",

  sameAs: [
    "https://www.linkedin.com/company/next-gen-erp-solutions",
    "https://www.facebook.com/NextGenERPSolutions",
    "https://www.instagram.com/nextgenerpsolutions/",
    "https://www.youtube.com/@Next-GenERPSolutions",
  ],
};

export const websiteSchema = {
  "@context": "https://schema.org",

  "@type": "WebSite",

  "@id": `${SITE_URL}#website`,

  url: SITE_URL,

  name: "Next-Gen ERP Solutions",

  publisher: {
    "@id": `${SITE_URL}#organization`,
  },
};

export const educationalOrganizationSchema = {
  "@context": "https://schema.org",

  "@type": "EducationalOrganization",

  "@id": `${SITE_URL}#educationalOrganization`,

  name: "Next-Gen ERP Solutions",

  url: SITE_URL,

  logo: `${SITE_URL}/logo.png`,

  image: `${SITE_URL}/og-image.jpg`,

  description:
    "Leading SAP Training Institute in Hyderabad offering SAP FICO, MM, SD, ABAP, BASIS, HCM and SuccessFactors training with placement assistance.",

  telephone: "+91 90003 33859",

  email: "info@next-generpsolutions.com",

  address: {
    "@type": "PostalAddress",

    streetAddress:
      "Flat No. 502, PJR Arcade, Plot No.129, Sri Sai Nagar Colony, Near JNTU, Opp. Sri Chaitanya Junior College",

    addressLocality: "Hyderabad",

    addressRegion: "Telangana",

    postalCode: "500085",

    addressCountry: "IN",
  },

  openingHours: "Mo-Sa 09:00-19:00",

  priceRange: "₹₹",

  sameAs: [
    "https://www.linkedin.com/company/next-gen-erp-solutions",
    "https://www.facebook.com/NextGenERPSolutions",
    "https://www.instagram.com/nextgenerpsolutions/",
    "https://www.youtube.com/@Next-GenERPSolutions",
  ],

  parentOrganization: {
    "@id": `${SITE_URL}#organization`,
  },
};

export function breadcrumbSchema(
  items: {
    name: string;
    url: string;
  }[],
) {
  return {
    "@context": "https://schema.org",

    "@type": "BreadcrumbList",

    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",

      position: index + 1,

      name: item.name,

      item: item.url,
    })),
  };
}

export function courseSchema(course: {
  name: string;
  description: string;
  url: string;
}) {
  return {
    "@context": "https://schema.org",

    "@type": "Course",

    name: course.name,

    description: course.description,

    provider: {
      "@id": `${SITE_URL}#educationalOrganization`,
    },

    url: course.url,
  };
}

export function faqSchema(
  faqs: {
    question: string;
    answer: string;
  }[],
) {
  return {
    "@context": "https://schema.org",

    "@type": "FAQPage",

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

export function localBusinessSchema() {
  return {
    "@context": "https://schema.org",

    "@type": "EducationalOrganization",

    "@id": `${SITE_URL}#business`,

    name: "Next-Gen ERP Solutions",

    url: SITE_URL,

    logo: `${SITE_URL}/logo.png`,

    image: `${SITE_URL}/og-image.jpg`,

    telephone: "+91 90003 33859",

    email: "info@next-generpsolutions.com",

    address: {
      "@type": "PostalAddress",

      streetAddress:
        "Flat No. 502, PJR Arcade, Plot No.129, Sri Sai Nagar Colony, Near JNTU, Opp. Sri Chaitanya Junior College",

      addressLocality: "Hyderabad",

      addressRegion: "Telangana",

      postalCode: "500085",

      addressCountry: "IN",
    },

    openingHours: "Mo-Sa 09:00-19:00",

    priceRange: "₹₹",

    sameAs: [
      "https://www.linkedin.com/company/next-gen-erp-solutions",
      "https://www.facebook.com/NextGenERPSolutions",
      "https://www.instagram.com/nextgenerpsolutions/",
      "https://www.youtube.com/@Next-GenERPSolutions",
    ],
  };
}