import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight, Check } from "lucide-react";
import { servicePages, services } from "@/lib/content";

const baseUrl = "https://www.pprglobal.online";

function getService(slug: string) {
  const detailed = servicePages.find((service) => service.slug === slug);
  if (detailed) {
    return detailed;
  }

  const basic = services.find((service) => service.slug === slug);
  if (!basic) {
    return null;
  }

  return {
    slug: basic.slug,
    name: `${basic.name} in Kolkata`,
    shortName: basic.name,
    description: `PPR Global provides ${basic.name.toLowerCase()} for Kolkata, West Bengal, and remote clients with fast delivery, premium UI, and transparent project communication.`,
    price: "Custom quote",
    highlights: ["Fast delivery", "Premium UI", "WhatsApp enquiry flow", "SEO-ready setup"]
  };
}

export function generateStaticParams() {
  const slugs = new Set([
    ...services.map((service) => service.slug),
    ...servicePages.map((service) => service.slug)
  ]);

  return Array.from(slugs).map((slug) => ({ slug }));
}

export async function generateMetadata({
  params
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = getService(slug);

  if (!service) {
    return {
      title: "Service | PPR Global"
    };
  }

  return {
    title: `${service.name} | PPR Global`,
    description: service.description,
    alternates: {
      canonical: `/services/${service.slug}`
    },
    openGraph: {
      title: `${service.name} | PPR Global`,
      description: service.description,
      url: `${baseUrl}/services/${service.slug}`
    }
  };
}

export default async function ServicePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = getService(slug);

  if (!service) {
    return (
      <main className="min-h-screen bg-ink px-4 py-24 text-white">
        <div className="mx-auto max-w-4xl">
          <p className="text-acid">Service not found.</p>
          <Link href="/" className="mt-6 inline-flex items-center gap-2 text-white">
            Back home <ArrowUpRight size={16} />
          </Link>
        </div>
      </main>
    );
  }

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.name,
    description: service.description,
    provider: {
      "@type": "LocalBusiness",
      name: "PPR Global",
      url: baseUrl,
      address: {
        "@type": "PostalAddress",
        addressLocality: "Kolkata",
        addressRegion: "West Bengal",
        addressCountry: "IN"
      }
    },
    areaServed: ["Kolkata", "West Bengal", "India"]
  };

  return (
    <main className="min-h-screen bg-ink text-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <section className="relative overflow-hidden px-4 pb-20 pt-28">
        <div
          aria-hidden="true"
          className="absolute inset-0 opacity-55"
          style={{
            backgroundImage:
              "linear-gradient(rgba(184,255,61,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(184,255,61,0.04) 1px, transparent 1px)",
            backgroundSize: "54px 54px"
          }}
        />
        <div className="relative mx-auto max-w-6xl">
          <Link
            href="/#services"
            className="inline-flex items-center gap-2 text-sm font-black uppercase tracking-[0.16em] text-acid"
          >
            Back to services <ArrowUpRight size={15} />
          </Link>
          <p className="mt-12 font-display text-sm font-black uppercase tracking-[0.22em] text-acid">
            PPR Global / Kolkata Service
          </p>
          <h1 className="mt-5 max-w-5xl font-display text-5xl font-semibold leading-none md:text-7xl">
            {service.name}
          </h1>
          <p className="mt-7 max-w-3xl text-xl leading-9 text-white/70">{service.description}</p>
          <div className="mt-10 grid gap-4 md:grid-cols-[0.7fr_1.3fr]">
            <div className="rounded-lg bg-acid p-6 text-ink">
              <p className="text-xs font-black uppercase tracking-[0.18em] text-black/55">
                Starting point
              </p>
              <p className="mt-4 font-display text-4xl font-semibold">{service.price}</p>
              <Link
                href="/#contact"
                className="mt-8 inline-flex min-h-12 items-center gap-2 rounded-full bg-ink px-5 text-xs font-black uppercase tracking-[0.16em] text-white"
              >
                Request Quote <ArrowUpRight size={15} />
              </Link>
            </div>
            <div className="grid gap-3 sm:grid-cols-2">
              {service.highlights.map((item) => (
                <div
                  key={item}
                  className="flex min-h-20 items-center gap-3 rounded-lg bg-white/[0.055] p-4 shadow-[inset_0_0_0_1px_rgba(255,255,255,0.12)]"
                >
                  <Check className="shrink-0 text-acid" size={18} />
                  <span className="text-white/76">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
