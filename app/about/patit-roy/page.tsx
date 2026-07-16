import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight, Check } from "lucide-react";
import { business } from "@/lib/business";
import { projects, resourcePosts } from "@/lib/content";

export const metadata: Metadata = {
  title: "Patit Roy | Founder",
  description:
    "Patit Roy is the founder of PPR Global, a website, mobile app and business automation agency based in Kolkata, West Bengal, India.",
  alternates: {
    canonical: "/about/patit-roy"
  },
  openGraph: {
    title: "Patit Roy | Founder of PPR Global",
    description:
      "Founder profile for Patit Roy of PPR Global, a website, app and automation agency in Kolkata.",
    url: `${business.url}/about/patit-roy`
  }
};

export default function PatitRoyPage() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        "@id": `${business.url}/#founder`,
        name: business.founder,
        jobTitle: "Founder",
        worksFor: {
          "@id": `${business.url}/#organization`
        },
        url: `${business.url}/about/patit-roy`
      },
      {
        "@type": "WebPage",
        "@id": `${business.url}/about/patit-roy#webpage`,
        name: "Patit Roy | Founder of PPR Global",
        description: metadata.description,
        isPartOf: {
          "@id": `${business.url}/#website`
        }
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: business.url },
          {
            "@type": "ListItem",
            position: 2,
            name: "Patit Roy",
            item: `${business.url}/about/patit-roy`
          }
        ]
      }
    ]
  };

  return (
    <main className="min-h-screen bg-ink px-4 py-24 text-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <article className="mx-auto max-w-5xl">
        <Link href="/" className="inline-flex items-center gap-2 text-sm font-black uppercase tracking-[0.16em] text-acid">
          Back home <ArrowUpRight size={15} />
        </Link>
        <p className="mt-12 text-sm font-black uppercase tracking-[0.22em] text-acid">
          Founder Profile
        </p>
        <h1 className="mt-5 font-display text-5xl font-semibold leading-none md:text-7xl">
          Patit Roy
        </h1>
        <p className="mt-7 max-w-3xl text-xl leading-9 text-white/72">
          Patit Roy is the founder of PPR Global, a website, mobile app and business automation
          agency based in Kolkata, West Bengal, India. His work is connected to website
          development, mobile app development, WhatsApp automation, CRM systems, SEO/GEO,
          Google Ads, Meta Ads and UI/UX design.
        </p>

        <section className="mt-10 grid gap-4 md:grid-cols-2">
          {[
            ["Role", "Founder of PPR Global"],
            ["Base", business.address.display],
            ["Founded", business.foundingYear],
            ["Delivery", "Kolkata, India and remote clients worldwide"]
          ].map(([label, value]) => (
            <div key={label} className="rounded-lg bg-white/[0.055] p-5 shadow-[inset_0_0_0_1px_rgba(255,255,255,0.12)]">
              <p className="text-xs font-black uppercase tracking-[0.18em] text-acid">{label}</p>
              <p className="mt-3 text-lg text-white/76">{value}</p>
            </div>
          ))}
        </section>

        <section className="mt-10 rounded-lg bg-white/[0.055] p-6 shadow-[inset_0_0_0_1px_rgba(255,255,255,0.12)]">
          <h2 className="font-display text-3xl font-semibold">Areas of work</h2>
          <div className="mt-5 grid gap-3 sm:grid-cols-2">
            {business.services.map((service) => (
              <div key={service} className="flex items-center gap-3 text-white/72">
                <Check className="text-acid" size={17} />
                <span>{service}</span>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-10 grid gap-4 md:grid-cols-2">
          <div className="rounded-lg bg-acid p-5 text-ink">
            <p className="text-xs font-black uppercase tracking-[0.18em] text-black/54">
              Selected projects
            </p>
            <div className="mt-4 space-y-3">
              {projects.slice(0, 4).map((project) => (
                <Link key={project.slug} href={`/case-studies/${project.slug}`} className="block font-semibold hover:underline">
                  {project.title}
                </Link>
              ))}
            </div>
          </div>
          <div className="rounded-lg bg-white/[0.055] p-5 shadow-[inset_0_0_0_1px_rgba(255,255,255,0.12)]">
            <p className="text-xs font-black uppercase tracking-[0.18em] text-acid">
              Authored resources
            </p>
            <div className="mt-4 space-y-3">
              {resourcePosts.map((post) => (
                <Link key={post.slug} href={`/resources/${post.slug}`} className="block font-semibold text-white/74 hover:text-acid">
                  {post.title}
                </Link>
              ))}
            </div>
          </div>
        </section>

        <p className="mt-8 text-sm text-white/42">Last updated: July 12, 2026</p>
      </article>
    </main>
  );
}
