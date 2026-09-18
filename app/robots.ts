import type { MetadataRoute } from "next";
import { business } from "@/lib/business";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/admin", "/admin/", "/api/admin", "/api/admin/"]
      },
      {
        userAgent: ["GPTBot", "PerplexityBot", "ClaudeBot", "Google-Extended", "Applebot-Extended"],
        allow: ["/", "/llms.txt"],
        disallow: ["/admin", "/admin/", "/api/admin", "/api/admin/"]
      }
    ],
    sitemap: `${business.url}/sitemap.xml`,
    host: business.url
  };
}
