import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { isValidLang } from '@/lib/i18n';
import type { Lang } from '@/lib/i18n';
import { t } from '@/lib/i18n';
import { SITE_URL } from '@/lib/products';
import JsonLd from '@/components/JsonLd';

export function generateStaticParams() {
  return [{ lang: 'en' }, { lang: 'ar' }];
}

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const { lang } = await params;
  if (!isValidLang(lang)) return {};
  const isAr = lang === 'ar';
  return {
    title: isAr ? 'كن شريك كافو AI | شراكات التقنية المالية' : 'Partner with Kafo AI | Fintech Partnership',
    description: isAr
      ? 'تعاون مع كافو AI في البرامج التجريبية والترخيص والبحث والتطوير المشترك في مجالات ذكاء المخاطر والتمويل المدمج والتمويل الإسلامي.'
      : 'Partner with Kafo AI on pilots, licensing and joint R&D across risk intelligence, embedded finance, Islamic fintech and UAE–Ireland technology collaboration.',
    alternates: {
      canonical: `${SITE_URL}/${lang}/partner`,
      languages: { 'en': `${SITE_URL}/en/partner`, 'ar': `${SITE_URL}/ar/partner`, 'x-default': `${SITE_URL}/ar/partner` },
    },
  };
}

const categories = [
  { n: '01', en: 'AI financial intelligence & analytics', ar: 'ذكاء مالي وتحليلات بالذكاء الاصطناعي' },
  { n: '02', en: 'Embedded finance & banking technology', ar: 'تمويل مدمج وتقنية مصرفية' },
  { n: '03', en: 'Personal finance innovation', ar: 'ابتكار في التمويل الشخصي' },
  { n: '04', en: 'Blockchain credit intelligence', ar: 'ذكاء ائتماني على البلوك تشين' },
  { n: '05', en: 'Islamic fintech research', ar: 'بحث في التقنية المالية الإسلامية' },
  { n: '06', en: 'Joint UAE–Ireland R&D', ar: 'بحث وتطوير مشترك إمارات–إيرلندا' },
  { n: '07', en: 'Product licensing & co-development', ar: 'ترخيص المنتجات والتطوير المشترك' },
  { n: '08', en: 'Pilot programmes & proof of concept', ar: 'برامج تجريبية وإثبات المفهوم' },
];

const partnerJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'ContactPage',
  'name': 'Partner with Kafo AI',
  'description': 'Partnership enquiries for Kafo AI — pilots, licensing, joint R&D and strategic collaboration.',
  'url': `${SITE_URL}/en/partner`,
  'publisher': { '@id': `${SITE_URL}/#org` },
  'contactOption': 'TollFree',
  'email': 'hello@kafoai.com',
};

