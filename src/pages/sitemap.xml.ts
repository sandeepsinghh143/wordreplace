import type { APIRoute } from "astro";
import { MODIFIED, PAGES, SITE_URL } from "../lib/site";

export const GET: APIRoute = () => {
  const origin = SITE_URL.replace(/\/+$/, "");

  const urlBlocks = PAGES.map((page) => {
    const loc = page.path === "/" ? `${origin}/` : `${origin}${page.path}`;
    return `<url>
<loc>${loc}</loc>
<lastmod>${MODIFIED}</lastmod>
<changefreq>${page.changefreq}</changefreq>
<priority>${page.priority}</priority>
</url>`;
  }).join("\n");

  const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urlBlocks}
</urlset>
`;

  return new Response(body, {
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
    },
  });
};
