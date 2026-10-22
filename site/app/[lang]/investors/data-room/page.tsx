import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { isValidLang } from '@/lib/i18n';
import type { Lang } from '@/lib/i18n';

export function generateStaticParams() {
  return [{ lang: 'en' }, { lang: 'ar' }];
}

export const metadata: Metadata = {
  robots: { index: false, follow: false },
  title: 'Data Room | Kafo AI Investors',
};

const roomSections = [
  { label: 'Overview', count: 4 },
  { label: 'Product evidence', count: 6 },
  { label: 'Technology', count: 3 },
  { label: 'Financials', count: 2 },
  { label: 'Legal', count: 3 },
  { label: 'Updates', count: 1 },
];

const docs = [
  { title: 'Company overview', type: 'Deck', ext: 'PDF', access: 'View' },
  { title: 'Product evidence & claims register', type: 'Register', ext: 'XLS', access: 'View' },
  { title: 'Technology architecture summary', type: 'Brief', ext: 'PDF', access: 'View' },
  { title: 'Product demos (OmniRisk, Circul sandbox)', type: 'Video', ext: 'MP4', access: 'View' },
  { title: 'Financial model', type: 'Model', ext: 'XLS', access: 'On request' },
  { title: 'Cap table & terms', type: 'Legal', ext: 'PDF', access: 'On request' },
];

export default async function DataRoomPage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang: rawLang } = await params;
  if (!isValidLang(rawLang)) notFound();
  const lang = rawLang as Lang;
  const isAr = lang === 'ar';

  return (
    <div
      className="min-h-screen grid"
      style={{ gridTemplateColumns: '240px 1fr', background: '#070D1A' }}
    >
      {/* Sidebar */}
      <aside
        className="flex flex-col gap-6 p-6 border-r"
        style={{ borderColor: 'rgba(148,180,220,.12)', background: '#060B16' }}
      >
        <div className="flex items-center gap-2">
          <span
            className="w-6 h-6 rounded-[6px] flex items-center justify-center mono font-semibold text-[12px] text-[#3FD4C4]"
            style={{ border: '1.5px solid #3FD4C4' }}
          >K</span>
          <span className="font-semibold text-[14px]">Data room</span>
        </div>
        <nav className="flex flex-col gap-1">
          {roomSections.map((s, i) => (
            <button
              key={s.label}
              className={`flex items-center justify-between px-3 py-2 rounded-lg text-[14px] ${i === 0 ? 'text-[#E8EEF7]' : 'text-[#A9B6CB] hover:text-[#E8EEF7]'} transition-colors text-left`}
              style={i === 0 ? { background: '#0E1A30' } : {}}
            >
              <span>{s.label}</span>
              <span className="mono text-[11px]" style={{ color: '#7F8DA6' }}>{s.count}</span>
            </button>
          ))}
        </nav>
        <div
          className="p-4 rounded-xl flex flex-col gap-2 mt-auto"
          style={{ border: '1px solid rgba(148,180,220,.14)' }}
        >
          <span className="font-semibold text-[13px]">Your IR contact</span>
          <a href="mailto:invest@kafoai.com" className="mono text-[12px]" style={{ color: '#3FD4C4' }}>
            invest@kafoai.com
          </a>
        </div>
      </aside>

      {/* Main */}
      <main className="p-8 md:p-10 flex flex-col gap-8">
        <div className="flex items-center justify-between">
          <div className="flex flex-col gap-1">
            <span className="text-[13px]" style={{ color: '#7F8DA6' }}>
              Welcome back, [Investor name] · [Fund]
            </span>
            <h1 className="serif text-[32px] leading-[1.1] m-0">Overview</h1>
          </div>
          <span
            className="mono text-[11px] font-medium px-3 py-1.5 rounded-full"
            style={{ color: '#6FE3A8', border: '1px solid rgba(111,227,168,.35)' }}
          >
            NDA SIGNED · WATERMARKED
          </span>
        </div>

        {/* Stat cards */}
        <div className="grid grid-cols-3 gap-3">
          {[
            { label: 'Latest update', value: '[Quarterly letter title]', sub: '[date]' },
            { label: 'Next IR call', value: '[Schedule a call]', sub: 'Book a slot →', href: 'mailto:invest@kafoai.com' },
            { label: 'Questions', value: 'Ask the team', sub: 'invest@kafoai.com', href: 'mailto:invest@kafoai.com' },
          ].map(card => (
            <div
              key={card.label}
              className="p-5 rounded-xl flex flex-col gap-2"
              style={{ background: '#0A1222', border: '1px solid rgba(148,180,220,.12)' }}
            >
              <span className="text-[12px]" style={{ color: '#7F8DA6' }}>{card.label}</span>
              <strong className="font-semibold text-[15px]">{card.value}</strong>
              {card.href ? (
                <a href={card.href} className="text-[12px]" style={{ color: '#3FD4C4' }}>{card.sub}</a>
              ) : (
                <span className="text-[12px]" style={{ color: '#A9B6CB' }}>{card.sub}</span>
              )}
            </div>
          ))}
        </div>

        {/* Documents table */}
        <div className="rounded-xl overflow-hidden" style={{ border: '1px solid rgba(148,180,220,.12)' }}>
          <div
            className="grid gap-4 px-5 py-3 mono text-[11px]"
            style={{
              gridTemplateColumns: '1fr 140px 120px 100px',
              background: '#0A1222',
              color: '#7F8DA6',
              letterSpacing: '.06em',
            }}
          >
            <span>DOCUMENT</span>
            <span>TYPE</span>
            <span>UPDATED</span>
            <span className="text-right">ACCESS</span>
          </div>
          {docs.map(doc => (
            <div
              key={doc.title}
              className="grid gap-4 px-5 py-4 items-center text-[14px]"
              style={{
                gridTemplateColumns: '1fr 140px 120px 100px',
                borderTop: '1px solid rgba(148,180,220,.1)',
              }}
            >
              <span className="flex items-center gap-3">
                <span
                  className="w-7 h-8 rounded flex items-center justify-center mono text-[9px]"
                  style={{ border: '1px solid rgba(148,180,220,.25)', color: '#A9B6CB' }}
                >
                  {doc.ext}
                </span>
                {doc.title}
              </span>
              <span style={{ color: '#A9B6CB' }}>{doc.type}</span>
              <span className="mono text-[12px]" style={{ color: '#7F8DA6' }}>[date]</span>
              <span
                className="text-right text-[13px] font-medium"
                style={{ color: doc.access === 'View' ? '#3FD4C4' : '#F2B866' }}
              >
                {doc.access}
              </span>
            </div>
          ))}
        </div>

        <p className="text-[12px]" style={{ color: '#7F8DA6' }}>
          This data room is private, watermarked and access-logged. Documents are provided under NDA.
          Contact <a href="mailto:invest@kafoai.com" style={{ color: '#3FD4C4' }}>invest@kafoai.com</a> with questions.
        </p>
      </main>
    </div>
  );
}
