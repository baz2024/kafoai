import type { Metadata } from 'next';
import type { Lang } from './i18n';
import { products, SITE_URL } from './products';

export function canonicalUrl(lang: Lang, path: string = ''): string {
  const cleanPath = path.startsWith('/') ? path : `/${path}`;
  return `${SITE_URL}/${lang}${cleanPath}`;
}

export function buildAlternates(path: string = '') {
  const cleanPath = path.startsWith('/') ? path : `/${path}`;
  return {
    canonical: `${SITE_URL}/ar${cleanPath}`,
    languages: {
      'en': `${SITE_URL}/en${cleanPath}`,
      'ar': `${SITE_URL}/ar${cleanPath}`,
      'x-default': `${SITE_URL}/ar${cleanPath}`,
    },
  };
}

interface PageSeoInput {
  title: string;
  description: string;
  path?: string;
  lang: Lang;
  image?: string;
}

export function buildMetadata({ title, description, path = '', lang, image }: PageSeoInput): Metadata {
  const canonical = canonicalUrl(lang, path);
  const ogImage = image ?? `${SITE_URL}/og-default.png`;
  return {
    title,
    description,
    alternates: buildAlternates(path),
    openGraph: {
      title,
      description,
      url: canonical,
      siteName: 'Kafo AI',
      images: [{ url: ogImage, width: 1200, height: 630, alt: title }],
      locale: lang === 'ar' ? 'ar_AE' : 'en_US',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [ogImage],
    },
  };
}

// JSON-LD builders

export function orgJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': `${SITE_URL}/#org`,
    'name': 'Kafo AI',
    'url': SITE_URL,
    'description': 'UAE-based AI and fintech venture building intelligent financial infrastructure. Seven products across AI risk intelligence, personal finance, blockchain credit, Islamic digital finance and hospitality technology.',
    'knowsLanguage': ['ar', 'en'],
    'foundingLocation': {
      '@type': 'Place',
      'name': 'United Arab Emirates',
    },
    'areaServed': [
      { '@type': 'Country', 'name': 'United Arab Emirates' },
      { '@type': 'Country', 'name': 'Ireland' },
    ],
    'hasOfferCatalog': {
      '@type': 'OfferCatalog',
      'name': 'Kafo AI Product Portfolio',
      'itemListElement': products.map((p, i) => ({
        '@type': 'SoftwareApplication',
        'position': i + 1,
        'name': p.nameEn,
        'description': p.descEn,
        'applicationCategory': 'FinanceApplication',
        'url': `${SITE_URL}/en/products/${p.slug}`,
      })),
    },
  };
}

export function websiteJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${SITE_URL}/#website`,
    'url': SITE_URL,
    'name': 'Kafo AI',
    'publisher': { '@id': `${SITE_URL}/#org` },
    'inLanguage': ['en', 'ar'],
    'potentialAction': {
      '@type': 'SearchAction',
      'target': `${SITE_URL}/en/insights?q={search_term_string}`,
      'query-input': 'required name=search_term_string',
    },
  };
}

export function faqJsonLd(faqs: { q: string; a: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    'mainEntity': faqs.map(faq => ({
      '@type': 'Question',
      'name': faq.q,
      'acceptedAnswer': {
        '@type': 'Answer',
        'text': faq.a,
      },
    })),
  };
}

export function productJsonLd(slug: string, lang: Lang) {
  const p = products.find(pr => pr.slug === slug);
  if (!p) return null;
  return {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    '@id': `${SITE_URL}/en/products/${p.slug}#app`,
    'name': p.nameEn,
    'description': lang === 'ar' ? p.descAr : p.descEn,
    'applicationCategory': 'FinanceApplication',
    'url': `${SITE_URL}/${lang}/products/${p.slug}`,
    'publisher': { '@id': `${SITE_URL}/#org` },
    'inLanguage': ['en', 'ar'],
    'operatingSystem': 'Web, iOS, Android',
  };
}

export function breadcrumbJsonLd(items: { name: string; url: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    'itemListElement': items.map((item, i) => ({
      '@type': 'ListItem',
      'position': i + 1,
      'name': item.name,
      'item': item.url,
    })),
  };
}

export function articleJsonLd(opts: {
  headline: string;
  description: string;
  url: string;
  datePublished: string;
  dateModified?: string;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    'headline': opts.headline,
    'description': opts.description,
    'url': opts.url,
    'datePublished': opts.datePublished,
    'dateModified': opts.dateModified ?? opts.datePublished,
    'publisher': { '@id': `${SITE_URL}/#org` },
    'author': { '@id': `${SITE_URL}/#org` },
  };
}
