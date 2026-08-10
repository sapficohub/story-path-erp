import { createError, defineEventHandler, H3Event, readBody } from "h3";

const WEBHOOK_URL = process.env.LEAD_TRACKER_WEBHOOK_URL;
const WEBHOOK_SECRET = process.env.LEAD_TRACKER_WEBHOOK_SECRET;

function getClientIp(event: H3Event) {
  const node = event.node;
  if (!node) return "";

  const forwarded = node.req.headers["x-forwarded-for"];
  if (typeof forwarded === "string") {
    return forwarded.split(",")[0].trim();
  }
  if (Array.isArray(forwarded) && forwarded.length > 0) {
    return forwarded[0].split(",")[0].trim();
  }
  return node.req.socket?.remoteAddress || "";
}

function getClientCountry(event: H3Event) {
  const node = event.node;
  if (!node) return "";

  const header = node.req.headers["x-vercel-ip-country"] || node.req.headers["cf-ipcountry"];
  if (typeof header === "string") return header;
  if (Array.isArray(header) && header.length > 0) return header[0];
  return "";
}

export default defineEventHandler(async (event: H3Event) => {
  const node = event.node;
  if (!node) {
    throw createError({ statusCode: 500, statusMessage: "Invalid event node" });
  }

  if (node.req.method !== "POST") {
    throw createError({ statusCode: 405, statusMessage: "Method Not Allowed" });
  }

  if (!WEBHOOK_URL || !WEBHOOK_SECRET) {
    throw createError({ statusCode: 500, statusMessage: "Missing lead tracker environment variables" });
  }

  const body = await readBody(event);
  if (!body || typeof body !== "object" || Array.isArray(body)) {
    throw createError({ statusCode: 400, statusMessage: "Invalid JSON payload" });
  }

  const payload = {
    ...body,
    tracker_secret: WEBHOOK_SECRET,
    ip: (body as Record<string, unknown>).ip || getClientIp(event),
    country: (body as Record<string, unknown>).country || getClientCountry(event),
  };

  const response = await fetch(WEBHOOK_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });

  const text = await response.text();
  let responseBody: unknown;

  try {
    responseBody = JSON.parse(text);
  } catch {
    responseBody = { success: response.ok, body: text };
  }

  if (!response.ok) {
    const node = event.node;
    if (node?.res) {
      node.res.statusCode = response.status;
    }
    return {
      success: false,
      error: (responseBody as Record<string, unknown>)?.error ||
        (responseBody as Record<string, unknown>)?.message ||
        `Apps Script returned status ${response.status}`,
      details: responseBody,
    };
  }

  return responseBody;
});
