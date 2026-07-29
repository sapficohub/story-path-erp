import type { AnyRoute } from "@tanstack/react-router";

const SITE_NAME = "Next-Gen ERP Solutions";
const SITE_URL = "https://www.next-generpsolutions.com";
const DEFAULT_IMAGE = `${SITE_URL}/next-gen-erp-solutions-sap-training-hyderabad.jpg`;

export interface SEOOptions {
  title: string;
  description: string;
  path?: string;
  image?: string;
  keywords?: string;
  robots?: string;
  type?: "website" | "article";
}

export function seo({
  title,
  description,
  path = "",
  image = DEFAULT_IMAGE,
  keywords =
    "SAP Training, SAP FICO, SAP MM, SAP SD, SAP ABAP, SAP BASIS, SAP HCM, SAP SuccessFactors, SAP Courses, SAP Certification, SAP Placement, ERP Training, Next-Gen ERP Solutions",
  robots = "index,follow,max-image-preview:large,max-snippet:-1,max-video-preview:-1",
  type = "website",
}: SEOOptions): NonNullable<AnyRoute["options"]["head"]> {
  const canonical = `${SITE_URL}${path}`;

  return () => ({
    links: [
      {
        rel: "canonical",
        href: canonical,
      },
    ],

    meta: [
      // Basic SEO
      {
        title,
      },
      {
        name: "description",
        content: description,
      },
      {
        name: "keywords",
        content: keywords,
      },
      {
        name: "robots",
        content: robots,
      },
      {
        name: "author",
        content: SITE_NAME,
      },

      // Open Graph
      {
        property: "og:type",
        content: type,
      },
      {
        property: "og:site_name",
        content: SITE_NAME,
      },
      {
        property: "og:title",
        content: title,
      },
      {
        property: "og:description",
        content: description,
      },
      {
        property: "og:url",
        content: canonical,
      },
      {
        property: "og:image",
        content: image,
      },
      {
        property: "og:image:width",
        content: "1200",
      },
      {
        property: "og:image:height",
        content: "630",
      },
      {
        property: "og:image:alt",
        content: "Next-Gen ERP Solutions SAP training and placement support",
      },

      // Twitter
      {
        name: "twitter:card",
        content: "summary_large_image",
      },
      {
        name: "twitter:title",
        content: title,
      },
      {
        name: "twitter:description",
        content: description,
      },
      {
        name: "twitter:image",
        content: image,
      },
      {
        name: "twitter:image:alt",
        content: "Next-Gen ERP Solutions SAP training and placement support",
      },

      // Theme
      {
        name: "theme-color",
        content: "#0B1C9C",
      },
    ],
  });
}

export const DEFAULT_SEO = {
  SITE_NAME,
  SITE_URL,
  DEFAULT_IMAGE,
};
