export type SitemapLink = {
  label: string;
  path: string;
};

export type SitemapSection = {
  title: string;
  links: SitemapLink[];
};

export const HTML_SITEMAP_SECTIONS: SitemapSection[] = [
  {
    title: "Career Journeys",
    links: [
      { label: "Freshers", path: "/fresher-journey" },
      { label: "Working Professionals", path: "/experienced-professional" },
      { label: "Career Gap", path: "/career-gap" },
    ],
  },
  {
    title: "Placement Support",
    links: [{ label: "Placements", path: "/placements" }],
  },
  {
    title: "Success Stories",
    links: [{ label: "Success Stories", path: "/success-stories" }],
  },
  {
    title: "Blog",
    links: [{ label: "SAP Insights Blog", path: "/blog" }],
  },
  {
    title: "Resources",
    links: [{ label: "SAP Knowledge Quiz", path: "/quiz" }],
  },
  {
    title: "Company",
    links: [
      { label: "About", path: "/about" },
      { label: "Contact", path: "/contact" },
      { label: "Terms & Conditions", path: "/terms" },
    ],
  },
];

export const INDEXABLE_PAGE_PATHS = [
  "/",
  "/courses",
  "/career-journeys",
  "/sitemap",
  ...new Set(
    HTML_SITEMAP_SECTIONS.flatMap((section) =>
      section.links.map((link) => link.path),
    ),
  ),
];
