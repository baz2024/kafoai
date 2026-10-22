import { notFound } from 'next/navigation';
import Link from 'next/link';
import type { Metadata } from 'next';
import { isValidLang } from '@/lib/i18n';
import type { Lang } from '@/lib/i18n';
import { t } from '@/lib/i18n';
import { products, SITE_URL } from '@/lib/products';
import { orgJsonLd } from '@/lib/seo';
import JsonLd from '@/components/JsonLd';

export function generateStaticParams() {
  return [{ lang: 'en' }, { lang: 'ar' }];
}

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const { lang } = await params;
  if (!isValidLang(lang)) return {};
  if (lang === 'ar') {
    return {
      title: 'علاقات المستثمرين | كافو AI',
      description: 'استثمر في البنية التحتية لتمويل أذكى. اطلب الوصول إلى غرفة بيانات كافو AI أو تواصل عبر invest@kafoai.com.',
      alternates: {
        canonical: `${SITE_URL}/ar/investors`,
        languages: { 'en': `${SITE_URL}/en/investors`, 'ar': `${SITE_URL}/ar/investors`, 'x-default': `${SITE_URL}/ar/investors` },
      },
    };
  }
  return {
    title: 'Investor Relations | Kafo AI',
    description: 'Invest in the infrastructure of smarter finance. Seven AI and fintech products, UAE-based venture with Irish R&D. Request data room access at invest@kafoai.com.',
    alternates: {
      canonical: `${SITE_URL}/en/investors`,
      languages: { 'en': `${SITE_URL}/en/investors`, 'ar': `${SITE_URL}/ar/investors`, 'x-default': `${SITE_URL}/ar/investors` },
    },
  };
}

const thesis = [
  {
    n: '01',
    en: 'One platform, seven products',
    ar: 'منصة واحدة وسبعة منتجات',
    descEn: 'Shared AI, data and blockchain foundations reduce the cost of each new product and accelerate time to market.',
    descAr: 'أسس مشتركة في الذكاء الاصطناعي والبيانات والبلوك تشين تخفّض كلفة كل منتج جديد وتُسرّع وصوله إلى السوق.',
  },
  {
    n: '02',
    en: 'Arabic-first by design',
    ar: 'العربية أولاً بالتصميم',
    descEn: 'Native Arabic products and Islamic finance research for a market that is underserved by global fintech.',
    descAr: 'منتجات عربية أصيلة وأبحاث في التمويل الإسلامي لسوق لم يُخدَم بما يكفي من التقنية المالية العالمية.',
  },
  {
    n: '03',
    en: 'Evidence over hype',
    ar: 'الدليل قبل الوعود',
    descEn: 'Every public claim is verified against working code. Stages are reported as they are, not as aspirations.',
    descAr: 'كل ادعاء علني يُتحقَّق منه مقابل شيفرة فعلية. المراحل تُعرض كما هي، لا كطموحات.',
  },
];

const investSteps = [
  {
    n: '1',
    en: 'Request access',
    ar: 'اطلب الوصول',
    descEn: 'Send the form below or email invest@kafoai.com.',
    descAr: 'أرسل النموذج أدناه أو راسل invest@kafoai.com.',
  },
  {
    n: '2',
    en: 'Short intro call',
    ar: 'مكالمة تعريفية قصيرة',
    descEn: 'We confirm your fit and what you would like to see.',
    descAr: 'نتأكد من توافقكم ونحدد ما تودّون الاطلاع عليه.',
  },
  {
    n: '3',
    en: 'NDA',
    ar: 'اتفاقية سرية',
    descEn: 'Signed electronically before the data room opens.',
    descAr: 'تُوقَّع إلكترونيًا قبل فتح غرفة البيانات.',
  },
  {
    n: '4',
    en: 'Data room opens',
    ar: 'فتح غرفة البيانات',
    descEn: 'Documents are watermarked to you and every view is logged.',
    descAr: 'الوثائق تحمل علامات مائية باسمك وكل اطلاع مسجَّل.',
  },
];

const stageWidths: Record<string, string> = {
  'LAUNCH-READY': '75%',
  'OPEN TESTING': '62%',
  'PRE-LAUNCH': '50%',
};

