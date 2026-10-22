import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";
import { Marked } from "marked";
import { gfmHeadingId, getHeadingList } from "marked-gfm-heading-id";

const DIR = path.join(process.cwd(), "content", "insights");

export type Insight = {
  slug: string;
  title: string;
  description: string;
  date: string;
  updated: string;
  category: string;
  tags: string[];
  draft: boolean;
  words: number;
  readingMinutes: number;
  body: string;
};

function readAll(): Insight[] {
  return fs
    .readdirSync(DIR)
    .filter((f) => f.endsWith(".md"))
    .map((f) => {
      const { data, content } = matter(fs.readFileSync(path.join(DIR, f), "utf8"));
      const words = content.split(/\s+/).filter(Boolean).length;
      return {
        slug: f.replace(/\.md$/, ""),
        title: data.title,
        description: data.description,
        date: data.date,
        updated: data.updated ?? data.date,
        category: data.category ?? "Insights",
        tags: data.tags ?? [],
        draft: Boolean(data.draft),
        words,
        readingMinutes: Math.max(1, Math.round(words / 220)),
        body: content,
      } satisfies Insight;
    });
}

// Drafts are visible in `next dev` for review but never published in production.
export function getInsights(): Insight[] {
  const showDrafts = process.env.NODE_ENV !== "production";
  return readAll()
    .filter((i) => showDrafts || !i.draft)
    .sort((a, b) => b.date.localeCompare(a.date));
}

export function getInsight(slug: string) {
  return getInsights().find((i) => i.slug === slug);
}

export function renderMarkdown(src: string) {
  const marked = new Marked({ gfm: true }, gfmHeadingId());
  const html = marked.parse(src) as string;
  const headings = getHeadingList().filter((h) => h.level === 2);
  return { html, headings };
}
