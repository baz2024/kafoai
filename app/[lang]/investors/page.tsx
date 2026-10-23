import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Arrow, Crumbs } from "@/components/SiteChrome";
import { JsonLd } from "@/components/JsonLd";
import { INVEST_EMAIL, UI, isLang } from "@/lib/i18n";
import { ORG_ID, abs, bothLangs } from "@/lib/site";

type P = { params: Promise<{ lang: string }> };

// Public, indexable investor page. The signed-in data room is a separate private area (noindex, disallowed in robots).
export async function generateMetadata({ params }: P): Promise<Metadata> {
  const { lang } = await params;
  if (!isLang(lang)) return {};
  const title = lang === "ar" ? "للمستثمرين | كافو AI للذكاء الاصطناعي والتقنية المالية" : "Investors | Kafo AI, AI and Fintech Venture";
  const description = UI.investors.intro[lang].slice(0, 155);
  return { title: { absolute: title }, description, alternates: bothLangs(lang, "/investors"), openGraph: { title, description, url: `/${lang}/investors` } };
}

export default async function Investors({ params }: P) {
  const { lang } = await params;
  if (!isLang(lang)) notFound();
  const t = UI.investors;
  return (
    <>
      <JsonLd
        graph={[
          { "@type": "WebPage", url: abs(`/${lang}/investors`), name: t.h1[lang], inLanguage: lang, about: { "@id": ORG_ID } },
          { "@type": "BreadcrumbList", itemListElement: [{ "@type": "ListItem", position: 1, name: UI.home[lang], item: abs(`/${lang}`) }, { "@type": "ListItem", position: 2, name: t.h1[lang], item: abs(`/${lang}/investors`) }] },
        ]}
      />
      <header className="hero sub">
        <div className="wrap">
          <Crumbs lang={lang} trail={[{ name: t.h1[lang] }]} />
          <h1>{t.h1[lang]}</h1>
          <p className="lead">{t.intro[lang]}</p>
          <div className="btn-row">
            <a className="btn" href={`mailto:${INVEST_EMAIL}?subject=${encodeURIComponent("Kafo AI investor access request")}`}>
              {t.cta[lang]} <Arrow />
            </a>
          </div>
        </div>
      </header>
      <div className="wrap">
        <div className="section-head">
          <h2>{t.thesis[lang]}</h2>
        </div>
        <div className="grid cols-3">
          {UI.thesis.map((x, i) => (
            <div key={x.t.en} className="tile">
              <span className="n">{String(i + 1).padStart(2, "0")}</span>
              <h3>{x.t[lang]}</h3>
              <p>{x.d[lang]}</p>
            </div>
          ))}
        </div>
        <div className="section-head">
          <h2>{t.how[lang]}</h2>
        </div>
        <ol className="steps">
          {t.steps.map((s) => (
            <li key={s.t.en}>
              <strong>{s.t[lang]}</strong>
              {s.d[lang]}
            </li>
          ))}
        </ol>
        <div className="section-head">
          <h2>{t.kindsLabel[lang]}</h2>
        </div>
        <ul className="chips">
          {t.kinds.map((k) => (
            <li key={k.en}>{k[lang]}</li>
          ))}
        </ul>
        <p className="meta" style={{ maxWidth: "72ch", marginTop: "var(--s-6)" }}>
          {t.note[lang]}
        </p>
      </div>
    </>
  );
}
