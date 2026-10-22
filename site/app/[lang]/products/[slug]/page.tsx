import { notFound } from 'next/navigation';
import Link from 'next/link';
import type { Metadata } from 'next';
import { isValidLang } from '@/lib/i18n';
import type { Lang } from '@/lib/i18n';
import { t } from '@/lib/i18n';
import { products, getProduct, SITE_URL } from '@/lib/products';
import { buildMetadata, productJsonLd, faqJsonLd, breadcrumbJsonLd } from '@/lib/seo';
import JsonLd from '@/components/JsonLd';
import ProductCard from '@/components/ProductCard';

export function generateStaticParams() {
  const slugs = products.map(p => p.slug);
  const langs = ['en', 'ar'];
  return langs.flatMap(lang => slugs.map(slug => ({ lang, slug })));
}

export async function generateMetadata({ params }: { params: Promise<{ lang: string; slug: string }> }): Promise<Metadata> {
  const { lang, slug } = await params;
  if (!isValidLang(lang)) return {};
  const product = getProduct(slug);
  if (!product) return {};

  if (lang === 'ar') {
    return {
      title: `${product.nameEn} | ${product.taglineAr} — كافو AI`,
      description: product.descAr,
      alternates: {
        canonical: `${SITE_URL}/ar/products/${slug}`,
        languages: {
          'en': `${SITE_URL}/en/products/${slug}`,
          'ar': `${SITE_URL}/ar/products/${slug}`,
          'x-default': `${SITE_URL}/ar/products/${slug}`,
        },
      },
    };
  }

  return buildMetadata({
    title: `${product.nameEn} — ${product.taglineEn} | Kafo AI`,
    description: product.descEn,
    path: `/products/${slug}`,
    lang: 'en',
  });
}

function FeatureStatusBadge({ status }: { status: string }) {
  const colours: Record<string, string> = {
    LIVE: '#6FE3A8',
    READY: '#3FD4C4',
    'IN PROGRESS': '#F2B866',
    PLANNED: '#7F8DA6',
  };
  return (
    <span
      className="mono text-[10px] font-medium px-2 py-0.5 rounded"
      style={{ color: colours[status] ?? '#A9B6CB', border: `1px solid ${colours[status] ?? '#A9B6CB'}33` }}
    >
      {status}
    </span>
  );
}

