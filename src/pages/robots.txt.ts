import type { APIRoute } from "astro";
import { SITE_URL } from "../lib/site";

export const GET: APIRoute = () => {
  const origin = SITE_URL;
  const body = `User-agent: *
Allow: /
Allow: /llms.txt
Allow: /humans.txt
Allow: /sitemap.xml
Allow: /opensearch.xml

User-agent: GPTBot
Allow: /
Allow: /llms.txt

User-agent: ChatGPT-User
Allow: /
Allow: /llms.txt

User-agent: Google-Extended
Allow: /
Allow: /llms.txt

User-agent: Anthropic-ai
Allow: /
Allow: /llms.txt

User-agent: ClaudeBot
Allow: /
Allow: /llms.txt

User-agent: PerplexityBot
Allow: /
Allow: /llms.txt

Sitemap: ${origin}/sitemap.xml
`;
  return new Response(body, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
    },
  });
};
