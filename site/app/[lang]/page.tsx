import { notFound } from 'next/navigation';
import Link from 'next/link';
import type { Metadata } from 'next';
import { isValidLang } from '@/lib/i18n';
import type { Lang } from '@/lib/i18n';
import { t } from '@/lib/i18n';
import { products, SITE_URL } from '@/lib/products';
import { buildMetadata, buildAlternates, orgJsonLd, websiteJsonLd, faqJsonLd } from '@/lib/seo';
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
      title: 'كافو AI | بنية تحتية مالية ذكية بالذكاء الاصطناعي',
      description: 'كافو AI شركة ذكاء اصطناعي وتقنية مالية إماراتية تبني سبعة منتجات في ذكاء المخاطر وإدارة المال الشخصي والائتمان على البلوك تشين والتمويل الرقمي الإسلامي والضيافة.',
      alternates: buildAlternates(),
      openGraph: {
        title: 'كافو AI | بنية تحتية مالية ذكية',
        description: 'شركة ذكاء اصطناعي وتقنية مالية إماراتية — سبعة منتجات للبنوك والمؤسسات المالية والمستهلكين.',
        url: `${SITE_URL}/ar`,
        siteName: 'Kafo AI',
        locale: 'ar_AE',
        type: 'website',
      },
    };
  }

  return buildMetadata({
    title: 'Kafo AI — Intelligent Financial Infrastructure | AI & Fintech',
    description: 'UAE-based AI and fintech venture building seven products in risk intelligence, personal finance, blockchain credit, Islamic digital finance and hospitality technology.',
    path: '',
    lang: 'en',
  });
}

const ringPositions = [
  { angle: -90 },
  { angle: -38 },
  { angle: 14 },
  { angle: 66 },
  { angle: 118 },
  { angle: 170 },
  { angle: 222 },
];

const homeFaqs = [
  {
    q: 'What is Kafo AI?',
    qAr: 'ما هي كافو AI؟',
    a: 'Kafo AI is a UAE-based AI and fintech venture that builds intelligent financial infrastructure. It operates seven products across AI risk intelligence, personal finance, blockchain credit, digital savings circles, Islamic digital finance research, embedded fintech and hospitality growth.',
    aAr: 'كافو AI مشروع ذكاء اصطناعي وتقنية مالية إماراتي يبني بنية تحتية مالية ذكية. يضم سبعة منتجات في ذكاء المخاطر والتمويل الشخصي والائتمان على البلوك تشين والجمعيات الرقمية وبحوث التمويل الرقمي الإسلامي والتقنية المالية المدمجة ونمو قطاع الضيافة.',
  },
  {
    q: 'Where is Kafo AI based?',
    qAr: 'أين يقع مقر كافو AI؟',
    a: 'Kafo AI is based in the United Arab Emirates, with R&D activities conducted in partnership with an Irish technology company.',
    aAr: 'يقع مقر كافو AI في الإمارات العربية المتحدة، مع أنشطة بحث وتطوير تُنفَّذ بالشراكة مع شركة تقنية إيرلندية.',
  },
  {
    q: 'How does Kafo AI work with banks?',
    qAr: 'كيف تعمل كافو AI مع البنوك؟',
    a: 'Kafo AI works with banks and fintechs through pilot programmes, proof-of-concept partnerships and co-development across AI risk intelligence, embedded finance and credit intelligence.',
    aAr: 'تعمل كافو AI مع البنوك والمؤسسات المالية من خلال البرامج التجريبية وشراكات إثبات المفهوم والتطوير المشترك في ذكاء المخاطر والتمويل المدمج وذكاء الائتمان.',
  },
];

