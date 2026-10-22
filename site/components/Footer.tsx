import Link from 'next/link';
import type { Lang } from '@/lib/i18n';
import { t } from '@/lib/i18n';

interface FooterProps {
  lang: Lang;
}

export default function Footer({ lang }: FooterProps) {
  const col1 = [
    { key: 'footer.products', href: `/${lang}/products` },
    { key: 'footer.technology', href: `/${lang}/technology` },
    { key: 'footer.insights', href: `/${lang}/insights` },
    { key: 'footer.about', href: `/${lang}/about` },
  ];
  const col2 = [
    { key: 'footer.partner', href: `/${lang}/partner` },
    { key: 'footer.investors', href: `/${lang}/investors` },
    { key: 'footer.contact', href: `/${lang}/contact` },
    { key: 'nav.forBanks', href: `/${lang}/for-banks` },
  ];
  const legal = [
    { key: 'footer.privacy', href: `/${lang}/privacy` },
    { key: 'footer.terms', href: `/${lang}/terms` },
    { label: 'llms.txt', href: '/llms.txt' },
  ];

  return (
    <footer
      className="border-t"
      style={{ borderColor: 'rgba(148,180,220,.12)', background: '#060B16' }}
    >
      <div className="max-w-[1280px] mx-auto px-6 md:px-14 py-14 grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* Brand */}
        <div className="md:col-span-1 flex flex-col gap-4">
          <Link href={`/${lang}`} className="flex items-center gap-2">
            <span
              className="w-6 h-6 rounded-[6px] flex items-center justify-center mono font-semibold text-[12px] text-[#3FD4C4]"
              style={{ border: '1.5px solid #3FD4C4' }}
            >
              K
            </span>
            <span className="font-semibold text-[16px]">Kafo AI</span>
          </Link>
          <p className="text-[13px] text-[#7F8DA6] leading-relaxed max-w-[200px]">
            {t('footer.tagline', lang)}
          </p>
        </div>

        {/* Col 1 */}
        <div className="flex flex-col gap-3">
          {col1.map(item => (
            <Link key={item.key} href={item.href} className="text-[13px] text-[#A9B6CB] hover:text-[#E8EEF7] transition-colors">
              {t(item.key, lang)}
            </Link>
          ))}
        </div>

        {/* Col 2 */}
        <div className="flex flex-col gap-3">
          {col2.map(item => (
            <Link key={item.key} href={item.href} className="text-[13px] text-[#A9B6CB] hover:text-[#E8EEF7] transition-colors">
              {t(item.key, lang)}
            </Link>
          ))}
        </div>

        {/* Contact */}
        <div className="flex flex-col gap-3">
          <a href="mailto:hello@kafoai.com" className="text-[13px] text-[#3FD4C4] hover:text-[#8BE8DE] transition-colors mono">
            hello@kafoai.com
          </a>
          <a href="mailto:invest@kafoai.com" className="text-[13px] text-[#3FD4C4] hover:text-[#8BE8DE] transition-colors mono">
            invest@kafoai.com
          </a>
          <a href="https://lasttable.ae" target="_blank" rel="noopener noreferrer" className="text-[13px] text-[#A9B6CB] hover:text-[#E8EEF7] transition-colors">
            lasttable.ae ↗
          </a>
          <a href="https://omnirisk.io" target="_blank" rel="noopener noreferrer" className="text-[13px] text-[#A9B6CB] hover:text-[#E8EEF7] transition-colors">
            omnirisk.io ↗
          </a>
        </div>
      </div>

      {/* Bottom bar */}
      <div
        className="max-w-[1280px] mx-auto px-6 md:px-14 py-5 flex flex-col md:flex-row items-start md:items-center justify-between gap-3 border-t"
        style={{ borderColor: 'rgba(148,180,220,.12)' }}
      >
        <span className="text-[12px] text-[#7F8DA6]">{t('footer.copyright', lang)}</span>
        <div className="flex items-center gap-5 flex-wrap">
          {legal.map(item => (
            <Link
              key={item.key ?? item.label}
              href={item.href}
              className="text-[12px] text-[#7F8DA6] hover:text-[#A9B6CB] transition-colors mono"
            >
              {item.key ? t(item.key, lang) : item.label}
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
}
