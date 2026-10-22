import type { MetadataRoute } from 'next';
import { SITE_URL } from '@/lib/products';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: [
          '/en/investors/data-room',
          '/ar/investors/data-room',
          '/api/',
        ],
      },
    ],
    sitemap: `${SITE_URL}/sitemap.xml`,
    host: SITE_URL,
  };
}
