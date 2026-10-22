import { notFound } from 'next/navigation';
import Link from 'next/link';
import type { Metadata } from 'next';
import { isValidLang } from '@/lib/i18n';
import type { Lang } from '@/lib/i18n';
import { SITE_URL } from '@/lib/products';
import { buildMetadata, buildAlternates, orgJsonLd, breadcrumbJsonLd } from '@/lib/seo';
import JsonLd from '@/components/JsonLd';

export function generateStaticParams() {
  return [{ lang: 'en' }, { lang: 'ar' }];
}

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const { lang } = await params;
  if (!isValidLang(lang)) return {};
  if (lang === 'ar') {
    return {
      title: 'للبنوك والمؤسسات المالية | كافو AI',
      description: 'ذكاء مخاطر بالذكاء الاصطناعي، تمويل مدمج وذكاء ائتماني مبني للخدمات المالية المنظّمة في الإمارات والمنطقة.',
      alternates: buildAlternates('/for-banks'),
    };
  }
  return buildMetadata({
    title: 'Solutions for Banks & Financial Institutions | Kafo AI',
    description: 'AI-powered risk intelligence, embedded finance and credit tools for regulated financial services. Pilot programmes and co-development with Kafo AI.',
    path: '/for-banks',
    lang,
  });
}

const solutions = [
  {
    accent: '#5CC8F0',
    titleEn: 'AI risk intelligence',
    titleAr: 'ذكاء المخاطر بالذكاء الاصطناعي',
    descEn: 'Multi-chain digital asset risk assessment and explainable scoring via OmniRisk. Deploy risk intelligence across eight blockchains with full audit trails.',
    descAr: 'تقييم مخاطر الأصول الرقمية متعددة السلاسل وتقييم قابل للتفسير عبر OmniRisk. نشر ذكاء المخاطر عبر ثماني سلاسل مع مسارات تدقيق كاملة.',
    productSlug: 'omnirisk',
    productLabel: 'OmniRisk →',
  },
  {
    accent: '#9AA8FF',
    titleEn: 'Blockchain credit intelligence',
    titleAr: 'الذكاء الائتماني على البلوك تشين',
    descEn: 'Verifiable credit intelligence published and verified natively on six blockchains via RayaChain. Cross-party verification without centralised intermediaries.',
    descAr: 'ذكاء ائتماني قابل للتحقق يُنشر ويُتحقق منه بشكل أصلي على ست سلاسل عبر RayaChain. تحقق متعدد الأطراف دون وسطاء مركزيين.',
    productSlug: 'rayachain',
    productLabel: 'RayaChain →',
  },
  {
    accent: '#7FB3D5',
    titleEn: 'Embedded financial technology',
    titleAr: 'التقنية المالية المدمجة',
    descEn: 'API-first infrastructure for embedding financial services into applications via QardX Instant. Typed contracts, admin tooling and mobile SDKs ready.',
    descAr: 'بنية تحتية API-first لتضمين الخدمات المالية في التطبيقات عبر QardX Instant. عقود محدّدة النوع وأدوات إدارة وحزم تطوير جوال جاهزة.',
    productSlug: 'qardx-instant',
    productLabel: 'QardX Instant →',
  },
  {
    accent: '#D9C27A',
    titleEn: 'Islamic fintech R&D',
    titleAr: 'بحث وتطوير التقنية المالية الإسلامية',
    descEn: 'Joint research into Sharia-compliant digital asset financing models. Co-develop responsible Islamic fintech products with academic and institutional partners.',
    descAr: 'بحث مشترك في نماذج تمويل الأصول الرقمية المتوافقة مع الشريعة. تطوير مشترك لمنتجات التقنية المالية الإسلامية المسؤولة مع شركاء أكاديميين ومؤسسيين.',
    productSlug: 'islamic-crypto-lending',
    productLabel: 'Islamic Finance →',
  },
];

