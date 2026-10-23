import Link from "next/link";
import { LangSwitch } from "./LangSwitch";
import { MobileNav } from "./MobileNav";
import { PRODUCTS, UI, href, type Lang } from "@/lib/i18n";

/** Directional arrow that mirrors in RTL (CSS). */
export function Arrow() {
  return (
    <span className="arr" aria-hidden="true">
      →
    </span>
  );
}

export function Header({ lang }: { lang: Lang }) {
  const l = (k: keyof typeof UI.nav) => UI.nav[k][lang];
  return (
    <header className="site-header">
      <div className="wrap">
        <Link href={href(lang)} className="brand">
          <span className="mark" aria-hidden="true">
            K
          </span>
          {UI.brand[lang]}
        </Link>
        <MobileNav label={lang === "ar" ? "القائمة" : "Menu"}>
          <nav aria-label="Primary" className="nav-links">
            <Link href={href(lang, "/products")}>{l("products")}</Link>
            <Link href={href(lang, "/for-banks")}>{l("forBanks")}</Link>
            <Link href="/en/insights">{l("insights")}</Link>
            <Link href="/en/research">{l("research")}</Link>
            <Link href={href(lang, "/investors")}>{l("investors")}</Link>
          </nav>
          <div className="nav-actions">
            <LangSwitch lang={lang} />
            <Link href={href(lang, "/partner")} className="btn">
              {l("partner")}
            </Link>
          </div>
        </MobileNav>
      </div>
    </header>
  );
}

export function Footer({ lang }: { lang: Lang }) {
  const ar = lang === "ar";
  return (
    <footer className="site-footer">
      <div className="wrap">
        <div className="footer-grid">
          <div className="footer-about">
            <Link href={href(lang)} className="brand">
              <span className="mark" aria-hidden="true">
                K
              </span>
              {UI.brand[lang]}
            </Link>
            <p>{UI.h1[lang]}</p>
          </div>
          <nav aria-label={UI.nav.products[lang]}>
            <h2>{UI.nav.products[lang]}</h2>
            <ul>
              {PRODUCTS.map((p) => (
                <li key={p.slug}>
                  <Link href={href(lang, `/products/${p.slug}`)}>{p.name}</Link>
                </li>
              ))}
            </ul>
          </nav>
          <nav aria-label={ar ? "الشركة" : "Company"}>
            <h2>{ar ? "الشركة" : "Company"}</h2>
            <ul>
              <li><Link href={href(lang, "/for-banks")}>{UI.nav.forBanks[lang]}</Link></li>
              <li><Link href={href(lang, "/investors")}>{UI.nav.investors[lang]}</Link></li>
              <li><Link href={href(lang, "/partner")}>{UI.nav.partner[lang]}</Link></li>
              <li><Link href="/en/insights">{UI.nav.insights[lang]}</Link></li>
              <li><Link href="/en/research">{UI.nav.research[lang]}</Link></li>
            </ul>
          </nav>
          <nav aria-label={ar ? "قانوني" : "Legal"}>
            <h2>{ar ? "قانوني" : "Legal"}</h2>
            <ul>
              <li><Link href={href(lang, "/privacy")}>{ar ? "الخصوصية" : "Privacy"}</Link></li>
              <li><Link href={href(lang, "/terms")}>{ar ? "الشروط" : "Terms"}</Link></li>
              <li><Link href="/llms.txt">llms.txt</Link></li>
              <li><Link href="/feed.xml">RSS</Link></li>
            </ul>
          </nav>
          <nav aria-label={ar ? "اللغات" : "Languages"}>
            <h2>{ar ? "اللغات" : "Languages"}</h2>
            <ul>
              <li><Link href="/en" hrefLang="en" lang="en">English</Link></li>
              <li><Link href="/ar" hrefLang="ar" lang="ar">العربية</Link></li>
            </ul>
          </nav>
        </div>
        <div className="footer-base">
          <span>
            © {new Date().getFullYear()} {UI.brand[lang]} · {UI.footer[lang]}
          </span>
        </div>
      </div>
    </footer>
  );
}

export function Crumbs({ lang, trail }: { lang: Lang; trail: { name: string; to?: string }[] }) {
  return (
    <nav className="crumbs" aria-label="Breadcrumb">
      <ol>
        <li>
          <Link href={href(lang)}>{UI.home[lang]}</Link>
        </li>
        {trail.map((t) => (
          <li key={t.name} {...(t.to ? {} : { "aria-current": "page" as const })}>
            {t.to ? <Link href={t.to}>{t.name}</Link> : t.name}
          </li>
        ))}
      </ol>
    </nav>
  );
}
