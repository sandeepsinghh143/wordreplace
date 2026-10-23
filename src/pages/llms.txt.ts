import type { APIRoute } from "astro";
import { PAGES, KEYWORDS, LONG_TAIL_KEYWORDS, CONTACT_EMAIL, SITE_URL } from "../lib/site";

export const GET: APIRoute = () => {
  const origin = SITE_URL;
  const body = `# Word Replace

> Word Replace is a free in-browser find and replace text tool. Paste any length of draft, run word replace all, replace words in text, and change words in an essay without uploading a file.

Word Replace is a text replace online workspace, a word replacer to replace words online, and a find and replace text – free online tool. Matching is exact. It is not an AI text replacer and not an AI word replacer.

## Pages

${PAGES.map((page) => `- [${page.label}](${origin}${page.path}): ${page.description}`).join("\n")}

## Deep links

- [Editor](${origin}/#workspace): Paste text and run Word Replace.
- [How to replace text online](${origin}/#howto): Five steps to replace text online.
- [Features](${origin}/#features): Auto replace, copy, download, and local draft.
- [FAQ](${origin}/#faq): Answers about privacy, word replace all, and AI text replacer claims.

## Keywords

${KEYWORDS.join(", ")}

## Long-tail keywords

${LONG_TAIL_KEYWORDS.join(", ")}

## Optional

- Contact: ${CONTACT_EMAIL}
- Processing: 100% in-browser. No file upload. No word limit.
`;

  return new Response(body, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
    },
  });
};
