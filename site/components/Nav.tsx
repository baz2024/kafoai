'use client';

import Link from 'next/link';
import { useState } from 'react';
import type { Lang } from '@/lib/i18n';
import { t, altLang } from '@/lib/i18n';

interface NavProps {
  lang: Lang;
  currentPath?: string;
}

export default function Nav({ lang, currentPath = '' }: NavProps) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const alt = altLang(lang);
  const isRtl = lang === 'ar';

  const navLinks = [
    { key: 'nav.products', href: `/${lang}/products` },
    { key: 'nav.technology', href: `/${lang}/technology` },
    { key: 'nav.forBanks', href: `/${lang}/for-banks` },
    { key: 'nav.insights', href: `/${lang}/insights` },
    { key: 'nav.about', href: `/${lang}/about` },
  ];

  // Swap current path lang prefix for language switcher
  const switchPath = currentPath.replace(`/${lang}/`, `/${alt}/`).replace(`/${lang}`, `/${alt}`) || `/${alt}`;

  return (
    <header
      style={{ borderBottom: '1px solid rgba(148,180,220,.12)', backdropFilter: 'blur(8px)' }}
      className="sticky top-0 z-50 bg-[#070D1A]/95"
    >
      <nav className="max-w-[1280px] mx-auto px-6 md:px-14 h-16 flex items-center justify-between gap-6">
        {/* Logo */}
        <Link href={`/${lang}`} className="flex items-center gap-2.5 flex-none">
          <span
            className="w-7 h-7 rounded-lg flex items-center justify-center mono font-semibold text-sm text-[#3FD4C4]"
            style={{ border: '1.5px solid #3FD4C4' }}
          >
            K
          </span>
          <span className="font-semibold text-[17px] text-[#E8EEF7]">Kafo AI</span>
        </Link>

        {/* Desktop nav links */}
        <div className={`hidden md:flex items-center gap-7 text-sm text-[#A9B6CB] ${isRtl ? 'flex-row-reverse' : ''}`}>
          {navLinks.map(link => (
            <Link
              key={link.key}
              href={link.href}
              className="hover:text-[#E8EEF7] transition-colors"
            >
              {t(link.key, lang)}
            </Link>
          ))}
        </div>

        {/* Desktop right actions */}
        <div className={`hidden md:flex items-center gap-4 flex-none ${isRtl ? 'flex-row-reverse' : ''}`}>
          <Link
            href={switchPath}
            className="text-sm text-[#A9B6CB] hover:text-[#E8EEF7] transition-colors"
            style={lang === 'ar' ? { fontFamily: 'var(--font-ibm-plex-sans)' } : { fontFamily: 'var(--font-ibm-plex-sans-arabic)' }}
          >
            {t('nav.language', lang)}
          </Link>
          <Link
            href={`/${lang}/partner`}
            className="px-4 py-2 rounded-full text-[14px] font-semibold text-[#04131A] transition-opacity hover:opacity-90"
            style={{ background: '#3FD4C4' }}
          >
            {t('nav.partner', lang)}
          </Link>
        </div>

        {/* Mobile menu button */}
        <button
          onClick={() => setMobileOpen(o => !o)}
          className="md:hidden text-[#A9B6CB] hover:text-[#E8EEF7] flex items-center gap-1.5 text-sm"
          aria-label="Toggle menu"
          aria-expanded={mobileOpen}
        >
          <span>{t('nav.menu', lang)}</span>
          <svg width="18" height="18" viewBox="0 0 18 18" fill="currentColor" aria-hidden="true">
            {mobileOpen ? (
              <path d="M4 4l10 10M14 4L4 14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" fill="none" />
            ) : (
              <>
                <rect y="3" width="18" height="1.5" rx="1" />
                <rect y="8.25" width="18" height="1.5" rx="1" />
                <rect y="13.5" width="18" height="1.5" rx="1" />
              </>
            )}
          </svg>
        </button>
      </nav>

      {/* Mobile dropdown */}
      {mobileOpen && (
        <div
          className="md:hidden border-t px-6 py-4 flex flex-col gap-3 text-sm bg-[#0A1222]"
          style={{ borderColor: 'rgba(148,180,220,.12)' }}
        >
          {navLinks.map(link => (
            <Link
              key={link.key}
              href={link.href}
              className="text-[#A9B6CB] hover:text-[#E8EEF7] py-1"
              onClick={() => setMobileOpen(false)}
            >
              {t(link.key, lang)}
            </Link>
          ))}
          <div className="pt-2 flex flex-col gap-2" style={{ borderTop: '1px solid rgba(148,180,220,.12)' }}>
            <Link
              href={`/${lang}/investors`}
              className="text-[#A9B6CB] hover:text-[#E8EEF7] py-1"
              onClick={() => setMobileOpen(false)}
            >
              {t('nav.investors', lang)}
            </Link>
            <Link href={switchPath} className="text-[#A9B6CB] hover:text-[#E8EEF7] py-1" onClick={() => setMobileOpen(false)}>
              {t('nav.language', lang)}
            </Link>
            <Link
              href={`/${lang}/partner`}
              className="mt-1 text-center py-2.5 rounded-full font-semibold text-[#04131A]"
              style={{ background: '#3FD4C4' }}
              onClick={() => setMobileOpen(false)}
            >
              {t('nav.partner', lang)}
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
