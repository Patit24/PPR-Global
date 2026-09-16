import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { business } from "@/lib/business";
import { resourcePosts, servicePages, services } from "@/lib/content";

const baseUrl = business.url;

function getPost(slug: string) {
  return resourcePosts.find((post) => post.slug === slug);
}

export function generateStaticParams() {
  return resourcePosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);

  if (!post) {
    return {
      title: "Resources"
    };
  }

  const pageTitle =
    "metaTitle" in post && post.metaTitle ? (post.metaTitle as string) : post.title;
  const pageDescription =
    "metaDescription" in post && post.metaDescription
      ? (post.metaDescription as string)
      : post.description;

  return {
    title: `${pageTitle} | Resources`,
    description: pageDescription,
    keywords: post.keywords,
    alternates: {
      canonical: `/resources/${post.slug}`
    },
    openGraph: {
      title: pageTitle,
      description: pageDescription,
      url: `${baseUrl}/resources/${post.slug}`
    },
    twitter: {
      card: "summary_large_image",
      title: pageTitle,
      description: pageDescription,
      images: ["/opengraph-image"]
    }
  };
}

export default async function ResourcePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getPost(slug);

  if (!post) {
    return (
      <main className="min-h-screen bg-ink px-4 py-24 text-white">
        <div className="mx-auto max-w-4xl">
          <p className="text-acid">Resource not found.</p>
          <Link href="/" className="mt-6 inline-flex items-center gap-2">
            Back home <ArrowUpRight size={16} />
          </Link>
        </div>
      </main>
    );
  }

  const faqs = "faqs" in post && Array.isArray(post.faqs) ? post.faqs : [];
  const relatedServiceSlugs =
    "relatedServiceSlugs" in post && Array.isArray(post.relatedServiceSlugs)
      ? post.relatedServiceSlugs
      : [];
  const relatedServices = relatedServiceSlugs
    .map((relatedSlug) => {
      const detailed = servicePages.find((service) => service.slug === relatedSlug);
      if (detailed) {
        return {
          slug: detailed.slug,
          name: detailed.shortName,
          description: detailed.description
        };
      }

      const basic = services.find((service) => service.slug === relatedSlug);
      return basic
        ? {
            slug: basic.slug,
            name: basic.name,
            description: `Explore ${basic.name.toLowerCase()} services from PPR Global.`
          }
        : null;
    })
    .filter((service): service is { slug: string; name: string; description: string } =>
      Boolean(service)
    );
  const articleSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        "@id": `${baseUrl}/resources/${post.slug}#article`,
        headline: post.title,
        description: post.description,
        author: {
          "@id": `${baseUrl}/#founder`
        },
        publisher: {
          "@id": `${baseUrl}/#organization`
        },
        datePublished: "2026-07-08",
        dateModified: "2026-07-14",
        mainEntityOfPage: `${baseUrl}/resources/${post.slug}`
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: baseUrl },
          { "@type": "ListItem", position: 2, name: "Resources", item: `${baseUrl}/resources` },
          {
            "@type": "ListItem",
            position: 3,
            name: post.title,
            item: `${baseUrl}/resources/${post.slug}`
          }
        ]
      },
      ...(faqs.length > 0
        ? [
            {
              "@type": "FAQPage",
              "@id": `${baseUrl}/resources/${post.slug}#faq`,
              mainEntity: faqs.map((faq) => ({
                "@type": "Question",
                name: faq.question,
                acceptedAnswer: {
                  "@type": "Answer",
                  text: faq.answer
                }
              }))
            }
          ]
        : [])
    ]
  };

  return (
    <main className="min-h-screen bg-ink text-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <section className="relative overflow-hidden px-4 pb-20 pt-28">
        <div
          aria-hidden="true"
          className="absolute inset-0 opacity-50"
          style={{
            backgroundImage:
              "linear-gradient(rgba(184,255,61,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(184,255,61,0.04) 1px, transparent 1px)",
            backgroundSize: "56px 56px"
          }}
        />
        <article className="relative mx-auto max-w-4xl">
          {/* Breadcrumb Navigation */}
          <nav aria-label="Breadcrumb" className="flex flex-wrap items-center gap-2 text-xs font-semibold uppercase tracking-wider text-white/50">
            <Link href="/" className="text-acid hover:underline">
              Home
            </Link>
            <span>/</span>
            <Link href="/resources" className="text-acid hover:underline">
              Resources
            </Link>
            <span>/</span>
            <span className="text-white/40 truncate max-w-[280px] sm:max-w-md">{post.title}</span>
          </nav>

          <div className="mt-8 flex items-center justify-between">
            <Link
              href="/resources"
              className="inline-flex items-center gap-2 text-sm font-black uppercase tracking-[0.16em] text-acid hover:underline"
            >
              ← Back to all resources
            </Link>
            <span className="text-xs uppercase tracking-widest text-white/40">PPR Global Engineering</span>
          </div>

          <h1 className="mt-8 font-display text-4xl font-semibold leading-tight md:text-6xl lg:text-7xl">
            {post.title}
          </h1>

          {/* Author & Editorial Metadata Badge */}
          <div className="mt-6 flex flex-wrap items-center gap-4 rounded-lg border border-white/10 bg-white/[0.03] p-4 text-xs text-white/70">
            <div className="flex items-center gap-2">
              <span className="grid h-7 w-7 place-items-center rounded-full bg-acid text-[11px] font-black text-ink">
                PR
              </span>
              <span>
                Written by <Link href="/about/patit-roy" className="font-bold text-white hover:text-acid underline">Patit Roy</Link>
              </span>
            </div>
            <span>•</span>
            <span>Founder & Lead Engineer</span>
            <span>•</span>
            <span>Updated: Sep 16, 2026</span>
            <span>•</span>
            <span className="text-acid font-semibold">5 min read</span>
          </div>

          <p className="mt-7 text-xl leading-9 text-white/70">{post.description}</p>
          <div className="mt-10 space-y-6 rounded-lg bg-white/[0.055] p-6 text-lg leading-9 text-white/74 shadow-[inset_0_0_0_1px_rgba(255,255,255,0.12)] md:p-8">
            <p className="rounded-md bg-acid/10 p-4 text-base leading-7 text-white/78">
              Direct answer: {post.description}
            </p>
            {post.body.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
          {relatedServices.length ? (
            <section className="mt-8 rounded-lg bg-white/[0.055] p-6 shadow-[inset_0_0_0_1px_rgba(255,255,255,0.12)] md:p-8">
              <p className="text-sm font-black uppercase tracking-[0.18em] text-acid">
                Related PPR Global services
              </p>
              <div className="mt-6 grid gap-3 md:grid-cols-2">
                {relatedServices.map((service) => (
                  <Link
                    key={service.slug}
                    href={`/services/${service.slug}`}
                    className="group rounded-lg bg-black/24 p-4 outline-none transition-colors hover:bg-black/36 focus-visible:ring-2 focus-visible:ring-acid"
                  >
                    <h2 className="text-lg font-semibold text-white">{service.name}</h2>
                    <p className="mt-3 line-clamp-2 text-sm leading-6 text-white/58">
                      {service.description}
                    </p>
                    <span className="mt-4 inline-flex items-center gap-2 text-xs font-black uppercase tracking-[0.16em] text-acid transition-colors group-hover:text-white">
                      View service <ArrowUpRight size={14} />
                    </span>
                  </Link>
                ))}
              </div>
            </section>
          ) : null}
          {faqs.length ? (
            <section className="mt-8 rounded-lg bg-white/[0.055] p-6 shadow-[inset_0_0_0_1px_rgba(255,255,255,0.12)] md:p-8">
              <p className="text-sm font-black uppercase tracking-[0.18em] text-acid">
                Quick FAQ
              </p>
              <div className="mt-6 grid gap-4 md:grid-cols-2">
                {faqs.map((faq) => (
                  <div key={faq.question} className="rounded-lg bg-black/24 p-4">
                    <h2 className="text-lg font-semibold text-white">{faq.question}</h2>
                    <p className="mt-3 text-sm leading-6 text-white/62">{faq.answer}</p>
                  </div>
                ))}
              </div>
            </section>
          ) : null}
          <aside className="mt-8 rounded-lg bg-white/[0.055] p-5 shadow-[inset_0_0_0_1px_rgba(255,255,255,0.12)]">
            <p className="text-xs font-black uppercase tracking-[0.18em] text-acid">
              About The Author
            </p>
            <h2 className="mt-3 text-2xl font-semibold">{business.founder}</h2>
            <p className="mt-3 text-sm leading-6 text-white/62">
              Patit Roy is the founder and lead engineer of PPR Global, a software agency in
              Kolkata, West Bengal. Every resource is derived from practical engineering across Next.js websites,
              mobile applications, WhatsApp automation, and custom CRM systems.
            </p>
            <Link
              href="/about/patit-roy"
              className="mt-4 inline-flex items-center gap-2 text-sm font-black uppercase tracking-[0.16em] text-acid hover:underline"
            >
              View founder profile & credentials <ArrowUpRight size={15} />
            </Link>
          </aside>

          {/* More Related Guides */}
          <section className="mt-12 border-t border-white/10 pt-8">
            <div className="flex items-center justify-between">
              <h2 className="font-display text-xl font-semibold uppercase tracking-wider text-white">
                Explore More Technical Guides
              </h2>
              <Link href="/resources" className="text-xs font-bold uppercase tracking-wider text-acid hover:underline">
                View All ({resourcePosts.length}) →
              </Link>
            </div>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              {resourcePosts
                .filter((r) => r.slug !== post.slug)
                .slice(0, 4)
                .map((guide) => (
                  <Link
                    key={guide.slug}
                    href={`/resources/${guide.slug}`}
                    className="group rounded-xl border border-white/10 bg-white/[0.025] p-4 transition-colors hover:border-acid/30 hover:bg-white/[0.05]"
                  >
                    <p className="text-xs font-semibold text-acid uppercase">{guide.keywords?.[0] || "Guide"}</p>
                    <h3 className="mt-2 text-sm font-semibold text-white group-hover:text-acid transition-colors">
                      {guide.title}
                    </h3>
                    <span className="mt-3 inline-flex items-center gap-1 text-[11px] font-bold uppercase tracking-wider text-white/50 group-hover:text-white">
                      Read Guide <ArrowUpRight size={12} />
                    </span>
                  </Link>
                ))}
            </div>
          </section>

          <div className="mt-12 flex flex-col gap-4 sm:flex-row">
            <Link
              href="/contact"
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-acid px-6 text-sm font-black uppercase tracking-[0.16em] text-ink shadow-[0_10px_30px_rgba(184,255,61,0.25)] transition-transform hover:scale-105"
            >
              Book Free Strategy Call <ArrowUpRight size={16} />
            </Link>
            <a
              href={`https://wa.me/919609079663?text=${encodeURIComponent(
                `Hi Patit, I was reading your guide on ${post.title} and want to discuss my project.`
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-white/20 px-6 text-sm font-black uppercase tracking-[0.16em] text-white transition-colors hover:border-acid hover:text-acid"
            >
              Chat on WhatsApp <ArrowUpRight size={15} />
            </a>
          </div>
        </article>
      </section>
    </main>
  );
}
