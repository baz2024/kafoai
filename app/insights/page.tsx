import type { Metadata } from "next";
import Link from "next/link";
import { JsonLd } from "@/components/JsonLd";
import { getInsights } from "@/lib/insights";
import { ORG_ID, SITE_URL, abs } from "@/lib/site";

const description = "Research and explainers from Kafo AI on AI in finance, the Internet of Value, tokenised assets and cross-chain risk.";

export const metadata: Metadata = {
  title: "Insights",
  description,
  alternates: { canonical: "/insights" },
  openGraph: { title: "Insights | Kafo AI", description, url: "/insights", type: "website" },
};

export default function InsightsIndex() {
  const items = getInsights();
  return (
    <>
      <JsonLd
        graph={[
          {
            "@type": "CollectionPage",
            "@id": abs("/insights#page"),
            url: abs("/insights"),
            name: "Insights",
            description,
            isPartOf: { "@id": `${SITE_URL}/#website` },
            publisher: { "@id": ORG_ID },
            mainEntity: {
              "@type": "ItemList",
              itemListElement: items.map((i, n) => ({ "@type": "ListItem", position: n + 1, url: abs(`/insights/${i.slug}`), name: i.title })),
            },
          },
          {
            "@type": "BreadcrumbList",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
              { "@type": "ListItem", position: 2, name: "Insights", item: abs("/insights") },
            ],
          },
        ]}
      />
      <h1>Insights</h1>
      <p>{description}</p>
      {items.map((i) => (
        <Link key={i.slug} href={`/insights/${i.slug}`} className="card">
          <div className="meta">
            {i.category} · <time dateTime={i.date}>{i.date}</time> · {i.readingMinutes} min read
          </div>
          <h2>{i.title}</h2>
          <p>{i.description}</p>
        </Link>
      ))}
    </>
  );
}
