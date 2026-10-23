// Submit every URL in the live sitemap to IndexNow (Bing, Yandex, Seznam, Naver...).
// Run after a production deploy: INDEXNOW_KEY=... node scripts/indexnow.mjs
const SITE = (process.env.NEXT_PUBLIC_SITE_URL ?? "https://kafoai.com").replace(/\/$/, "");
const key = process.env.INDEXNOW_KEY;
if (!key) throw new Error("INDEXNOW_KEY is not set");

const sitemap = await (await fetch(`${SITE}/sitemap.xml`)).text();
const urlList = [...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1]);

const res = await fetch("https://api.indexnow.org/indexnow", {
  method: "POST",
  headers: { "Content-Type": "application/json; charset=utf-8" },
  body: JSON.stringify({ host: new URL(SITE).host, key, keyLocation: `${SITE}/indexnow.txt`, urlList }),
});
console.log(`IndexNow: submitted ${urlList.length} URLs, HTTP ${res.status}`);
