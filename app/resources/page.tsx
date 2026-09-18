import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight, BookOpen, Clock, Calendar, Search, Sparkles, Tag } from "lucide-react";
import { business } from "@/lib/business";
import { resourcePosts } from "@/lib/content";

export const metadata: Metadata = {
  title: "Engineering Guides, Website Pricing & Growth Playbooks",
  description:
    "Explore in-depth technical guides, website pricing breakdowns, local SEO playbooks, WhatsApp CRM automation blueprints, and digital growth strategies by PPR Global.",
  alternates: {
    canonical: "/resources"
  },
  openGraph: {
    title: "Engineering Guides, Website Pricing & Growth Playbooks",
    description:
      "Explore in-depth technical guides, website pricing breakdowns, local SEO playbooks, WhatsApp CRM automation blueprints, and digital growth strategies by PPR Global.",
    url: `${business.url}/resources`
  }
};

export default function ResourcesIndexPage() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "CollectionPage",
        "@id": `${business.url}/resources#webpage`,
        name: "PPR Global Engineering & Growth Resources",
        description: metadata.description,
        url: `${business.url}/resources`,
        isPartOf: {
          "@id": `${business.url}/#website`
        },
        about: {
          "@id": `${business.url}/#organization`
        }
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: business.url },
          { "@type": "ListItem", position: 2, name: "Resources", item: `${business.url}/resources` }
        ]
      },
      {
        "@type": "ItemList",
        itemListElement: resourcePosts.map((post, index) => ({
          "@type": "ListItem",
          position: index + 1,
          name: post.title,
          url: `${business.url}/resources/${post.slug}`
        }))
      }
    ]
  };

  return (
    <main className="min-h-screen bg-ink px-4 py-24 text-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <div className="relative mx-auto max-w-7xl">
        {/* Top bar & breadcrumb */}
        <div className="flex flex-wrap items-center justify-between gap-4 border-b border-white/10 pb-6">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm font-black uppercase tracking-[0.16em] text-acid outline-none hover:underline focus-visible:ring-2 focus-visible:ring-acid"
          >
            ← Back to Home
          </Link>
          <div className="flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.18em] text-white/50">
            <span>Author: Patit Roy</span>
            <span>•</span>
            <span>{resourcePosts.length} Technical Guides</span>
          </div>
        </div>

        {/* Hero Section */}
        <header className="mt-12 max-w-4xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-acid/30 bg-acid/10 px-4 py-1.5 text-xs font-black uppercase tracking-[0.2em] text-acid">
            <Sparkles size={14} aria-hidden="true" />
            <span>PPR Global Knowledge Base</span>
          </div>
          <h1 className="mt-6 font-display text-4xl font-semibold leading-tight md:text-6xl lg:text-7xl">
            Engineering, SEO & Automation Blueprints
          </h1>
          <p className="mt-6 text-lg leading-8 text-white/70 md:text-xl md:leading-9">
            Actionable case studies, real Indian market cost breakdowns, Next.js engineering benchmarks,
            and lead automation strategies written directly by practitioners at PPR Global.
          </p>
        </header>

        {/* Editorial Trust & E-E-A-T Guarantee Banner */}
        <section className="mt-10 rounded-xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur-sm md:p-8">
          <div className="grid gap-6 md:grid-cols-3">
            <div className="flex items-start gap-3.5">
              <div className="rounded-lg bg-acid/10 p-2.5 text-acid">
                <BookOpen size={20} />
              </div>
              <div>
                <p className="text-sm font-bold uppercase tracking-wider text-white">100% Original Insights</p>
                <p className="mt-1 text-xs leading-5 text-white/60">
                  Zero generic boilerplate. Every guide is derived from actual production client deployments across Kolkata and global markets.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3.5">
              <div className="rounded-lg bg-acid/10 p-2.5 text-acid">
                <Clock size={20} />
              </div>
              <div>
                <p className="text-sm font-bold uppercase tracking-wider text-white">Regularly Updated</p>
                <p className="mt-1 text-xs leading-5 text-white/60">
                  Continually refreshed with current Google Core Algorithm guidelines, PageSpeed benchmarks, and 2026 pricing standards.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3.5">
              <div className="rounded-lg bg-acid/10 p-2.5 text-acid">
                <Tag size={20} />
              </div>
              <div>
                <p className="text-sm font-bold uppercase tracking-wider text-white">Direct Practitioner Access</p>
                <p className="mt-1 text-xs leading-5 text-white/60">
                  Have questions about an architecture pattern or strategy? Book a free 15-minute consultation directly with our founder.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Guides Grid */}
        <section className="mt-14">
          <div className="flex items-center justify-between border-b border-white/10 pb-4">
            <h2 className="font-display text-2xl font-semibold uppercase tracking-wider text-white">
              All Guides & Publications ({resourcePosts.length})
            </h2>
            <span className="text-xs uppercase tracking-widest text-white/40">Sorted by Intent</span>
          </div>

          <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {resourcePosts.map((post, index) => (
              <article
                key={post.slug}
                className="group relative flex flex-col justify-between rounded-xl border border-white/10 bg-white/[0.035] p-6 transition-all duration-200 hover:-translate-y-1 hover:border-acid/40 hover:bg-white/[0.06] hover:shadow-[0_12px_40px_rgba(184,255,61,0.08)]"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 text-xs font-medium text-white/45">
                    <span className="inline-flex items-center gap-1.5 rounded-md bg-white/5 px-2.5 py-1 text-[11px] font-semibold text-acid">
                      <Tag size={12} />
                      {post.keywords?.[0] || "Guide"}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock size={12} />
                      5 min read
                    </span>
                  </div>

                  <h3 className="mt-4 font-display text-xl font-semibold leading-snug text-white transition-colors group-hover:text-acid">
                    <Link href={`/resources/${post.slug}`} className="outline-none focus-visible:ring-2 focus-visible:ring-acid">
                      {post.title}
                    </Link>
                  </h3>

                  <p className="mt-3 line-clamp-3 text-sm leading-6 text-white/65">
                    {post.description}
                  </p>
                </div>

                <div className="mt-6 border-t border-white/10 pt-4">
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-white/40">Patit Roy · Sep 2026</span>
                    <Link
                      href={`/resources/${post.slug}`}
                      className="inline-flex items-center gap-1.5 font-bold uppercase tracking-wider text-acid transition-transform group-hover:translate-x-0.5"
                    >
                      Read Guide <ArrowUpRight size={14} />
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* Bottom CTA */}
        <section className="mt-20 rounded-2xl border border-acid/30 bg-gradient-to-b from-acid/10 via-white/[0.02] to-transparent p-8 text-center md:p-14">
          <h2 className="font-display text-3xl font-semibold md:text-5xl">
            Need a custom software or growth solution?
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base text-white/70 md:text-lg">
            Skip the generic proposals. Get a direct architectural breakdown, milestone quote, and live preview for your business in 72 hours.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/contact"
              className="inline-flex min-h-12 items-center justify-center rounded-full bg-acid px-8 text-sm font-black uppercase tracking-[0.14em] text-ink transition-transform hover:scale-105"
            >
              Book 15-Min Strategy Call
            </Link>
            <Link
              href="/"
              className="inline-flex min-h-12 items-center justify-center rounded-full border border-white/20 bg-white/5 px-8 text-sm font-bold uppercase tracking-[0.14em] text-white hover:bg-white/10"
            >
              Explore Our Work
            </Link>
          </div>
        </section>
      </div>
    </main>
  );
}
