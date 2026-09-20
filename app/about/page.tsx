import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight, CheckCircle2, ShieldCheck, Zap, Code2, Users, MapPin, Globe } from "lucide-react";
import { business } from "@/lib/business";

export const metadata: Metadata = {
  title: "About Us | Web Design & Software Engineering Agency Kolkata",
  description:
    "Learn about PPR Global, a modern software and web development agency founded by Patit Roy in Kolkata. We build high-speed websites, apps, and automation pipelines for Indian businesses and global clients.",
  alternates: {
    canonical: "/about"
  },
  openGraph: {
    title: "About Us | Web Design & Software Engineering Agency Kolkata",
    description:
      "Learn about PPR Global, a modern software and web development agency founded by Patit Roy in Kolkata. We build high-speed websites, apps, and automation pipelines.",
    url: `${business.url}/about`
  }
};

export default function AboutPage() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "AboutPage",
        "@id": `${business.url}/about#webpage`,
        name: "About PPR Global",
        description: metadata.description,
        url: `${business.url}/about`,
        isPartOf: {
          "@id": `${business.url}/#website`
        }
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: business.url },
          { "@type": "ListItem", position: 2, name: "About", item: `${business.url}/about` }
        ]
      },
      {
        "@type": "Organization",
        "@id": `${business.url}/#organization`,
        name: business.name,
        url: business.url,
        founder: {
          "@type": "Person",
          name: business.founder,
          url: `${business.url}/about/patit-roy`
        },
        foundingDate: `${business.foundingYear}-01-01`,
        address: {
          "@type": "PostalAddress",
          addressLocality: "Kolkata",
          addressRegion: "West Bengal",
          addressCountry: "India"
        },
        contactPoint: {
          "@type": "ContactPoint",
          telephone: business.phoneNumbers[0].display,
          contactType: "customer service"
        }
      },
      {
        "@type": "FAQPage",
        "@id": `${business.url}/about#faq`,
        mainEntity: [
          {
            "@type": "Question",
            name: "Who is behind PPR Global?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "PPR Global is founded and operated by Patit Roy, a software engineer and web developer based in Barasat, Kolkata, West Bengal, India."
            }
          },
          {
            "@type": "Question",
            name: "What does PPR Global do?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "PPR Global is a software engineering agency in Kolkata that builds high-speed custom websites, mobile applications, WhatsApp automation workflows, and custom CRM systems with starting prices from ₹6,000."
            }
          }
        ]
      }
    ]
  };

  return (
    <main className="min-h-screen bg-ink px-4 py-24 text-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <div className="mx-auto max-w-5xl">
        {/* Navigation Breadcrumb */}
        <div className="flex items-center justify-between border-b border-white/10 pb-6">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm font-black uppercase tracking-[0.16em] text-acid hover:underline"
          >
            ← Back to Home
          </Link>
          <span className="text-xs uppercase tracking-widest text-white/50">Founded {business.foundingYear} · Kolkata, India</span>
        </div>

        {/* Hero */}
        <header className="mt-12">
          <p className="font-display text-xs font-black uppercase tracking-[0.24em] text-acid">
            Our Mission & Philosophy
          </p>
          <h1 className="mt-4 font-display text-4xl font-semibold leading-tight md:text-6xl lg:text-7xl">
            Modern Software Built for Real Business Conversions.
          </h1>
          <p className="mt-6 text-xl leading-9 text-white/72">
            PPR Global was founded to solve a pervasive problem in the Indian agency ecosystem: overpriced,
            sluggish websites built on bloated templates that trap business owners in never-ending maintenance contracts.
          </p>
        </header>

        {/* Core Pillars */}
        <section className="mt-16 grid gap-6 md:grid-cols-3">
          <div className="rounded-xl border border-white/10 bg-white/[0.035] p-6">
            <div className="rounded-lg bg-acid/10 p-3 text-acid w-fit">
              <Zap size={24} />
            </div>
            <h2 className="mt-4 font-display text-xl font-semibold">Under 1s PageSpeed</h2>
            <p className="mt-2 text-sm leading-6 text-white/65">
              We engineer custom frontends using Next.js and Tailwind CSS with 95+ Google Core Web Vitals, converting visitors before they bounce.
            </p>
          </div>
          <div className="rounded-xl border border-white/10 bg-white/[0.035] p-6">
            <div className="rounded-lg bg-acid/10 p-3 text-acid w-fit">
              <ShieldCheck size={24} />
            </div>
            <h2 className="mt-4 font-display text-xl font-semibold">100% Full Ownership</h2>
            <p className="mt-2 text-sm leading-6 text-white/65">
              You own your source code, domain, and hosting. No monthly lock-in fees, proprietary licenses, or ransom renewal costs.
            </p>
          </div>
          <div className="rounded-xl border border-white/10 bg-white/[0.035] p-6">
            <div className="rounded-lg bg-acid/10 p-3 text-acid w-fit">
              <Code2 size={24} />
            </div>
            <h2 className="mt-4 font-display text-xl font-semibold">Direct Founder Engineering</h2>
            <p className="mt-2 text-sm leading-6 text-white/65">
              You collaborate directly with senior software engineers and founder Patit Roy. No non-technical account managers or delays.
            </p>
          </div>
        </section>

        {/* Founder Spotlight Card */}
        <section className="mt-16 rounded-2xl border border-white/12 bg-white/[0.04] p-8 md:p-10">
          <div className="grid gap-8 md:grid-cols-[1.5fr_1fr] md:items-center">
            <div>
              <span className="text-xs font-black uppercase tracking-[0.2em] text-acid">Leadership</span>
              <h2 className="mt-2 font-display text-3xl font-semibold md:text-4xl">Meet Patit Roy</h2>
              <p className="mt-4 text-base leading-7 text-white/70">
                Patit Roy is a full-stack software engineer and entrepreneur with deep expertise in web systems,
                modern JavaScript architectures, automated WhatsApp pipelines, and cloud database integrations.
                He personally oversees architecture, code reviews, and project delivery for all PPR Global clients.
              </p>
              <div className="mt-6 flex flex-wrap items-center gap-4">
                <Link
                  href="/about/patit-roy"
                  className="inline-flex items-center gap-2 rounded-full bg-acid px-6 py-3 text-xs font-black uppercase tracking-wider text-ink hover:scale-105 transition-transform"
                >
                  View Founder Profile <ArrowUpRight size={14} />
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-6 py-3 text-xs font-bold uppercase tracking-wider text-white hover:bg-white/10"
                >
                  Schedule A Call
                </Link>
              </div>
            </div>
            <div className="space-y-3 rounded-xl border border-white/10 bg-black/30 p-6 text-sm">
              <div className="flex items-center justify-between border-b border-white/10 pb-3">
                <span className="text-white/50">Location</span>
                <span className="font-semibold text-white">Kolkata, WB, India</span>
              </div>
              <div className="flex items-center justify-between border-b border-white/10 pb-3">
                <span className="text-white/50">Core Tech</span>
                <span className="font-semibold text-acid">Next.js, TypeScript, Node</span>
              </div>
              <div className="flex items-center justify-between border-b border-white/10 pb-3">
                <span className="text-white/50">Client Focus</span>
                <span className="font-semibold text-white">SMBs & High-Growth Startups</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-white/50">Turnaround</span>
                <span className="font-semibold text-white">7 to 14 Business Days</span>
              </div>
            </div>
          </div>
        </section>

        {/* Location & Coverage */}
        <section className="mt-16 rounded-xl border border-white/10 bg-white/[0.02] p-8">
          <div className="flex items-center gap-3">
            <MapPin className="text-acid" size={22} />
            <h2 className="font-display text-2xl font-semibold">Service Presence & Delivery</h2>
          </div>
          <p className="mt-4 text-sm leading-7 text-white/70">
            Headquartered in Barasat, Kolkata, we actively serve local businesses across Salt Lake Sector V, New Town,
            Park Street, Ballygunge, and Howrah, while maintaining high-performing asynchronous workflows for clients
            in the UK, USA, UAE, and Australia.
          </p>
          <div className="mt-6 grid gap-3 sm:grid-cols-2 md:grid-cols-4 text-xs font-semibold uppercase tracking-wider text-white/80">
            <div className="rounded-lg bg-white/5 p-3 text-center border border-white/10">Salt Lake Sector V</div>
            <div className="rounded-lg bg-white/5 p-3 text-center border border-white/10">New Town & Rajarhat</div>
            <div className="rounded-lg bg-white/5 p-3 text-center border border-white/10">Park Street & Central</div>
            <div className="rounded-lg bg-white/5 p-3 text-center border border-white/10">Global Remote</div>
          </div>
        </section>

        {/* Entity FAQ Section */}
        <section className="mt-16 rounded-xl border border-white/10 bg-white/[0.02] p-8">
          <span className="text-xs font-black uppercase tracking-[0.2em] text-acid">Verification & FAQ</span>
          <h2 className="mt-2 font-display text-2xl font-semibold">Frequently Asked Questions About PPR Global</h2>
          <div className="mt-6 space-y-6">
            <div>
              <h3 className="text-lg font-bold text-white">Who is behind PPR Global?</h3>
              <p className="mt-2 text-sm leading-7 text-white/70">
                PPR Global is founded and operated by <strong>Patit Roy</strong>, a Kolkata-based software engineer
                and full-stack developer. Headquartered in Barasat, Kolkata, the agency delivers custom web apps,
                mobile applications, and CRM automation solutions for Indian and international clients.
              </p>
            </div>
            <div className="border-t border-white/10 pt-5">
              <h3 className="text-lg font-bold text-white">What services does PPR Global provide?</h3>
              <p className="mt-2 text-sm leading-7 text-white/70">
                PPR Global specializes in high-speed Next.js websites, cross-platform mobile apps, WhatsApp
                business automation, custom internal CRMs, and conversion-focused local SEO/GEO campaigns. Pricing
                starts transparently from ₹6,000 with zero vendor lock-in.
              </p>
            </div>
          </div>
        </section>

        {/* Contact CTA */}
        <section className="mt-16 text-center border-t border-white/10 pt-12">
          <h2 className="font-display text-3xl font-semibold">Ready to start your next build?</h2>
          <p className="mt-3 text-white/60">Get in touch for a free 15-minute consultation and custom pricing quote.</p>
          <div className="mt-6 flex justify-center gap-4">
            <Link
              href="/contact"
              className="inline-flex min-h-12 items-center rounded-full bg-acid px-8 text-xs font-black uppercase tracking-widest text-ink transition-transform hover:scale-105"
            >
              Contact Us Today
            </Link>
          </div>
        </section>
      </div>
    </main>
  );
}
