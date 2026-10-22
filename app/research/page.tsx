import type { Metadata } from "next";
import Link from "next/link";
import { JsonLd } from "@/components/JsonLd";
import { getPapers } from "@/lib/research";
import { ORG_ID, SITE_URL, abs } from "@/lib/site";

const description = "Short summaries of research papers from Kafo AI and OmniRisk Research on agentic AI, cross-chain risk and the Internet of Value.";

export const metadata: Metadata = {
  title: "Research",
  description,
  alternates: { canonical: "/research" },
  openGraph: { title: "Research | Kafo AI", description, url: "/research", type: "website" },
};

export default function ResearchIndex() {
  const papers = getPapers();
  return (
    <>
      <JsonLd
        graph={[
          {
            "@type": "CollectionPage",
            "@id": abs("/research#page"),
            url: abs("/research"),
            name: "Research",
            description,
            publisher: { "@id": ORG_ID },
            mainEntity: {
              "@type": "ItemList",
              itemListElement: papers.map((p, n) => ({ "@type": "ListItem", position: n + 1, url: abs(`/research/${p.slug}`), name: p.title })),
            },
          },
          {
            "@type": "BreadcrumbList",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
              { "@type": "ListItem", position: 2, name: "Research", item: abs("/research") },
            ],
          },
        ]}
      />
      <h1>Research</h1>
      <p>{description}</p>
      {papers.map((p) => (
        <Link key={p.slug} href={`/research/${p.slug}`} className="card">
          <div className="meta">
            {p.status} · <time dateTime={p.date}>{p.date}</time>
          </div>
          <h2>{p.title}</h2>
          <p>{p.description}</p>
        </Link>
      ))}
    </>
  );
}
