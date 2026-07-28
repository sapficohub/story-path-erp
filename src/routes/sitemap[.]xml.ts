import { createFileRoute } from "@tanstack/react-router";
import type {} from "@tanstack/react-start";
import { BLOG_POSTS } from "@/lib/blog-posts";
import { COURSES } from "@/lib/courses";

const BASE_URL = "https://www.next-generpsolutions.com";

export const Route = createFileRoute("/sitemap.xml")({
  server: {
    handlers: {
      GET: async () => {
        const entries = [
          { path: "/", priority: "1.0" },
          { path: "/about" },
          { path: "/courses" },
          { path: "/career-journeys" },
          { path: "/fresher-journey" },
          { path: "/experienced-professional" },
          { path: "/career-gap" },
          { path: "/placements" },
          { path: "/success-stories" },
          { path: "/blog" },
          { path: "/contact" },
          { path: "/terms" },

          // Dynamic Course Pages
          ...COURSES.map((c) => ({
            path: `/courses/${c.slug}`,
          })),

          // Blog Articles
          ...BLOG_POSTS.map((post) => ({
            path: `/blog/${post.slug}`,
          })),
        ];

        const urls = entries.map(
          (e) => `  <url>
    <loc>${BASE_URL}${e.path}</loc>
    <changefreq>weekly</changefreq>
    <priority>${(e as any).priority ?? "0.8"}</priority>
  </url>`
        );

        const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.join("\n")}
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
