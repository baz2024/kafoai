import { getInsights } from "@/lib/insights";
import { getPapers } from "@/lib/research";
import { SITE, abs } from "@/lib/site";

export const dynamic = "force-static";

export function GET() {
  const body = `# ${SITE.name}

> ${SITE.description}

Kafo AI is a fintech and AI venture that builds intelligent financial infrastructure for banks, fintechs and consumers.

## Insights

${getInsights()
  .map((i) => `- [${i.title}](${abs(`/insights/${i.slug}`)}): ${i.description}`)
  .join("\n")}

## Research

${getPapers()
  .map((p) => `- [${p.title}](${abs(`/research/${p.slug}`)}): ${p.description}`)
  .join("\n")}

## Optional

- [Sitemap](${abs("/sitemap.xml")})
- [RSS feed](${abs("/feed.xml")})
`;
  return new Response(body, { headers: { "Content-Type": "text/plain; charset=utf-8" } });
}
