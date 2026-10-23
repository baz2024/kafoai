import fs from "node:fs";
import path from "node:path";

export type Shot = { src: string; alt: string; width?: number; height?: number; device: "desktop" | "mobile" };

// public/products/manifest.json maps each product slug to its screenshots:
// { "<slug>": [ { file, width, height, alt: { en, ar }, device } ] }. Missing files are skipped.
export function getShots(slug: string, lang: string): Shot[] {
  try {
    const root = path.join(process.cwd(), "public", "products");
    const raw = JSON.parse(fs.readFileSync(path.join(root, "manifest.json"), "utf8"));
    const list: any[] = Array.isArray(raw?.[slug]) ? raw[slug] : [];
    return list.flatMap((e) => {
      const rel = String(e?.file ?? "").replace(/^\/?(public\/)?(products\/)?/, "");
      if (!rel || !fs.existsSync(path.join(root, rel))) return [];
      const a = e.alt;
      const alt = typeof a === "string" ? a : (a?.[lang] ?? a?.en ?? "");
      return [{ src: `/products/${rel}`, alt, width: e.width, height: e.height, device: e.device === "mobile" ? "mobile" : "desktop" } as Shot];
    });
  } catch {
    return [];
  }
}
