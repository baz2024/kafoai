import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { JsonLd } from "@/components/JsonLd";
import { Arrow } from "@/components/SiteChrome";
import { PRODUCTS, UI, href, isLang } from "@/lib/i18n";
import { getInsights } from "@/lib/insights";
import { getShots } from "@/lib/shots";
import { ORG_ID, SITE, SITE_URL, WEBSITE_ID, abs, bothLangs, organizationLd } from "@/lib/site";

type P = { params: Promise<{ lang: string }> };

export async function generateMetadata({ params }: P): Promise<Metadata> {
  const { lang } = await params;
  if (!isLang(lang)) return {};
  const ar = lang === "ar";
  const title = ar ? SITE.titleAr : SITE.title;
  const description = ar ? SITE.descriptionAr : SITE.description;
  return {
    title: { absolute: title },
    description,
    alternates: bothLangs(lang),
    openGraph: { title, description, url: `/${lang}`, type: "website" },
  };
}

export default async function Home({ params }: P) {
  const { lang } = await params;
  if (!isLang(lang)) notFound();
  const latest = getInsights().slice(0, 3);
  const url = abs(`/${lang}`);
  // One real screenshot per product, chosen from the manifest. A product with no screenshot yet is skipped.
  const pick: [string, "desktop" | "mobile"][] = [
    ["lasttable", "desktop"],
    ["omnirisk", "desktop"],
    ["rayachain", "desktop"],
    ["growthos", "desktop"],
    ["meithera", "desktop"],
    ["circul", "mobile"],
  ];
  const showcase = pick.flatMap(([slug, device]) => {
    const p = PRODUCTS.find((x) => x.slug === slug);
    const shot = getShots(slug, lang).find((s) => s.device === device);
    return p && shot ? [{ p, shot }] : [];
  });

  return (
    <>
      <JsonLd
        graph={[
          organizationLd,
          { "@type": "WebSite", "@id": WEBSITE_ID, url: SITE_URL, name: SITE.name, publisher: { "@id": ORG_ID }, inLanguage: ["ar", "en"] },
          { "@type": "WebPage", "@id": `${url}#webpage`, url, name: lang === "ar" ? SITE.titleAr : SITE.title, isPartOf: { "@id": WEBSITE_ID }, about: { "@id": ORG_ID }, inLanguage: lang },
          ...PRODUCTS.map((p) => ({ "@type": "SoftwareApplication", "@id": `${SITE_URL}/products/${p.slug}#app`, name: p.name, publisher: { "@id": ORG_ID } })),
        ]}
      />
      <section className="hero">
        <div className="wrap hero-grid">
          <div>
            <p className="eyebrow">{UI.eyebrow[lang]}</p>
            <h1>{UI.h1[lang]}</h1>
            <p className="lead">{UI.intro[lang]}</p>
            <div className="btn-row">
              <Link href={href(lang, "/products")} className="btn">
                {UI.ctaPortfolio[lang]} <Arrow />
              </Link>
              <Link href={href(lang, "/partner")} className="btn ghost">
                {UI.ctaPilot[lang]}
              </Link>
            </div>
          </div>
          <section className="glance">
            <h2>{UI.whatIs[lang]}</h2>
            <p>{UI.whatIsAnswer[lang]}</p>
            <dl>
              <dt>{UI.factLabels.focus[lang]}</dt>
              <dd>{UI.factFocus[lang]}</dd>
              <dt>{UI.factLabels.languages[lang]}</dt>
              <dd>{UI.factLanguages[lang]}</dd>
              <dt>{UI.factLabels.products[lang]}</dt>
              <dd>{PRODUCTS.map((p) => p.name).join(", ")}</dd>
            </dl>
          </section>
        </div>
      </section>

      <section className="band">
        <div className="wrap">
          <div className="grid cols-3 pillars">
            {UI.pillars.map((p) => (
              <div key={p.n} className="tile">
                <span className="n">{p.n}</span>
                <h3>{p.t[lang]}</h3>
                <p>{p.d[lang]}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {showcase.length > 0 && (
        <section className="band">
          <div className="wrap">
            <div className="section-head" style={{ marginTop: 0 }}>
              <h2>{UI.showcase.title[lang]}</h2>
              <p>{UI.showcase.sub[lang]}</p>
            </div>
            <div className="showcase">
              {showcase.map(({ p, shot }) => (
                <Link key={p.slug} href={href(lang, `/products/${p.slug}`)} className="shot-card">
                  <span className={shot.device === "mobile" ? "frame phone-frame" : "frame"}>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={shot.src} alt={shot.alt} width={shot.width} height={shot.height} loading="lazy" decoding="async" />
                  </span>
                  <span className="cap">
                    <strong>{p.name}</strong>
                    <span>{p.tagline[lang]}</span>
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="band alt">
        <div className="wrap">
          <div className="section-head">
            <h2>{UI.portfolio[lang]}</h2>
            <p>{UI.portfolioSub[lang]}</p>
          </div>
          <div className="grid cols-3">
            {PRODUCTS.map((p) => (
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
          <p>
            <Link href={href(lang, "/products")}>
              {UI.showcase.all[lang]} <Arrow />
            </Link>
          </p>
        </div>
      </section>

      <section className="band">
        <div className="wrap">
          <div className="grid cols-3">
            {UI.thesis.map((t) => (
              <div key={t.t.en} className="tile">
                <h3>{t.t[lang]}</h3>
                <p>{t.d[lang]}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="band">
        <div className="wrap">
          <div className="section-head" style={{ marginTop: 0 }}>
            <h2>
              {UI.latestInsights[lang]} {UI.englishOnly[lang]}
            </h2>
          </div>
          <div className="stack">
            {latest.map((i) => (
              <Link key={i.slug} href={`/en/insights/${i.slug}`} className="card article" lang="en" dir="ltr">
                <h3>{i.title}</h3>
                <p>{i.description}</p>
              </Link>
            ))}
          </div>
          <p>
            <Link href="/en/insights">
              {UI.allInsights[lang]} <Arrow />
            </Link>
          </p>
        </div>
      </section>
    </>
  );
}
