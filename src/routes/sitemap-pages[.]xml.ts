import { createFileRoute } from "@tanstack/react-router";
import type {} from "@tanstack/react-start";
import { INDEXABLE_PAGES } from "@/lib/site-pages";
import { SITE_URL } from "@/lib/schema";

const PAGE_ENTRIES = INDEXABLE_PAGES.filter((page) => page.path !== "/blog");

export const Route = createFileRoute("/sitemap-pages.xml")({
  server: {
    handlers: {
      GET: async () => {
        const entries = PAGE_ENTRIES.map(
          (page) => `  <url>
    <loc>${SITE_URL}${page.path}</loc>
    <lastmod>${page.lastModified}</lastmod>
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
