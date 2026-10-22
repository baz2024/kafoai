import { notFound } from 'next/navigation';
import Link from 'next/link';
import type { Metadata } from 'next';
import { isValidLang, t } from '@/lib/i18n';
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
      title: 'التقنية والابتكار | كافو AI',
      description: 'نهجنا التقني: ذكاء اصطناعي قابل للتفسير، بنية تحتية متعددة السلاسل، وبحث وتطوير مشترك بين الإمارات وإيرلندا.',
      alternates: buildAlternates('/technology'),
    };
  }
  return buildMetadata({
    title: 'Technology & Innovation | Kafo AI',
    description: 'UAE market expertise combined with Ireland-based AI engineering. Multi-chain infrastructure, explainable AI and responsible fintech R&D.',
    path: '/technology',
    lang,
  });
}

const techPillars = [
  {
    n: '01',
    titleEn: 'Explainable AI first',
    titleAr: 'الذكاء الاصطناعي القابل للتفسير أولاً',
    descEn: 'Every risk score, financial plan and recommendation produced by Kafo AI systems shows the signals and logic that produced it. No black-box outputs on decisions that affect money.',
    descAr: 'كل تقييم مخاطر وخطة مالية وتوصية تنتجها أنظمة كافو AI تُظهر الإشارات والمنطق الذي أنتجها. لا مخرجات مبهمة في قرارات تمس المال.',
    accent: '#3FD4C4',
  },
  {
    n: '02',
    titleEn: 'Multi-chain by design',
    titleAr: 'تعدد السلاسل بالتصميم',
    descEn: 'OmniRisk covers eight blockchains from a single canonical data model. RayaChain routes verifiable intelligence across six chains via LayerZero. The architecture is chain-agnostic and extensible.',
    descAr: 'تغطي OmniRisk ثماني سلاسل بلوك تشين من نموذج بيانات موحد. ترسل RayaChain الذكاء القابل للتحقق عبر ست سلاسل عبر LayerZero. البنية مستقلة عن السلاسل وقابلة للتوسع.',
    accent: '#9AA8FF',
  },
  {
    n: '03',
    titleEn: 'Arabic-first products',
    titleAr: 'منتجات بالعربية أولاً',
    descEn: 'Circul is built from the ground up for Arabic-speaking UAE users. AI Wealth supports English, Arabic and French with full RTL. LastTable serves diners and venues in both languages.',
    descAr: 'Circul مبنية من الأساس للمستخدمين الناطقين بالعربية في الإمارات. تدعم AI Wealth الإنجليزية والعربية والفرنسية مع اتجاه RTL الكامل. تخدم LastTable الرواد والمطاعم بكلتا اللغتين.',
    accent: '#F2B866',
  },
  {
    n: '04',
    titleEn: 'Responsible AI guardrails',
    titleAr: 'ضوابط الذكاء الاصطناعي المسؤول',
    descEn: 'AI engines use cost-ascending multi-provider fallback, daily budget caps, append-only audit logs and a global kill switch. The Strategy Alpha layer prohibits investment-advice vocabulary.',
    descAr: 'تستخدم محركات الذكاء الاصطناعي تبادل مزودين متعدد بتصاعد التكلفة، وحدودًا يومية للميزانية، وسجلات تدقيق بالإلحاق فقط، وزر إيقاف عالمي. تحظر طبقة Strategy Alpha مفردات نصائح الاستثمار.',
    accent: '#6FE3A8',
  },
  {
    n: '05',
    titleEn: 'UAE–Ireland R&D model',
    titleAr: 'نموذج البحث والتطوير الإمارات–إيرلندا',
    descEn: 'Business development, market access and partnership building in the UAE; AI engineering, research and product development from our Ireland-based technology team. Both sides share a common codebase and product vision.',
    descAr: 'تطوير الأعمال والوصول إلى السوق وبناء الشراكات في الإمارات؛ وهندسة الذكاء الاصطناعي والبحث وتطوير المنتجات من فريقنا التقني في إيرلندا. يتشارك الجانبان قاعدة شيفرة ورؤية منتج مشتركة.',
    accent: '#5CC8F0',
  },
  {
    n: '06',
    titleEn: 'Operational infrastructure',
    titleAr: 'بنية تحتية تشغيلية',
    descEn: 'OmniRisk runs Blue/Green across AWS regions (us-east-1 primary, eu-west-1 standby) with weighted DNS, DynamoDB Global Tables and per-handler Lambda fleet CDK stacks. Built to operate, not just demo.',
    descAr: 'تعمل OmniRisk بنموذج Blue/Green عبر مناطق AWS (us-east-1 رئيسي، eu-west-1 احتياطي) مع DNS موزون وجداول DynamoDB العالمية. بُنيت للتشغيل، لا للعرض فقط.',
    accent: '#C8475F',
  },
];

