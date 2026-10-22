import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { JsonLd } from "@/components/JsonLd";
import { getInsight, getInsights, renderMarkdown } from "@/lib/insights";
import { ORG_ID, SITE_URL, abs } from "@/lib/site";

type Params = { slug: string };

export const dynamicParams = false;

export function generateStaticParams() {
  return getInsights().map((i) => ({ slug: i.slug }));
}

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const { slug } = await params;
  const a = getInsight(slug);
  if (!a) return {};
  const url = `/insights/${a.slug}`;
  return {
    title: a.title,
    description: a.description,
    keywords: a.tags,
    alternates: { canonical: url },
    openGraph: { type: "article", title: a.title, description: a.description, url, publishedTime: a.date, modifiedTime: a.updated, tags: a.tags },
    twitter: { card: "summary_large_image", title: a.title, description: a.description },
    // A draft only renders in `next dev`; belt and braces if one ever leaks into a build.
    robots: a.draft ? { index: false, follow: false } : undefined,
  };
}

export default async function InsightPage({ params }: { params: Promise<Params> }) {
  const { slug } = await params;
  const a = getInsight(slug);
  if (!a) notFound();
  const { html, headings } = renderMarkdown(a.body);
  const url = abs(`/insights/${a.slug}`);

  return (
    <article>
      <JsonLd
        graph={[
          {
            "@type": "Article",
            "@id": `${url}#article`,
            headline: a.title,
            description: a.description,
            datePublished: a.date,
            dateModified: a.updated,
            inLanguage: "en",
            keywords: a.tags.join(", "),
            articleSection: a.category,
            wordCount: a.words,
            mainEntityOfPage: { "@type": "WebPage", "@id": url },
            author: { "@id": ORG_ID },
            publisher: { "@id": ORG_ID },
          },
          {
            "@type": "BreadcrumbList",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
              { "@type": "ListItem", position: 2, name: "Insights", item: abs("/insights") },
              { "@type": "ListItem", position: 3, name: a.title, item: url },
            ],
          },
        ]}
      />
      <nav className="crumbs" aria-label="Breadcrumb">
        <Link href="/">Home</Link> / <Link href="/insights">Insights</Link>
      </nav>
      <h1>{a.title}</h1>
      <p className="meta">
        {a.category} · <time dateTime={a.date}>{a.date}</time> · {a.readingMinutes} min read
      </p>
      <p>{a.description}</p>
      {headings.length > 2 && (
        <nav aria-label="Contents" className="meta">
          <strong>In this article</strong>
          <ol>
            {headings.map((h) => (
              <li key={h.id}>
                <a href={`#${h.id}`}>{h.text}</a>
              </li>
            ))}
          </ol>
        </nav>
      )}
      <div className="prose" dangerouslySetInnerHTML={{ __html: html }} />
    </article>
  );
}
