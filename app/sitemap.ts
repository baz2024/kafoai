import type { MetadataRoute } from "next";
import { getInsights } from "@/lib/insights";
import { getPapers } from "@/lib/research";
import { abs } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const insights = getInsights();
  const papers = getPapers();
  const newest = insights[0]?.updated;
  return [
    { url: abs("/"), lastModified: newest, changeFrequency: "weekly", priority: 1 },
    { url: abs("/insights"), lastModified: newest, changeFrequency: "weekly", priority: 0.8 },
    { url: abs("/research"), lastModified: papers[0]?.date, changeFrequency: "monthly", priority: 0.8 },
    ...papers.map((p) => ({
      url: abs(`/research/${p.slug}`),
      lastModified: p.date,
      changeFrequency: "yearly" as const,
      priority: 0.7,
    })),
    ...insights.map((i) => ({
      url: abs(`/insights/${i.slug}`),
      lastModified: i.updated,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
  ];
}
