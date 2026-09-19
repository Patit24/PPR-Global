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
        userAgent: [
          "GPTBot",
          "OAI-SearchBot",
          "ClaudeBot",
          "PerplexityBot",
          "Google-Extended",
          "Applebot-Extended",
          "CCBot",
          "cohere-ai"
        ],
        allow: ["/", "/llms.txt"],
        disallow: ["/admin", "/admin/", "/api/admin", "/api/admin/"]
      }
    ],
    sitemap: `${business.url}/sitemap.xml`,
    host: business.url
  };
}
