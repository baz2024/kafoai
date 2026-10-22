import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { isValidLang } from '@/lib/i18n';
import type { Lang } from '@/lib/i18n';
import { SITE_URL } from '@/lib/products';
import { buildMetadata, buildAlternates, orgJsonLd } from '@/lib/seo';
import JsonLd from '@/components/JsonLd';

export function generateStaticParams() {
  return [{ lang: 'en' }, { lang: 'ar' }];
}

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const { lang } = await params;
  if (!isValidLang(lang)) return {};
  if (lang === 'ar') {
    return {
      title: 'تواصل معنا | كافو AI',
      description: 'تواصل مع فريق كافو AI لاستفسارات الشراكة، أسئلة الإعلام أو المعلومات العامة.',
      alternates: buildAlternates('/contact'),
    };
  }
  return buildMetadata({
    title: 'Contact Kafo AI',
    description: 'Reach the Kafo AI team for partnership enquiries, media questions or general information.',
    path: '/contact',
    lang,
  });
}

const contactItems = [
  {
    titleEn: 'Partnership enquiries',
    titleAr: 'استفسارات الشراكة',
    descEn: 'Pilots, licensing, co-development and joint R&D with banks, fintechs and technology companies.',
    descAr: 'البرامج التجريبية والترخيص والتطوير المشترك والبحث والتطوير المشترك مع البنوك والمؤسسات التقنية.',
    accent: '#3FD4C4',
    href: '/en/partner',
    ctaEn: 'Partnership form →',
    ctaAr: 'نموذج الشراكة ←',
  },
  {
    titleEn: 'Investor relations',
    titleAr: 'علاقات المستثمرين',
    descEn: 'Data room access requests and investor enquiries.',
    descAr: 'طلبات الوصول إلى غرفة البيانات واستفسارات المستثمرين.',
    accent: '#6FE3A8',
    href: 'mailto:invest@kafoai.com',
    ctaEn: 'invest@kafoai.com',
    ctaAr: 'invest@kafoai.com',
  },
  {
    titleEn: 'Media & press',
    titleAr: 'الإعلام والصحافة',
    descEn: 'Press enquiries, interview requests and company information.',
    descAr: 'استفسارات الصحافة وطلبات المقابلات ومعلومات الشركة.',
    accent: '#9AA8FF',
    href: 'mailto:hello@kafoai.com',
    ctaEn: 'hello@kafoai.com',
    ctaAr: 'hello@kafoai.com',
  },
];

export default async function ContactPage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang: rawLang } = await params;
  if (!isValidLang(rawLang)) notFound();
  const lang = rawLang as Lang;
  const isAr = lang === 'ar';

  return (
    <>
      <JsonLd data={[orgJsonLd()]} />

      <section className="max-w-[1280px] mx-auto px-6 md:px-14 pt-20 pb-24">
        <div className="max-w-2xl flex flex-col gap-5 mb-16">
          <div className="mono text-[11px] font-medium tracking-[.14em] uppercase" style={{ color: '#3FD4C4' }}>
            {isAr ? 'تواصل معنا' : 'Contact'}
          </div>
          <h1 className={`serif m-0 text-[#E8EEF7] leading-tight ${isAr ? 'text-[36px] md:text-[52px] font-semibold' : 'text-[48px] md:text-[62px]'}`}>
            {isAr ? 'تواصل مع كافو AI.' : 'Reach Kafo AI.'}
          </h1>
          <p className="text-[#A9B6CB] text-lg leading-relaxed">
            {isAr
              ? 'سواء كنت مؤسسة مالية أو شريكًا محتملًا أو مستثمرًا أو صحفيًا، نسعد بالتواصل معك.'
              : 'Whether you\'re a financial institution, potential partner, investor or journalist, we\'d be glad to hear from you.'}
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {contactItems.map(item => (
            <div key={item.titleEn} className="p-8 rounded-2xl flex flex-col gap-5" style={{ background: '#0A1222', border: '1px solid rgba(148,180,220,.12)' }}>
              <span className="w-8 h-[3px] rounded-full" style={{ background: item.accent }} />
              <h2 className="text-[18px] font-semibold text-[#E8EEF7]">{isAr ? item.titleAr : item.titleEn}</h2>
              <p className="text-[#A9B6CB] text-[14px] leading-relaxed flex-1">{isAr ? item.descAr : item.descEn}</p>
              <a
                href={item.href.startsWith('mailto:') ? item.href : `/${lang}${item.href.replace('/en', '')}`}
                className="font-medium text-[14px]"
                style={{ color: item.accent }}
              >
                {isAr ? item.ctaAr : item.ctaEn}
              </a>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
