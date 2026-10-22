import Link from 'next/link';
import type { Lang } from '@/lib/i18n';
import { t } from '@/lib/i18n';
import type { Product } from '@/lib/products';

interface ProductCardProps {
  product: Product;
  lang: Lang;
}

function statusClass(status: string) {
  if (status === 'LAUNCH-READY') return 'badge-ready';
  if (status === 'OPEN TESTING') return 'badge-testing';
  return 'badge-pre';
}

function statusLabel(product: Product, lang: Lang) {
  if (lang === 'ar') return product.statusAr;
  return product.status;
}

export default function ProductCard({ product, lang }: ProductCardProps) {
  return (
    <Link
      href={`/${lang}/products/${product.slug}`}
      className="group block p-7 rounded-2xl transition-colors"
      style={{
        background: '#0A1222',
        border: '1px solid rgba(148,180,220,.12)',
      }}
    >
      <div className="flex items-center justify-between mb-4">
        <span
          className="block w-9 h-[3px] rounded-full"
          style={{ background: product.accent }}
        />
        <span
          className={`mono text-[10px] font-medium px-2 py-[3px] rounded ${statusClass(product.status)}`}
        >
          {statusLabel(product, lang)}
        </span>
      </div>

      <div
        className="text-[21px] font-semibold mb-1 ltr"
        style={{ color: '#E8EEF7' }}
      >
        {product.nameEn}
      </div>

      <div
        className="mono text-[11px] font-medium uppercase mb-3"
        style={{ letterSpacing: '.08em', color: product.accent }}
      >
        {lang === 'ar' ? product.taglineAr : product.taglineEn}
      </div>

      <p className="text-[14px] leading-relaxed" style={{ color: '#A9B6CB' }}>
        {lang === 'ar' ? product.descAr : product.descEn}
      </p>

      <div
        className="mt-5 text-[13px] font-medium flex items-center gap-1.5 transition-colors group-hover:gap-2.5"
        style={{ color: '#3FD4C4' }}
      >
        {t('products.viewProduct', lang)}
        <span className={lang === 'ar' ? '←' : ''}>{lang !== 'ar' ? '→' : '←'}</span>
      </div>
    </Link>
  );
}
