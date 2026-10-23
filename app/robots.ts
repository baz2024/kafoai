import type { MetadataRoute } from "next";
import { abs } from "@/lib/site";

// Public pages, including the investor page, are indexable. Only the signed-in data room stays out.
export default function robots(): MetadataRoute.Robots {
  return {
    rules: [{ userAgent: "*", allow: "/", disallow: ["/data-room", "/api/"] }],
    sitemap: abs("/sitemap.xml"),
    host: abs(""),
  };
}
