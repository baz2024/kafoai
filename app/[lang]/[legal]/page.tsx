import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Crumbs } from "@/components/SiteChrome";
import { JsonLd } from "@/components/JsonLd";
import { LANGS, UI, isLang } from "@/lib/i18n";
import { LEGAL, LEGAL_UPDATED, getLegal } from "@/lib/legal";
import { ORG_ID, abs, bothLangs } from "@/lib/site";

type P = { params: Promise<{ lang: string; legal: string }> };

// Only /privacy and /terms exist under this segment.
export const dynamicParams = false;

export function generateStaticParams() {
  return LANGS.flatMap((lang) => LEGAL.map((d) => ({ lang, legal: d.slug })));
}

export async function generateMetadata({ params }: P): Promise<Metadata> {
  const { lang, legal } = await params;
  const doc = getLegal(legal);
  if (!isLang(lang) || !doc) return {};
  return {
    title: { absolute: doc.seoTitle[lang] },
    description: doc.description[lang],
    alternates: bothLangs(lang, `/${legal}`),
    openGraph: { title: doc.seoTitle[lang], description: doc.description[lang], url: `/${lang}/${legal}` },
  };
}

export default async function LegalPage({ params }: P) {
  const { lang, legal } = await params;
  const doc = getLegal(legal);
  if (!isLang(lang) || !doc) notFound();
  const updated = lang === "ar" ? "آخر تحديث" : "Last updated";
  return (
    <article className="wrap narrow legal">
      <JsonLd
        graph={[
          { "@type": "WebPage", url: abs(`/${lang}/${legal}`), name: doc.title[lang], inLanguage: lang, isPartOf: { "@id": ORG_ID }, dateModified: LEGAL_UPDATED },
          { "@type": "BreadcrumbList", itemListElement: [{ "@type": "ListItem", position: 1, name: UI.home[lang], item: abs(`/${lang}`) }, { "@type": "ListItem", position: 2, name: doc.title[lang], item: abs(`/${lang}/${legal}`) }] },
        ]}
      />
      <Crumbs lang={lang} trail={[{ name: doc.title[lang] }]} />
      <h1 style={{ marginTop: "var(--s-5)" }}>{doc.title[lang]}</h1>
      <p className="meta">
        {updated}: <time dateTime={LEGAL_UPDATED}>{LEGAL_UPDATED}</time>
      </p>
      {doc.sections.map((s) => (
        <section key={s.h.en}>
          <h2>{s.h[lang]}</h2>
          {s.p.map((t) => (
            <p key={t.en}>{t[lang]}</p>
          ))}
        </section>
      ))}
    </article>
  );
}
