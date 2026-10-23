import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Arrow, Crumbs } from "@/components/SiteChrome";
import { JsonLd } from "@/components/JsonLd";
import { LANGS, PRODUCTS, UI, getProduct, href, isLang } from "@/lib/i18n";
import { getShots } from "@/lib/shots";
import { ORG_ID, SITE_URL, abs, bothLangs } from "@/lib/site";


type P = { params: Promise<{ lang: string; slug: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return LANGS.flatMap((lang) => PRODUCTS.map((p) => ({ lang, slug: p.slug })));
}

export async function generateMetadata({ params }: P): Promise<Metadata> {
  const { lang, slug } = await params;
  const p = getProduct(slug);
  if (!isLang(lang) || !p) return {};
  const title = p.seoTitle[lang];
  const description = `${p.desc[lang]} ${lang === "ar" ? "من كافو AI." : "By Kafo AI."}`;
  return {
    title: { absolute: title },
    description,
    alternates: bothLangs(lang, `/products/${slug}`),
    openGraph: { title, description, url: `/${lang}/products/${slug}`, type: "website" },
  };
}

export default async function ProductPage({ params }: P) {
  const { lang, slug } = await params;
  const p = getProduct(slug);
  if (!isLang(lang) || !p) notFound();
  const url = abs(`/${lang}/products/${slug}`);
  const related = PRODUCTS.filter((x) => x.slug !== slug && (p.banks ? x.banks : true)).slice(0, 3);
  const shots = getShots(slug, lang);
  const desktop = shots.filter((s) => s.device === "desktop");
  const mobile = shots.filter((s) => s.device === "mobile");
  const ask = lang === "ar" ? `ما هو ${p.name}؟` : `What is ${p.name}?`;

  return (
    <article>
      <JsonLd
        graph={[
          {
            "@type": "SoftwareApplication",
            "@id": `${SITE_URL}/products/${slug}#app`,
            name: p.name,
            description: p.desc[lang],
            applicationCategory: "FinanceApplication",
            url,
            inLanguage: lang,
            publisher: { "@id": ORG_ID },
            ...(p.external ? { sameAs: [p.external.url] } : {}),
          },
          { "@type": "WebPage", "@id": `${url}#webpage`, url, name: p.seoTitle[lang], inLanguage: lang, about: { "@id": `${SITE_URL}/products/${slug}#app` } },
          {
            "@type": "BreadcrumbList",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: UI.home[lang], item: abs(`/${lang}`) },
              { "@type": "ListItem", position: 2, name: UI.nav.products[lang], item: abs(`/${lang}/products`) },
              { "@type": "ListItem", position: 3, name: p.name, item: url },
            ],
          },
          ...(p.faq
            ? [{ "@type": "FAQPage", mainEntity: p.faq.map((f) => ({ "@type": "Question", name: f.q[lang], acceptedAnswer: { "@type": "Answer", text: f.a[lang] } })) }]
            : []),
        ]}
      />
      <header className="hero sub">
        <div className="wrap">
          <Crumbs lang={lang} trail={[{ name: UI.nav.products[lang], to: href(lang, "/products") }, { name: p.name }]} />
          <div className="hero-grid">
            <div>
              <p className="eyebrow">{p.tagline[lang]}</p>
              <h1>{p.name}</h1>
              <p className="lead">{p.desc[lang]}</p>
              <div className="btn-row">
                <Link href={href(lang, "/partner")} className="btn">
                  {UI.partner.cta[lang]} <Arrow />
                </Link>
                {p.external && (
                  <a href={p.external.url} rel="noopener" className="btn ghost">
                    {UI.visit[lang]} {p.external.label} ↗
                  </a>
                )}
              </div>
            </div>
            <section className="glance">
              <h2>{ask}</h2>
              <p>
                {p.name} — {p.tagline[lang]}. {p.desc[lang]}
              </p>
            </section>
          </div>
        </div>
      </header>

      {shots.length > 0 && (
        <div className="wrap">
          {desktop[0] && (
            <figure className="shot">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={desktop[0].src} alt={desktop[0].alt} width={desktop[0].width} height={desktop[0].height} loading="eager" decoding="async" />
            </figure>
          )}
          {desktop.length > 1 && (
            <div className={desktop.length === 2 ? "shots one" : desktop.length === 4 ? "shots three" : "shots"}>
              {desktop.slice(1).map((s) => (
                <figure key={s.src} className="shot">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={s.src} alt={s.alt} width={s.width} height={s.height} loading="lazy" decoding="async" />
                </figure>
              ))}
            </div>
          )}
          {mobile.length > 0 && (
            <div className="shots phones">
              {mobile.map((s) => (
                <figure key={s.src} className="shot phone">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={s.src} alt={s.alt} width={s.width} height={s.height} loading="lazy" decoding="async" />
                </figure>
              ))}
            </div>
          )}
        </div>
      )}

      <div className="wrap">
        {p.features && (
          <section>
            <div className="section-head">
              <h2>{UI.features[lang]}</h2>
            </div>
            <div className="grid">
              {p.features.map((f, i) => (
                <div key={f.t.en} className="tile">
                  <span className="n">{String(i + 1).padStart(2, "0")}</span>
                  <h3>{f.t[lang]}</h3>
                  <p>{f.d[lang]}</p>
                  {f.status && lang === "en" && <span className="meta">{f.status}</span>}
                </div>
              ))}
            </div>
          </section>
        )}

        {p.steps && (
          <ol className="steps">
            {p.steps.map((s) => (
              <li key={s.t.en}>
                <strong>{s.t[lang]}</strong>
                {s.d[lang]}
              </li>
            ))}
          </ol>
        )}

        {p.faq && (
          <section>
            <div className="section-head">
              <h2>{UI.faq[lang]}</h2>
            </div>
            <div className="faq">
              {p.faq.map((f) => (
                <details key={f.q.en}>
                  <summary>
                    <h3>{f.q[lang]}</h3>
                  </summary>
                  <div className="faq-a">
                    <p>{f.a[lang]}</p>
                  </div>
                </details>
              ))}
            </div>
          </section>
        )}

        <section>
          <div className="section-head">
            <h2>{UI.related[lang]}</h2>
          </div>
          <div className="grid">
            {related.map((r) => (
              <Link key={r.slug} href={href(lang, `/products/${r.slug}`)} className="card product-card">
                <h3>{r.name}</h3>
                <p>{r.tagline[lang]}</p>
                <span className="go" aria-hidden="true">
                  <Arrow />
                </span>
              </Link>
            ))}
          </div>
        </section>

        <div className="cta-band">
          <h2>{UI.partner.h1[lang]}</h2>
          <div className="btn-row">
            <Link href={href(lang, "/partner")} className="btn">
              {UI.partner.cta[lang]} <Arrow />
            </Link>
          </div>
        </div>
      </div>
    </article>
  );
}