export default async function HomePage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang: rawLang } = await params;
  if (!isValidLang(rawLang)) notFound();
  const lang = rawLang as Lang;
  const isAr = lang === 'ar';

  const faqEn = homeFaqs.map(f => ({ q: f.q, a: f.a }));
  const faqAr = homeFaqs.map(f => ({ q: f.qAr, a: f.aAr }));
  const faqForSchema = isAr ? faqAr : faqEn;

  return (
    <>
      <JsonLd data={[orgJsonLd(), websiteJsonLd(), faqJsonLd(faqForSchema)]} />

      {/* ── Hero ── */}
      <section className="max-w-[1280px] mx-auto px-6 md:px-14 pt-20 pb-16 md:pt-28 md:pb-20 grid md:grid-cols-2 gap-12 md:gap-16 items-center">
        <div className="flex flex-col gap-6 md:gap-8">
          <div
            className="mono text-[11px] font-medium tracking-[.14em] uppercase"
            style={{ color: '#3FD4C4' }}
          >
            {t('home.hero.label', lang)}
          </div>

          <h1 className={`serif m-0 leading-[1.02] tracking-[-0.01em] text-balance text-[#E8EEF7] ${isAr ? 'text-[44px] md:text-[56px]' : 'text-[52px] md:text-[72px]'}`}>
            {t('home.hero.h1', lang)}
          </h1>

          <p className="text-[17px] md:text-[18px] leading-[1.65] max-w-[520px]" style={{ color: '#A9B6CB' }}>
            {t('home.hero.desc', lang)}
          </p>

          <div className={`flex flex-col sm:flex-row gap-3 ${isAr ? 'sm:flex-row-reverse' : ''}`}>
            <Link
              href={`/${lang}/products`}
              className="px-5 py-3.5 rounded-full font-semibold text-[15px] text-[#04131A] text-center transition-opacity hover:opacity-90"
              style={{ background: '#3FD4C4' }}
            >
              {t('home.hero.cta1', lang)}
            </Link>
            <Link
              href={`/${lang}/partner`}
              className="px-5 py-3.5 rounded-full text-[15px] text-center transition-colors hover:bg-white/5"
              style={{ border: '1px solid rgba(148,180,220,.3)' }}
            >
              {t('home.hero.cta2', lang)}
            </Link>
          </div>
        </div>

        {/* Orbit diagram */}
        <div
          className="relative h-[360px] md:h-[420px] rounded-2xl hidden md:block"
          style={{
            background: 'radial-gradient(circle at 50% 50%, rgba(63,212,196,.1), transparent 60%)',
            border: '1px solid rgba(148,180,220,.12)',
          }}
        >
          {/* Dashed ring */}
          <div
            className="absolute"
            style={{
              inset: '60px',
              borderRadius: '50%',
              border: '1px dashed rgba(63,212,196,.25)',
            }}
          />
          {/* Centre */}
          <div
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[100px] h-[100px] rounded-full flex items-center justify-center font-semibold text-[13px]"
            style={{
              background: '#0E1A30',
              border: '1px solid #3FD4C4',
              boxShadow: '0 0 40px rgba(63,212,196,.2)',
              color: '#E8EEF7',
            }}
          >
            Kafo AI
          </div>
          {/* Orbit nodes */}
          {products.map((p, i) => {
            const angleRad = (ringPositions[i].angle * Math.PI) / 180;
            const rx = 39, ry = 42;
            const x = 50 + rx * Math.cos(angleRad);
            const y = 50 + ry * Math.sin(angleRad);
            const label = p.nameEn === 'Islamic Crypto Lending' ? 'Islamic Finance' : p.nameEn;
            return (
              <div
                key={p.slug}
                className="absolute -translate-x-1/2 -translate-y-1/2 px-3 py-1.5 rounded-full text-[12px] flex items-center gap-2 whitespace-nowrap"
                style={{
                  left: `${x}%`,
                  top: `${y}%`,
                  background: '#0B1528',
                  border: '1px solid rgba(148,180,220,.2)',
                }}
              >
                <span className="w-[7px] h-[7px] rounded-full flex-none" style={{ background: p.accent }} />
                {label}
              </div>
            );
          })}
        </div>
      </section>

      {/* ── GEO Answer Block ── */}
      <section
        className="border-y"
        style={{ borderColor: 'rgba(148,180,220,.12)' }}
      >
        <div className="max-w-[1280px] mx-auto px-6 md:px-14 py-10 grid md:grid-cols-3 gap-8">
          <div className="flex flex-col gap-4">
            <h2 className="text-[22px] font-semibold" style={{ color: '#E8EEF7' }}>
              {t('home.what.heading', lang)}
            </h2>
            <p className="text-[15px] leading-[1.7]" style={{ color: '#A9B6CB' }}>
              {t('home.what.body', lang)}
            </p>
          </div>
          {[
            { label: t('home.pillar1.label', lang), text: t('home.pillar1.text', lang) },
            { label: t('home.pillar2.label', lang), text: t('home.pillar2.text', lang) },
          ].map(pillar => (
            <div
              key={pillar.label}
              className="flex flex-col gap-3 pl-6 md:pl-0 md:border-l border-t md:border-t-0 pt-6 md:pt-0 md:pl-8"
              style={{ borderColor: 'rgba(148,180,220,.12)' }}
            >
              <span className="mono text-[11px] font-medium" style={{ color: '#3FD4C4', letterSpacing: '.12em' }}>
                {pillar.label}
              </span>
              <p className="text-[15px] leading-[1.6]" style={{ color: '#A9B6CB' }}>
                {pillar.text}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ── Portfolio Grid ── */}
      <section className="max-w-[1280px] mx-auto px-6 md:px-14 py-20 md:py-24 flex flex-col gap-10">
        <div className={`flex items-end justify-between ${isAr ? 'flex-row-reverse' : ''}`}>
          <h2 className="serif text-[40px] md:text-[48px] leading-[1.1]">
            {t('home.portfolio.heading', lang)}
          </h2>
          <span className="text-[14px] hidden md:block" style={{ color: '#A9B6CB' }}>
            {t('home.portfolio.sub', lang)}
          </span>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {products.map(p => (
            <ProductCard key={p.slug} product={p} lang={lang} />
          ))}
        </div>
      </section>

      {/* ── Three Pillars ── */}
      <section
        className="border-y"
        style={{ borderColor: 'rgba(148,180,220,.12)' }}
      >
        <div className="max-w-[1280px] mx-auto grid md:grid-cols-3">
          {[
            { label: t('home.pillar1.label', lang), text: t('home.pillar1.text', lang) },
            { label: t('home.pillar2.label', lang), text: t('home.pillar2.text', lang) },
            { label: t('home.pillar3.label', lang), text: t('home.pillar3.text', lang) },
          ].map((p, i) => (
            <div
              key={p.label}
              className={`px-6 md:px-12 py-8 flex flex-col gap-2 ${i < 2 ? 'border-b md:border-b-0 md:border-r' : ''}`}
              style={{ borderColor: 'rgba(148,180,220,.12)' }}
            >
              <span className="mono text-[11px] font-medium" style={{ color: '#3FD4C4', letterSpacing: '.12em' }}>
                {p.label}
              </span>
              <p className="text-[15px] leading-[1.55]" style={{ color: '#A9B6CB' }}>
                {p.text}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ── For Banks CTA ── */}
      <section className="max-w-[1280px] mx-auto px-6 md:px-14 py-20">
        <div
          className={`p-10 md:p-14 rounded-2xl grid md:grid-cols-2 gap-8 md:gap-12 items-center ${isAr ? 'text-right' : ''}`}
          style={{
            background: '#0E1A30',
            border: '1px solid rgba(63,212,196,.2)',
          }}
        >
          <div className="flex flex-col gap-4">
            <h2 className="serif text-[36px] md:text-[40px] leading-[1.15]">
              {t('home.banks.heading', lang)}
            </h2>
            <p className="text-[16px] leading-[1.65]" style={{ color: '#A9B6CB' }}>
              {t('home.banks.desc', lang)}
            </p>
          </div>
          <div className={`flex ${isAr ? 'justify-start' : 'justify-end'}`}>
            <Link
              href={`/${lang}/partner`}
              className="px-6 py-3.5 rounded-full font-semibold text-[15px] text-[#04131A] transition-opacity hover:opacity-90"
              style={{ background: '#3FD4C4' }}
            >
              {t('home.banks.cta', lang)}
            </Link>
          </div>
        </div>
      </section>

      {/* ── FAQ (GEO) ── */}
      <section className="max-w-[1280px] mx-auto px-6 md:px-14 pb-20">
        <div
          className="p-8 md:p-12 rounded-2xl grid md:grid-cols-[300px_1fr] gap-10"
          style={{ background: '#0A1222', border: '1px solid rgba(148,180,220,.12)' }}
        >
          <h2 className="serif text-[32px] leading-[1.2]">
            {t('home.faq.heading', lang)}
          </h2>
          <dl className="flex flex-col gap-6">
            {homeFaqs.map((f, i) => (
              <div key={i} className="flex flex-col gap-2" style={{ borderTop: i > 0 ? '1px solid rgba(148,180,220,.12)' : 'none', paddingTop: i > 0 ? '24px' : 0 }}>
                <dt className="font-semibold text-[15px]">{isAr ? f.qAr : f.q}</dt>
                <dd className="text-[15px] leading-[1.65] m-0" style={{ color: '#A9B6CB' }}>
                  {isAr ? f.aAr : f.a}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </section>
    </>
  );
}
