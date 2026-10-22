import { notFound } from 'next/navigation';
import Link from 'next/link';
import type { Metadata } from 'next';
import { isValidLang } from '@/lib/i18n';
import type { Lang } from '@/lib/i18n';
import { SITE_URL } from '@/lib/products';
import { buildMetadata, buildAlternates, orgJsonLd, breadcrumbJsonLd, articleJsonLd } from '@/lib/seo';
import JsonLd from '@/components/JsonLd';

export function generateStaticParams() {
  return [{ lang: 'en' }, { lang: 'ar' }];
}

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const { lang } = await params;
  if (!isValidLang(lang)) return {};
  if (lang === 'ar') {
    return {
      title: 'رؤى وبحوث | كافو AI',
      description: 'تحليل وتعليق على الذكاء الاصطناعي في الخدمات المالية، ذكاء المخاطر، التمويل الإسلامي والجمعيات الرقمية من فريق كافو AI.',
      alternates: buildAlternates('/insights'),
    };
  }
  return buildMetadata({
    title: 'Insights & Research | Kafo AI',
    description: 'Analysis and commentary on AI in financial services, risk intelligence, Islamic fintech and digital savings circles from the Kafo AI team.',
    path: '/insights',
    lang,
  });
}

const articles = [
  {
    slug: 'explainable-ai-financial-risk',
    titleEn: 'Why explainability is non-negotiable in financial AI',
    titleAr: 'لماذا القابلية للتفسير شرط لا تنازل عنه في الذكاء الاصطناعي المالي',
    topicEn: 'AI risk intelligence',
    topicAr: 'ذكاء المخاطر بالذكاء الاصطناعي',
    dateEn: 'October 2026',
    dateAr: 'أكتوبر 2026',
    summaryEn: 'Regulators and institutions increasingly demand that AI systems explain their decisions. We examine why explainability is an engineering requirement, not a reporting afterthought, for financial risk intelligence platforms.',
    summaryAr: 'يطالب المنظّمون والمؤسسات بشكل متزايد بأن تُفسّر أنظمة الذكاء الاصطناعي قراراتها. نفحص لماذا تُعدّ القابلية للتفسير متطلبًا هندسيًا لا مجرد تقرير لاحق لمنصات ذكاء المخاطر المالية.',
    accent: '#5CC8F0',
    productSlug: 'omnirisk',
  },
  {
    slug: 'blockchain-credit-scoring',
    titleEn: 'Blockchain credit scoring: verifiability over trust',
    titleAr: 'التقييم الائتماني على البلوك تشين: قابلية التحقق بدلاً من الثقة',
    topicEn: 'Blockchain credit intelligence',
    topicAr: 'الذكاء الائتماني على البلوك تشين',
    dateEn: 'October 2026',
    dateAr: 'أكتوبر 2026',
    summaryEn: 'Traditional credit systems require trust in a central authority. Blockchain-based credit intelligence allows any party to verify claims independently. We explain how RayaChain approaches this through the LayerZero OFT protocol.',
    summaryAr: 'تتطلب أنظمة الائتمان التقليدية الثقة في سلطة مركزية. يتيح الذكاء الائتماني على البلوك تشين لأي طرف التحقق من الادعاءات بشكل مستقل. نُوضّح كيف تتعامل RayaChain مع هذا عبر بروتوكول LayerZero OFT.',
    accent: '#9AA8FF',
    productSlug: 'rayachain',
  },
  {
    slug: 'digital-savings-circles-uae',
    titleEn: 'Modernising the Jam\'iya: digital savings circles in the UAE',
    titleAr: 'تحديث الجمعية: دوائر الادخار الرقمية في الإمارات',
    topicEn: 'UAE fintech',
    topicAr: 'التقنية المالية الإماراتية',
    dateEn: 'October 2026',
    dateAr: 'أكتوبر 2026',
    summaryEn: 'The rotating savings circle (Jam\'iya, جمعية) is a trusted financial institution across the Arab world. Circul digitises this with private invitations, contribution tracking and payout management — keeping the social trust model while adding modern transparency.',
    summaryAr: 'الجمعية الدوارة مؤسسة مالية موثوقة في العالم العربي. تُرقمن Circul هذا النظام بدعوات خاصة وتتبع المساهمات وإدارة الاستلام — مع الحفاظ على نموذج الثقة الاجتماعية مع إضافة شفافية حديثة.',
    accent: '#F2B866',
    productSlug: 'circul',
  },
  {
    slug: 'islamic-digital-finance-principles',
    titleEn: 'Principles for Sharia-compliant digital asset financing',
    titleAr: 'مبادئ تمويل الأصول الرقمية المتوافق مع الشريعة',
    topicEn: 'Islamic fintech',
    topicAr: 'التمويل الإسلامي الرقمي',
    dateEn: 'October 2026',
    dateAr: 'أكتوبر 2026',
    summaryEn: 'Designing financing structures for digital assets that satisfy Islamic finance principles — prohibiting riba (interest) and gharar (excessive uncertainty) — requires both deep Sharia knowledge and blockchain architecture expertise. We outline the research questions our Islamic Crypto Lending initiative is exploring.',
    summaryAr: 'يتطلب تصميم هياكل تمويل الأصول الرقمية المتوافقة مع مبادئ التمويل الإسلامي — التي تحرّم الربا والغرر — معرفة شرعية عميقة وخبرة في بنية البلوك تشين. نُحدّد أسئلة البحث التي تستكشفها مبادرة Islamic Crypto Lending لدينا.',
    accent: '#D9C27A',
    productSlug: 'islamic-crypto-lending',
  },
];

