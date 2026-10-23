import type { Metadata, Viewport } from "next";
import { notFound } from "next/navigation";
import "../globals.css";
import { Footer, Header } from "@/components/SiteChrome";
import { LANGS, dirOf, isLang } from "@/lib/i18n";
import { SITE, SITE_URL, bothLangs } from "@/lib/site";

export const dynamicParams = false;

export function generateStaticParams() {
  return LANGS.map((lang) => ({ lang }));
}

export const viewport: Viewport = { themeColor: "#070D1A", width: "device-width", initialScale: 1 };

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const { lang } = await params;
  const ar = lang === "ar";
  return {
    metadataBase: new URL(SITE_URL),
    title: { default: ar ? SITE.titleAr : SITE.title, template: `%s | ${ar ? "كافو AI" : SITE.name}` },
    description: ar ? SITE.descriptionAr : SITE.description,
    applicationName: SITE.name,
    alternates: { ...bothLangs(isLang(lang) ? lang : "en"), types: { "application/rss+xml": "/feed.xml" } },
    openGraph: { type: "website", siteName: SITE.name, locale: ar ? "ar_AR" : "en_US" },
    twitter: { card: "summary_large_image" },
    robots: { index: true, follow: true },
  };
}

export default async function RootLayout({ children, params }: { children: React.ReactNode; params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  if (!isLang(lang)) notFound();
  return (
    <html lang={lang} dir={dirOf(lang)}>
      <head>
        <noscript>
          <style>{`.menu-btn{display:none!important}.nav-panel{display:flex!important;position:static!important;flex-direction:row!important;flex-wrap:wrap;padding:0!important;border:0!important;box-shadow:none!important}.site-header .wrap{flex-wrap:wrap}`}</style>
        </noscript>
      </head>
      <body>
        <a className="skip" href="#content">
          {lang === "ar" ? "انتقل إلى المحتوى" : "Skip to content"}
        </a>
        <Header lang={lang} />
        <main id="content">{children}</main>
        <Footer lang={lang} />
      </body>
    </html>
  );
}
