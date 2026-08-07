export type SourceKey =
  | "linkedin"
  | "instagram"
  | "facebook"
  | "youtube"
  | "whatsapp"
  | "google_business";

type Attribution = {
  utm_source: string;
  utm_medium: string;
  utm_campaign: string;
  utm_content: string;
  utm_term: string;
  fbclid: string;
  gclid: string;
  ref: string;
  referrer: string;
  landing_page: string;
  lead_source: string;
};

const STORAGE_KEY = "nge_lead_attribution_v1";

const SOURCE_ROUTES: Record<SourceKey, string> = {
  linkedin: "LinkedIn Organic",
  instagram: "Instagram Organic",
  facebook: "Facebook Organic",
  youtube: "YouTube Organic",
  whatsapp: "WhatsApp",
  google_business: "Google Business Profile",
};
const EMPTY_ATTRIBUTION: Attribution = {
  utm_source: "",
  utm_medium: "",
  utm_campaign: "",
  utm_content: "",
  utm_term: "",
  fbclid: "",
  gclid: "",
  ref: "",
  referrer: "",
  landing_page: "",
  lead_source: "",
};

function safeSessionGet(): Attribution | null {
  if (typeof window === "undefined") return null;

  try {
    const value = window.sessionStorage.getItem(STORAGE_KEY);
    if (!value) return null;

    return JSON.parse(value) as Attribution;
  } catch {
    return null;
  }
}

function safeSessionSet(value: Attribution) {
  if (typeof window === "undefined") return;

  try {
    window.sessionStorage.setItem(
      STORAGE_KEY,
      JSON.stringify(value)
    );
  } catch {
    // Ignore storage failures.
  }
}

function getUrlData(): Attribution {
  if (typeof window === "undefined") {
    return { ...EMPTY_ATTRIBUTION };
  }

  const params = new URLSearchParams(
    window.location.search
  );

  return {
    utm_source: params.get("utm_source") || "",
    utm_medium: params.get("utm_medium") || "",
    utm_campaign: params.get("utm_campaign") || "",
    utm_content: params.get("utm_content") || "",
    utm_term: params.get("utm_term") || "",
    fbclid: params.get("fbclid") || "",
    gclid: params.get("gclid") || "",
    ref: params.get("ref") || "",
    referrer: document.referrer || "",
    landing_page: window.location.href,
    lead_source: "",
  };
}

function isPaidMedium(medium: string) {
  const value = medium.toLowerCase();

  return [
    "cpc",
    "ppc",
    "paid",
    "paid_social",
    "paid-social",
    "paid_search",
    "paidsearch",
    "display",
    "remarketing",
    "retargeting",
    "sponsored",
  ].some((signal) => value.includes(signal));
}

function resolveFromReferrer(
  referrer: string
): string {
  const value = referrer.toLowerCase();

  if (!value) return "";

  if (value.includes("instagram.com")) {
    return "Instagram Organic";
  }

  if (
    value.includes("facebook.com") ||
    value.includes("fb.com")
  ) {
    return "Facebook Organic";
  }

  if (
    value.includes("linkedin.com") ||
    value.includes("lnkd.in")
  ) {
    return "LinkedIn Organic";
  }

  if (
    value.includes("youtube.com") ||
    value.includes("youtu.be")
  ) {
    return "YouTube Organic";
  }

  if (value.includes("google.")) {
    return "Organic Search";
  }

  if (value.includes("bing.com")) {
    return "Bing Organic";
  }

  if (
    value.includes("t.co") ||
    value.includes("twitter.com") ||
    value.includes("x.com")
  ) {
    return "X / Twitter Organic";
  }

  if (value.includes("whatsapp")) {
    return "WhatsApp";
  }

  try {
    const url = new URL(referrer);

    if (
      !url.hostname.includes(
        "next-generpsolutions.com"
      )
    ) {
      return "Referral";
    }
  } catch {
    // Ignore invalid referrer.
  }

  return "";
}

function resolveSourceRoute(
  input: Partial<Attribution>
): string {
  const ref = String(input.ref || "")
    .toLowerCase()
    .trim();

  if (ref in SOURCE_ROUTES) {
    return SOURCE_ROUTES[ref as SourceKey];
  }

  const landingPage = String(
    input.landing_page || ""
  );

  if (!landingPage) return "";

  try {
    const url = new URL(landingPage);

    const path = url.pathname
      .toLowerCase()
      .replace(/^\/+|\/+$/g, "");

    if (path in SOURCE_ROUTES) {
      return SOURCE_ROUTES[
        path as SourceKey
      ];
    }
  } catch {
    return "";
  }

  return "";
}

