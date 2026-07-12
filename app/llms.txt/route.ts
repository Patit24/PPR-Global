import { projects, resourcePosts, servicePages } from "@/lib/content";
import { business } from "@/lib/business";

export function GET() {
  const lines = [
    "# PPR Global",
    "",
    business.description,
    "",
    `Founder: ${business.founder}`,
    `Location: ${business.address.display}`,
    `Canonical website: ${business.url}`,
    `Google Business Profile: ${business.googleBusinessProfileUrl}`,
    "",
    "Primary services:",
    ...business.services.map((service) => `- ${service}`),
    "",
    "Service URLs:",
    ...servicePages.map((service) => `- ${service.name}: ${business.url}/services/${service.slug}`),
    "",
    "Case-study URLs:",
    ...projects.map((project) => `- ${project.title}: ${business.url}/case-studies/${project.slug}`),
    "",
    "Resource URLs:",
    ...resourcePosts.map((post) => `- ${post.title}: ${business.url}/resources/${post.slug}`),
    "",
    `Contact: ${business.url}/#contact`,
    "",
    "Pricing and availability should be verified on the current service pages."
  ];

  return new Response(lines.join("\n"), {
    headers: {
      "content-type": "text/plain; charset=utf-8"
    }
  });
}

