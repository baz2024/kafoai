import { notFound } from 'next/navigation';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import { isValidLang, dir } from '@/lib/i18n';
import type { Lang } from '@/lib/i18n';
import { SITE_URL } from '@/lib/products';

export function generateStaticParams() {
  return [{ lang: 'en' }, { lang: 'ar' }];
}

interface LangLayoutProps {
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}

export default async function LangLayout({ children, params }: LangLayoutProps) {
  const { lang } = await params;
  if (!isValidLang(lang)) notFound();

  return (
    <html lang={lang} dir={dir(lang)}>
      <head>
        {/* hreflang alternates — injected at layout level as a fallback */}
        <link rel="alternate" hrefLang="en" href={`${SITE_URL}/en`} />
        <link rel="alternate" hrefLang="ar" href={`${SITE_URL}/ar`} />
        <link rel="alternate" hrefLang="x-default" href={`${SITE_URL}/ar`} />
      </head>
      <body>
        <Nav lang={lang as Lang} />
        <main id="main-content" className="flex-1">
          {children}
        </main>
        <Footer lang={lang as Lang} />
      </body>
    </html>
  );
}
