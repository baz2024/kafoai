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
      title: 'من نحن | كافو AI',
      description: 'كافو AI مشروع تقنية إماراتي-إيرلندي يبني بنية تحتية مالية ذكية عبر سبعة منتجات في الذكاء الاصطناعي والتقنية المالية والبلوك تشين.',
      alternates: buildAlternates('/about'),
    };
  }
  return buildMetadata({
    title: 'About Kafo AI — UAE–Ireland Technology Partnership',
    description: 'Kafo AI is a UAE-based AI and fintech venture collaborating with an Irish R&D company to build intelligent financial infrastructure.',
    path: '/about',
    lang,
  });
}

export default async function AboutPage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang: rawLang } = await params;
  if (!isValidLang(rawLang)) notFound();
  const lang = rawLang as Lang;
  const isAr = lang === 'ar';

  return (
    <>
      <JsonLd data={[orgJsonLd(), breadcrumbJsonLd([
        { name: 'Kafo AI', url: `${SITE_URL}/${lang}` },
        { name: isAr ? 'من نحن' : 'About', url: `${SITE_URL}/${lang}/about` },
      ])]} />

      {/* Hero */}
      <section className="max-w-[1280px] mx-auto px-6 md:px-14 pt-20 pb-16 grid md:grid-cols-2 gap-14 items-start">
        <div className="flex flex-col gap-5">
          <div className="mono text-[11px] font-medium tracking-[.14em] uppercase" style={{ color: '#3FD4C4' }}>
            {isAr ? 'من نحن' : 'About Kafo AI'}
          </div>
          <h1 className={`serif m-0 text-[#E8EEF7] text-balance leading-tight ${isAr ? 'text-[36px] md:text-[52px] font-semibold' : 'text-[48px] md:text-[62px]'}`}>
            {isAr ? 'شراكة تقنية إماراتية–إيرلندية.' : 'A UAE–Ireland technology partnership.'}
          </h1>
          <p className="text-[#A9B6CB] text-lg leading-relaxed">
            {isAr
              ? 'كافو AI مشروع تقنية ناشئ يجمع المعرفة بالأسواق الإماراتية مع البحث والتطوير المتخصص في الذكاء الاصطناعي والتقنية المالية من إيرلندا. هدفنا بناء بنية تحتية مالية ذكية تخدم البنوك والمؤسسات المالية والمستهلكين بالعربية والإنجليزية.'
              : 'Kafo AI is an emerging technology venture that combines UAE market knowledge with dedicated AI and fintech R&D from Ireland. Our goal is to build intelligent financial infrastructure that serves banks, financial institutions and consumers in Arabic and English.'}
          </p>
        </div>

        {/* GEO answer box */}
        <div className="rounded-2xl p-8 flex flex-col gap-5" style={{ background: '#0A1222', border: '1px solid rgba(148,180,220,.14)' }}>
          <h2 className={`m-0 text-[#E8EEF7] ${isAr ? 'text-[20px] font-semibold' : 'text-[22px] font-semibold'}`}>
            {isAr ? 'ما هي كافو AI؟' : 'What is Kafo AI?'}
          </h2>
          <p className="text-[#C7D1E0] text-[14px] leading-relaxed">
            {isAr
              ? 'كافو AI مشروع ذكاء اصطناعي وتقنية مالية إماراتي يبني بنية تحتية مالية ذكية. تأسّس كشراكة بين خبرة تطوير الأعمال الإماراتية وهندسة الذكاء الاصطناعي الإيرلندية، ويدير محفظة من سبعة منتجات في ذكاء المخاطر والتمويل الشخصي والائتمان على البلوك تشين والجمعيات الرقمية وبحوث التمويل الرقمي الإسلامي والتقنية المالية المدمجة وتقنيات الضيافة. تخدم منتجاته البنوك والمؤسسات المالية والمستهلكين والمطاعم بالعربية والإنجليزية.'
              : 'Kafo AI is a UAE-based AI and fintech venture that builds intelligent financial infrastructure. Founded as a partnership between UAE business development expertise and Irish AI engineering, it operates a portfolio of seven products spanning AI risk intelligence, personal finance management, blockchain credit intelligence, digital savings circles, Islamic digital finance research, embedded fintech and hospitality technology. Its products serve banks, fintechs, consumers and restaurants in Arabic and English.'}
          </p>
          <div className="grid grid-cols-2 gap-3 pt-2 text-[13px]" style={{ borderTop: '1px solid rgba(148,180,220,.14)' }}>
            {[
              { k: isAr ? 'المقر' : 'HQ', v: isAr ? 'الإمارات العربية المتحدة' : 'United Arab Emirates' },
              { k: isAr ? 'البحث والتطوير' : 'R&D', v: isAr ? 'إيرلندا' : 'Ireland' },
              { k: isAr ? 'المنتجات' : 'Products', v: '7' },
              { k: isAr ? 'اللغات' : 'Languages', v: isAr ? 'العربية، الإنجليزية' : 'Arabic, English' },
            ].map(item => (
              <div key={item.k}>
                <div style={{ color: '#7F8DA6' }}>{item.k}</div>
                <div className="font-medium text-[#E8EEF7]">{item.v}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="max-w-[1280px] mx-auto px-6 md:px-14 pb-16">
        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              n: '01',
              titleEn: 'Evidence over claims',
              titleAr: 'الدليل قبل الادعاءات',
              descEn: 'Every product capability we describe is backed by working code. We distinguish between implemented features, sandboxes, and research — and we say so publicly.',
              descAr: 'كل قدرة منتج نصفها مدعومة بشيفرة تعمل فعلاً. نميّز بين الميزات المنفّذة والبيئات التجريبية والبحوث — ونقول ذلك علنًا.',
            },
            {
              n: '02',
              titleEn: 'Arabic-first design',
              titleAr: 'التصميم بالعربية أولاً',
              descEn: 'Products like Circul are built for Arabic speakers from the start, not translated afterwards. Our entire portfolio supports Arabic and English with native RTL.',
              descAr: 'منتجات مثل Circul مبنية للناطقين بالعربية من البداية، لا مترجمة لاحقًا. محفظتنا بأكملها تدعم العربية والإنجليزية مع RTL أصلي.',
            },
            {
              n: '03',
              titleEn: 'Responsible innovation',
              titleAr: 'الابتكار المسؤول',
              descEn: 'AI systems include guardrails against financial advice language. Sharia research does not claim certification. Circul\'s sandbox is clearly labelled as simulated.',
              descAr: 'تتضمن أنظمة الذكاء الاصطناعي ضوابط ضد مفردات النصائح المالية. لا يدّعي بحث الشريعة الاعتماد. بيئة Circul التجريبية موسومة بوضوح على أنها محاكاة.',
            },
          ].map(p => (
            <div key={p.n} className="p-7 rounded-2xl flex flex-col gap-4" style={{ background: '#0A1222', border: '1px solid rgba(148,180,220,.12)' }}>
              <span className="mono text-[28px] font-medium" style={{ color: '#3FD4C4' }}>{p.n}</span>
              <h3 className="text-[17px] font-semibold text-[#E8EEF7]">{isAr ? p.titleAr : p.titleEn}</h3>
              <p className="text-[#A9B6CB] text-[14px] leading-relaxed">{isAr ? p.descAr : p.descEn}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-[1280px] mx-auto px-6 md:px-14 pb-24 flex gap-4 flex-wrap">
        <Link href={`/${lang}/partner`} className="px-6 py-3 rounded-full font-semibold text-[15px]" style={{ background: '#3FD4C4', color: '#04131A' }}>
          {isAr ? 'كن شريكاً' : 'Partner with us'}
        </Link>
        <Link href={`/${lang}/investors`} className="px-6 py-3 rounded-full text-[15px] text-[#E8EEF7]" style={{ border: '1px solid rgba(148,180,220,.3)' }}>
          {isAr ? 'المستثمرون' : 'Investors'}
        </Link>
        <Link href={`/${lang}/products`} className="px-6 py-3 rounded-full text-[15px] text-[#E8EEF7]" style={{ border: '1px solid rgba(148,180,220,.3)' }}>
          {isAr ? 'المنتجات' : 'Products'}
        </Link>
      </section>
    </>
  );
}
