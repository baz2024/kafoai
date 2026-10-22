import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { isValidLang } from '@/lib/i18n';
import type { Lang } from '@/lib/i18n';
import { buildMetadata, buildAlternates } from '@/lib/seo';

export function generateStaticParams() {
  return [{ lang: 'en' }, { lang: 'ar' }];
}

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const { lang } = await params;
  if (!isValidLang(lang)) return {};
  if (lang === 'ar') {
    return { title: 'شروط الاستخدام | كافو AI', alternates: buildAlternates('/terms'), robots: 'noindex' };
  }
  return { ...buildMetadata({ title: 'Terms of Use | Kafo AI', description: 'Kafo AI terms of use.', path: '/terms', lang }), robots: 'noindex' };
}

export default async function TermsPage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang: rawLang } = await params;
  if (!isValidLang(rawLang)) notFound();
  const lang = rawLang as Lang;
  const isAr = lang === 'ar';

  return (
    <section className="max-w-[860px] mx-auto px-6 md:px-14 py-20">
      <h1 className={`serif mb-8 text-[#E8EEF7] ${isAr ? 'text-[32px] font-semibold' : 'text-[40px]'}`}>
        {isAr ? 'شروط الاستخدام' : 'Terms of Use'}
      </h1>
      <div className="text-[#A9B6CB] text-[15px] leading-relaxed space-y-6">
        <p style={{ color: '#7F8DA6' }}>{isAr ? 'آخر تحديث: أكتوبر 2026' : 'Last updated: October 2026'}</p>

        <h2 className="text-[18px] font-semibold text-[#E8EEF7]">{isAr ? '١. قبول الشروط' : '1. Acceptance of terms'}</h2>
        <p>{isAr ? 'باستخدام موقع kafoai.com، فإنك توافق على هذه الشروط. إذا لم توافق، يُرجى عدم استخدام الموقع.' : 'By using kafoai.com, you agree to these terms. If you do not agree, please do not use the website.'}</p>

        <h2 className="text-[18px] font-semibold text-[#E8EEF7]">{isAr ? '٢. طبيعة المعلومات' : '2. Nature of information'}</h2>
        <p>{isAr ? 'المعلومات الواردة في هذا الموقع لأغراض إعلامية فقط. لا تُعدّ هذه المعلومات نصيحة مالية أو استثمارية أو قانونية. لا يُمثّل وصف أي منتج في طور التطوير أو البحث ضمانًا بإتاحته.' : 'Information on this website is provided for informational purposes only. It does not constitute financial, investment or legal advice. Description of any product in development or research does not represent a guarantee of availability.'}</p>

        <h2 className="text-[18px] font-semibold text-[#E8EEF7]">{isAr ? '٣. الملكية الفكرية' : '3. Intellectual property'}</h2>
        <p>{isAr ? 'جميع المحتويات، بما فيها النصوص والشعارات والتصميم، مملوكة لكافو AI ما لم يُذكر خلاف ذلك. لا يُسمح بإعادة الاستخدام التجاري دون إذن كتابي مسبق.' : 'All content, including text, logos and design, is owned by Kafo AI unless otherwise stated. Commercial reuse without prior written permission is not permitted.'}</p>

        <h2 className="text-[18px] font-semibold text-[#E8EEF7]">{isAr ? '٤. روابط خارجية' : '4. External links'}</h2>
        <p>{isAr ? 'قد يحتوي الموقع على روابط لمواقع خارجية. لا تتحمل كافو AI المسؤولية عن محتوى أو ممارسات تلك المواقع.' : 'This website may contain links to third-party sites. Kafo AI is not responsible for the content or practices of those sites.'}</p>

        <h2 className="text-[18px] font-semibold text-[#E8EEF7]">{isAr ? '٥. تحديثات الشروط' : '5. Updates to these terms'}</h2>
        <p>{isAr ? 'قد نُحدّث هذه الشروط بشكل دوري. الاستمرار في استخدام الموقع بعد التحديثات يُعدّ قبولًا للشروط المعدَّلة.' : 'We may update these terms periodically. Continued use of the website following updates constitutes acceptance of the revised terms.'}</p>
      </div>
    </section>
  );
}
