export const SITE_URL = (process.env.NEXT_PUBLIC_SITE_URL ?? "https://kafoai.com").replace(/\/$/, "");

export const SITE = {
  name: "Kafo AI",
  title: "Kafo AI — Intelligent Financial Infrastructure | AI & Fintech",
  description:
    "AI and fintech venture building OmniRisk, AI Wealth, RayaChain, Circul and Islamic digital finance research, for banks and fintechs.",
  languages: ["ar", "en"],
};

export const abs = (path: string) => `${SITE_URL}${path}`;

// @id values shared across JSON-LD blocks so the entity graph stays connected.
export const ORG_ID = `${SITE_URL}/#org`;
export const WEBSITE_ID = `${SITE_URL}/#website`;

export const organizationLd = {
  "@type": "Organization",
  "@id": ORG_ID,
  name: SITE.name,
  url: SITE_URL,
  description: SITE.description,
  knowsLanguage: SITE.languages,
};
