import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowUpRight,
  Check,
  Phone,
  Building2,
  UtensilsCrossed,
  Dumbbell,
  Sparkles,
  GraduationCap,
  ShoppingBag,
  Palette,
  Stethoscope,
  Activity
} from "lucide-react";
import { LeadCaptureForm } from "@/components/leads/LeadCaptureForm";
import { DentalPricing } from "@/components/dental/DentalPricing";
import { DentalScorecard } from "@/components/dental/DentalScorecard";
import { dentalWebsitePricing } from "@/lib/dental-pricing";
import { business } from "@/lib/business";
import { projects, resourcePosts, servicePages, services } from "@/lib/content";

const baseUrl = business.url;

interface IndustryTheme {
  name: string;
  badgeLabel: string;
  badgeIcon: React.ElementType;
  gradientBadge: string;
  accentText: string;
  accentBg: string;
  accentBorder: string;
  cardBg: string;
  primaryButtonBg: string;
  primaryButtonText: string;
  heroGlow: string;
  gridLineColor: string;
}

const defaultTheme: IndustryTheme = {
  name: "General",
  badgeLabel: "PPR Global / Kolkata Service",
  badgeIcon: Activity,
  gradientBadge: "from-acid/20 to-lime-500/20 text-acid border-acid/30",
  accentText: "text-acid",
  accentBg: "bg-acid",
  accentBorder: "border-acid/30",
  cardBg: "bg-acid text-ink",
  primaryButtonBg: "bg-acid text-ink hover:bg-acid/90",
  primaryButtonText: "text-ink",
  heroGlow: "rgba(184,255,61,0.06)",
  gridLineColor: "rgba(184,255,61,0.05)"
};

