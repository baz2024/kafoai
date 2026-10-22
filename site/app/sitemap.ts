import type { MetadataRoute } from 'next';
import { products, SITE_URL } from '@/lib/products';

const langs = ['en', 'ar'] as const;

const staticPaths = [
  '',
  '/products',
  '/partner',
  '/investors',
  '/technology',
  '/for-banks',
  '/insights',
  '/about',
  '/contact',
  '/privacy',
  '/terms',
];

export default function sitemap(): MetadataRoute.Sitemap {
  const entries: MetadataRoute.Sitemap = [];

  // Root redirect
  entries.push({
    url: SITE_URL,
    lastModified: new Date(),
    changeFrequency: 'weekly',
    priority: 1.0,
  });

  for (const lang of langs) {
    const isAr = lang === 'ar';
    for (const path of staticPaths) {
      // Skip data-room from sitemap
      entries.push({
        url: `${SITE_URL}/${lang}${path}`,
        lastModified: new Date(),
        changeFrequency: path === '' ? 'weekly' : 'monthly',
        priority: path === '' ? 0.95 : path === '/products' ? 0.9 : 0.8,
      });
    }
    // Product pages
    for (const product of products) {
      entries.push({
        url: `${SITE_URL}/${lang}/products/${product.slug}`,
        lastModified: new Date(),
        changeFrequency: 'monthly',
        priority: 0.85,
      });
    }
  }

  return entries;
}
