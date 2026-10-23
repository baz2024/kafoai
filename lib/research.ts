import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";

const DIR = path.join(process.cwd(), "content", "research");

export type Paper = {
  slug: string;
  title: string;
  seoTitle: string;
  description: string;
  date: string;
  status: string;
  authors: string[];
  keywords: string[];
  paperUrl: string;
  abstract: string;
};

export function getPapers(): Paper[] {
  return fs
    .readdirSync(DIR)
    .filter((f) => f.endsWith(".md"))
    .map((f) => {
      const { data, content } = matter(fs.readFileSync(path.join(DIR, f), "utf8"));
      return {
        slug: f.replace(/\.md$/, ""),
        title: data.title,
        seoTitle: data.seoTitle ?? data.title,
        description: data.description,
        date: data.date,
        status: data.status,
        authors: data.authors ?? [],
        keywords: data.keywords ?? [],
        paperUrl: data.paperUrl ?? "",
        abstract: content.trim(),
      } satisfies Paper;
    })
    .sort((a, b) => b.date.localeCompare(a.date));
}

export const getPaper = (slug: string) => getPapers().find((p) => p.slug === slug);
