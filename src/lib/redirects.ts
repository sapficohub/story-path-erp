export const LEGACY_COURSE_SLUGS: Record<string, string> = {
  "sap-fico": "sap-fico-training",
  "sap-fico-trainng": "sap-fico-training",
  "sap-mm": "sap-mm-training",
  "sap-sd": "sap-sd-training",
  "sap-abap": "sap-abap-training",
  "sap-basis": "sap-basis-training",
  "sap-hcm": "sap-hcm-training",
  "sap-successfactors": "sap-successfactors-training",
  "sap-security-grc": "sap-security-grc-training",
  "sap-fiori": "sap-fiori-ui5-training",
  "sap-pp": "sap-pp-training",
  "sap-pm": "sap-pm-training",
  "sap-qm": "sap-qm-training",
  "sap-ewm": "sap-ewm-training",
  "sap-ariba": "sap-ariba-training",
  "sap-bw-bi": "sap-bw-bi-training",
  "sap-sac": "sap-sac-training",
  "sap-bpc": "sap-bpc-training",
};

const LEGACY_PAGE_PATHS: Record<string, string> = {
  "/fresher-journey": "/journey/fresher",
  "/experienced-professional": "/journey/experienced",
  "/career-gap": "/journey/career-gap",
};

export function normalizePagePathname(pathname: string) {
  const lowercasePath = pathname.toLowerCase();
  const cleanPath =
    lowercasePath.length > 1 ? lowercasePath.replace(/\/+$/, "") : lowercasePath;
  const legacyPage = LEGACY_PAGE_PATHS[cleanPath];

  if (legacyPage) return legacyPage;

  const courseMatch = cleanPath.match(/^\/courses\/([^/]+)$/);
  if (!courseMatch) return cleanPath;

  const canonicalSlug = LEGACY_COURSE_SLUGS[courseMatch[1]];
  return canonicalSlug ? `/courses/${canonicalSlug}` : cleanPath;
}
