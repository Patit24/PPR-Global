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

  return {
    title: `${post.title} | Resources`,
    description: post.description,
    keywords: post.keywords,
    alternates: {
      canonical: `/resources/${post.slug}`
    },
    openGraph: {
      title: post.title,
      description: post.description,
      url: `${baseUrl}/resources/${post.slug}`
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.description,
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
          { "@type": "ListItem", position: 2, name: "Resources", item: `${baseUrl}/#resources` },
          {
            "@type": "ListItem",
            position: 3,
            name: post.title,
            item: `${baseUrl}/resources/${post.slug}`
          }
        ]
      },
      ...faqs.map((faq, index) => ({
        "@type": "QAPage",
        "@id": `${baseUrl}/resources/${post.slug}#qa-${index + 1}`,
        mainEntity: {
          "@type": "Question",
          name: faq.question,
          text: faq.question,
          answerCount: 1,
          acceptedAnswer: {
            "@type": "Answer",
            text: faq.answer
          }
        }
      }))
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
          <Link
            href="/#resources"
            className="inline-flex items-center gap-2 text-sm font-black uppercase tracking-[0.16em] text-acid"
          >
            Back to resources <ArrowUpRight size={15} />
          </Link>
          <p className="mt-12 font-display text-sm font-black uppercase tracking-[0.22em] text-acid">
            PPR Global Resources
          </p>
          <h1 className="mt-5 font-display text-5xl font-semibold leading-none md:text-7xl">
            {post.title}
          </h1>
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
              Author
            </p>
            <h2 className="mt-3 text-2xl font-semibold">{business.founder}</h2>
            <p className="mt-3 text-sm leading-6 text-white/62">
              Patit Roy is the founder of PPR Global, a website, app and automation agency in
              Kolkata. This resource is based on practical project planning across websites,
              WhatsApp automation, CRM systems, ads and SEO/GEO work.
            </p>
            <Link
              href="/about/patit-roy"
              className="mt-4 inline-flex items-center gap-2 text-sm font-black uppercase tracking-[0.16em] text-acid"
            >
              View founder profile <ArrowUpRight size={15} />
            </Link>
          </aside>
          <p className="mt-5 text-sm text-white/42">Published: July 8, 2026 · Updated: July 14, 2026</p>
          <Link
            href="/#contact"
            className="mt-8 inline-flex min-h-12 items-center gap-2 rounded-full bg-acid px-5 text-sm font-black uppercase tracking-[0.16em] text-ink"
          >
            Discuss a Project <ArrowUpRight size={16} />
          </Link>
        </article>
      </section>
    </main>
  );
}
