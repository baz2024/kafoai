import type { Metadata, Viewport } from "next";
import Link from "next/link";
import "./globals.css";
import { SITE, SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: { default: SITE.title, template: `%s | ${SITE.name}` },
  description: SITE.description,
  applicationName: SITE.name,
  alternates: { canonical: "/", types: { "application/rss+xml": "/feed.xml" } },
  openGraph: { type: "website", siteName: SITE.name, locale: "en_US" },
  twitter: { card: "summary_large_image" },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = { themeColor: "#070D1A", width: "device-width", initialScale: 1 };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <header className="site-header">
          <Link href="/" className="brand">
            <span className="mark">K</span> Kafo AI
          </Link>
          <nav aria-label="Primary">
            <Link href="/insights">Insights</Link>
          </nav>
        </header>
        <main>{children}</main>
        <footer className="site-footer">
          <span>© {new Date().getFullYear()} Kafo AI</span>
          <Link href="/llms.txt">llms.txt</Link>
          <Link href="/feed.xml">RSS</Link>
        </footer>
      </body>
    </html>
  );
}
