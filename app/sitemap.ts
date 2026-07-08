import type { MetadataRoute } from "next";
import { projects, servicePages, services } from "@/lib/content";

const baseUrl = "https://www.pprglobal.online";

export default function sitemap(): MetadataRoute.Sitemap {
  const serviceSlugs = new Set([
    ...services.map((service) => service.slug),
    ...servicePages.map((service) => service.slug)
  ]);

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1
    },
    ...Array.from(serviceSlugs).map((slug) => ({
      url: `${baseUrl}/services/${slug}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.82
    })),
    ...projects.map((project) => ({
      url: `${baseUrl}/case-studies/${project.slug}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.76
    }))
  ];
}
