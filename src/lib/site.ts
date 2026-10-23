export const SITE_NAME = "Word Replace";
export const SITE_URL = "https://wordreplace.com";
export const CONTACT_EMAIL = "hello@wordreplace.com";
export const PUBLISHED = "2026-10-20";
export const MODIFIED = "2026-10-23";

export const PRIMARY_KEYWORD = "Word Replace";

export const KEYWORDS = [
  "Word Replace",
  "Text Replace",
  "Text Replace Online",
  "Replace Text",
  "Replace Text Online",
  "Replace Words in Text",
  "Word Replacer to replace words Online",
  "Find and Replace Text – Free Online Tool",
  "word replace all",
  "online text replace",
  "text replacer",
  "ai text replacer",
  "text replacer online",
  "ai word replacer",
  "word replacer online",
  "change words",
  "change words in essay",
];

export const LONG_TAIL_KEYWORDS = [
  "find and replace text free online tool",
  "word replacer to replace words online",
  "replace words in text without uploading",
  "change words in an essay online",
  "word replace all in browser",
  "text replace online no word limit",
  "private online text replace tool",
];

export const KEYWORDS_META = KEYWORDS.join(", ");

export interface PageMeta {
  path: string;
  title: string;
  label: string;
  description: string;
  changefreq: string;
  priority: string;
}

export const PAGES: readonly PageMeta[] = [
  {
    path: "/",
    title: "Word Replace | Find and Replace Text – Free Online Tool",
    label: "Word Replace",
    description:
      "Free Word Replace tool to find and replace text online. Replace words in text, change words in an essay, and run word replace all privately in your browser.",
    changefreq: "daily",
    priority: "1.0",
  },
  {
    path: "/about",
    title: "About Word Replace | Online Text Replace and Word Replacer",
    label: "About Word Replace",
    description:
      "About Word Replace, the private in-browser text replace tool. Find and replace text, replace words in text, and change words in an essay without uploading a draft.",
    changefreq: "daily",
    priority: "0.8",
  },
  {
    path: "/contact",
    title: "Contact Word Replace | Text Replacer Support",
    label: "Contact",
    description:
      "Contact the Word Replace team about the free online text replace tool, word replacer online, or find and replace text – free online tool.",
    changefreq: "daily",
    priority: "0.7",
  },
  {
    path: "/privacy",
    title: "Privacy Policy | Word Replace Online Text Replace",
    label: "Privacy policy",
    description:
      "Word Replace processes find and replace text in your browser. We do not upload, store, or sell drafts from this text replacer online.",
    changefreq: "daily",
    priority: "0.5",
  },
  {
    path: "/terms",
    title: "Terms and Conditions | Word Replace Text Replacer",
    label: "Terms and conditions",
    description:
      "Terms and conditions for using Word Replace, the free in-browser find and replace text tool.",
    changefreq: "daily",
    priority: "0.5",
  },
  {
    path: "/disclaimer",
    title: "Disclaimer | Word Replace Text Replacer",
    label: "Disclaimer",
    description:
      "Word Replace is a find and replace text – free online tool provided as-is. Review replaced text before you publish.",
    changefreq: "daily",
    priority: "0.5",
  },
] as const;

export const DEEP_LINKS = [
  { href: "/#workspace", label: "Word Replace editor" },
  { href: "/#howto", label: "How to replace text online" },
  { href: "/#features", label: "Features" },
  { href: "/#faq", label: "Word Replace FAQ" },
] as const;

export const INTERNAL_LINKS = [
  { href: "/", label: "Word Replace", follow: true },
  { href: "/about", label: "About Word Replace", follow: true },
  { href: "/contact", label: "Contact", follow: true },
  { href: "/privacy", label: "Privacy policy", follow: true },
  { href: "/terms", label: "Terms and conditions", follow: true },
  { href: "/disclaimer", label: "Disclaimer", follow: true },
] as const;

export const OUTBOUND_LINKS = [
  {
    href: "https://en.wikipedia.org/wiki/Find_and_replace",
    label: "Find and replace",
    follow: false,
  },
] as const;

export function abs(path: string, origin: string = SITE_URL) {
  return new URL(path, origin).href;
}
