import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Arrow, Crumbs } from "@/components/SiteChrome";
import { JsonLd } from "@/components/JsonLd";
import { CONTACT_EMAIL, UI, isLang } from "@/lib/i18n";
import { ORG_ID, abs, bothLangs } from "@/lib/site";

type P = { params: Promise<{ lang: string }> };

export async function generateMetadata({ params }: P): Promise<Metadata> {
  const { lang } = await params;
  if (!isLang(lang)) return {};
  const title = lang === "ar" ? "كن شريكاً | شراكات التقنية المالية — كافو AI" : "Partner with Kafo AI | Fintech Partnerships";
  const description = UI.partner.intro[lang];
  return { title: { absolute: title }, description, alternates: bothLangs(lang, "/partner"), openGraph: { title, description, url: `/${lang}/partner` } };
}

export default async function Partner({ params }: P) {
  const { lang } = await params;
  if (!isLang(lang)) notFound();
  const t = UI.partner;
  return (
    <>
      <JsonLd
        graph={[
          { "@type": "WebPage", url: abs(`/${lang}/partner`), name: t.h1[lang], inLanguage: lang, about: { "@id": ORG_ID } },
          { "@type": "BreadcrumbList", itemListElement: [{ "@type": "ListItem", position: 1, name: UI.home[lang], item: abs(`/${lang}`) }, { "@type": "ListItem", position: 2, name: t.h1[lang], item: abs(`/${lang}/partner`) }] },
        ]}
      />
      <header className="hero sub">
        <div className="wrap">
          <Crumbs lang={lang} trail={[{ name: t.h1[lang] }]} />
          <h1>{t.h1[lang]}</h1>
          <p className="lead">{t.intro[lang]}</p>
          <div className="btn-row">
            <a className="btn" href={`mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent("Kafo AI partnership enquiry")}`}>
              {t.cta[lang]} <Arrow />
            </a>
          </div>
        </div>
      </header>
      <div className="wrap">
        <div className="section-head">
          <h2>{t.areas[lang]}</h2>
        </div>
        <div className="grid">
          {t.categories.map((c, i) => (
            <div key={c.en} className="tile">
              <span className="n">{String(i + 1).padStart(2, "0")}</span>
              <h3>{c[lang]}</h3>
            </div>
          ))}
        </div>
        <div className="section-head">
          <h2>{t.ways[lang]}</h2>
        </div>
        <ul className="chips">
          {t.kinds.map((k) => (
            <li key={k.en}>{k[lang]}</li>
          ))}
        </ul>
      </div>
    </>
  );
}
