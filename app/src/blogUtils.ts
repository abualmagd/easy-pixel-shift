/** Shared helpers for rendering the static blog catalogue safely and consistently. */
export function stripArticleHtml(html: string): string {
  return html
    .replace(/<script\b[^>]*>[\s\S]*?<\/script>/gi, " ")
    .replace(/<style\b[^>]*>[\s\S]*?<\/style>/gi, " ")
    .replace(/<[^>]+>/g, " ")
    .replace(/&nbsp;/gi, " ")
    .replace(/&amp;/gi, "&")
    .replace(/&quot;/gi, '"')
    .replace(/&#39;/gi, "'")
    .replace(/&lt;/gi, "<")
    .replace(/&gt;/gi, ">")
    .replace(/\s+/g, " ")
    .trim();
}

export function getArticleExcerpt(html: string, maxLength = 180): string {
  const text = stripArticleHtml(html);
  if (text.length <= maxLength) return text;
  const boundary = text.lastIndexOf(" ", maxLength);
  return `${text.slice(0, boundary > 0 ? boundary : maxLength).trimEnd()}…`;
}

export function getArticleReadingTime(html: string): number {
  const words = stripArticleHtml(html).split(/\s+/).filter(Boolean).length;
  return Math.max(1, Math.ceil(words / 200));
}