const stackItems = [
  { labelEn: 'AI engines', labelAr: 'محركات الذكاء الاصطناعي', valEn: 'OpenAI · Anthropic · Gemini · Grok · local — multi-provider routing with deterministic fallback', valAr: 'OpenAI · Anthropic · Gemini · Grok · محلي — توجيه متعدد المزودين مع بديل حتمي' },
  { labelEn: 'Chains', labelAr: 'السلاسل', valEn: 'Ethereum · BNB Chain · Arbitrum · Optimism · Solana · Base · Polygon · Bittensor', valAr: 'إيثيريوم · سلسلة BNB · أربيتروم · أوبتيميزم · سولانا · بيس · بوليغون · بيتنسور' },
  { labelEn: 'Cross-chain', labelAr: 'عبر السلاسل', valEn: 'LayerZero OFT protocol — Solana hub routing', valAr: 'بروتوكول LayerZero OFT — توجيه عبر محور سولانا' },
  { labelEn: 'Cloud', labelAr: 'الحوسبة السحابية', valEn: 'AWS (Lambda, DynamoDB, ECS, Route 53) — Blue/Green CDK', valAr: 'AWS (Lambda, DynamoDB, ECS, Route 53) — Blue/Green CDK' },
  { labelEn: 'Mobile', labelAr: 'الجوال', valEn: 'Flutter (iOS · Android · Web) · React Native / Expo', valAr: 'Flutter (iOS · Android · Web) · React Native / Expo' },
  { labelEn: 'Web', labelAr: 'الويب', valEn: 'Next.js · TypeScript · Tailwind · Firebase', valAr: 'Next.js · TypeScript · Tailwind · Firebase' },
  { labelEn: 'Agentic AI', labelAr: 'الذكاء الاصطناعي الوكيل', valEn: 'LangGraph — 13-phase engine with approval checkpoints and global kill switch', valAr: 'LangGraph — محرك 13 مرحلة مع نقاط موافقة وزر إيقاف عالمي' },
];

