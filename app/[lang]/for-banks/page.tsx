import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Arrow, Crumbs } from "@/components/SiteChrome";
import { JsonLd } from "@/components/JsonLd";
import { PRODUCTS, UI, href, isLang } from "@/lib/i18n";
import { ORG_ID, abs, bothLangs } from "@/lib/site";

type P = { params: Promise<{ lang: string }> };

export async function generateMetadata({ params }: P): Promise<Metadata> {
  const { lang } = await params;
  if (!isLang(lang)) return {};
  const title = lang === "ar" ? "حلول الذكاء الاصطناعي للبنوك — كافو AI" : "AI Solutions for Banks | Kafo AI";
  const description = UI.banks.intro[lang];
  return { title: { absolute: title }, description, alternates: bothLangs(lang, "/for-banks"), openGraph: { title, description, url: `/${lang}/for-banks` } };
}

export default async function ForBanks({ params }: P) {
  const { lang } = await params;
  if (!isLang(lang)) notFound();
  const t = UI.banks;
  const items = PRODUCTS.filter((p) => p.banks);
  return (
    <>
      <JsonLd
        graph={[
          { "@type": "WebPage", url: abs(`/${lang}/for-banks`), name: t.h1[lang], inLanguage: lang, about: { "@id": ORG_ID } },
          { "@type": "BreadcrumbList", itemListElement: [{ "@type": "ListItem", position: 1, name: UI.home[lang], item: abs(`/${lang}`) }, { "@type": "ListItem", position: 2, name: t.h1[lang], item: abs(`/${lang}/for-banks`) }] },
        ]}
      />
      <header className="hero sub">
        <div className="wrap">
          <Crumbs lang={lang} trail={[{ name: UI.nav.forBanks[lang] }]} />
          <h1>{t.h1[lang]}</h1>
          <p className="lead">{t.intro[lang]}</p>
          <div className="btn-row">
            <Link href={href(lang, "/partner")} className="btn">
              {UI.partner.cta[lang]} <Arrow />
            </Link>
          </div>
        </div>
      </header>
      <div className="wrap">
        <div className="section-head">
          <h2>{t.products[lang]}</h2>
        </div>
        <div className="grid">
          {items.map((p) => (
            <Link key={p.slug} href={href(lang, `/products/${p.slug}`)} className="card product-card">
              <div className="meta">{p.tagline[lang]}</div>
              <h3>{p.name}</h3>
              <p>{p.desc[lang]}</p>
              <span className="go" aria-hidden="true">
                <Arrow />
              </span>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}
