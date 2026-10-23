import type { Metadata } from "next";
import Link from "next/link";
import { JsonLd } from "@/components/JsonLd";
import { getInsights } from "@/lib/insights";
import { ORG_ID, SITE_URL, abs } from "@/lib/site";

const description = "Research and explainers from Kafo AI on AI in finance, the Internet of Value, tokenised assets and cross-chain risk.";

export const metadata: Metadata = {
  title: "Insights",
  description,
  alternates: { canonical: "/en/insights" },
  openGraph: { title: "Insights | Kafo AI", description, url: "/en/insights", type: "website" },
};

// English-only section: no Arabic counterpart is generated.
export const dynamicParams = false;
export function generateStaticParams() {
  return [{ lang: "en" }];
}

export default function InsightsIndex() {
  const items = getInsights();
  return (
    <>
      <JsonLd
        graph={[
          {
            "@type": "CollectionPage",
            "@id": abs("/en/insights#page"),
            url: abs("/en/insights"),
            name: "Insights",
            description,
            isPartOf: { "@id": `${SITE_URL}/#website` },
            publisher: { "@id": ORG_ID },
            mainEntity: {
              "@type": "ItemList",
              itemListElement: items.map((i, n) => ({ "@type": "ListItem", position: n + 1, url: abs(`/en/insights/${i.slug}`), name: i.title })),
            },
          },
          {
            "@type": "BreadcrumbList",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "Home", item: abs("/en") },
              { "@type": "ListItem", position: 2, name: "Insights", item: abs("/en/insights") },
            ],
          },
        ]}
      />
      <header className="hero sub">
        <div className="wrap">
          <h1>Insights</h1>
          <p className="lead">{description}</p>
        </div>
      </header>
      <div className="wrap narrow page">
        <div className="stack">
          {items.map((i) => (
            <Link key={i.slug} href={`/en/insights/${i.slug}`} className="card article">
              <div className="meta">
                {i.category} · <time dateTime={i.date}>{i.date}</time> · {i.readingMinutes} min read
              </div>
              <h2>{i.title}</h2>
              <p>{i.description}</p>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}
