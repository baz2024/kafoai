import type { Lang } from "./i18n";

export const SITE_URL = (process.env.NEXT_PUBLIC_SITE_URL ?? "https://kafoai.com").replace(/\/$/, "");

export const SITE = {
  name: "Kafo AI",
  title: "Kafo AI: Intelligent Financial Infrastructure | AI & Fintech",
  titleAr: "كافو AI | بنية تحتية مالية ذكية بالذكاء الاصطناعي",
  description:
    "AI and fintech venture building OmniRisk, AI Wealth, RayaChain, Circul and Islamic digital finance research, for banks and fintechs.",
  descriptionAr: "شركة ناشئة في الذكاء الاصطناعي والتقنية المالية: ذكاء المخاطر، إدارة المال الشخصي، الجمعيات الرقمية والتمويل الإسلامي الرقمي.",
  languages: ["ar", "en"],
};

export const abs = (path: string) => `${SITE_URL}${path}`;

// @id values shared across JSON-LD blocks so the entity graph stays connected.
export const ORG_ID = `${SITE_URL}/#org`;
export const WEBSITE_ID = `${SITE_URL}/#website`;

// No areaServed: the copy is market-agnostic.
export const organizationLd = {
  "@type": "Organization",
  "@id": ORG_ID,
  name: SITE.name,
  alternateName: "كافو AI",
  url: SITE_URL,
  description: SITE.description,
  knowsLanguage: SITE.languages,
};

// Canonical + hreflang for a page that exists in both languages. x-default points to Arabic.
export function bothLangs(lang: Lang, path = "") {
  return {
    canonical: `/${lang}${path}`,
    languages: { ar: `/ar${path}`, en: `/en${path}`, "x-default": `/ar${path}` },
  };
}

// Canonical only, for English-only pages (insights, research).
export const enOnly = (path: string) => ({ canonical: `/en${path}` });
