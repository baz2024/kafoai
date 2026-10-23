import type { Metadata } from "next";
import Link from "next/link";
import { JsonLd } from "@/components/JsonLd";
import { getPapers } from "@/lib/research";
import { ORG_ID, SITE_URL, abs } from "@/lib/site";

const description = "Short summaries of research papers from Kafo AI and OmniRisk Research on agentic AI, cross-chain risk and the Internet of Value.";

export const metadata: Metadata = {
  title: "Research",
  description,
  alternates: { canonical: "/en/research" },
  openGraph: { title: "Research | Kafo AI", description, url: "/en/research", type: "website" },
};

// English-only section: no Arabic counterpart is generated.
export const dynamicParams = false;
export function generateStaticParams() {
  return [{ lang: "en" }];
}

export default function ResearchIndex() {
  const papers = getPapers();
  return (
    <>
      <JsonLd
        graph={[
          {
            "@type": "CollectionPage",
            "@id": abs("/en/research#page"),
            url: abs("/en/research"),
            name: "Research",
            description,
            publisher: { "@id": ORG_ID },
            mainEntity: {
              "@type": "ItemList",
              itemListElement: papers.map((p, n) => ({ "@type": "ListItem", position: n + 1, url: abs(`/en/research/${p.slug}`), name: p.title })),
            },
          },
          {
            "@type": "BreadcrumbList",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "Home", item: abs("/en") },
              { "@type": "ListItem", position: 2, name: "Research", item: abs("/en/research") },
            ],
          },
        ]}
      />
      <header className="hero sub">
        <div className="wrap">
          <h1>Research</h1>
          <p className="lead">{description}</p>
        </div>
      </header>
      <div className="wrap narrow page">
        <div className="stack">
          {papers.map((p) => (
            <Link key={p.slug} href={`/en/research/${p.slug}`} className="card article">
              <div className="meta">
                {p.status} · <time dateTime={p.date}>{p.date}</time>
              </div>
              <h2>{p.title}</h2>
              <p>{p.description}</p>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}
