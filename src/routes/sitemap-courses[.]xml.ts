import { createFileRoute } from "@tanstack/react-router";
import type {} from "@tanstack/react-start";
import { COURSES, COURSES_LAST_MODIFIED } from "@/lib/courses";
import { SITE_URL } from "@/lib/schema";

export const Route = createFileRoute("/sitemap-courses.xml")({
  server: {
    handlers: {
      GET: async () => {
        const entries = COURSES.map(
          (course) => `  <url>
    <loc>${SITE_URL}/courses/${course.slug}</loc>
    <lastmod>${COURSES_LAST_MODIFIED}</lastmod>
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
