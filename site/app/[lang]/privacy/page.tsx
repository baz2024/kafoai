import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { isValidLang } from '@/lib/i18n';
import type { Lang } from '@/lib/i18n';
import { SITE_URL } from '@/lib/products';
import { buildMetadata, buildAlternates } from '@/lib/seo';

export function generateStaticParams() {
  return [{ lang: 'en' }, { lang: 'ar' }];
}

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const { lang } = await params;
  if (!isValidLang(lang)) return {};
  if (lang === 'ar') {
    return { title: 'سياسة الخصوصية | كافو AI', alternates: buildAlternates('/privacy'), robots: 'noindex' };
  }
  return { ...buildMetadata({ title: 'Privacy Policy | Kafo AI', description: 'Kafo AI privacy policy.', path: '/privacy', lang }), robots: 'noindex' };
}

export default async function PrivacyPage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang: rawLang } = await params;
  if (!isValidLang(rawLang)) notFound();
  const lang = rawLang as Lang;
  const isAr = lang === 'ar';

  return (
    <section className="max-w-[860px] mx-auto px-6 md:px-14 py-20">
      <h1 className={`serif mb-8 text-[#E8EEF7] ${isAr ? 'text-[32px] font-semibold' : 'text-[40px]'}`}>
        {isAr ? 'سياسة الخصوصية' : 'Privacy Policy'}
      </h1>
      <div className="text-[#A9B6CB] text-[15px] leading-relaxed space-y-6">
        <p style={{ color: '#7F8DA6' }}>{isAr ? 'آخر تحديث: أكتوبر 2026' : 'Last updated: October 2026'}</p>

        <h2 className="text-[18px] font-semibold text-[#E8EEF7]">{isAr ? '١. المعلومات التي نجمعها' : '1. Information we collect'}</h2>
        <p>{isAr ? 'نجمع المعلومات التي تقدّمها مباشرةً، مثل اسمك وبريدك الإلكتروني ومنظمتك عند تقديم استفسار شراكة أو طلب الوصول إلى غرفة بيانات المستثمرين. قد نجمع أيضًا بيانات الاستخدام عبر أدوات التحليلات الاحترافية، في حال تنفيذها.' : 'We collect information you provide directly, such as your name, email address and organisation when submitting a partnership enquiry or requesting investor data room access. We may also collect usage data through professional analytics tools, if implemented.'}</p>

        <h2 className="text-[18px] font-semibold text-[#E8EEF7]">{isAr ? '٢. كيف نستخدم معلوماتك' : '2. How we use your information'}</h2>
        <p>{isAr ? 'نستخدم المعلومات المقدَّمة حصرًا للرد على استفساراتك وإدارة العلاقات مع الشركاء والمستثمرين. لا نبيع بياناتك الشخصية ولا نشاركها مع أطراف ثالثة لأغراض تسويقية.' : 'We use information you submit solely to respond to your enquiry and manage partner and investor relationships. We do not sell or share your personal data with third parties for marketing purposes.'}</p>

        <h2 className="text-[18px] font-semibold text-[#E8EEF7]">{isAr ? '٣. ملفات تعريف الارتباط' : '3. Cookies'}</h2>
        <p>{isAr ? 'هذا الموقع لا يستخدم حاليًا ملفات تعريف الارتباط التتبعية أو تقنيات تحديد الهوية عبر المواقع. إذا أضفنا التحليلات في المستقبل، سنحدّث هذه السياسة وفقًا لذلك.' : 'This website does not currently use tracking cookies or cross-site identification technologies. If we add analytics in the future, we will update this policy accordingly.'}</p>

        <h2 className="text-[18px] font-semibold text-[#E8EEF7]">{isAr ? '٤. التواصل معنا' : '4. Contact'}</h2>
        <p>{isAr ? 'للاستفسارات المتعلقة بالخصوصية، تواصل معنا على ' : 'For privacy enquiries, contact us at '}<a href="mailto:hello@kafoai.com" style={{ color: '#3FD4C4' }}>hello@kafoai.com</a>.</p>
      </div>
    </section>
  );
}
