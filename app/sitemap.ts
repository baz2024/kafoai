import type { MetadataRoute } from "next";
import { PRODUCTS } from "@/lib/i18n";
import { getInsights } from "@/lib/insights";
import { getPapers } from "@/lib/research";
import { abs } from "@/lib/site";

// Pages that exist in both languages carry hreflang alternates; x-default is Arabic.
const both = (path: string, priority: number, changeFrequency: "weekly" | "monthly", lastModified?: string): MetadataRoute.Sitemap =>
  (["ar", "en"] as const).map((l) => ({
    url: abs(`/${l}${path}`),
    lastModified,
    changeFrequency,
    priority,
    alternates: { languages: { ar: abs(`/ar${path}`), en: abs(`/en${path}`), "x-default": abs(`/ar${path}`) } },
  }));

export default function sitemap(): MetadataRoute.Sitemap {
  const insights = getInsights();
  const papers = getPapers();
  const newest = insights[0]?.updated;
  return [
    ...both("", 1, "weekly", newest),
    ...both("/products", 0.9, "monthly"),
    ...PRODUCTS.flatMap((p) => both(`/products/${p.slug}`, 0.8, "monthly")),
    ...both("/for-banks", 0.8, "monthly"),
    ...both("/partner", 0.8, "monthly"),
    ...both("/investors", 0.8, "monthly"),
    ...both("/privacy", 0.3, "monthly"),
    ...both("/terms", 0.3, "monthly"),
    { url: abs("/en/insights"), lastModified: newest, changeFrequency: "weekly", priority: 0.8 },
    ...insights.map((i) => ({ url: abs(`/en/insights/${i.slug}`), lastModified: i.updated, changeFrequency: "monthly" as const, priority: 0.7 })),
    { url: abs("/en/research"), lastModified: papers[0]?.date, changeFrequency: "monthly", priority: 0.8 },
    ...papers.map((p) => ({ url: abs(`/en/research/${p.slug}`), lastModified: p.date, changeFrequency: "yearly" as const, priority: 0.7 })),
  ];
}