export default async function PartnerPage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang: rawLang } = await params;
  if (!isValidLang(rawLang)) notFound();
  const lang = rawLang as Lang;
  const isAr = lang === 'ar';

  return (
    <>
      <JsonLd data={partnerJsonLd} />

      <div className="max-w-[1280px] mx-auto px-6 md:px-14 py-16 md:py-24 grid md:grid-cols-2 gap-12 md:gap-16">
        {/* Left: info */}
        <div className={`flex flex-col gap-8 ${isAr ? 'text-right' : ''}`}>
          <div className="flex flex-col gap-4">
            <span className="mono text-[11px] font-medium tracking-[.14em] uppercase" style={{ color: '#3FD4C4' }}>
              {isAr ? 'شراكات' : 'PARTNERSHIPS'}
            </span>
            <h1 className="serif text-[48px] md:text-[56px] leading-[1.04] m-0">
              {t('partner.heading', lang)}
            </h1>
            <p className="text-[17px] leading-[1.65] m-0 max-w-[480px]" style={{ color: '#A9B6CB' }}>
              {t('partner.desc', lang)}
            </p>
          </div>

          <div>
            <h2 className="text-[14px] font-semibold mb-4 tracking-[.08em] mono uppercase" style={{ color: '#7F8DA6' }}>
              {t('partner.categories.heading', lang)}
            </h2>
            <div
              className="grid grid-cols-1 sm:grid-cols-2 rounded-xl overflow-hidden"
              style={{ border: '1px solid rgba(148,180,220,.12)' }}
            >
              {categories.map((c, i) => (
                <div
                  key={c.n}
                  className="flex gap-3 items-baseline px-5 py-4"
                  style={{
                    background: '#0A1222',
                    borderTop: i >= 2 ? '1px solid rgba(148,180,220,.12)' : 'none',
                    borderLeft: i % 2 === 1 ? '1px solid rgba(148,180,220,.12)' : 'none',
                  }}
                >
                  <span className="mono text-[11px] flex-none" style={{ color: '#3FD4C4' }}>{c.n}</span>
                  <span className="text-[14px] leading-[1.45]">{isAr ? c.ar : c.en}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right: form */}
        <div
          className="p-8 md:p-10 rounded-2xl flex flex-col gap-5"
          style={{ background: '#0E1A30', border: '1px solid rgba(148,180,220,.18)' }}
        >
          <h2 className="text-[20px] font-semibold m-0">{t('partner.form.heading', lang)}</h2>
          <form
            action="mailto:hello@kafoai.com"
            method="POST"
            encType="text/plain"
            className="flex flex-col gap-4"
          >
            <div className="grid grid-cols-2 gap-3">
              <label className="flex flex-col gap-1.5 text-[13px]" style={{ color: '#A9B6CB' }}>
                {t('partner.form.name', lang)}
                <input
                  name="name"
                  type="text"
                  required
                  placeholder={t('partner.form.namePlaceholder', lang)}
                  className="h-11 rounded-lg px-3 text-[14px] bg-[#070D1A] text-[#E8EEF7] outline-none placeholder:text-[#3E4C66]"
                  style={{ border: '1px solid rgba(148,180,220,.25)' }}
                />
              </label>
              <label className="flex flex-col gap-1.5 text-[13px]" style={{ color: '#A9B6CB' }}>
                {t('partner.form.email', lang)}
                <input
                  name="email"
                  type="email"
                  required
                  placeholder={t('partner.form.emailPlaceholder', lang)}
                  className="h-11 rounded-lg px-3 text-[14px] bg-[#070D1A] text-[#E8EEF7] outline-none placeholder:text-[#3E4C66]"
                  style={{ border: '1px solid rgba(148,180,220,.25)' }}
                />
              </label>
            </div>
            <label className="flex flex-col gap-1.5 text-[13px]" style={{ color: '#A9B6CB' }}>
              {t('partner.form.org', lang)}
              <input
                name="organisation"
                type="text"
                required
                placeholder={t('partner.form.orgPlaceholder', lang)}
                className="h-11 rounded-lg px-3 text-[14px] bg-[#070D1A] text-[#E8EEF7] outline-none placeholder:text-[#3E4C66]"
                style={{ border: '1px solid rgba(148,180,220,.25)' }}
              />
            </label>
            <div className="flex flex-col gap-2 text-[13px]" style={{ color: '#A9B6CB' }}>
              {t('partner.form.type', lang)}
              <div className="flex flex-wrap gap-2">
                {['Pilot / PoC', 'Licensing', 'Co-development', 'R&D', 'Investment'].map(opt => (
                  <label key={opt} className="flex items-center gap-1.5 cursor-pointer">
                    <input type="radio" name="partnership_type" value={opt} className="sr-only" />
                    <span
                      className="px-3 py-1.5 rounded-full text-[13px] cursor-pointer transition-colors"
                      style={{ border: '1px solid rgba(148,180,220,.25)', color: '#A9B6CB' }}
                    >
                      {opt}
                    </span>
                  </label>
                ))}
              </div>
            </div>
            <label className="flex flex-col gap-1.5 text-[13px]" style={{ color: '#A9B6CB' }}>
              {t('partner.form.message', lang)}
              <textarea
                name="message"
                rows={4}
                placeholder={t('partner.form.messagePlaceholder', lang)}
                className="rounded-lg px-3 py-2.5 text-[14px] bg-[#070D1A] text-[#E8EEF7] outline-none resize-none placeholder:text-[#3E4C66]"
                style={{ border: '1px solid rgba(148,180,220,.25)' }}
              />
            </label>
            <label className="flex gap-3 text-[13px] leading-[1.55] cursor-pointer" style={{ color: '#A9B6CB' }}>
              <input type="checkbox" required className="mt-1 flex-none" style={{ accentColor: '#3FD4C4' }} />
              {t('partner.form.consent', lang)}
            </label>
            <button
              type="submit"
              className="h-12 rounded-full font-semibold text-[15px] text-[#04131A] transition-opacity hover:opacity-90"
              style={{ background: '#3FD4C4' }}
            >
              {t('partner.form.submit', lang)}
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
