import { getInsights } from "@/lib/insights";
import { PRODUCTS } from "@/lib/i18n";
import { getPapers } from "@/lib/research";
import { SITE, abs } from "@/lib/site";

export const dynamic = "force-static";

export function GET() {
  const body = `# ${SITE.name}

> ${SITE.description}

Kafo AI is a fintech and AI venture that builds intelligent financial infrastructure for banks, fintechs and consumers.

## Products

${PRODUCTS.map((p) => `- [${p.name}](${abs(`/en/products/${p.slug}`)}): ${p.desc.en}`).join("\n")}

## Pages

- [For banks](${abs("/en/for-banks")}): AI solutions for banks
- [Partner with Kafo AI](${abs("/en/partner")}): Pilots, licensing and joint R&D
- [Investors](${abs("/en/investors")}): Investor information and data room access
- [Arabic site](${abs("/ar")}): النسخة العربية

## Insights

${getInsights()
  .map((i) => `- [${i.title}](${abs(`/en/insights/${i.slug}`)}): ${i.description}`)
  .join("\n")}

## Research

${getPapers()
  .map((p) => `- [${p.title}](${abs(`/en/research/${p.slug}`)}): ${p.description}`)
  .join("\n")}

## Optional

- [Sitemap](${abs("/sitemap.xml")})
- [RSS feed](${abs("/feed.xml")})
`;
  return new Response(body, { headers: { "Content-Type": "text/plain; charset=utf-8" } });
}
