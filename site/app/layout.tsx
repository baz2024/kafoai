import type { Metadata } from 'next';
import {
  IBM_Plex_Sans,
  IBM_Plex_Sans_Arabic,
  Instrument_Serif,
  IBM_Plex_Mono,
} from 'next/font/google';
import './globals.css';

const ibmPlexSans = IBM_Plex_Sans({
  variable: '--font-ibm-plex-sans',
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  display: 'swap',
});

const ibmPlexSansArabic = IBM_Plex_Sans_Arabic({
  variable: '--font-ibm-plex-sans-arabic',
  subsets: ['arabic'],
  weight: ['400', '500', '600'],
  display: 'swap',
});

const instrumentSerif = Instrument_Serif({
  variable: '--font-instrument-serif',
  subsets: ['latin'],
  weight: '400',
  display: 'swap',
});

const ibmPlexMono = IBM_Plex_Mono({
  variable: '--font-ibm-plex-mono',
  subsets: ['latin'],
  weight: ['400', '500'],
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://kafoai.com'),
  title: {
    default: 'Kafo AI — Intelligent Financial Infrastructure',
    template: '%s | Kafo AI',
  },
  description:
    'Kafo AI is a UAE-based AI and fintech venture building intelligent financial infrastructure. Seven products across AI risk intelligence, personal finance, blockchain credit, Islamic digital finance and hospitality technology.',
  robots: { index: true, follow: true },
  icons: {
    icon: '/favicon.ico',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const fontVars = [
    ibmPlexSans.variable,
    ibmPlexSansArabic.variable,
    instrumentSerif.variable,
    ibmPlexMono.variable,
  ].join(' ');

  // [lang]/layout.tsx renders its own <html> and <body> with correct lang/dir.
  // This root layout passes font variables down via a data attribute so they
  // are available regardless of which child renders the <html> element.
  return (
    <html suppressHydrationWarning className={fontVars}>
      <body suppressHydrationWarning>{children}</body>
    </html>
  );
}
