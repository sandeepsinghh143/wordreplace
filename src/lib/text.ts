export type ReplaceOptions = {
  caseSensitive: boolean;
  wholeWord: boolean;
};

export type Segment = {
  text: string;
  hit: boolean;
};

export function countWords(value: string): number {
  const trimmed = value.trim();
  if (!trimmed) {
    return 0;
  }
  return trimmed.split(/\s+/).length;
}

export function escapeRegExp(value: string): string {
  return value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

export function buildPattern(
  find: string,
  options: ReplaceOptions
): RegExp | null {
  if (!find) {
    return null;
  }
  const flags = options.caseSensitive ? "g" : "gi";
  const escaped = escapeRegExp(find);
  const source = options.wholeWord ? `\\b${escaped}\\b` : escaped;
  try {
    return new RegExp(source, flags);
  } catch {
    return null;
  }
}

export function countMatches(text: string, pattern: RegExp | null): number {
  if (!pattern || !text) {
    return 0;
  }
  const copy = new RegExp(pattern.source, pattern.flags);
  const matches = text.match(copy);
  return matches ? matches.length : 0;
}

export function replaceAll(
  text: string,
  pattern: RegExp | null,
  replacement: string
): string {
  if (!pattern) {
    return text;
  }
  return text.replace(new RegExp(pattern.source, pattern.flags), replacement);
}

export function splitPreview(
  text: string,
  pattern: RegExp | null,
  replacement: string,
  mode: "source" | "result"
): Segment[] {
  if (!text) {
    return [];
  }
  if (!pattern) {
    return [{ text, hit: false }];
  }

  const capturing = new RegExp(`(${pattern.source})`, pattern.flags);
  const parts = text.split(capturing);
  const testerFlags = pattern.flags.replace(/g/g, "");
  const tester = new RegExp(`^${pattern.source}$`, testerFlags);
  const segments: Segment[] = [];

  for (const part of parts) {
    if (part === "") {
      continue;
    }
    const hit = tester.test(part);
    tester.lastIndex = 0;
    if (hit) {
      const display = mode === "result" ? replacement : part;
      if (display === "") {
        continue;
      }
      segments.push({ text: display, hit: true });
    } else {
      segments.push({ text: part, hit: false });
    }
  }

  return segments.length ? segments : [{ text, hit: false }];
}