export default async function TechnologyPage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang: rawLang } = await params;
  if (!isValidLang(rawLang)) notFound();
  const lang = rawLang as Lang;
  const isAr = lang === 'ar';

  const breadcrumbs = breadcrumbJsonLd([
    { name: 'Kafo AI', url: `${SITE_URL}/${lang}` },
    { name: isAr ? 'التقنية' : 'Technology', url: `${SITE_URL}/${lang}/technology` },
  ]);

  return (
    <>
      <JsonLd data={[orgJsonLd(), breadcrumbs]} />

      {/* Hero */}
      <section className="max-w-[1280px] mx-auto px-6 md:px-14 pt-20 pb-16">
        <div className="max-w-3xl flex flex-col gap-5">
          <div className="mono text-[11px] font-medium tracking-[.14em] uppercase" style={{ color: '#3FD4C4' }}>
            {isAr ? 'التقنية والابتكار' : 'Technology & Innovation'}
          </div>
          <h1 className={`serif m-0 text-[#E8EEF7] text-balance leading-tight ${isAr ? 'text-[36px] md:text-[52px] font-semibold' : 'text-[48px] md:text-[64px]'}`}>
            {isAr ? 'بنية تحتية مبنية للتشغيل الحقيقي.' : 'Infrastructure built to operate, not just demo.'}
          </h1>
          <p className="text-[#A9B6CB] text-lg leading-relaxed max-w-2xl">
            {isAr
              ? 'نجمع خبرة السوق الإماراتية مع هندسة الذكاء الاصطناعي من إيرلندا لبناء منتجات تقنية مالية قابلة للتفسير وتعمل على مستوى الإنتاج.'
              : 'We combine UAE market expertise with Ireland-based AI engineering to build explainable, production-grade fintech products.'}
          </p>
        </div>
      </section>

      {/* Tech pillars grid */}
      <section className="max-w-[1280px] mx-auto px-6 md:px-14 pb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px" style={{ background: 'rgba(148,180,220,.12)', border: '1px solid rgba(148,180,220,.12)', borderRadius: 16, overflow: 'hidden' }}>
          {techPillars.map(p => (
            <div key={p.n} className="p-7 flex flex-col gap-4" style={{ background: '#0A1222' }}>
              <div className="flex items-center justify-between">
                <span className="w-8 h-[3px] rounded-full" style={{ background: p.accent }} />
                <span className="mono text-[10px] font-medium tracking-widest" style={{ color: '#7F8DA6' }}>{p.n}</span>
              </div>
              <h2 className="text-[18px] font-semibold text-[#E8EEF7]">{isAr ? p.titleAr : p.titleEn}</h2>
              <p className="text-[#A9B6CB] text-[14px] leading-relaxed">{isAr ? p.descAr : p.descEn}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Tech stack table */}
      <section className="max-w-[1280px] mx-auto px-6 md:px-14 pb-20">
        <h2 className={`serif mb-8 text-[#E8EEF7] ${isAr ? 'text-[30px] font-semibold' : 'text-[36px]'}`}>
          {isAr ? 'المكدس التقني' : 'Technology stack'}
        </h2>
        <div style={{ border: '1px solid rgba(148,180,220,.12)', borderRadius: 12, overflow: 'hidden' }}>
          {stackItems.map((item, i) => (
            <div key={i} className="grid grid-cols-[160px_1fr] md:grid-cols-[200px_1fr] gap-6 px-6 py-4" style={{ borderTop: i === 0 ? 'none' : '1px solid rgba(148,180,220,.1)', background: i % 2 === 0 ? '#0A1222' : '#070D1A' }}>
              <span className="mono text-[11px] font-medium tracking-wide" style={{ color: '#3FD4C4' }}>{isAr ? item.labelAr : item.labelEn}</span>
              <span className="text-[#C7D1E0] text-[14px] leading-relaxed">{isAr ? item.valAr : item.valEn}</span>
            </div>
          ))}
        </div>
      </section>

      {/* UAE–Ireland model */}
      <section className="max-w-[1280px] mx-auto px-6 md:px-14 pb-20">
        <div className="grid md:grid-cols-2 gap-1 p-px rounded-2xl" style={{ background: 'rgba(148,180,220,.12)' }}>
          <div className="p-10 rounded-l-2xl flex flex-col gap-5" style={{ background: '#0E1A30' }}>
            <div className="mono text-[11px] tracking-widest font-medium" style={{ color: '#3FD4C4' }}>UAE</div>
            <h3 className="text-[22px] font-semibold text-[#E8EEF7]">{isAr ? 'قيادة السوق والأعمال' : 'Market & business leadership'}</h3>
            <ul className="text-[#A9B6CB] text-[14px] leading-relaxed space-y-2">
              {(isAr
                ? ['الوصول إلى السوق الإماراتي والإقليمي', 'بناء الشراكات مع البنوك والمؤسسات المالية', 'تطوير الأعمال والمبيعات', 'الامتثال التنظيمي الإماراتي', 'التوسع الإقليمي']
                : ['UAE and regional market access', 'Bank and financial institution partnerships', 'Business development and sales', 'UAE regulatory knowledge', 'Regional expansion strategy']
              ).map((item, i) => <li key={i}>— {item}</li>)}
            </ul>
          </div>
          <div className="p-10 rounded-r-2xl flex flex-col gap-5" style={{ background: '#0A1222' }}>
            <div className="mono text-[11px] tracking-widest font-medium" style={{ color: '#5CC8F0' }}>IRELAND</div>
            <h3 className="text-[22px] font-semibold text-[#E8EEF7]">{isAr ? 'البحث والتطوير والهندسة' : 'R&D & engineering'}</h3>
            <ul className="text-[#A9B6CB] text-[14px] leading-relaxed space-y-2">
              {(isAr
                ? ['هندسة الذكاء الاصطناعي والبحث', 'تطوير منتجات التقنية المالية', 'بنية السحابة والبنية التحتية', 'تطوير التطبيقات والويب', 'تكامل البلوك تشين متعدد السلاسل']
                : ['AI engineering and research', 'Fintech product development', 'Cloud and infrastructure architecture', 'Mobile and web application development', 'Multi-chain blockchain integration']
              ).map((item, i) => <li key={i}>— {item}</li>)}
            </ul>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-[1280px] mx-auto px-6 md:px-14 pb-24">
        <div className="rounded-2xl p-10 md:p-14 flex flex-col md:flex-row items-start md:items-center justify-between gap-8" style={{ background: '#0E1A30', border: '1px solid rgba(63,212,196,.2)' }}>
          <div className="flex flex-col gap-3">
            <h2 className={`serif m-0 text-[#E8EEF7] ${isAr ? 'text-[24px] font-semibold' : 'text-[28px]'}`}>
              {isAr ? 'هل تريد بناء شيء معنا؟' : 'Want to build something together?'}
            </h2>
            <p className="text-[#A9B6CB] text-[15px]">
              {isAr ? 'نرحّب بالشراكات في الذكاء الاصطناعي والتقنية المالية والبلوك تشين.' : 'We welcome partnerships across AI, fintech and blockchain.'}
            </p>
          </div>
          <Link href={`/${lang}/partner`} className="flex-none px-6 py-3 rounded-full font-semibold text-[15px]" style={{ background: '#3FD4C4', color: '#04131A' }}>
            {isAr ? 'كن شريكاً' : 'Partner with us'}
          </Link>
        </div>
      </section>
    </>
  );
}
