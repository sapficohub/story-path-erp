import "dotenv/config";
import "./lib/error-capture";

import { consumeLastCapturedError } from "./lib/error-capture";
import { renderErrorPage } from "./lib/error-page";
import { normalizePagePathname } from "./lib/redirects";

type ServerEntry = {
  fetch: (request: Request, env: unknown, ctx: unknown) => Promise<Response> | Response;
};

const API_LEAD_PATH = "/api/lead";
const WEBHOOK_URL = process.env.LEAD_TRACKER_WEBHOOK_URL;
const WEBHOOK_SECRET = process.env.LEAD_TRACKER_WEBHOOK_SECRET;

function jsonResponse(body: unknown, status = 200) {
  return new Response(JSON.stringify(body), {
    status,
    headers: { "content-type": "application/json; charset=utf-8" },
  });
}

async function handleLeadApiRequest(request: Request): Promise<Response | null> {
  const url = new URL(request.url);
  if (url.pathname !== API_LEAD_PATH) return null;

  if (request.method !== "POST") {
    return jsonResponse({ success: false, error: "Method Not Allowed" }, 405);
  }

  if (!WEBHOOK_URL || !WEBHOOK_SECRET) {
    return jsonResponse(
      { success: false, error: "Missing LEAD_TRACKER_WEBHOOK_URL or LEAD_TRACKER_WEBHOOK_SECRET" },
      500,
    );
  }

  const requestBody = await request.json().catch(() => null);
  if (!requestBody || typeof requestBody !== "object" || Array.isArray(requestBody)) {
    return jsonResponse({ success: false, error: "Invalid JSON payload" }, 400);
  }

  const payload = {
    ...requestBody,
    tracker_secret: WEBHOOK_SECRET,
  };

  try {
    const response = await fetch(WEBHOOK_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
      signal: AbortSignal.timeout(12000),
    });

    const rawText = await response.text();
    let responseBody: unknown = rawText;
    try {
      responseBody = JSON.parse(rawText);
    } catch {
      responseBody = { success: response.ok, body: rawText };
    }

    return new Response(JSON.stringify(responseBody), {
      status: response.status,
      headers: { "content-type": "application/json; charset=utf-8" },
    });
  } catch (error) {
    console.error(error);
    const timedOut = error instanceof Error && error.name === "TimeoutError";
    return jsonResponse(
      {
        success: false,
        error: timedOut ? "Lead tracker timed out" : "Lead forwarding failed",
      },
      timedOut ? 504 : 502,
    );
  }
}

let serverEntryPromise: Promise<ServerEntry> | undefined;

function getCanonicalRedirect(request: Request) {
  if (request.method !== "GET" && request.method !== "HEAD") return null;

  const url = new URL(request.url);
  const isPageRequest = !/\/[^/]+\.[^/]+$/.test(url.pathname);
  if (!isPageRequest) return null;

  const canonicalPathname = normalizePagePathname(url.pathname);
  const isProductionHostname =
    url.hostname === "next-generpsolutions.com" || url.hostname === "www.next-generpsolutions.com";

  let shouldRedirect = canonicalPathname !== url.pathname;

  if (isProductionHostname) {
    shouldRedirect ||= url.protocol !== "https:";
    shouldRedirect ||= url.hostname !== "www.next-generpsolutions.com";
    url.protocol = "https:";
    url.hostname = "www.next-generpsolutions.com";
  }

  if (!shouldRedirect) return null;

  url.pathname = canonicalPathname;

  return new Response(null, {
    status: 301,
    headers: { Location: url.toString() },
  });
}

async function getServerEntry(): Promise<ServerEntry> {
  if (!serverEntryPromise) {
    serverEntryPromise = import("@tanstack/react-start/server-entry").then(
      (m) => (m.default ?? m) as ServerEntry,
    );
  }
  return serverEntryPromise;
}

// h3 swallows in-handler throws into a normal 500 Response with body
// {"unhandled":true,"message":"HTTPError"} — try/catch alone never fires for those.
async function normalizeCatastrophicSsrResponse(response: Response): Promise<Response> {
  if (response.status < 500) return response;
  const contentType = response.headers.get("content-type") ?? "";
  if (!contentType.includes("application/json")) return response;

  const body = await response.clone().text();
  if (!body.includes('"unhandled":true') || !body.includes('"message":"HTTPError"')) {
    return response;
  }

  console.error(consumeLastCapturedError() ?? new Error(`h3 swallowed SSR error: ${body}`));
  return new Response(renderErrorPage(), {
    status: 500,
    headers: { "content-type": "text/html; charset=utf-8" },
  });
}

export default {
  async fetch(request: Request, env: unknown, ctx: unknown) {
    try {
      const canonicalRedirect = getCanonicalRedirect(request);
      if (canonicalRedirect) return canonicalRedirect;

      const apiResponse = await handleLeadApiRequest(request);
      if (apiResponse) return apiResponse;

      const handler = await getServerEntry();
      const response = await handler.fetch(request, env, ctx);
      return await normalizeCatastrophicSsrResponse(response);
    } catch (error) {
      console.error(error);
      return new Response(renderErrorPage(), {
        status: 500,
        headers: { "content-type": "text/html; charset=utf-8" },
      });
    }
  },
};
