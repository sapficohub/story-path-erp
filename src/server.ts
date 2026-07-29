import "./lib/error-capture";

import { consumeLastCapturedError } from "./lib/error-capture";
import { renderErrorPage } from "./lib/error-page";
import { normalizePagePathname } from "./lib/redirects";

type ServerEntry = {
  fetch: (request: Request, env: unknown, ctx: unknown) => Promise<Response> | Response;
};

let serverEntryPromise: Promise<ServerEntry> | undefined;

function getCanonicalRedirect(request: Request) {
  if (request.method !== "GET" && request.method !== "HEAD") return null;

  const url = new URL(request.url);
  const isPageRequest = !/\/[^/]+\.[^/]+$/.test(url.pathname);
  if (!isPageRequest) return null;

  const canonicalPathname = normalizePagePathname(url.pathname);
  const isProductionHostname =
    url.hostname === "next-generpsolutions.com" ||
    url.hostname === "www.next-generpsolutions.com";

  let shouldRedirect =
    canonicalPathname !== url.pathname || url.search.length > 0;

  if (isProductionHostname) {
    shouldRedirect ||= url.protocol !== "https:";
    shouldRedirect ||= url.hostname !== "www.next-generpsolutions.com";
    url.protocol = "https:";
    url.hostname = "www.next-generpsolutions.com";
  }

  if (!shouldRedirect) return null;

  url.pathname = canonicalPathname;
  url.search = "";
  url.hash = "";

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