export default async function InvestorsPage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang: rawLang } = await params;
  if (!isValidLang(rawLang)) notFound();
  const lang = rawLang as Lang;
  const isAr = lang === 'ar';

  return (
    <>
      <JsonLd data={orgJsonLd()} />

      {/* ── Hero ── */}
      <section
        className="relative overflow-hidden"
        style={{
          background: 'radial-gradient(circle at 80% 40%, rgba(63,212,196,.1), transparent 55%)',
        }}
      >
        <div className="max-w-[1280px] mx-auto px-6 md:px-14 py-24 md:py-32 max-w-[760px]">
          <span
            className="mono text-[11px] font-medium tracking-[.14em] uppercase block mb-6"
            style={{ color: '#3FD4C4' }}
          >
            {t('investors.label', lang)}
          </span>
          <h1 className={`serif m-0 leading-[1.0] text-balance mb-8 ${isAr ? 'text-[40px] md:text-[52px]' : 'text-[56px] md:text-[72px]'}`}>
            {t('investors.heading', lang)}
          </h1>
          <p className="text-[17px] md:text-[19px] leading-[1.65] mb-8 max-w-[600px]" style={{ color: '#A9B6CB' }}>
            {t('investors.desc', lang)}
          </p>
          <div className={`flex flex-col sm:flex-row gap-3 ${isAr ? 'sm:flex-row-reverse' : ''}`}>
            <a
              href="mailto:invest@kafoai.com"
              className="px-6 py-3.5 rounded-full font-semibold text-[15px] text-[#04131A] text-center transition-opacity hover:opacity-90"
              style={{ background: '#3FD4C4' }}
            >
              {t('investors.cta1', lang)}
            </a>
            <a
              href="mailto:invest@kafoai.com"
              className="px-6 py-3.5 rounded-full text-[14px] text-center mono transition-colors hover:bg-white/5"
              style={{ border: '1px solid rgba(148,180,220,.3)' }}
            >
              {t('investors.cta2', lang)}
            </a>
          </div>
        </div>
      </section>

      {/* ── Thesis ── */}
      <section className="border-y" style={{ borderColor: 'rgba(148,180,220,.12)' }}>
        <div className="max-w-[1280px] mx-auto grid md:grid-cols-3">
          {thesis.map((th, i) => (
            <div
              key={th.n}
              className={`px-6 md:px-12 py-10 flex flex-col gap-4 ${i < 2 ? 'border-b md:border-b-0 md:border-r' : ''}`}
              style={{ borderColor: 'rgba(148,180,220,.12)' }}
            >
              <span className="mono text-[11px] font-medium" style={{ color: '#3FD4C4', letterSpacing: '.12em' }}>
                {th.n}
              </span>
              <strong className="serif text-[24px] leading-[1.2]">
                {isAr ? th.ar : th.en}
              </strong>
              <p className="text-[15px] leading-[1.65] m-0" style={{ color: '#A9B6CB' }}>
                {isAr ? th.descAr : th.descEn}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ── Portfolio Stage Chart ── */}
      <section className="max-w-[1280px] mx-auto px-6 md:px-14 py-16 md:py-20">
        <div className="grid md:grid-cols-[340px_1fr] gap-12">
          <div className="flex flex-col gap-4">
            <h2 className="serif text-[36px] md:text-[44px] leading-[1.1]">
              {t('investors.portfolio.heading', lang)}
            </h2>
            <p className="text-[15px] leading-[1.65]" style={{ color: '#A9B6CB' }}>
              {t('investors.portfolio.sub', lang)}
            </p>
          </div>
          <div>
            <div
              className="grid gap-1 mb-4 mono text-[11px]"
              style={{
                gridTemplateColumns: '200px repeat(3, 1fr)',
                color: '#7F8DA6',
                letterSpacing: '.08em',
              }}
            >
              <span />
              <span>{isAr ? 'بحث وتطوير' : 'R&D'}</span>
              <span>{isAr ? 'قبل الإطلاق' : 'PRE-LAUNCH'}</span>
              <span>{isAr ? 'جاهز للإطلاق / مباشر' : 'LAUNCH-READY'}</span>
            </div>
            {products.map(p => (
              <div
                key={p.slug}
                className="grid items-center gap-4 py-3"
                style={{
                  gridTemplateColumns: '200px 1fr',
                  borderTop: '1px solid rgba(148,180,220,.12)',
                }}
              >
                <span className="font-semibold text-[14px] ltr">{p.nameEn}</span>
                <div className="h-[10px] rounded-full relative" style={{ background: '#0E1A30' }}>
                  <div
                    className="absolute inset-y-0 left-0 rounded-full"
                    style={{
                      width: stageWidths[p.status] ?? '30%',
                      background: p.accent,
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── How Access Works + Form ── */}
      <section className="max-w-[1280px] mx-auto px-6 md:px-14 pb-20">
        <div
          className="grid md:grid-cols-2 overflow-hidden rounded-2xl"
          style={{ border: '1px solid rgba(148,180,220,.14)' }}
        >
          {/* Steps */}
          <div className="p-10 md:p-12 flex flex-col gap-6" style={{ background: '#0E1A30' }}>
            <span className="mono text-[11px] font-medium tracking-[.12em] uppercase" style={{ color: '#3FD4C4' }}>
              {t('investors.access.heading', lang)}
            </span>
            {investSteps.map(step => (
              <div key={step.n} className={`grid items-start gap-4 ${isAr ? 'grid-cols-[1fr_36px]' : 'grid-cols-[36px_1fr]'}`}>
                {!isAr && (
                  <span
                    className="w-7 h-7 rounded-full flex items-center justify-center mono text-[12px] font-medium flex-none"
                    style={{ border: '1px solid #3FD4C4', color: '#3FD4C4' }}
                  >
                    {step.n}
                  </span>
                )}
                <div className="flex flex-col gap-1">
                  <strong className="font-semibold text-[15px]">{isAr ? step.ar : step.en}</strong>
                  <span className="text-[14px] leading-[1.55]" style={{ color: '#A9B6CB' }}>
                    {isAr ? step.descAr : step.descEn}
                  </span>
                </div>
                {isAr && (
                  <span
                    className="w-7 h-7 rounded-full flex items-center justify-center mono text-[12px] font-medium flex-none"
                    style={{ border: '1px solid #3FD4C4', color: '#3FD4C4' }}
                  >
                    {step.n}
                  </span>
                )}
              </div>
            ))}
            <div className="mt-4 p-4 rounded-xl flex flex-col gap-2" style={{ border: '1px solid rgba(148,180,220,.14)' }}>
              <span className="font-semibold text-[14px]">{isAr ? 'جهة الاتصال للمستثمرين' : 'Your IR contact'}</span>
              <a href="mailto:invest@kafoai.com" className="mono text-[13px] hover:text-[#8BE8DE] transition-colors" style={{ color: '#3FD4C4' }}>
                invest@kafoai.com
              </a>
            </div>
          </div>

          {/* Request form */}
          <div className="p-10 md:p-12 flex flex-col gap-5" style={{ background: '#0A1222' }}>
            <h2 className="text-[20px] font-semibold m-0">{t('investors.form.heading', lang)}</h2>
            <form
              action="mailto:invest@kafoai.com"
              method="POST"
              encType="text/plain"
              className="flex flex-col gap-4"
            >
              <div className="grid grid-cols-2 gap-3">
                <label className="flex flex-col gap-1.5 text-[13px]" style={{ color: '#A9B6CB' }}>
                  {isAr ? 'الاسم الكامل' : 'Full name'}
                  <input
                    name="name"
                    type="text"
                    required
                    className="h-11 rounded-lg px-3 text-[14px] bg-[#070D1A] text-[#E8EEF7] outline-none"
                    style={{ border: '1px solid rgba(148,180,220,.25)' }}
                  />
                </label>
                <label className="flex flex-col gap-1.5 text-[13px]" style={{ color: '#A9B6CB' }}>
                  {isAr ? 'البريد الإلكتروني' : 'Work email'}
                  <input
                    name="email"
                    type="email"
                    required
                    className="h-11 rounded-lg px-3 text-[14px] bg-[#070D1A] text-[#E8EEF7] outline-none"
                    style={{ border: '1px solid rgba(148,180,220,.25)' }}
                  />
                </label>
              </div>
              <label className="flex flex-col gap-1.5 text-[13px]" style={{ color: '#A9B6CB' }}>
                {isAr ? 'الشركة / الصندوق' : 'Firm / fund'}
                <input
                  name="firm"
                  type="text"
                  className="h-11 rounded-lg px-3 text-[14px] bg-[#070D1A] text-[#E8EEF7] outline-none"
                  style={{ border: '1px solid rgba(148,180,220,.25)' }}
                />
              </label>
              <label className="flex gap-3 text-[13px] leading-[1.55]" style={{ color: '#A9B6CB' }}>
                <input type="checkbox" required className="mt-1" style={{ accentColor: '#3FD4C4' }} />
                <span>
                  {isAr
                    ? 'أؤكد أنني مستثمر مؤهل وأوافق على سياسة الخصوصية.'
                    : "I confirm I'm a professional or institutional investor and agree to the Privacy Policy."}
                </span>
              </label>
              <button
                type="submit"
                className="h-12 rounded-full font-semibold text-[15px] text-[#04131A] transition-opacity hover:opacity-90"
                style={{ background: '#3FD4C4' }}
              >
                {isAr ? 'إرسال الطلب' : 'Submit request'}
              </button>
              <p className="text-[13px] m-0" style={{ color: '#7F8DA6' }}>
                {isAr ? 'أو راسلنا على ' : 'Or write to '}
                <a href="mailto:invest@kafoai.com" className="hover:text-[#A9B6CB]" style={{ color: '#3FD4C4' }}>
                  invest@kafoai.com
                </a>
              </p>
            </form>
          </div>
        </div>

        <p className="mt-6 text-[12px] leading-[1.65]" style={{ color: '#7F8DA6' }}>
          {t('investors.disclaimer', lang)}
        </p>
      </section>

      {/* ── Data Room Link ── */}
      <section className="max-w-[1280px] mx-auto px-6 md:px-14 pb-16">
        <div
          className={`flex items-center justify-between px-8 py-6 rounded-xl ${isAr ? 'flex-row-reverse' : ''}`}
          style={{ background: '#0E1A30', border: '1px solid rgba(148,180,220,.14)' }}
        >
          <span className="text-[14px]" style={{ color: '#A9B6CB' }}>
            {isAr ? 'إذا كنت مستثمرًا حصلت على موافقة وقّعت اتفاقية السرية:' : 'Already approved and signed NDA?'}
          </span>
          <Link
            href={`/${lang}/investors/data-room`}
            className="px-4 py-2 rounded-full text-[13px] font-medium transition-colors hover:bg-white/10"
            style={{ border: '1px solid rgba(63,212,196,.4)', color: '#3FD4C4' }}
          >
            {isAr ? 'دخول غرفة البيانات' : 'Enter data room'}
          </Link>
        </div>
      </section>
    </>
  );
}