export function resolveLeadSource(
  input: Partial<Attribution>
): string {
  const utmSource = String(
    input.utm_source || ""
  )
    .trim()
    .toLowerCase();

  const utmMedium = String(
    input.utm_medium || ""
  )
    .trim()
    .toLowerCase();

  const gclid = String(
    input.gclid || ""
  ).trim();

  const fbclid = String(
    input.fbclid || ""
  ).trim();

  const referrer = String(
    input.referrer || ""
  ).trim();

  if (gclid) {
    return "Google Ads";
  }

  const paid = isPaidMedium(utmMedium);

  if (
    paid &&
    (
      utmSource.includes("google") ||
      utmSource.includes("adwords")
    )
  ) {
    return "Google Ads";
  }

  if (
    paid &&
    (
      utmSource.includes("instagram") ||
      utmSource.includes("facebook") ||
      utmSource.includes("meta") ||
      utmSource === "ig" ||
      utmSource === "fb"
    )
  ) {
    return "Meta Ads";
  }

  if (
    paid &&
    utmSource.includes("linkedin")
  ) {
    return "LinkedIn Ads";
  }

  if (
    paid &&
    utmSource.includes("youtube")
  ) {
    return "YouTube Ads";
  }

  if (
    paid &&
    (
      utmSource.includes("bing") ||
      utmSource.includes("microsoft")
    )
  ) {
    return "Microsoft Ads";
  }

  if (
    utmSource === "ig" ||
    utmSource.includes("instagram")
  ) {
    return "Instagram Organic";
  }

  if (
    utmSource === "fb" ||
    utmSource.includes("facebook")
  ) {
    return "Facebook Organic";
  }

  if (utmSource.includes("linkedin")) {
    return "LinkedIn Organic";
  }

  if (utmSource.includes("youtube")) {
    return "YouTube Organic";
  }

  if (utmSource.includes("whatsapp")) {
    return "WhatsApp";
  }

  if (
    utmSource.includes(
      "google_business"
    ) ||
    utmSource === "gmb"
  ) {
    return "Google Business Profile";
  }

  if (utmSource.includes("google")) {
    return "Organic Search";
  }

  if (utmSource.includes("bing")) {
    return "Bing Organic";
  }

  if (
    utmSource === "x" ||
    utmSource.includes("twitter")
  ) {
    return "X / Twitter Organic";
  }

  const referrerSource =
    resolveFromReferrer(referrer);

  if (referrerSource) {
    return referrerSource;
  }

  const routeSource =
    resolveSourceRoute(input);

  if (routeSource) {
    return routeSource;
  }

  const supplied = String(
    input.lead_source || ""
  ).trim();

  if (
    supplied &&
    supplied.toLowerCase() !== "direct"
  ) {
    return supplied;
  }

  if (fbclid) {
    return "Facebook / Instagram";
  }

  return "Direct";
}

export function captureReferralAttribution() {
  if (typeof window === "undefined") {
    return;
  }

  const current = getUrlData();

  const currentSource =
    resolveLeadSource(current);

  const stored = safeSessionGet();

  const externalReferrer = (() => {
  if (!current.referrer) return false;

  try {
    const referrerUrl = new URL(current.referrer);

    return !referrerUrl.hostname.includes(
      "next-generpsolutions.com"
    ) &&
    referrerUrl.hostname !== window.location.hostname;
  } catch {
    return false;
  }
})();

const hasStrongCurrentSignal = Boolean(
  current.utm_source ||
  current.utm_medium ||
  current.gclid ||
  current.fbclid ||
  externalReferrer ||
  resolveSourceRoute(current)
);

  if (
    stored &&
    !hasStrongCurrentSignal
  ) {
    return;
  }

  const result: Attribution = {
    ...current,
    lead_source: currentSource,
  };

  safeSessionSet(result);
}

export function captureSourceEntry(
  source: SourceKey
) {
  if (typeof window === "undefined") {
    return;
  }

  const current = getUrlData();

  const sourceName =
    SOURCE_ROUTES[source];

  const result: Attribution = {
    ...current,
    ref: source,
    landing_page: window.location.href,
    lead_source: sourceName,
  };

  safeSessionSet(result);
}

export function getReferralAttribution(): Attribution {
  if (typeof window === "undefined") {
    return {
      ...EMPTY_ATTRIBUTION,
    };
  }

  captureReferralAttribution();

  const stored = safeSessionGet();

  if (stored) {
    return {
      ...stored,
      lead_source:
        resolveLeadSource(stored),
    };
  }

  const current = getUrlData();

  return {
    ...current,
    lead_source:
      resolveLeadSource(current),
  };
}