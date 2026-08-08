function detectLeadSource_(lead) {
  if (!lead || typeof lead !== "object") return "Unknown";
  const source = normalizeString_(lead.utm_source, 200).toLowerCase();
  const fbclid = normalizeString_(lead.fbclid, 200);
  const gclid = normalizeString_(lead.gclid, 200);
  const referrer = normalizeString_(lead.referrer, 1000).toLowerCase();

  if (gclid) return "Google Ads";
  if (fbclid) return "Meta Ads";
  if (source === "gmb" || source === "googlebusiness" || source === "google business profile") {
    return "Google Business Profile";
  }

  if (source === "facebook") return "Facebook Organic";
  if (source === "instagram") return "Instagram Organic";
  if (source === "linkedin") return "LinkedIn";
  if (source === "youtube") return "YouTube";
  if (source === "email") return "Email Campaign";
  if (source === "whatsapp") return "WhatsApp";

  if (referrer.includes("instagram.com")) return "Instagram Organic";
  if (referrer.includes("facebook.com")) return "Facebook Organic";
  if (referrer.includes("linkedin.com")) return "LinkedIn";
  if (referrer.includes("youtube.com")) return "YouTube";
  if (referrer.includes("google.")) return "Google Organic";
  if (referrer.includes("whatsapp.com") || referrer.includes("wa.me")) return "WhatsApp";
  if (referrer.includes("facebook.com") || referrer.includes("fb.")) return "Facebook Organic";
  if (referrer.includes("google.com")) return "Google Organic";
  if (!referrer) return "Direct";

  return "Referral Website";
}

function normalizeFormSource_(value) {
  if (!value) return "Unknown";
  return normalizeString_(value, 200);
}
