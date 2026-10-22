import Link from "next/link";
import { JsonLd } from "@/components/JsonLd";
import { getInsights } from "@/lib/insights";
import { ORG_ID, SITE, SITE_URL, WEBSITE_ID, organizationLd } from "@/lib/site";

export default function Home() {
  const latest = getInsights().slice(0, 3);
  return (
    <>
      <JsonLd
        graph={[
          organizationLd,
          { "@type": "WebSite", "@id": WEBSITE_ID, url: SITE_URL, name: SITE.name, publisher: { "@id": ORG_ID }, inLanguage: "en" },
          { "@type": "WebPage", "@id": `${SITE_URL}/#webpage`, url: SITE_URL, name: SITE.title, isPartOf: { "@id": WEBSITE_ID }, about: { "@id": ORG_ID } },
        ]}
      />
      <h1>Building intelligent financial infrastructure.</h1>
      <p>
        Kafo AI is a technology venture that pairs market knowledge with dedicated AI and fintech R&amp;D. We build
        products in AI risk intelligence, personal finance, blockchain credit and Islamic digital finance.
      </p>
      <h2>What is Kafo AI?</h2>
      <p>
        Kafo AI is a fintech and AI venture that builds intelligent financial infrastructure for banks, fintechs and
        consumers.
      </p>
      <h2>Latest insights</h2>
      {latest.map((i) => (
        <Link key={i.slug} href={`/insights/${i.slug}`} className="card">
          <h3 style={{ margin: 0 }}>{i.title}</h3>
          <p>{i.description}</p>
        </Link>
      ))}
      <p>
        <Link href="/insights">All insights →</Link>
      </p>
      <h2>Research</h2>
      <p>
        Papers and preprints on agentic AI and cross-chain risk intelligence. <Link href="/research">Read the summaries →</Link>
      </p>
    </>
  );
}
