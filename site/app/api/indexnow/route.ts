import { NextRequest, NextResponse } from 'next/server';
import { SITE_URL } from '@/lib/products';

// IndexNow key — replace with real key from indexnow-key.txt before deploy
const INDEXNOW_KEY = process.env.INDEXNOW_KEY ?? 'INDEXNOW_KEY_PLACEHOLDER';
const INDEXNOW_API = 'https://api.indexnow.org/IndexNow';

export async function POST(req: NextRequest) {
  const secret = req.headers.get('x-indexnow-secret');
  if (secret !== process.env.INDEXNOW_SUBMIT_SECRET) {
    return NextResponse.json({ error: 'Unauthorised' }, { status: 401 });
  }

  try {
    const body = await req.json();
    const urls: string[] = body.urls ?? [];
    if (!urls.length) {
      return NextResponse.json({ error: 'No URLs provided' }, { status: 400 });
    }

    const payload = {
      host: new URL(SITE_URL).hostname,
      key: INDEXNOW_KEY,
      keyLocation: `${SITE_URL}/${INDEXNOW_KEY}.txt`,
      urlList: urls.slice(0, 10000),
    };

    const res = await fetch(INDEXNOW_API, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json; charset=utf-8' },
      body: JSON.stringify(payload),
    });

    if (res.ok || res.status === 202) {
      return NextResponse.json({ ok: true, submitted: urls.length });
    }
    return NextResponse.json({ error: `IndexNow returned ${res.status}` }, { status: 502 });
  } catch (err) {
    return NextResponse.json({ error: 'Server error' }, { status: 500 });
  }
}
