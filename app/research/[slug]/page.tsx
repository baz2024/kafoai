import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { JsonLd } from "@/components/JsonLd";
import { renderMarkdown } from "@/lib/insights";
import { getPaper, getPapers } from "@/lib/research";
import { ORG_ID, SITE, SITE_URL, abs } from "@/lib/site";

type Params = { slug: string };

export const dynamicParams = false;

export function generateStaticParams() {
  return getPapers().map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const { slug } = await params;
  const p = getPaper(slug);
  if (!p) return {};
  const url = `/research/${p.slug}`;
  return {
    title: p.seoTitle,
    description: p.description,
    keywords: p.keywords,
    authors: p.authors.map((name) => ({ name })),
    alternates: { canonical: url },
    openGraph: { type: "article", title: p.seoTitle, description: p.description, url, publishedTime: p.date, authors: p.authors },
    twitter: { card: "summary_large_image", title: p.seoTitle, description: p.description },
    // Google Scholar inclusion tags
    other: {
      citation_title: p.title,
      citation_author: p.authors,
      citation_publication_date: p.date.replace(/-/g, "/"),
      citation_abstract_html_url: abs(url),
      citation_keywords: p.keywords.join("; "),
      citation_language: "en",
      ...(p.paperUrl ? { citation_pdf_url: p.paperUrl } : {}),
    },
  };
}

export default async function PaperPage({ params }: { params: Promise<Params> }) {
  const { slug } = await params;
  const p = getPaper(slug);
  if (!p) notFound();
  const url = abs(`/research/${p.slug}`);
  const { html } = renderMarkdown(p.abstract);

  return (
    <article>
      <JsonLd
        graph={[
          {
            "@type": "ScholarlyArticle",
            "@id": `${url}#paper`,
            headline: p.title,
            name: p.title,
            description: p.description,
            abstract: p.abstract.replace(/[*_]/g, ""),
            datePublished: p.date,
            inLanguage: "en",
            keywords: p.keywords.join(", "),
            url,
            mainEntityOfPage: { "@type": "WebPage", "@id": url },
            author: p.authors.map((name) => (name === "OmniRisk Research" ? { "@type": "Organization", name, parentOrganization: { "@id": ORG_ID } } : { "@type": "Person", name })),
            publisher: { "@id": ORG_ID },
            isPartOf: { "@id": `${SITE_URL}/#website` },
            ...(p.paperUrl ? { encoding: { "@type": "MediaObject", contentUrl: p.paperUrl, encodingFormat: "application/pdf" } } : {}),
          },
          {
            "@type": "BreadcrumbList",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
              { "@type": "ListItem", position: 2, name: "Research", item: abs("/research") },
              { "@type": "ListItem", position: 3, name: p.seoTitle, item: url },
            ],
          },
        ]}
      />
      <nav className="crumbs" aria-label="Breadcrumb">
        <Link href="/">Home</Link> / <Link href="/research">Research</Link>
      </nav>
      <h1>{p.title}</h1>
      <p className="meta">
        {p.authors.join(", ")} · <time dateTime={p.date}>{p.date}</time> · {p.status}
      </p>
      <h2>Summary</h2>
      <div className="prose" dangerouslySetInnerHTML={{ __html: html }} />
      <p className="meta">
        <strong>Keywords:</strong> {p.keywords.join(", ")}
      </p>
      {p.paperUrl ? (
        <p>
          <a href={p.paperUrl}>Read the full paper (PDF) →</a>
        </p>
      ) : (
        <p className="meta">The full manuscript is not yet publicly available. Contact {SITE.name} for access.</p>
      )}
    </article>
  );
}
