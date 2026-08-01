const STORAGE_KEY = "nextgen-referral-attribution";
const TRACKING_KEYS = [
  "utm_source",
  "utm_medium",
  "utm_campaign",
  "utm_content",
  "ref",
] as const;

export type ReferralAttribution = Partial<
  Record<(typeof TRACKING_KEYS)[number], string>
> & {
  landing_page?: string;
};

function cleanValue(value: string | null) {
  return value?.trim().slice(0, 200) || undefined;
}

export function captureReferralAttribution() {
  if (typeof window === "undefined") return;

  const params = new URLSearchParams(window.location.search);
  const captured: ReferralAttribution = {};

  for (const key of TRACKING_KEYS) {
    const value = cleanValue(params.get(key));
    if (value) captured[key] = value;
  }

  if (!Object.keys(captured).length) return;

  captured.landing_page = window.location.pathname.slice(0, 500);
  sessionStorage.setItem(STORAGE_KEY, JSON.stringify(captured));
}

export function getReferralAttribution(): ReferralAttribution {
  if (typeof window === "undefined") return {};

  try {
    const stored = JSON.parse(sessionStorage.getItem(STORAGE_KEY) || "{}");
    const attribution: ReferralAttribution = {};

    for (const key of TRACKING_KEYS) {
      const value = cleanValue(stored[key]);
      if (value) attribution[key] = value;
    }

    const landingPage = cleanValue(stored.landing_page);
    if (landingPage) attribution.landing_page = landingPage;
    return attribution;
  } catch {
    return {};
  }
}
