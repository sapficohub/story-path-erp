export type SitemapLink = {
  label: string;
  path: string;
};

export type SitemapSection = {
  title: string;
  links: SitemapLink[];
};

export const SITE_PAGES_LAST_MODIFIED = "2026-07-29";

export const HTML_SITEMAP_SECTIONS: SitemapSection[] = [
  {
    title: "Career Journeys",
    links: [
      { label: "Fresher SAP Career Journey", path: "/journey/fresher" },
      {
        label: "Experienced Professional SAP Career Journey",
        path: "/journey/experienced",
      },
      { label: "Career Gap SAP Restart Journey", path: "/journey/career-gap" },
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

export const INDEXABLE_PAGES = INDEXABLE_PAGE_PATHS.map((path) => ({
  path,
  lastModified: SITE_PAGES_LAST_MODIFIED,
}));