const industryThemes: Record<string, IndustryTheme> = {
  // 1. Real Estate
  "website-for-real-estate-kolkata": {
    name: "Real Estate & Architecture",
    badgeLabel: "PPR Global / Real Estate & Property Tech",
    badgeIcon: Building2,
    gradientBadge: "from-amber-500/20 to-yellow-500/20 text-amber-400 border-amber-500/30",
    accentText: "text-amber-400",
    accentBg: "bg-amber-400",
    accentBorder: "border-amber-500/30",
    cardBg: "bg-gradient-to-br from-amber-400 via-amber-300 to-yellow-500 text-slate-950",
    primaryButtonBg: "bg-gradient-to-r from-amber-400 to-yellow-500 text-slate-950 hover:brightness-110",
    primaryButtonText: "text-slate-950",
    heroGlow: "rgba(251,191,36,0.12)",
    gridLineColor: "rgba(251,191,36,0.06)"
  },
  // 2. Restaurants & Cloud Kitchens
  "website-for-restaurants-kolkata": {
    name: "Restaurants & Cloud Kitchens",
    badgeLabel: "PPR Global / Food & Hospitality Digital",
    badgeIcon: UtensilsCrossed,
    gradientBadge: "from-orange-500/20 to-rose-500/20 text-orange-400 border-orange-500/30",
    accentText: "text-orange-400",
    accentBg: "bg-orange-500",
    accentBorder: "border-orange-500/30",
    cardBg: "bg-gradient-to-br from-orange-500 via-amber-500 to-rose-600 text-white",
    primaryButtonBg: "bg-gradient-to-r from-orange-500 to-rose-500 text-white hover:brightness-110",
    primaryButtonText: "text-white",
    heroGlow: "rgba(249,115,22,0.12)",
    gridLineColor: "rgba(249,115,22,0.06)"
  },
  // 3. Gyms & Fitness
  "website-for-gyms-kolkata": {
    name: "Gyms & Fitness Centers",
    badgeLabel: "PPR Global / Fitness & High-Performance Web",
    badgeIcon: Dumbbell,
    gradientBadge: "from-lime-400/20 to-emerald-400/20 text-lime-400 border-lime-400/30",
    accentText: "text-lime-400",
    accentBg: "bg-lime-400",
    accentBorder: "border-lime-400/30",
    cardBg: "bg-gradient-to-br from-lime-400 via-emerald-400 to-teal-500 text-slate-950",
    primaryButtonBg: "bg-gradient-to-r from-lime-400 to-emerald-400 text-slate-950 hover:brightness-110",
    primaryButtonText: "text-slate-950",
    heroGlow: "rgba(163,230,53,0.12)",
    gridLineColor: "rgba(163,230,53,0.06)"
  },
  // 4. Salons & Luxury Spas
  "website-for-salons-kolkata": {
    name: "Salons & Luxury Spas",
    badgeLabel: "PPR Global / Luxury Beauty & Spa Digital",
    badgeIcon: Sparkles,
    gradientBadge: "from-rose-400/20 to-pink-500/20 text-rose-300 border-rose-400/30",
    accentText: "text-rose-300",
    accentBg: "bg-rose-400",
    accentBorder: "border-rose-400/30",
    cardBg: "bg-gradient-to-br from-rose-300 via-pink-400 to-fuchsia-500 text-slate-950",
    primaryButtonBg: "bg-gradient-to-r from-rose-400 to-pink-500 text-white hover:brightness-110",
    primaryButtonText: "text-white",
    heroGlow: "rgba(251,113,133,0.12)",
    gridLineColor: "rgba(251,113,133,0.06)"
  },
  // 5. Schools & Coaching Centres
  "website-for-schools-kolkata": {
    name: "Schools & Coaching Institutes",
    badgeLabel: "PPR Global / Academic & Education Web",
    badgeIcon: GraduationCap,
    gradientBadge: "from-blue-400/20 to-indigo-500/20 text-blue-300 border-blue-400/30",
    accentText: "text-blue-400",
    accentBg: "bg-blue-500",
    accentBorder: "border-blue-400/30",
    cardBg: "bg-gradient-to-br from-blue-500 via-indigo-600 to-violet-700 text-white",
    primaryButtonBg: "bg-gradient-to-r from-blue-500 to-indigo-600 text-white hover:brightness-110",
    primaryButtonText: "text-white",
    heroGlow: "rgba(96,165,250,0.12)",
    gridLineColor: "rgba(96,165,250,0.06)"
  },
  // 6. Retail & E-commerce
  "ecommerce-development-kolkata": {
    name: "Retail & E-commerce",
    badgeLabel: "PPR Global / E-Commerce & Retail Scale",
    badgeIcon: ShoppingBag,
    gradientBadge: "from-purple-400/20 to-fuchsia-500/20 text-purple-300 border-purple-400/30",
    accentText: "text-purple-300",
    accentBg: "bg-purple-500",
    accentBorder: "border-purple-400/30",
    cardBg: "bg-gradient-to-br from-purple-500 via-fuchsia-500 to-pink-600 text-white",
    primaryButtonBg: "bg-gradient-to-r from-purple-500 to-fuchsia-500 text-white hover:brightness-110",
    primaryButtonText: "text-white",
    heroGlow: "rgba(192,132,252,0.12)",
    gridLineColor: "rgba(192,132,252,0.06)"
  },
  // 7. Interior Designers
  "website-for-interior-designers-kolkata": {
    name: "Interior Designers & Architects",
    badgeLabel: "PPR Global / Architectural & Interior Design",
    badgeIcon: Palette,
    gradientBadge: "from-amber-200/20 to-stone-400/20 text-amber-200 border-amber-300/30",
    accentText: "text-amber-200",
    accentBg: "bg-amber-200",
    accentBorder: "border-amber-300/30",
    cardBg: "bg-gradient-to-br from-stone-200 via-amber-200 to-yellow-300 text-slate-950",
    primaryButtonBg: "bg-gradient-to-r from-amber-200 to-yellow-300 text-slate-950 hover:brightness-105",
    primaryButtonText: "text-slate-950",
    heroGlow: "rgba(253,230,138,0.12)",
    gridLineColor: "rgba(253,230,138,0.06)"
  },
  // 8 & 9. Dental & Healthcare
  "website-for-dentists-kolkata": {
    name: "Dental Clinics",
    badgeLabel: "PPR Global / Dental Practice Growth",
    badgeIcon: Stethoscope,
    gradientBadge: "from-teal-400/20 to-cyan-400/20 text-teal-300 border-teal-400/30",
    accentText: "text-teal-300",
    accentBg: "bg-teal-400",
    accentBorder: "border-teal-400/30",
    cardBg: "bg-gradient-to-br from-teal-400 via-cyan-400 to-emerald-400 text-slate-950",
    primaryButtonBg: "bg-gradient-to-r from-teal-400 to-cyan-400 text-slate-950 hover:brightness-110",
    primaryButtonText: "text-slate-950",
    heroGlow: "rgba(45,212,191,0.12)",
    gridLineColor: "rgba(45,212,191,0.06)"
  },
  "dental-appointment-booking-systems-kolkata": {
    name: "Dental Booking Systems",
    badgeLabel: "PPR Global / Dental Appointment Systems",
    badgeIcon: Stethoscope,
    gradientBadge: "from-teal-400/20 to-cyan-400/20 text-teal-300 border-teal-400/30",
    accentText: "text-teal-300",
    accentBg: "bg-teal-400",
    accentBorder: "border-teal-400/30",
    cardBg: "bg-gradient-to-br from-teal-400 via-cyan-400 to-emerald-400 text-slate-950",
    primaryButtonBg: "bg-gradient-to-r from-teal-400 to-cyan-400 text-slate-950 hover:brightness-110",
    primaryButtonText: "text-slate-950",
    heroGlow: "rgba(45,212,191,0.12)",
    gridLineColor: "rgba(45,212,191,0.06)"
  },
  "dental-seo-kolkata": {
    name: "Dental SEO",
    badgeLabel: "PPR Global / Dental Practice SEO",
    badgeIcon: Stethoscope,
    gradientBadge: "from-teal-400/20 to-cyan-400/20 text-teal-300 border-teal-400/30",
    accentText: "text-teal-300",
    accentBg: "bg-teal-400",
    accentBorder: "border-teal-400/30",
    cardBg: "bg-gradient-to-br from-teal-400 via-cyan-400 to-emerald-400 text-slate-950",
    primaryButtonBg: "bg-gradient-to-r from-teal-400 to-cyan-400 text-slate-950 hover:brightness-110",
    primaryButtonText: "text-slate-950",
    heroGlow: "rgba(45,212,191,0.12)",
    gridLineColor: "rgba(45,212,191,0.06)"
  },
  "healthcare-meta-ads-kolkata": {
    name: "Healthcare Meta Ads",
    badgeLabel: "PPR Global / Healthcare Patient Acquisition",
    badgeIcon: Stethoscope,
    gradientBadge: "from-teal-400/20 to-cyan-400/20 text-teal-300 border-teal-400/30",
    accentText: "text-teal-300",
    accentBg: "bg-teal-400",
    accentBorder: "border-teal-400/30",
    cardBg: "bg-gradient-to-br from-teal-400 via-cyan-400 to-emerald-400 text-slate-950",
    primaryButtonBg: "bg-gradient-to-r from-teal-400 to-cyan-400 text-slate-950 hover:brightness-110",
    primaryButtonText: "text-slate-950",
    heroGlow: "rgba(45,212,191,0.12)",
    gridLineColor: "rgba(45,212,191,0.06)"
  }
};

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
    highlights: ["Fast delivery", "Premium UI", "WhatsApp enquiry flow", "SEO-ready setup"],
    keywords: [
      `${basic.name} Kolkata`,
      `${basic.name} West Bengal`,
      `affordable ${basic.name.toLowerCase()} India`,
      "PPR Global"
    ],
    body: [
      `PPR Global provides ${basic.name.toLowerCase()} for businesses that need a practical, modern digital system without a slow agency process. The work is planned around the business goal first: more enquiries, cleaner operations, stronger trust, or a faster customer journey.`,
      "Each project is shaped for mobile users, clear communication, WhatsApp-ready lead capture, and a launch path that fits the business budget. For Kolkata and West Bengal clients, the service can include local search language, contact details, service-area signals, and conversion sections that help visitors take action.",
      "The setup can stay lightweight for a starter launch or expand into admin panels, automation, CRM dashboards, analytics, SEO pages, ads funnels, and custom software as the business grows."
    ],
    faqs: [
      {
        question: `Who is ${basic.name} best for?`,
        answer:
          "It works well for small and growing businesses that want a premium digital presence, better enquiry handling, or a more professional customer experience."
      },
      {
        question: "Can this connect with WhatsApp?",
        answer:
          "Yes. PPR Global can connect enquiry buttons, forms, landing pages, and proposal flows with WhatsApp so leads reach the team quickly."
      }
    ],
    relatedProjectSlug: "interior-amit"
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
      title: "Service"
    };
  }

  const pageTitle =
    "metaTitle" in service && service.metaTitle ? (service.metaTitle as string) : service.name;
  const pageDescription =
    "metaDescription" in service && service.metaDescription
      ? (service.metaDescription as string)
      : service.description;

  const fullTitle = pageTitle.includes("PPR Global")
    ? pageTitle
    : pageTitle.length > 50
      ? pageTitle
      : `${pageTitle} | PPR Global`;

  return {
    title: {
      absolute: fullTitle
    },
    description: pageDescription,
    keywords: service.keywords,
    alternates: {
      canonical: `/services/${service.slug}`
    },
    openGraph: {
      title: fullTitle,
      description: pageDescription,
      url: `${baseUrl}/services/${service.slug}`
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description: pageDescription,
      images: ["/opengraph-image"]
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
    "@graph": [
      {
        "@type": "WebPage",
        "@id": `${baseUrl}/services/${service.slug}#webpage`,
        name: service.name,
        description: service.description,
        isPartOf: {
          "@id": `${baseUrl}/#website`
        },
        about: {
          "@id": `${baseUrl}/services/${service.slug}#service`
        }
      },
      {
        "@type": "Service",
        "@id": `${baseUrl}/services/${service.slug}#service`,
        name: service.name,
        description: service.description,
        serviceType: service.shortName,
        url: `${baseUrl}/services/${service.slug}`,
        provider: {
          "@id": `${baseUrl}/#localbusiness`
        },
        areaServed: ["Kolkata", "West Bengal", "India"],
        offers: {
          "@type": "Offer",
          priceCurrency: "INR",
          price: service.price.includes("₹6,000")
            ? "6000"
            : service.price.includes("₹14,999")
              ? "14999"
              : undefined,
          availability: "https://schema.org/InStock"
        }
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: baseUrl },
          { "@type": "ListItem", position: 2, name: "Services", item: `${baseUrl}/services` },
          {
            "@type": "ListItem",
            position: 3,
            name: service.name,
            item: `${baseUrl}/services/${service.slug}`
          }
        ]
      },
      ...(service.faqs && service.faqs.length > 0
        ? [
            {
              "@type": "FAQPage",
              "@id": `${baseUrl}/services/${service.slug}#faq`,
              mainEntity: service.faqs.map((faq) => ({
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
  const relatedProject = projects.find((project) => project.slug === service.relatedProjectSlug);
  const relatedServices = servicePages
    .filter((item) => item.slug !== service.slug)
    .slice(0, 6);
  const relatedGuides = resourcePosts
    .filter((post) =>
      post.relatedServiceSlugs?.includes(service.slug) ||
      ("relatedResourceSlugs" in service &&
        Array.isArray(service.relatedResourceSlugs) &&
        service.relatedResourceSlugs.includes(post.slug))
    )
    .slice(0, 3);

  const theme = industryThemes[service.slug] || defaultTheme;
  const BadgeIconComponent = theme.badgeIcon;

  return (
    <main className="min-h-screen bg-ink text-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <section className="relative overflow-hidden px-4 pb-20 pt-28">
        {/* Dynamic Industry Ambient Glow Orbs */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -top-40 left-1/2 h-[500px] w-[800px] -translate-x-1/2 rounded-full blur-[140px] opacity-70"
          style={{ background: theme.heroGlow }}
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 opacity-45"
          style={{
            backgroundImage: `linear-gradient(${theme.gridLineColor} 1px, transparent 1px), linear-gradient(90deg, ${theme.gridLineColor} 1px, transparent 1px)`,
            backgroundSize: "54px 54px"
          }}
        />
        <div className="relative mx-auto max-w-6xl">
          <Link
            href="/services"
            className={`inline-flex items-center gap-2 text-sm font-black uppercase tracking-[0.16em] ${theme.accentText} transition-opacity hover:opacity-80`}
          >
            Back to services <ArrowUpRight size={15} />
          </Link>
          <nav aria-label="Breadcrumb" className="mt-8 text-sm text-white/45">
            <ol className="flex flex-wrap gap-2">
              <li><Link href="/" className="hover:text-white">Home</Link></li>
              <li>/</li>
              <li><Link href="/services" className="hover:text-white">Services</Link></li>
              <li>/</li>
              <li className="text-white/70">{service.name}</li>
            </ol>
          </nav>

          {/* Industry Themed Badge */}
          <div className="mt-10">
            <span className={`inline-flex items-center gap-2 rounded-full border bg-gradient-to-r px-4 py-1.5 text-xs font-black uppercase tracking-[0.2em] ${theme.gradientBadge}`}>
              <BadgeIconComponent size={14} />
              <span>{theme.badgeLabel}</span>
            </span>
          </div>

          <h1 className="mt-5 max-w-5xl font-display text-5xl font-semibold leading-none md:text-7xl">
            {service.name}
          </h1>
          <p className="mt-7 max-w-3xl text-xl leading-9 text-white/70">{service.description}</p>
          <div className="mt-10 grid gap-4 md:grid-cols-[0.7fr_1.3fr]">
            {/* Themed Starting Price Card */}
            <div className={`rounded-xl p-6 shadow-xl ${theme.cardBg}`}>
              <p className="text-xs font-black uppercase tracking-[0.18em] opacity-80">
                Starting point
              </p>
              <p className="mt-4 font-display text-4xl font-semibold">{service.price}</p>
              <a
                href="#service-quote"
                className="mt-8 inline-flex min-h-12 items-center gap-2 rounded-full bg-ink px-6 text-xs font-black uppercase tracking-[0.16em] text-white transition-transform hover:scale-105"
              >
                Book Consultation & Quote <ArrowUpRight size={15} />
              </a>
            </div>
            <div className="grid gap-3 sm:grid-cols-2">
              {service.highlights.map((item) => (
                <div
                  key={item}
                  className="flex min-h-20 items-center gap-3 rounded-lg bg-white/[0.055] p-4 shadow-[inset_0_0_0_1px_rgba(255,255,255,0.12)]"
                >
                  <Check className={`shrink-0 ${theme.accentText}`} size={18} />
                  <span className="text-white/85 font-medium">{item}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="mt-12 grid gap-8 lg:grid-cols-[1.25fr_0.75fr]">
            <div className="rounded-lg bg-white/[0.055] p-6 shadow-[inset_0_0_0_1px_rgba(255,255,255,0.12)] md:p-8">
              <h2 className={`text-sm font-black uppercase tracking-[0.18em] ${theme.accentText}`}>
                What&apos;s included
              </h2>
              <div className="mt-6 space-y-5 text-base leading-8 text-white/72">
                {service.body.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            </div>
            <div className="space-y-4">
              {relatedProject ? (
                <Link
                  href={`/case-studies/${relatedProject.slug}`}
                  className={`block rounded-lg p-5 transition-transform hover:-translate-y-1 ${theme.cardBg}`}
                >
                  <p className="text-xs font-black uppercase tracking-[0.18em] opacity-80">
                    Related case study
                  </p>
                  <h3 className="mt-3 font-display text-3xl font-semibold leading-none">
                    {relatedProject.title}
                  </h3>
                  <p className="mt-4 text-sm leading-6 opacity-90">
                    {relatedProject.description}
                  </p>
                  <span className="mt-6 inline-flex items-center gap-2 text-xs font-black uppercase tracking-[0.16em]">
                    View work <ArrowUpRight size={14} />
                  </span>
                </Link>
              ) : null}
              <div className="rounded-lg bg-white/[0.055] p-5 shadow-[inset_0_0_0_1px_rgba(255,255,255,0.12)]">
                <p className={`text-xs font-black uppercase tracking-[0.18em] ${theme.accentText}`}>
                  Service area
                </p>
                <p className="mt-3 text-sm leading-6 text-white/66">
                  Provider: {business.shortDescription} Service area: Kolkata, West Bengal,
                  India, with remote delivery for clients worldwide.
                </p>
              </div>
            </div>
          </div>

          {/* Related Technical & Growth Guides */}
          {relatedGuides.length > 0 ? (
            <div className="mt-8 rounded-lg bg-white/[0.055] p-6 shadow-[inset_0_0_0_1px_rgba(255,255,255,0.12)] md:p-8">
              <h2 className={`text-sm font-black uppercase tracking-[0.18em] ${theme.accentText}`}>
                Matching Engineering & Growth Guides
              </h2>
              <p className="mt-2 text-sm text-white/60">
                In-depth blueprints, pricing breakdowns, and implementation guides written by lead engineer Patit Roy.
              </p>
              <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {relatedGuides.map((guide) => (
                  <Link
                    key={guide.slug}
                    href={`/resources/${guide.slug}`}
                    className="group rounded-lg bg-black/24 p-5 outline-none transition-colors hover:bg-black/40 focus-visible:ring-2 focus-visible:ring-acid"
                  >
                    <h3 className="text-base font-semibold leading-snug text-white group-hover:text-acid transition-colors">
                      {guide.title}
                    </h3>
                    <p className="mt-2 line-clamp-2 text-xs leading-5 text-white/60">
                      {guide.description}
                    </p>
                    <span className={`mt-4 inline-flex items-center gap-1 text-xs font-bold uppercase tracking-wider ${theme.accentText}`}>
                      Read Blueprint <ArrowUpRight size={13} />
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          ) : null}

          <div className="mt-8 rounded-lg bg-white/[0.055] p-6 shadow-[inset_0_0_0_1px_rgba(255,255,255,0.12)] md:p-8">
            <h2 className={`text-sm font-black uppercase tracking-[0.18em] ${theme.accentText}`}>
              Frequently Asked Questions
            </h2>
            <div className="mt-6 grid gap-4 md:grid-cols-2">
              {service.faqs.map((faq) => (
                <div key={faq.question} className="rounded-lg bg-black/24 p-4">
                  <h3 className="text-lg font-semibold text-white">{faq.question}</h3>
                  <p className="mt-3 text-sm leading-6 text-white/62">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
          {/* Conditional Dental Pricing & Audit Scorecard */}
          {service.slug === "website-for-dentists-kolkata" && (
            <div className="mt-8 space-y-8">
              <DentalPricing
                tiers={dentalWebsitePricing}
                title="Kolkata Dental Clinic Website Packages"
                subtitle="Transparent pricing for single-doctor chambers & multi-chair dental polyclinics. Zero hidden hosting lock-in."
                scorecardHref="#dental-scorecard"
              />
              <DentalScorecard
                source="dental-website-service"
              />
            </div>
          )}

          <div
            id="service-quote"
            className={`mt-8 rounded-xl border ${theme.accentBorder} bg-[#0c0d11] p-6 shadow-[0_20px_70px_rgba(0,0,0,0.5)] md:p-10`}
          >
            <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-center">
              <div>
                <p className={`text-xs font-black uppercase tracking-[0.2em] ${theme.accentText}`}>
                  Book a Consultation
                </p>
                <h2 className="mt-2 font-display text-3xl font-semibold leading-tight text-white md:text-5xl">
                  Get a Free Strategy Call & Custom Quote for {service.name}
                </h2>
                <p className="mt-3 max-w-2xl text-sm leading-6 text-white/70 md:text-base md:leading-7">
                  Speak directly with founder Patit Roy. Fast 7-day turnaround, transparent
                  milestone pricing, and a first design preview within 72 hours.
                </p>
              </div>
              <div className="flex flex-wrap items-center gap-3">
                <a
                  href={`https://wa.me/919609079663?text=${encodeURIComponent(
                    `Hi Patit, I want to discuss ${service.name} for my business.`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`inline-flex min-h-12 shrink-0 items-center justify-center gap-2 rounded-full px-6 text-xs font-black uppercase tracking-[0.16em] transition-transform hover:scale-105 ${theme.primaryButtonBg}`}
                >
                  Instant WhatsApp Chat <ArrowUpRight size={15} />
                </a>
                <a
                  href="tel:+919734019005"
                  className="inline-flex min-h-12 shrink-0 items-center justify-center gap-2 rounded-full border border-white/20 bg-white/5 px-5 text-xs font-black uppercase tracking-[0.16em] text-white/90 transition-colors hover:border-white/40 hover:text-white"
                >
                  <Phone size={14} />
                  <span>Call +91 97340 19005</span>
                </a>
              </div>
            </div>
            <div className="mt-8 border-t border-white/10 pt-8">
              <LeadCaptureForm
                variant="contact"
                source={service.slug === "website-for-dentists-kolkata" ? "dental-website" : `service_${service.slug}`}
              />
            </div>
          </div>

          {/* Link to Dedicated Healthcare & Clinic Landing Page for Healthcare/Dental */}
          {["website-for-dentists-kolkata", "dental-appointment-booking-systems-kolkata", "dental-seo-kolkata", "healthcare-meta-ads-kolkata"].includes(service.slug) && (
            <div className="mt-8 rounded-xl border border-teal-500/30 bg-teal-950/20 p-5 md:p-6">
              <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
                <div>
                  <p className="text-xs font-black uppercase tracking-wider text-teal-300">
                    Comprehensive Healthcare Solutions
                  </p>
                  <h3 className="mt-1 text-lg font-bold text-white">
                    Need an End-to-End Healthcare Website or Hospital Management App?
                  </h3>
                  <p className="mt-1 text-xs text-white/70">
                    Explore our specialized healthcare portal with patient booking, diagnostic lab flows, and HIPAA-compliant architecture.
                  </p>
                </div>
                <Link
                  href="/healthcare-website-app-development"
                  className="inline-flex shrink-0 items-center gap-1.5 rounded-full bg-teal-400 px-5 py-2.5 text-xs font-black uppercase tracking-wider text-slate-950 transition-transform hover:scale-105"
                >
                  <span>View Healthcare Hub</span>
                  <ArrowUpRight size={14} />
                </Link>
              </div>
            </div>
          )}

          <div className="mt-8 rounded-lg bg-white/[0.055] p-6 shadow-[inset_0_0_0_1px_rgba(255,255,255,0.12)] md:p-8">
            <h2 className={`text-sm font-black uppercase tracking-[0.18em] ${theme.accentText}`}>
              Related Kolkata service pages
            </h2>
            <p className="mt-3 max-w-3xl text-sm leading-6 text-white/60">
              Explore connected PPR Global services and vertical landing pages built for local SEO,
              lead generation, and better buyer journeys.
            </p>
            <div className="mt-6 grid gap-3 md:grid-cols-2 lg:grid-cols-3">
              {relatedServices.map((item) => (
                <Link
                  key={item.slug}
                  href={`/services/${item.slug}`}
                  className="group rounded-lg bg-black/24 p-4 outline-none transition-colors hover:bg-black/36 focus-visible:ring-2 focus-visible:ring-acid"
                >
                  <h3 className="text-lg font-semibold leading-tight text-white">
                    {item.name}
                  </h3>
                  <p className="mt-3 line-clamp-3 text-sm leading-6 text-white/58">
                    {item.description}
                  </p>
                  <span className={`mt-4 inline-flex items-center gap-2 text-xs font-black uppercase tracking-[0.16em] ${theme.accentText} transition-colors group-hover:text-white`}>
                    View service <ArrowUpRight size={14} />
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
