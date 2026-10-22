const INDEXNOW_KEY = process.env.INDEXNOW_KEY ?? 'INDEXNOW_KEY_PLACEHOLDER';
const SITE_URL = 'https://kafoai.com';
const INDEXNOW_ENDPOINT = 'https://api.indexnow.org/indexnow';

interface IndexNowResult {
  ok: boolean;
  status?: number;
  error?: string;
}

export async function submitUrlsToIndexNow(urls: string[]): Promise<IndexNowResult> {
  if (!urls.length) return { ok: true };

  // Deduplicate and filter to site URLs only
  const filtered = [...new Set(urls)].filter(u => u.startsWith(SITE_URL));
  if (!filtered.length) return { ok: true };

  try {
    const res = await fetch(INDEXNOW_ENDPOINT, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json; charset=utf-8' },
      body: JSON.stringify({
        host: 'kafoai.com',
        key: INDEXNOW_KEY,
        keyLocation: `${SITE_URL}/${INDEXNOW_KEY}.txt`,
        urlList: filtered,
      }),
    });

    if (res.ok || res.status === 202) {
      return { ok: true, status: res.status };
    }

    return { ok: false, status: res.status, error: `IndexNow returned ${res.status}` };
  } catch (err) {
    return { ok: false, error: String(err) };
  }
}

export function allPublicUrls(): string[] {
  const langs = ['en', 'ar'];
  const slugs = ['omnirisk', 'ai-wealth', 'rayachain', 'circul', 'islamic-crypto-lending', 'qardx-instant', 'lasttable'];
  const urls: string[] = [];

  for (const lang of langs) {
    urls.push(`${SITE_URL}/${lang}`);
    urls.push(`${SITE_URL}/${lang}/products`);
    urls.push(`${SITE_URL}/${lang}/partner`);
    urls.push(`${SITE_URL}/${lang}/investors`);
    urls.push(`${SITE_URL}/${lang}/technology`);
    urls.push(`${SITE_URL}/${lang}/for-banks`);
    urls.push(`${SITE_URL}/${lang}/insights`);
    urls.push(`${SITE_URL}/${lang}/about`);
    urls.push(`${SITE_URL}/${lang}/contact`);
    urls.push(`${SITE_URL}/${lang}/privacy`);
    urls.push(`${SITE_URL}/${lang}/terms`);
    for (const slug of slugs) {
      urls.push(`${SITE_URL}/${lang}/products/${slug}`);
    }
  }

  return urls;
}
