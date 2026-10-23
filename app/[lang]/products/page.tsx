import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Arrow, Crumbs } from "@/components/SiteChrome";
import { JsonLd } from "@/components/JsonLd";
import { PRODUCTS, UI, href, isLang } from "@/lib/i18n";
import { ORG_ID, SITE_URL, abs, bothLangs } from "@/lib/site";

type P = { params: Promise<{ lang: string }> };

export async function generateMetadata({ params }: P): Promise<Metadata> {
  const { lang } = await params;
  if (!isLang(lang)) return {};
  const title = lang === "ar" ? "منتجات كافو AI | الذكاء الاصطناعي والتقنية المالية" : "Products | Seven AI and Fintech Products";
  const description = lang === "ar" ? "سبعة منتجات: OmniRisk وAI Wealth وRayaChain وCircul والتمويل الرقمي الإسلامي وQardX Instant وLastTable." : "OmniRisk, AI Wealth, RayaChain, Circul, Islamic digital finance, QardX Instant and LastTable: seven AI and fintech products from Kafo AI.";
  return { title: { absolute: title }, description, alternates: bothLangs(lang, "/products"), openGraph: { title, description, url: `/${lang}/products` } };
}

export default async function Products({ params }: P) {
  const { lang } = await params;
  if (!isLang(lang)) notFound();
  const name = UI.nav.products[lang];
  return (
    <>
      <JsonLd
        graph={[
          {
            "@type": "CollectionPage",
            url: abs(`/${lang}/products`),
            name,
            publisher: { "@id": ORG_ID },
            mainEntity: { "@type": "ItemList", itemListElement: PRODUCTS.map((p, n) => ({ "@type": "ListItem", position: n + 1, url: abs(`/${lang}/products/${p.slug}`), name: p.name })) },
          },
          { "@type": "BreadcrumbList", itemListElement: [{ "@type": "ListItem", position: 1, name: UI.home[lang], item: abs(`/${lang}`) }, { "@type": "ListItem", position: 2, name, item: abs(`/${lang}/products`) }] },
        ]}
      />
      <header className="hero sub">
        <div className="wrap">
          <Crumbs lang={lang} trail={[{ name }]} />
          <h1>{name}</h1>
          <p className="lead">{UI.portfolioSub[lang]}</p>
        </div>
      </header>
      <div className="wrap">
        <div className="grid">
          {PRODUCTS.map((p) => (
            <Link key={p.slug} href={href(lang, `/products/${p.slug}`)} className="card product-card">
              <div className="meta">{p.tagline[lang]}</div>
              <h2>{p.name}</h2>
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
