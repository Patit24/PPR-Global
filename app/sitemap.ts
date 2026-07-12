import type { MetadataRoute } from "next";
import { business } from "@/lib/business";
import { projects, resourcePosts, servicePages, services } from "@/lib/content";

const baseUrl = business.url;
const lastModified = new Date("2026-07-12");

export default function sitemap(): MetadataRoute.Sitemap {
  const serviceSlugs = new Set([
    ...services.map((service) => service.slug),
    ...servicePages.map((service) => service.slug)
  ]);

  return [
    {
      url: baseUrl,
      lastModified,
      changeFrequency: "weekly",
      priority: 1
    },
    {
      url: `${baseUrl}/about/patit-roy`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.78
    },
    {
      url: `${baseUrl}/contact`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.86
    },
    {
      url: `${baseUrl}/privacy-policy`,
      lastModified,
      changeFrequency: "yearly",
      priority: 0.3
    },
    {
      url: `${baseUrl}/terms`,
      lastModified,
      changeFrequency: "yearly",
      priority: 0.25
    },
    ...Array.from(serviceSlugs).map((slug) => ({
      url: `${baseUrl}/services/${slug}`,
      lastModified,
      changeFrequency: "monthly" as const,
      priority: 0.82
    })),
    ...projects.map((project) => ({
      url: `${baseUrl}/case-studies/${project.slug}`,
      lastModified,
      changeFrequency: "monthly" as const,
      priority: 0.76
    })),
    ...resourcePosts.map((post) => ({
      url: `${baseUrl}/resources/${post.slug}`,
      lastModified,
      changeFrequency: "monthly" as const,
      priority: 0.68
    }))
  ];
}
