import { createFileRoute } from "@tanstack/react-router";
import type {} from "@tanstack/react-start";
import { SITE_URL } from "@/lib/schema";
import { SITE_PAGES_LAST_MODIFIED } from "@/lib/site-pages";
import { COURSES_LAST_MODIFIED } from "@/lib/courses";

export const Route = createFileRoute("/sitemap.xml")({
  server: {
    handlers: {
      GET: async () => {
        const sitemaps = [
          { path: "/sitemap-pages.xml", lastModified: SITE_PAGES_LAST_MODIFIED },
          { path: "/sitemap-courses.xml", lastModified: COURSES_LAST_MODIFIED },
          { path: "/sitemap-blog.xml", lastModified: SITE_PAGES_LAST_MODIFIED },
          { path: "/sitemap-images.xml", lastModified: SITE_PAGES_LAST_MODIFIED },
        ];

        const entries = sitemaps.map(
          (sitemap) => `  <sitemap>
    <loc>${SITE_URL}${sitemap.path}</loc>
    <lastmod>${sitemap.lastModified}</lastmod>
  </sitemap>`,
        );

        const xml = `<?xml version="1.0" encoding="UTF-8"?>
<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${entries.join("\n")}
</sitemapindex>`;

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