export default async function InsightsPage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang: rawLang } = await params;
  if (!isValidLang(rawLang)) notFound();
  const lang = rawLang as Lang;
  const isAr = lang === 'ar';

  const articleSchemas = articles.map(a => articleJsonLd({
    headline: isAr ? a.titleAr : a.titleEn,
    description: isAr ? a.summaryAr : a.summaryEn,
    url: `${SITE_URL}/${lang}/insights/${a.slug}`,
    datePublished: '2026-10-22',
  }));

  return (
    <>
      <JsonLd data={[orgJsonLd(), breadcrumbJsonLd([
        { name: 'Kafo AI', url: `${SITE_URL}/${lang}` },
        { name: isAr ? 'رؤى' : 'Insights', url: `${SITE_URL}/${lang}/insights` },
      ]), ...articleSchemas]} />

      {/* Hero */}
      <section className="max-w-[1280px] mx-auto px-6 md:px-14 pt-20 pb-16">
        <div className="max-w-3xl flex flex-col gap-5">
          <div className="mono text-[11px] font-medium tracking-[.14em] uppercase" style={{ color: '#3FD4C4' }}>
            {isAr ? 'رؤى وبحوث' : 'Insights & research'}
          </div>
          <h1 className={`serif m-0 text-[#E8EEF7] text-balance leading-tight ${isAr ? 'text-[36px] md:text-[48px] font-semibold' : 'text-[48px] md:text-[60px]'}`}>
            {isAr ? 'تحليل وتعليق على التقنية المالية.' : 'Analysis and commentary on fintech.'}
          </h1>
          <p className="text-[#A9B6CB] text-lg leading-relaxed max-w-2xl">
            {isAr
              ? 'أفكار من فريق كافو AI حول الذكاء الاصطناعي في الخدمات المالية والبلوك تشين والتمويل الإسلامي وادخار الإمارات.'
              : 'Thinking from the Kafo AI team on AI in financial services, blockchain, Islamic finance and UAE savings.'}
          </p>
        </div>
      </section>

      {/* Articles grid */}
      <section className="max-w-[1280px] mx-auto px-6 md:px-14 pb-24">
        <div className="grid md:grid-cols-2 gap-6">
          {articles.map(a => (
            <article key={a.slug} className="p-8 rounded-2xl flex flex-col gap-5" style={{ background: '#0A1222', border: '1px solid rgba(148,180,220,.12)' }}>
              <div className="flex items-center justify-between">
                <span className="mono text-[10px] font-medium tracking-widest uppercase" style={{ color: a.accent }}>
                  {isAr ? a.topicAr : a.topicEn}
                </span>
                <span className="text-[12px]" style={{ color: '#7F8DA6' }}>
                  {isAr ? a.dateAr : a.dateEn}
                </span>
              </div>
              <h2 className={`m-0 text-[#E8EEF7] leading-snug ${isAr ? 'text-[18px] font-semibold' : 'text-[20px] font-semibold'}`}>
                {isAr ? a.titleAr : a.titleEn}
              </h2>
              <p className="text-[#A9B6CB] text-[14px] leading-relaxed flex-1">
                {isAr ? a.summaryAr : a.summaryEn}
              </p>
              <div className="flex items-center justify-between pt-2" style={{ borderTop: '1px solid rgba(148,180,220,.1)' }}>
                <Link href={`/${lang}/products/${a.productSlug}`} className="text-[12px]" style={{ color: a.accent }}>
                  {isAr ? 'المنتج ذو الصلة ↗' : 'Related product ↗'}
                </Link>
                <span className="text-[13px] font-medium" style={{ color: '#3FD4C4' }}>
                  {isAr ? 'قريبًا' : 'Coming soon'}
                </span>
              </div>
            </article>
          ))}
        </div>

        {/* Topics cluster */}
        <div className="mt-14">
          <h2 className={`serif mb-6 text-[#E8EEF7] ${isAr ? 'text-[24px] font-semibold' : 'text-[28px]'}`}>
            {isAr ? 'مجموعات الموضوعات' : 'Topic clusters'}
          </h2>
          <div className="flex flex-wrap gap-3">
            {(isAr
              ? ['ذكاء المخاطر بالذكاء الاصطناعي', 'التمويل الشخصي', 'ذكاء ائتماني على البلوك تشين', 'التمويل الإسلامي الرقمي', 'التقنية المالية الإماراتية', 'التمويل المدمج', 'نمو الضيافة']
              : ['AI risk intelligence', 'Personal finance', 'Blockchain credit', 'Islamic fintech', 'UAE fintech', 'Embedded finance', 'Hospitality growth']
            ).map(topic => (
              <span key={topic} className="px-4 py-2 rounded-full text-[13px] text-[#A9B6CB]" style={{ border: '1px solid rgba(148,180,220,.22)' }}>
                {topic}
              </span>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