const pilotSteps = [
  { n: '01', titleEn: 'Discovery call', titleAr: 'مكالمة استكشافية', descEn: 'We understand your use case, technical environment and goals.', descAr: 'نفهم حالة الاستخدام لديك والبيئة التقنية والأهداف.' },
  { n: '02', titleEn: 'PoC scoping', titleAr: 'تحديد نطاق إثبات المفهوم', descEn: 'Define success criteria, timelines and integration points for a proof of concept.', descAr: 'تحديد معايير النجاح والجداول الزمنية ونقاط التكامل لإثبات المفهوم.' },
  { n: '03', titleEn: 'Build & test', titleAr: 'البناء والاختبار', descEn: 'Our Ireland R&D team builds and tests the integration with your technical team.', descAr: 'يبني فريق البحث والتطوير الإيرلندي لدينا التكامل ويختبره مع فريقك التقني.' },
  { n: '04', titleEn: 'Review & scale', titleAr: 'المراجعة والتوسع', descEn: 'Evaluate results against defined criteria. Agree commercial terms to move to production.', descAr: 'تقييم النتائج مقابل المعايير المحددة. الاتفاق على الشروط التجارية للانتقال إلى الإنتاج.' },
];

export default async function ForBanksPage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang: rawLang } = await params;
  if (!isValidLang(rawLang)) notFound();
  const lang = rawLang as Lang;
  const isAr = lang === 'ar';

  return (
    <>
      <JsonLd data={[orgJsonLd(), breadcrumbJsonLd([
        { name: 'Kafo AI', url: `${SITE_URL}/${lang}` },
        { name: isAr ? 'للبنوك' : 'For Banks', url: `${SITE_URL}/${lang}/for-banks` },
      ])]} />

      {/* Hero */}
      <section className="max-w-[1280px] mx-auto px-6 md:px-14 pt-20 pb-16">
        <div className="max-w-3xl flex flex-col gap-5">
          <div className="mono text-[11px] font-medium tracking-[.14em] uppercase" style={{ color: '#3FD4C4' }}>
            {isAr ? 'للبنوك والمؤسسات المالية' : 'For banks & financial institutions'}
          </div>
          <h1 className={`serif m-0 text-[#E8EEF7] text-balance leading-tight ${isAr ? 'text-[36px] md:text-[52px] font-semibold' : 'text-[48px] md:text-[64px]'}`}>
            {isAr ? 'ذكاء مالي مبني لخدمات مُنظَّمة.' : 'Financial intelligence built for regulated services.'}
          </h1>
          <p className="text-[#A9B6CB] text-lg leading-relaxed max-w-2xl">
            {isAr
              ? 'نعمل مع البنوك والمؤسسات المالية والشركات الناشئة في التقنية المالية في الإمارات والمنطقة على برامج تجريبية وتطوير مشترك وترخيص تقنية.'
              : 'We work with banks, financial institutions and fintechs across the UAE and region on pilot programmes, co-development and technology licensing.'}
          </p>
          <div className="flex gap-3 flex-wrap">
            <Link href={`/${lang}/partner`} className="px-5 py-3 rounded-full font-semibold text-[14px]" style={{ background: '#3FD4C4', color: '#04131A' }}>
              {isAr ? 'ابدأ محادثة شراكة' : 'Start a partnership conversation'}
            </Link>
            <Link href={`/${lang}/products`} className="px-5 py-3 rounded-full text-[14px] text-[#E8EEF7]" style={{ border: '1px solid rgba(148,180,220,.3)' }}>
              {isAr ? 'استكشف المنتجات' : 'Explore the portfolio'}
            </Link>
          </div>
        </div>
      </section>

      {/* Solutions */}
      <section className="max-w-[1280px] mx-auto px-6 md:px-14 pb-20">
        <h2 className={`serif mb-8 text-[#E8EEF7] ${isAr ? 'text-[28px] font-semibold' : 'text-[36px]'}`}>
          {isAr ? 'حلولنا للمؤسسات المالية' : 'Solutions for financial institutions'}
        </h2>
        <div className="grid md:grid-cols-2 gap-4">
          {solutions.map(s => (
            <div key={s.productSlug} className="p-8 rounded-2xl flex flex-col gap-5" style={{ background: '#0A1222', border: '1px solid rgba(148,180,220,.12)' }}>
              <div className="flex justify-between items-center">
                <span className="w-8 h-[3px] rounded-full" style={{ background: s.accent }} />
                <Link href={`/${lang}/products/${s.productSlug}`} className="mono text-[11px] font-medium" style={{ color: s.accent }}>{s.productLabel}</Link>
              </div>
              <h3 className="text-[19px] font-semibold text-[#E8EEF7]">{isAr ? s.titleAr : s.titleEn}</h3>
              <p className="text-[#A9B6CB] text-[14px] leading-relaxed">{isAr ? s.descAr : s.descEn}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Pilot process */}
      <section className="max-w-[1280px] mx-auto px-6 md:px-14 pb-20">
        <h2 className={`serif mb-8 text-[#E8EEF7] ${isAr ? 'text-[28px] font-semibold' : 'text-[36px]'}`}>
          {isAr ? 'كيف نبني معًا' : 'How we build together'}
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {pilotSteps.map(s => (
            <div key={s.n} className="p-6 rounded-2xl flex flex-col gap-4" style={{ background: '#0A1222', border: '1px solid rgba(148,180,220,.12)' }}>
              <span className="mono text-[28px] font-medium" style={{ color: '#3FD4C4' }}>{s.n}</span>
              <h3 className="text-[16px] font-semibold text-[#E8EEF7]">{isAr ? s.titleAr : s.titleEn}</h3>
              <p className="text-[#A9B6CB] text-[13px] leading-relaxed">{isAr ? s.descAr : s.descEn}</p>
            </div>
          ))}
        </div>
      </section>

      {/* GEO answer block */}
      <section className="max-w-[1280px] mx-auto px-6 md:px-14 pb-20">
        <div className="rounded-2xl p-8 md:p-10" style={{ background: '#0A1222', border: '1px solid rgba(148,180,220,.14)' }}>
          <h2 className={`serif mb-4 text-[#E8EEF7] ${isAr ? 'text-[24px] font-semibold' : 'text-[28px]'}`}>
            {isAr ? 'كيف تعمل كافو AI مع البنوك؟' : 'How does Kafo AI work with banks?'}
          </h2>
          <p className="text-[#C7D1E0] text-[15px] leading-relaxed max-w-3xl">
            {isAr
              ? 'تعمل كافو AI مع البنوك والمؤسسات المالية من خلال برامج تجريبية وشراكات إثبات المفهوم والتطوير المشترك. تشمل مجالات التعاون ذكاء مخاطر الأصول الرقمية عبر OmniRisk، والذكاء الائتماني على البلوك تشين عبر RayaChain، والتمويل المدمج عبر QardX Instant، وبحوث التمويل الإسلامي. نقدم حزمة بنية تحتية تقنية قابلة للترخيص والتخصيص.'
              : 'Kafo AI works with banks and financial institutions through pilot programmes, proof-of-concept partnerships and co-development. Areas of collaboration include digital asset risk intelligence via OmniRisk, blockchain credit intelligence via RayaChain, embedded finance via QardX Instant, and Islamic finance research. We offer a licensable, customisable technology infrastructure package.'}
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-[1280px] mx-auto px-6 md:px-14 pb-24">
        <div className="rounded-2xl p-10 md:p-14 flex flex-col md:flex-row items-start md:items-center justify-between gap-8" style={{ background: '#0E1A30', border: '1px solid rgba(63,212,196,.2)' }}>
          <div className="flex flex-col gap-3">
            <h2 className={`serif m-0 text-[#E8EEF7] ${isAr ? 'text-[24px] font-semibold' : 'text-[28px]'}`}>
              {isAr ? 'هل مؤسستك مهتمة بإثبات المفهوم؟' : 'Is your institution interested in a pilot?'}
            </h2>
            <p className="text-[#A9B6CB] text-[15px]">
              {isAr ? 'تحدّث مع فريقنا عن أهدافك.' : 'Talk to our team about your goals.'}
            </p>
          </div>
          <Link href={`/${lang}/partner`} className="flex-none px-6 py-3 rounded-full font-semibold text-[15px]" style={{ background: '#3FD4C4', color: '#04131A' }}>
            {isAr ? 'تواصل معنا' : 'Get in touch'}
          </Link>
        </div>
      </section>
    </>
  );
}
