import type { APIRoute } from "astro";

export const GET: APIRoute = () => {
  const body = `/* TEAM */
Name: Word Replace
Contact: hello@wordreplace.com
Site: https://wordreplace.com

/* SITE */
Standards: HTML5, CSS3, Schema.org JSON-LD
Software: Astro
Doctype: HTML5
Language: English
Last update: 2026/10/21
`;

  return new Response(body, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
    },
  });
};
