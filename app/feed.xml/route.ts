import { getInsights } from "@/lib/insights";
import { SITE, abs } from "@/lib/site";

const esc = (s: string) => s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");

export const dynamic = "force-static";

export function GET() {
  const items = getInsights();
  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
<channel>
<title>${esc(SITE.name)} Insights</title>
<link>${abs("/insights")}</link>
<description>${esc(SITE.description)}</description>
<language>en</language>
<atom:link href="${abs("/feed.xml")}" rel="self" type="application/rss+xml"/>
${items
  .map(
    (i) => `<item>
<title>${esc(i.title)}</title>
<link>${abs(`/insights/${i.slug}`)}</link>
<guid isPermaLink="true">${abs(`/insights/${i.slug}`)}</guid>
<pubDate>${new Date(i.date).toUTCString()}</pubDate>
<description>${esc(i.description)}</description>
</item>`,
  )
  .join("\n")}
</channel>
</rss>`;
  return new Response(xml, { headers: { "Content-Type": "application/rss+xml; charset=utf-8" } });
}
