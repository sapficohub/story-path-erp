import { createFileRoute } from "@tanstack/react-router";
import type {} from "@tanstack/react-start";
import { BLOG_POSTS } from "@/lib/blog-posts";
import { SITE_URL } from "@/lib/schema";
import { SITE_PAGES_LAST_MODIFIED } from "@/lib/site-pages";

export const Route = createFileRoute("/sitemap-blog.xml")({
  server: {
    handlers: {
      GET: async () => {
        const entries = [
          { path: "/blog", lastModified: SITE_PAGES_LAST_MODIFIED },
          ...BLOG_POSTS.filter((post) => post.indexable).map((post) => ({
            path: `/blog/${post.slug}`,
            lastModified: post.lastModified,
          })),
        ];

        const urls = entries.map(
          (entry) => `  <url>
    <loc>${SITE_URL}${entry.path}</loc>
    <lastmod>${entry.lastModified}</lastmod>
  </url>`,
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
