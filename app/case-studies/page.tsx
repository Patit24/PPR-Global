import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Check, Sparkles, ArrowLeft } from "lucide-react";
import { business } from "@/lib/business";
import { projects } from "@/lib/content";

export const metadata: Metadata = {
  title: "Website, Mobile App & Software Case Studies | Kolkata",
  description:
    "Explore our complete portfolio of web development, mobile applications, WhatsApp automation, and custom CRM projects engineered for Kolkata and global businesses by PPR Global.",
  alternates: {
    canonical: "/case-studies"
  },
  openGraph: {
    title: "Website, Mobile App & Software Case Studies | Kolkata",
    description:
      "Explore our complete portfolio of web development, mobile applications, WhatsApp automation, and custom CRM projects engineered for Kolkata and global businesses by PPR Global.",
    url: `${business.url}/case-studies`,
    images: ["/opengraph-image"]
  },
  twitter: {
    card: "summary_large_image",
    title: "Website, Mobile App & Software Case Studies | PPR Global",
    description:
      "Explore our complete portfolio of web development, mobile applications, WhatsApp automation, and custom CRM projects engineered for Kolkata and global businesses by PPR Global.",
    images: ["/opengraph-image"]
  }
};

export default function CaseStudiesIndexPage() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "CollectionPage",
        "@id": `${business.url}/case-studies#webpage`,
        name: "PPR Global Portfolio & Case Studies",
        description: metadata.description,
        url: `${business.url}/case-studies`,
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
          { "@type": "ListItem", position: 2, name: "Case Studies", item: `${business.url}/case-studies` }
        ]
      },
      {
        "@type": "ItemList",
        itemListElement: projects.map((project, index) => ({
          "@type": "ListItem",
          position: index + 1,
          name: project.title,
          url: `${business.url}/case-studies/${project.slug}`
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
        {/* Top bar & navigation */}
        <div className="flex flex-wrap items-center justify-between gap-4 border-b border-white/10 pb-6">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm font-black uppercase tracking-[0.16em] text-acid outline-none hover:underline focus-visible:ring-2 focus-visible:ring-acid"
          >
            <ArrowLeft size={16} /> Back to Home
          </Link>
          <div className="flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.18em] text-white/50">
            <span>Portfolio</span>
            <span>•</span>
            <span>{projects.length} Completed Projects</span>
          </div>
        </div>

        {/* Hero Section */}
        <header className="mt-12 max-w-4xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-acid/30 bg-acid/10 px-4 py-1.5 text-xs font-black uppercase tracking-[0.2em] text-acid">
            <Sparkles size={14} aria-hidden="true" />
            <span>PPR Global Client Portfolio</span>
          </div>
          <h1 className="mt-6 font-display text-4xl font-semibold leading-tight md:text-6xl lg:text-7xl">
            All Our Work & Case Studies
          </h1>
          <p className="mt-6 text-lg leading-8 text-white/70 md:text-xl md:leading-9">
            Detailed case studies across healthcare clinics, interior architecture studios, cafes, fitness clubs,
            real estate, ERP dashboards, and mobile applications built for high performance and local lead conversion.
          </p>
        </header>

        {/* Portfolio Stats Strip */}
        <section className="mt-10 grid grid-cols-2 gap-4 rounded-xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur-sm sm:grid-cols-4 md:p-8">
          <div>
            <p className="font-display text-3xl font-bold text-acid md:text-4xl">{projects.length}+</p>
            <p className="mt-1 text-xs uppercase tracking-wider text-white/60">Delivered Projects</p>
          </div>
          <div>
            <p className="font-display text-3xl font-bold text-white md:text-4xl">100%</p>
            <p className="mt-1 text-xs uppercase tracking-wider text-white/60">Mobile Optimized</p>
          </div>
          <div>
            <p className="font-display text-3xl font-bold text-acid md:text-4xl">&lt; 1.2s</p>
            <p className="mt-1 text-xs uppercase tracking-wider text-white/60">Average Load Time</p>
          </div>
          <div>
            <p className="font-display text-3xl font-bold text-white md:text-4xl">72h</p>
            <p className="mt-1 text-xs uppercase tracking-wider text-white/60">First Preview Delivery</p>
          </div>
        </section>

        {/* Projects Grid */}
        <section className="mt-16">
          <div className="flex items-center justify-between border-b border-white/10 pb-4">
            <h2 className="font-display text-2xl font-semibold uppercase tracking-wider text-white">
              Client Deployments ({projects.length})
            </h2>
            <span className="text-xs uppercase tracking-widest text-white/40">Verified Production Work</span>
          </div>

          <div className="mt-8 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((project) => {
              const hasContainedImage = "imageFit" in project && project.imageFit === "contain";
              const imageAlt =
                "imageAlt" in project && typeof project.imageAlt === "string"
                  ? project.imageAlt
                  : `${project.title} case study Kolkata`;

              return (
                <article
                  key={project.slug}
                  className="group relative flex flex-col justify-between overflow-hidden rounded-xl border border-white/10 bg-white/[0.035] transition-all duration-200 hover:-translate-y-1.5 hover:border-acid/40 hover:bg-white/[0.06] hover:shadow-[0_16px_50px_rgba(0,0,0,0.5)]"
                >
                  {/* Visual Image Preview */}
                  <div
                    className="relative aspect-[16/10] w-full overflow-hidden"
                    style={{ background: project.image }}
                  >
                    {"imageSrc" in project && project.imageSrc ? (
                      <Image
                        src={project.imageSrc}
                        alt={imageAlt}
                        fill
                        sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                        className={`transition-transform duration-500 ${
                          hasContainedImage
                            ? "object-contain p-3 group-hover:scale-105"
                            : "object-cover opacity-90 group-hover:scale-105"
                        }`}
                      />
                    ) : null}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                    <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between">
                      <span className="rounded-full bg-black/60 px-2.5 py-1 text-[11px] font-semibold uppercase tracking-wider text-white/80 backdrop-blur-sm">
                        {project.year}
                      </span>
                      <div className="grid h-9 w-9 place-items-center rounded-full bg-white/10 text-white backdrop-blur-sm transition-colors group-hover:bg-acid group-hover:text-ink">
                        <ArrowUpRight size={16} />
                      </div>
                    </div>
                  </div>

                  {/* Content & Details */}
                  <div className="flex flex-1 flex-col justify-between p-6">
                    <div>
                      <div className="flex flex-wrap gap-1.5">
                        {project.tags.map((tag) => (
                          <span
                            key={tag}
                            className="rounded-full bg-white/5 px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-acid"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>

                      <h3 className="mt-3 font-display text-2xl font-semibold leading-snug text-white transition-colors group-hover:text-acid">
                        <Link href={`/case-studies/${project.slug}`} className="outline-none focus-visible:ring-2 focus-visible:ring-acid">
                          {project.title}
                        </Link>
                      </h3>

                      <p className="mt-2.5 text-sm leading-6 text-white/65">
                        {project.description}
                      </p>

                      {/* Highlights preview */}
                      <div className="mt-4 space-y-1.5 border-t border-white/5 pt-3">
                        {project.caseStudy.highlights.slice(0, 2).map((highlight) => (
                          <div key={highlight} className="flex items-center gap-2 text-xs text-white/60">
                            <Check size={13} className="shrink-0 text-acid" />
                            <span className="truncate">{highlight}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="mt-6 border-t border-white/10 pt-4">
                      <div className="flex items-center justify-between text-xs">
                        <span className="text-white/40">{project.caseStudy.scope}</span>
                        <Link
                          href={`/case-studies/${project.slug}`}
                          className="inline-flex items-center gap-1.5 font-bold uppercase tracking-wider text-acid transition-transform group-hover:translate-x-0.5"
                        >
                          View Case Study <ArrowUpRight size={14} />
                        </Link>
                      </div>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </section>

        {/* Bottom CTA */}
        <section className="mt-20 rounded-2xl border border-acid/30 bg-gradient-to-b from-acid/10 via-white/[0.02] to-transparent p-8 text-center md:p-14">
          <h2 className="font-display text-3xl font-semibold md:text-5xl">
            Ready to Build Your Custom Digital Asset?
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base text-white/70 md:text-lg">
            Consult directly with founder Patit Roy. Transparent milestone delivery, zero bloated agency overhead, and your first working design preview within 72 hours.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/contact"
              className="inline-flex min-h-12 items-center justify-center rounded-full bg-acid px-8 text-sm font-black uppercase tracking-[0.14em] text-ink shadow-[0_10px_25px_rgba(184,255,61,0.25)] transition-transform hover:scale-105"
            >
              Book Free Strategy Call
            </Link>
            <a
              href="https://wa.me/919609079663?text=Hi%20Patit%2C%20I%20reviewed%20your%20case%20studies%20and%20would%20like%20to%20discuss%20a%20project."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-12 items-center justify-center rounded-full border border-white/20 bg-white/5 px-8 text-sm font-bold uppercase tracking-[0.14em] text-white hover:border-acid hover:text-acid"
            >
              Chat on WhatsApp
            </a>
          </div>
        </section>
      </div>
    </main>
  );
}