export default async function ProductPage({ params }: { params: Promise<{ lang: string; slug: string }> }) {
  const { lang: rawLang, slug } = await params;
  if (!isValidLang(rawLang)) notFound();
  const lang = rawLang as Lang;
  const isAr = lang === 'ar';

  const product = getProduct(slug);
  if (!product) notFound();

  const otherProducts = products.filter(p => p.slug !== slug).slice(0, 3);

  const pJsonLd = productJsonLd(slug, lang);
  const faqData = product.faq.map(f => ({ q: isAr ? f.qAr : f.q, a: isAr ? f.aAr : f.a }));
  const breadcrumbs = breadcrumbJsonLd([
    { name: 'Kafo AI', url: `${SITE_URL}/en` },
    { name: 'Products', url: `${SITE_URL}/en/products` },
    { name: product.nameEn, url: `${SITE_URL}/en/products/${slug}` },
  ]);

  return (
    <>
      {pJsonLd && <JsonLd data={pJsonLd} />}
      <JsonLd data={faqJsonLd(faqData)} />
      <JsonLd data={breadcrumbs} />

      {/* ── Breadcrumb ── */}
      <nav
        className="max-w-[1280px] mx-auto px-6 md:px-14 pt-6 text-[13px]"
        style={{ color: '#7F8DA6' }}
        aria-label="Breadcrumb"
      >
        <ol className={`flex items-center gap-2 flex-wrap ${isAr ? 'flex-row-reverse' : ''}`}>
          <li>
            <Link href={`/${lang}`} className="hover:text-[#A9B6CB] transition-colors">
              Kafo AI
            </Link>
          </li>
          <li aria-hidden="true" className="mx-1" style={{ color: '#3E4C66' }}>/</li>
          <li>
            <Link href={`/${lang}/products`} className="hover:text-[#A9B6CB] transition-colors">
              {t('nav.products', lang)}
            </Link>
          </li>
          <li aria-hidden="true" className="mx-1" style={{ color: '#3E4C66' }}>/</li>
          <li className="text-[#E8EEF7]">{product.nameEn}</li>
        </ol>
      </nav>

      {/* ── Hero ── */}
      <section
        className="max-w-[1280px] mx-auto px-6 md:px-14 pt-12 pb-16"
        style={{
          background: slug === 'lasttable'
            ? 'radial-gradient(circle at 85% 40%, rgba(200,71,95,.14), transparent 55%)'
            : undefined,
        }}
      >
        <div className={`flex flex-col gap-5 max-w-[780px] ${isAr ? 'text-right ml-auto' : ''}`}>
          <div className={`flex items-center gap-3 flex-wrap ${isAr ? 'flex-row-reverse' : ''}`}>
            <span
              className="mono text-[11px] font-medium tracking-[.14em] uppercase"
              style={{ color: product.accent }}
            >
              {isAr ? product.categoryAr : product.categoryEn}
            </span>
            <span
              className={`mono text-[10px] font-medium px-2 py-0.5 rounded ${
                product.status === 'LAUNCH-READY' ? 'badge-ready' :
                product.status === 'OPEN TESTING' ? 'badge-testing' : 'badge-pre'
              }`}
            >
              {isAr ? product.statusAr : product.status}
            </span>
          </div>

          <h1 className="m-0 font-semibold text-[56px] md:text-[72px] leading-[1.01] ltr" style={{ color: '#E8EEF7' }}>
            {product.nameEn}
          </h1>

          <p className="m-0 text-[18px] md:text-[20px] leading-[1.6]" style={{ color: '#A9B6CB' }}>
            <strong style={{ color: '#E8EEF7', fontWeight: 500 }}>
              {isAr ? product.nameAr : product.nameEn} {' '}
            </strong>
            {isAr ? product.longDescAr : product.longDescEn}
          </p>

          <div className={`flex flex-wrap gap-3 ${isAr ? 'flex-row-reverse' : ''}`}>
            {product.externalUrl && (
              <a
                href={product.externalUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-3 rounded-full font-semibold text-[14px] text-white transition-opacity hover:opacity-85"
                style={{ background: product.accent === '#5CC8F0' ? '#0B7FA3' : product.accent === '#C8475F' ? '#C8475F' : product.accent }}
              >
                {t('product.visitSite', lang)}
              </a>
            )}
            <Link
              href={`/${lang}/partner`}
              className="px-5 py-3 rounded-full text-[14px] transition-colors hover:bg-white/5"
              style={{ border: '1px solid rgba(148,180,220,.3)' }}
            >
              {t('product.partnerCta', lang)}
            </Link>
          </div>
        </div>
      </section>

      {/* ── Features Table ── */}
      <section className="max-w-[1280px] mx-auto px-6 md:px-14 py-16">
        <div className="grid md:grid-cols-[280px_1fr] gap-10 md:gap-16">
          <h2 className="serif text-[32px] md:text-[38px] leading-[1.15] md:sticky md:top-24 self-start">
            {t('product.features', lang)}
          </h2>
          <div style={{ borderTop: '1px solid rgba(148,180,220,.12)' }}>
            {product.features.map(f => (
              <div
                key={f.title}
                className={`grid gap-4 py-5 ${isAr ? 'md:grid-cols-[1fr_180px_120px]' : 'md:grid-cols-[200px_1fr_120px]'}`}
                style={{ borderBottom: '1px solid rgba(148,180,220,.12)' }}
              >
                <strong className="font-semibold text-[15px]">
                  {isAr ? f.titleAr : f.title}
                </strong>
                <p className="text-[14px] leading-[1.6] m-0" style={{ color: '#A9B6CB' }}>
                  {isAr ? f.descAr : f.desc}
                </p>
                <div className={`${isAr ? '' : 'md:text-right'}`}>
                  <FeatureStatusBadge status={f.status} />
                </div>
              </div>
            ))}
          </div>
        </div>
        <p className="mt-4 text-[12px]" style={{ color: '#7F8DA6' }}>
          {t('product.statusDate', lang)}
        </p>
      </section>

      {/* ── LastTable: Three Connected Systems ── */}
      {product.ltSystems && (
        <section className="max-w-[1280px] mx-auto px-6 md:px-14 pb-16">
          <div className="flex items-end justify-between mb-6">
            <h2 className="serif text-[36px] leading-[1.1]">
              {t('product.threeConnected', lang)}
            </h2>
            <span className="text-[13px] hidden md:block" style={{ color: '#7F8DA6' }}>
              {t('product.statusDate', lang)}
            </span>
          </div>
          <div className="grid md:grid-cols-3 gap-4">
            {product.ltSystems.map(sys => (
              <div
                key={sys.key}
                className="p-6 rounded-2xl flex flex-col gap-3"
                style={{
                  background: sys.accent === '#3FD4C4' ? '#0E1A30' : '#0A1222',
                  border: `1px solid ${sys.accent === '#3FD4C4' ? 'rgba(63,212,196,.35)' : 'rgba(148,180,220,.14)'}`,
                }}
              >
                <span className="mono text-[10px] font-medium tracking-[.1em]" style={{ color: '#E0708A' }}>
                  {isAr ? sys.keyAr : sys.key}
                </span>
                <strong className="text-[19px] font-semibold">
                  {isAr ? sys.titleAr : sys.title}
                </strong>
                <p className="text-[14px] leading-[1.6] m-0" style={{ color: '#A9B6CB' }}>
                  {isAr ? sys.descAr : sys.desc}
                </p>
                <span
                  className="mono text-[11px] font-medium mt-1"
                  style={{ color: sys.accent === '#3FD4C4' ? '#F2B866' : '#6FE3A8' }}
                >
                  {sys.status}
                </span>
              </div>
            ))}
          </div>
          <p className="mt-4 text-[13px]" style={{ color: '#7F8DA6' }}>
            {isAr
              ? 'GrowthOS نظام منفصل لكافو AI. يتصل بـ LastTable من خلال واجهة برمجية آمنة بمفاتيح محدودة الصلاحيات وليس جزءًا من تطبيق LastTable.'
              : 'GrowthOS is a separate Kafo AI system. It connects to LastTable through a secure API with scoped keys and is not part of the LastTable app.'}
          </p>
        </section>
      )}

      {/* ── FAQ ── */}
      {product.faq.length > 0 && (
        <section className="max-w-[1280px] mx-auto px-6 md:px-14 pb-16">
          <div
            className="p-8 md:p-12 rounded-2xl grid md:grid-cols-[280px_1fr] gap-10"
            style={{ background: '#0A1222', border: '1px solid rgba(148,180,220,.12)' }}
          >
            <h2 className="serif text-[28px] md:text-[32px] leading-[1.2]">
              {t('product.faq', lang)}
            </h2>
            <dl className="flex flex-col gap-5">
              {product.faq.map((f, i) => (
                <div
                  key={i}
                  className="flex flex-col gap-2"
                  style={{ borderTop: i > 0 ? '1px solid rgba(148,180,220,.12)' : 'none', paddingTop: i > 0 ? '20px' : 0 }}
                >
                  <dt className="font-semibold text-[15px]">{isAr ? f.qAr : f.q}</dt>
                  <dd className="text-[15px] leading-[1.65] m-0" style={{ color: '#A9B6CB' }}>
                    {isAr ? f.aAr : f.a}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </section>
      )}

      {/* ── Partner CTA ── */}
      <section className="max-w-[1280px] mx-auto px-6 md:px-14 pb-16">
        <div
          className={`p-8 rounded-2xl flex flex-col sm:flex-row items-center justify-between gap-6 ${isAr ? 'sm:flex-row-reverse text-right' : ''}`}
          style={{ background: '#0E1A30', border: '1px solid rgba(148,180,220,.18)' }}
        >
          <p className="font-semibold text-[18px]">{t('product.partnerBanner', lang)}</p>
          <Link
            href={`/${lang}/partner`}
            className="px-5 py-3 rounded-full font-semibold text-[14px] text-[#04131A] flex-none transition-opacity hover:opacity-90"
            style={{ background: '#3FD4C4' }}
          >
            {t('product.partnerBannerCta', lang)}
          </Link>
        </div>
      </section>

      {/* ── Related Products ── */}
      <section className="max-w-[1280px] mx-auto px-6 md:px-14 pb-20">
        <h2 className="serif text-[28px] mb-6">{t('product.relatedProducts', lang)}</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {otherProducts.map(p => (
            <ProductCard key={p.slug} product={p} lang={lang} />
          ))}
        </div>
      </section>
    </>
  );
}
