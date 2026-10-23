import type { APIRoute } from "astro";

import { SITE_URL } from "../lib/site";

export const GET: APIRoute = () => {
  const origin = SITE_URL;
  const body = `<?xml version="1.0" encoding="UTF-8"?>
<OpenSearchDescription xmlns="http://a9.com/-/spec/opensearch/1.1/">
  <ShortName>Word Replace</ShortName>
  <Description>Find and replace text – free online tool</Description>
  <InputEncoding>UTF-8</InputEncoding>
  <Image width="16" height="16" type="image/x-icon">${origin}/favicon.ico</Image>
  <Url type="text/html" method="get" template="${origin}/?q={searchTerms}"/>
</OpenSearchDescription>
`;
  return new Response(body, {
    headers: {
      "Content-Type": "application/opensearchdescription+xml; charset=utf-8",
    },
  });
};
