import { createFileRoute } from "@tanstack/react-router";
import type {} from "@tanstack/react-start";
import { INDEXABLE_PAGE_PATHS } from "@/lib/site-pages";

const BASE_URL = "https://www.next-generpsolutions.com";
const LAST_MODIFIED = "2026-07-29";

export const Route = createFileRoute("/sitemap-pages.xml")({
  server: {
    handlers: {
      GET: async () => {
        const entries = INDEXABLE_PAGE_PATHS.map(
          (path) => `  <url>
    <loc>${BASE_URL}${path}</loc>
    <lastmod>${LAST_MODIFIED}</lastmod>
  </url>`,
        );

        const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${entries.join("\n")}
</urlset>`;

        return new Response(xml, {
          headers: {
            "Content-Type": "application/xml",
            "Cache-Control": "public, max-age=3600",
          },
        });
      },
    },
  },
});
