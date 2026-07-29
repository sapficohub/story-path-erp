import { createFileRoute } from "@tanstack/react-router";
import type {} from "@tanstack/react-start";

const BASE_URL = "https://www.next-generpsolutions.com";
const LAST_MODIFIED = "2026-07-29";

const IMAGES = [
  { path: "/apple-touch-icon.png", title: "Next-Gen ERP Solutions" },
  { path: "/favicon.png", title: "Next-Gen ERP Solutions favicon" },
];

export const Route = createFileRoute("/sitemap-images.xml")({
  server: {
    handlers: {
      GET: async () => {
        const images = IMAGES.map(
          (image) => `    <image:image>
      <image:loc>${BASE_URL}${image.path}</image:loc>
      <image:title>${image.title}</image:title>
    </image:image>`,
        ).join("\n");

        const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">
  <url>
    <loc>${BASE_URL}/</loc>
    <lastmod>${LAST_MODIFIED}</lastmod>
${images}
  </url>
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
