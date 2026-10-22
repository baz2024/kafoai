import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { isValidLang } from '@/lib/i18n';
import type { Lang } from '@/lib/i18n';
import { t } from '@/lib/i18n';
import { products, SITE_URL } from '@/lib/products';
import { buildMetadata } from '@/lib/seo';
import JsonLd from '@/components/JsonLd';
import ProductCard from '@/components/ProductCard';

export function generateStaticParams() {
  return [{ lang: 'en' }, { lang: 'ar' }];
}

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const { lang } = await params;
  if (!isValidLang(lang)) return {};
  if (lang === 'ar') {
    return {
      title: 'منتجات كافو AI | ذكاء اصطناعي وتقنية مالية',
      description: 'سبعة منتجات في ذكاء المخاطر الرقمية وإدارة المال الشخصي والائتمان على البلوك تشين والجمعيات الرقمية والتمويل الإسلامي والتمويل المدمج وحجز المطاعم.',
    };
  }
  return buildMetadata({
    title: 'Kafo AI Products — AI, Fintech & Hospitality Portfolio',
    description: 'Seven products across AI risk intelligence, personal finance, blockchain credit, digital savings circles, Islamic digital finance, embedded fintech and hospitality technology.',
    path: '/products',
    lang: 'en',
  });
}

export default async function ProductsPage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang: rawLang } = await params;
  if (!isValidLang(rawLang)) notFound();
  const lang = rawLang as Lang;
  const isAr = lang === 'ar';

  const itemListJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    'name': lang === 'ar' ? 'منتجات كافو AI' : 'Kafo AI Products',
    'itemListElement': products.map((p, i) => ({
      '@type': 'ListItem',
      'position': i + 1,
      'name': p.nameEn,
      'description': p.descEn,
      'url': `${SITE_URL}/en/products/${p.slug}`,
    })),
  };

  return (
    <>
      <JsonLd data={itemListJsonLd} />

      <div className="max-w-[1280px] mx-auto px-6 md:px-14 py-16 md:py-24">
        <div className={`mb-12 flex flex-col gap-4 ${isAr ? 'text-right' : ''}`}>
          <span
            className="mono text-[11px] font-medium tracking-[.14em] uppercase"
            style={{ color: '#3FD4C4' }}
          >
            {isAr ? 'المنتجات' : 'PRODUCTS'}
          </span>
          <h1 className="serif text-[44px] md:text-[56px] leading-[1.05]">
            {t('products.heading', lang)}
          </h1>
          <p className="text-[17px] leading-[1.6] max-w-[640px]" style={{ color: '#A9B6CB' }}>
            {t('products.sub', lang)}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {products.map(p => (
            <ProductCard key={p.slug} product={p} lang={lang} />
          ))}
        </div>

        {/* Status legend */}
        <div className="mt-10 flex flex-wrap gap-4 text-[12px]" style={{ color: '#7F8DA6' }}>
          <span className="flex items-center gap-2">
            <span className="badge-ready px-2 py-0.5 rounded mono">
              {t('products.launchReady', lang)}
            </span>
            {isAr ? 'جاهز للإطلاق' : 'Ready to launch with partners'}
          </span>
          <span className="flex items-center gap-2">
            <span className="badge-testing px-2 py-0.5 rounded mono">
              {t('products.openTesting', lang)}
            </span>
            {isAr ? 'متاح للاختبار' : 'Available for early testing'}
          </span>
          <span className="flex items-center gap-2">
            <span className="badge-pre px-2 py-0.5 rounded mono">
              {t('products.preLaunch', lang)}
            </span>
            {isAr ? 'بحث وتطوير' : 'Research & development'}
          </span>
        </div>
      </div>
    </>
  );
}
