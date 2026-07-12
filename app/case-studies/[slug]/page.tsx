import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowUpRight, Check } from "lucide-react";
import { business } from "@/lib/business";
import { projects } from "@/lib/content";

const baseUrl = business.url;

function getProject(slug: string) {
  return projects.find((project) => project.slug === slug);
}

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({
  params
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);

  if (!project) {
    return {
      title: "Case Study | PPR Global"
    };
  }

  const title = `${project.title} Case Study | PPR Global`;
  const description = `${project.caseStudy.summary} Built by PPR Global, a website and app development agency in Kolkata.`;
  const image = "imageSrc" in project && project.imageSrc ? project.imageSrc : "/opengraph-image";
  const keywords = [
    `${project.title} case study`,
    `${project.caseStudy.scope} Kolkata`,
    ...project.tags.map((tag) => `${tag} website project`),
    "PPR Global"
  ];

  return {
    title,
    description,
    keywords,
    alternates: {
      canonical: `/case-studies/${project.slug}`
    },
    openGraph: {
      title,
      description,
      url: `${baseUrl}/case-studies/${project.slug}`,
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: `${project.title} case study by PPR Global`
        }
      ]
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image]
    }
  };
}

export default async function CaseStudyPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = getProject(slug);

  if (!project) {
    notFound();
  }

  const caseStudy = project.caseStudy;
  const mainImageSrc = "imageSrc" in project ? project.imageSrc : undefined;
  const imageAlt =
    "imageAlt" in project && typeof project.imageAlt === "string"
      ? project.imageAlt
      : `${project.title} ${project.tags.join(" ")} Kolkata`;
  const gallery =
    "gallery" in caseStudy && Array.isArray(caseStudy.gallery) ? caseStudy.gallery : [];
  const projectSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "CreativeWork",
        "@id": `${baseUrl}/case-studies/${project.slug}#case-study`,
        name: project.title,
        description: caseStudy.summary,
        creator: {
          "@id": `${baseUrl}/#founder`
        },
        publisher: {
          "@id": `${baseUrl}/#organization`
        },
        about: project.tags,
        dateCreated: project.year,
        datePublished: "2026-07-08",
        dateModified: "2026-07-12",
        image: mainImageSrc ? `${baseUrl}${mainImageSrc}` : business.primaryImage,
        url: `${baseUrl}/case-studies/${project.slug}`
      },
      {
        "@type": "WebPage",
        "@id": `${baseUrl}/case-studies/${project.slug}#webpage`,
        name: `${project.title} Case Study`,
        description: caseStudy.summary,
        isPartOf: {
          "@id": `${baseUrl}/#website`
        }
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: baseUrl },
          { "@type": "ListItem", position: 2, name: "Work", item: `${baseUrl}/#work` },
          {
            "@type": "ListItem",
            position: 3,
            name: project.title,
            item: `${baseUrl}/case-studies/${project.slug}`
          }
        ]
      }
    ]
  };

  return (
    <main className="min-h-screen bg-ink text-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(projectSchema) }}
      />
      <section className="relative overflow-hidden px-4 pb-20 pt-28">
        <div
          aria-hidden="true"
          className="absolute inset-0 opacity-50"
          style={{
            background:
              "radial-gradient(circle at 74% 14%, rgba(184,255,61,0.16), transparent 24rem), linear-gradient(rgba(255,255,255,0.045) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.035) 1px, transparent 1px)",
            backgroundSize: "auto, 64px 64px, 64px 64px"
          }}
        />
        <div className="relative mx-auto max-w-7xl">
          <Link
            href="/#work"
            className="inline-flex items-center gap-2 text-sm font-black uppercase tracking-[0.16em] text-acid"
          >
            Back to work <ArrowUpRight size={15} />
          </Link>
          <nav aria-label="Breadcrumb" className="mt-8 text-sm text-white/45">
            <ol className="flex flex-wrap gap-2">
              <li><Link href="/" className="hover:text-acid">Home</Link></li>
              <li>/</li>
              <li><Link href="/#work" className="hover:text-acid">Work</Link></li>
              <li>/</li>
              <li className="text-white/70">{project.title}</li>
            </ol>
          </nav>

          <div className="mt-12 grid gap-10 lg:grid-cols-[0.7fr_1.3fr] lg:items-start">
            <aside className="lg:sticky lg:top-28">
              <p className="font-display text-sm font-black uppercase tracking-[0.22em] text-acid">
                {caseStudy.category}
              </p>
              <h1 className="mt-5 font-display text-5xl font-semibold leading-none md:text-7xl">
                {project.title}
              </h1>
              <p className="mt-6 text-lg leading-8 text-white/68">{caseStudy.summary}</p>

              <div className="mt-8 grid gap-3">
                {[
                  ["Year", project.year],
                  ["Scope", caseStudy.scope],
                  ["Timeline", caseStudy.duration]
                ].map(([label, value]) => (
                  <div key={label} className="rounded-lg bg-white/[0.055] p-4">
                    <p className="text-xs font-black uppercase tracking-[0.18em] text-white/38">
                      {label}
                    </p>
                    <p className="mt-2 font-display text-xl font-semibold">{value}</p>
                  </div>
                ))}
              </div>

              <Link
                href="/#contact"
                className="mt-8 inline-flex min-h-12 items-center gap-2 rounded-full bg-acid px-5 text-sm font-black uppercase tracking-[0.16em] text-ink"
              >
                Build Similar <ArrowUpRight size={16} />
              </Link>
            </aside>

            <div className="space-y-5">
              <div
                className="image-grain relative aspect-[16/11] overflow-hidden rounded-lg bg-black shadow-[0_24px_90px_rgba(0,0,0,0.32)]"
                style={mainImageSrc ? undefined : { background: project.image }}
              >
                {mainImageSrc ? (
                  <Image
                    src={mainImageSrc}
                    alt={imageAlt}
                    fill
                    sizes="(min-width: 1024px) 64vw, 100vw"
                    className="object-contain p-3"
                    priority
                  />
                ) : (
                  <div className="absolute inset-0 grid place-items-center p-6">
                    <div className="max-w-xl rounded-lg border border-white/16 bg-black/38 p-5 backdrop-blur-md">
                      <p className="font-display text-sm font-black uppercase tracking-[0.18em] text-acid">
                        Project System
                      </p>
                      <div className="mt-5 grid gap-3">
                        {caseStudy.highlights.slice(0, 4).map((item, index) => (
                          <div key={item} className="flex justify-between rounded-md bg-white/8 p-3">
                            <span>{item}</span>
                            <span className="font-display text-acid">
                              {String(index + 1).padStart(2, "0")}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {gallery.length ? (
                <div className="grid gap-4 md:grid-cols-2">
                  {gallery.map((item) => (
                    <figure
                      key={item.src}
                      className="overflow-hidden rounded-lg border border-white/10 bg-white/[0.045] p-2"
                    >
                      <div className="relative aspect-[4/3] overflow-hidden rounded-md bg-black">
                        <Image
                          src={item.src}
                          alt={`${item.title} screen from ${project.title} case study`}
                          fill
                          sizes="(min-width: 768px) 32vw, 100vw"
                          className="object-cover"
                          style={{ objectPosition: item.position }}
                        />
                      </div>
                      <figcaption className="flex items-center justify-between gap-3 px-2 py-3 font-display text-sm font-black uppercase tracking-[0.14em]">
                        <span>{item.title}</span>
                        <span className="text-white/42">[{item.label}]</span>
                      </figcaption>
                    </figure>
                  ))}
                </div>
              ) : null}

              <div className="grid gap-4 rounded-lg bg-white/[0.055] p-5 shadow-[inset_0_0_0_1px_rgba(255,255,255,0.12)] md:grid-cols-3">
                <div className="md:col-span-2">
                  <p className="mb-4 text-xs font-black uppercase tracking-[0.18em] text-acid">
                    Key Highlights
                  </p>
                  <div className="grid gap-3 sm:grid-cols-2">
                    {caseStudy.highlights.map((highlight) => (
                      <div key={highlight} className="flex items-start gap-3 text-sm text-white/72">
                        <Check className="mt-0.5 shrink-0 text-acid" size={16} />
                        <span>{highlight}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div>
                  <p className="mb-4 text-xs font-black uppercase tracking-[0.18em] text-acid">
                    Stack
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {caseStudy.technologies.map((item) => (
                      <span
                        key={item}
                        className="rounded-full bg-white/8 px-3 py-1 text-xs font-semibold text-white/70"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
