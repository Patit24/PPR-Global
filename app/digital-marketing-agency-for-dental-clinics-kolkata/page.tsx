import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  Award,
  Calendar,
  CheckCircle2,
  Clock,
  Compass,
  FileCheck,
  Globe2,
  MapPin,
  MessageCircle,
  PhoneCall,
  Search,
  ShieldCheck,
  Sparkles,
  TrendingUp,
  XCircle
} from "lucide-react";
import { LeadCaptureForm } from "@/components/leads/LeadCaptureForm";
import { DentalPricing } from "@/components/dental/DentalPricing";
import { DentalScorecard } from "@/components/dental/DentalScorecard";
import { dentalMarketingPricing } from "@/lib/dental-pricing";
import { business } from "@/lib/business";

const pageTitle = "Digital Marketing Agency in Kolkata for Dental Clinics | PPR";
const pageDescription =
  "Dedicated dental marketing agency in Kolkata. Drive high-value implant, aligner & root canal patients via Local SEO, Google Ads & WhatsApp automation.";
const pageUrl = `${business.url}/digital-marketing-agency-for-dental-clinics-kolkata`;

export const metadata: Metadata = {
  title: {
    absolute: pageTitle
  },
  description: pageDescription,
  keywords: [
    "digital marketing agency in kolkata for dental clinics",
    "dental clinic marketing agency Kolkata",
    "dentist marketing kolkata",
    "dental SEO kolkata",
    "dental clinic google ads kolkata",
    "dental clinic patient acquisition",
    "healthcare marketing Kolkata"
  ],
  alternates: {
    canonical: "/digital-marketing-agency-for-dental-clinics-kolkata"
  },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    url: pageUrl,
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: pageTitle,
    description: pageDescription
  }
};

const dentalFaqs = [
  {
    question: "Why should a dental clinic hire a specialized dental agency instead of a general agency?",
    answer:
      "Dental marketing requires a nuanced understanding of clinical terminology, patient psychological hesitations, dental insurance inquiries, and strict medical advertising regulations. General agencies often make exaggerated claims or run generic discount ads that damage clinical reputation and attract price-shoppers instead of committed patients."
  },
  {
    question: "How long does it take for a Kolkata dental clinic to see new patient inquiries?",
    answer:
      "Google Search Ads and WhatsApp inquiry funnels begin producing high-intent patient inquiries within 7 to 10 days of campaign activation. Organic Local SEO (Google Maps 3-Pack rankings) typically develops substantial organic appointment momentum within 30 to 60 days."
  },
  {
    question: "Can we focus our marketing on high-value procedures like Implants and Aligners?",
    answer:
      "Yes. We explicitly structure campaigns, negative keyword lists, and landing pages to filter for high-value treatments such as Dental Implants, Clear Aligners, Smile Makeovers, and Full Mouth Rehabilitation while discouraging low-intent inquiries."
  },
  {
    question: "How does the WhatsApp appointment triage system work?",
    answer:
      "When a prospective patient clicks an ad or local listing, their WhatsApp opens with a pre-formatted message identifying their treatment interest (e.g., 'Implant Consultation'). We configure automated greeting flows that collect patient name, preferred time, and pain details so your clinic reception can confirm the chair booking within minutes."
  },
  {
    question: "Are your marketing strategies compliant with Dental Council of India advertising norms?",
    answer:
      "Yes. We design strictly informative, dignity-focused healthcare communication. We never use banned practices such as exaggerated outcome guarantees, comparative doctor claims, or misleading medical discounts. Clinics should verify specific local guidelines with the West Bengal Dental Council."
  },
  {
    question: "What is the typical monthly investment for dental marketing in Kolkata?",
    answer:
      "Our targeted Local Maps & Visibility retainer starts from ₹18,500/month ($220 USD/month). Complete Clinic Growth Engines incorporating Google Search Ads, Meta patient education, and WhatsApp automation start from ₹34,500/month ($390 USD/month). All agreements are month-to-month with no long-term lock-in."
  },
  {
    question: "Who owns the marketing assets, landing pages, and ad accounts?",
    answer:
      "You do. 100% of Google Ads accounts, Meta Business Managers, custom landing page source codes, and patient lead databases remain entirely your clinic's property from day one."
  }
];

export default function DentalMarketingAgencyPage() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": `${pageUrl}#webpage`,
        name: pageTitle,
        description: pageDescription,
        url: pageUrl,
        isPartOf: {
          "@id": `${business.url}/#website`
        }
      },
      {
        "@type": "Service",
        "@id": `${pageUrl}#service`,
        name: "Digital Marketing Agency for Dental Clinics Kolkata",
        description: pageDescription,
        serviceType: "Dental Marketing & Patient Acquisition",
        url: pageUrl,
        provider: {
          "@id": `${business.url}/#localbusiness`
        },
        areaServed: [
          "Kolkata",
          "Salt Lake Sector V",
          "New Town",
          "Barasat",
          "Park Street",
          "Ballygunge",
          "West Bengal"
        ],
        offers: {
          "@type": "Offer",
          priceCurrency: "INR",
          price: "18500",
          availability: "https://schema.org/InStock"
        }
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: business.url },
          { "@type": "ListItem", position: 2, name: "Services", item: `${business.url}/services` },
          {
            "@type": "ListItem",
            position: 3,
            name: "Digital Marketing Agency for Dental Clinics Kolkata",
            item: pageUrl
          }
        ]
      },
      {
        "@type": "FAQPage",
        "@id": `${pageUrl}#faq`,
        mainEntity: dentalFaqs.map((faq) => ({
          "@type": "Question",
          name: faq.question,
          acceptedAnswer: {
            "@type": "Answer",
            text: faq.answer
          }
        }))
      }
    ]
  };

  return (
    <main className="min-h-screen bg-ink text-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      {/* Hero Section */}
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
          {/* Breadcrumb Navigation */}
          <nav aria-label="Breadcrumb" className="text-sm text-white/45">
            <ol className="flex flex-wrap gap-2">
              <li>
                <Link href="/" className="hover:text-acid">
                  Home
                </Link>
              </li>
              <li>/</li>
              <li>
                <Link href="/services" className="hover:text-acid">
                  Services
                </Link>
              </li>
              <li>/</li>
              <li className="text-white/70">Dental Marketing Agency Kolkata</li>
            </ol>
          </nav>

          <div className="mt-8 inline-flex items-center gap-2 rounded-full border border-acid/20 bg-acid/10 px-3.5 py-1 text-xs font-black uppercase tracking-[0.2em] text-acid">
            <Sparkles size={14} />
            <span>Healthcare Growth Engineering · Kolkata</span>
          </div>

          <h1 className="mt-6 max-w-5xl font-display text-4xl font-extrabold leading-[1.08] text-white md:text-6xl lg:text-7xl">
            Digital Marketing Agency in Kolkata for Dental Clinics
          </h1>

          <p className="mt-7 max-w-3xl text-lg leading-8 text-white/75 md:text-xl md:leading-9">
            Stop losing high-value implant, aligner, and restorative patients to aggregator platforms.
            PPR Global engineers ethical patient acquisition systems: Google Maps 3-Pack authority,
            high-intent Google Search Ads, sub-second clinic websites, and automated WhatsApp appointment triage.
          </p>

          {/* Quick Stats / Highlights */}
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { label: "Targeted Treatments", val: "Implants & Aligners", desc: "Focus on elective & restorative care" },
              { label: "Appointment Flow", val: "Direct WhatsApp", desc: "1-tap verified patient chat routing" },
              { label: "Locality Reach", val: "3–5 KM Radius", desc: "Kolkata, Salt Lake, New Town, Barasat" },
              { label: "Ethics Standard", val: "100% Compliant", desc: "Adheres to medical council decorum" }
            ].map((stat, idx) => (
              <div
                key={idx}
                className="rounded-xl border border-white/10 bg-white/[0.03] p-5 shadow-sm"
              >
                <p className="text-xs font-semibold uppercase tracking-wider text-acid">
                  {stat.label}
                </p>
                <p className="mt-2 text-xl font-bold text-white">{stat.val}</p>
                <p className="mt-1 text-xs text-white/55">{stat.desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <a
              href="#dental-scorecard"
              className="inline-flex min-h-12 items-center gap-2 rounded-full bg-acid px-6 text-xs font-black uppercase tracking-[0.16em] text-ink transition-transform hover:scale-105"
            >
              <span>Take Dental Scorecard</span>
              <ArrowDownRight size={16} />
            </a>
            <Link
              href="/dental-demo"
              className="inline-flex min-h-12 items-center gap-2 rounded-full border border-white/20 bg-white/5 px-6 text-xs font-black uppercase tracking-[0.16em] text-white transition-colors hover:border-acid hover:text-acid"
            >
              <span>Explore Interactive Clinic Demo</span>
              <ArrowUpRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* Cross-Link Hub to Specific Dental Services */}
      <section className="border-y border-white/10 bg-black/40 px-4 py-12">
        <div className="mx-auto max-w-6xl">
          <p className="text-xs font-black uppercase tracking-[0.2em] text-acid">
            Specialized Dental Solutions
          </p>
          <h2 className="mt-2 text-2xl font-bold text-white md:text-3xl">
            Explore our specialized clinical digital capabilities
          </h2>
          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                title: "Dental Website Development",
                slug: "website-for-dentists-kolkata",
                desc: "Sub-second Next.js dental websites with doctor profiles, treatment showcases & mobile booking."
              },
              {
                title: "Dental Appointment Systems",
                slug: "dental-appointment-booking-systems-kolkata",
                desc: "Automated 3-step WhatsApp slot scheduling and reminder alerts that cut no-shows."
              },
              {
                title: "Dental Clinic SEO & Maps",
                slug: "dental-seo-kolkata",
                desc: "Dominate the Google Local 3-Pack for 'dentist near me' across Kolkata localities."
              },
              {
                title: "Healthcare Meta & Social Ads",
                slug: "healthcare-meta-ads-kolkata",
                desc: "Trust-led patient education campaigns across Facebook and Instagram with ethical messaging."
              }
            ].map((serv, idx) => (
              <Link
                key={idx}
                href={`/services/${serv.slug}`}
                className="group rounded-xl border border-white/10 bg-white/[0.02] p-5 transition-all hover:border-acid/40 hover:bg-white/[0.05]"
              >
                <div className="flex items-center justify-between">
                  <h3 className="font-semibold text-white group-hover:text-acid">
                    {serv.title}
                  </h3>
                  <ArrowUpRight size={15} className="text-acid" />
                </div>
                <p className="mt-2.5 text-xs leading-5 text-white/60">
                  {serv.desc}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Comprehensive In-Depth Strategic Breakdown (1,200+ words) */}
      <section className="px-4 py-20">
        <div className="mx-auto max-w-6xl space-y-16">
          {/* Section 1: The Kolkata Dental Patient Journey */}
          <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-6 md:p-10">
            <span className="text-xs font-black uppercase tracking-widest text-acid">
              Patient Acquisition Architecture
            </span>
            <h2 className="mt-3 font-display text-3xl font-bold text-white md:text-4xl">
              How Modern Dental Patients in Kolkata Search, Evaluate, and Book Care
            </h2>
            <div className="mt-6 space-y-5 text-base leading-8 text-white/75">
              <p>
                The digital behavior of dental patients in Kolkata has fundamentally shifted.
                Ten years ago, clinics relied almost exclusively on neighborhood word-of-mouth
                and prominent physical signboards along major thoroughfares like Jessore Road,
                EM Bypass, or Gariahat. Today, whether a resident in Salt Lake Sector V suffers
                from acute nocturnal toothache or an IT professional in New Town decides to invest
                in clear teeth aligners, the patient journey starts on a smartphone.
              </p>
              <p>
                However, dental services operate on a unique psychological balance: high clinical
                apprehension paired with extreme intimacy. Unlike buying consumer electronics,
                a patient is selecting a doctor who will perform invasive clinical procedures
                inside their mouth. When patients land on a generic, poorly maintained website
                with blurry photographs, outdated pricing, or unresponsive phone numbers, their
                immediate subconscious reaction is hesitation. They hit the back button and
                book a competitor whose digital footprint conveys clinical sterility, doctor
                pedigree, and effortless WhatsApp accessibility.
              </p>
              <p>
                At PPR Global, we serve as the dedicated <strong>digital marketing agency in Kolkata for dental clinics</strong>.
                We do not treat dental practices like e-commerce storefronts or real estate agencies.
                Our patient acquisition systems are built specifically around clinical ethics,
                doctor transparency, localized geographic intent, and friction-free communication.
              </p>
            </div>
          </div>

          {/* Section 2: The 6 Multi-Channel Pillars */}
          <div>
            <div className="text-center">
              <span className="text-xs font-black uppercase tracking-widest text-acid">
                Clinical Growth Framework
              </span>
              <h2 className="mt-3 font-display text-3xl font-bold text-white md:text-4xl">
                The 6 Essential Channels of Sustainable Dental Practice Marketing
              </h2>
              <p className="mx-auto mt-3 max-w-2xl text-sm leading-6 text-white/60">
                A single marketing channel creates fragile clinic revenue. We deploy an integrated,
                six-pillar digital ecosystem that compounds over time.
              </p>
            </div>

            <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  icon: <MapPin className="text-acid" size={24} />,
                  title: "1. Google Maps & Local 3-Pack SEO",
                  desc: "Over 72% of Kolkata dental searches take place with localized intent ('dentist near me', 'dental clinic Salt Lake'). We optimize your Google Business Profile (GBP), standardize medical citations, and implement Dentist schema to keep your clinic anchored in the top 3 map results."
                },
                {
                  icon: <Search className="text-acid" size={24} />,
                  title: "2. Intent-Driven Google Search Ads",
                  desc: "Capture patients who have already decided to seek treatment. We run targeted search campaigns for high-intent keywords like 'painless root canal Kolkata' and 'dental implant specialist near me', backed by tightly controlled negative keyword lists to prevent wasted budget."
                },
                {
                  icon: <Globe2 className="text-acid" size={24} />,
                  title: "3. Educational Meta (FB & IG) Ads",
                  desc: "Meta platforms are ideal for demystifying elective dental procedures like invisible aligners and smile makeovers. We create responsible, dignified educational video graphics explaining treatment benefits without violating medical advertising ethics."
                },
                {
                  icon: <MessageCircle className="text-acid" size={24} />,
                  title: "4. Instant WhatsApp Booking Triage",
                  desc: "Indian patients prefer WhatsApp over web forms by a ratio of 5 to 1. We wire smart pre-formatted WhatsApp chat triggers directly into your marketing ads and website pages, allowing front-desk receptionists to confirm consults in real time."
                },
                {
                  icon: <Clock className="text-acid" size={24} />,
                  title: "5. Automated No-Show Reduction",
                  desc: "Empty dental chairs represent immediate lost overhead. Our automated appointment reminder flows dispatch WhatsApp and SMS reminders 24 hours and 2 hours prior to scheduled procedures, cutting no-show rates by up to 75%."
                },
                {
                  icon: <Award className="text-acid" size={24} />,
                  title: "6. Ethical Review Collection Funnels",
                  desc: "Patient reviews are the single greatest conversion driver. We set up automated post-consultation WhatsApp prompts that politely invite satisfied patients to leave verified Google 5-star feedback, steadily building dominant local practice authority."
                }
              ].map((channel, idx) => (
                <div
                  key={idx}
                  className="rounded-xl border border-white/10 bg-black/40 p-6 transition-all hover:border-acid/30"
                >
                  <div className="mb-4 inline-flex rounded-lg bg-acid/10 p-3">
                    {channel.icon}
                  </div>
                  <h3 className="text-lg font-bold text-white">{channel.title}</h3>
                  <p className="mt-3 text-xs leading-6 text-white/65 md:text-sm">
                    {channel.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Section 3: Comparison Table (DIY vs General Agency vs PPR Global Dental Setup) */}
          <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-6 md:p-10">
            <span className="text-xs font-black uppercase tracking-widest text-acid">
              Vendor Comparison
            </span>
            <h2 className="mt-3 font-display text-2xl font-bold text-white md:text-4xl">
              Why Dental Practices Switch from General Agencies to PPR Global
            </h2>
            <p className="mt-2 text-sm text-white/60">
              Evaluating marketing alternatives for your Kolkata dental clinic:
            </p>

            <div className="mt-8 overflow-x-auto">
              <table className="w-full min-w-[620px] text-left text-sm">
                <thead>
                  <tr className="border-b border-white/15 text-xs uppercase tracking-wider text-white/50">
                    <th className="py-4 pr-4">Evaluation Metric</th>
                    <th className="py-4 px-4">DIY / Aggregators (Practo)</th>
                    <th className="py-4 px-4">Generic Digital Agency</th>
                    <th className="py-4 pl-4 text-acid font-bold">PPR Global Dental Setup</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/10 text-white/80">
                  <tr>
                    <td className="py-4 pr-4 font-semibold text-white">Clinical & Medical Nuance</td>
                    <td className="py-4 px-4 text-white/50">Aggregator controls your clinic brand</td>
                    <td className="py-4 px-4 text-white/50">Treats clinics like retail stores</td>
                    <td className="py-4 pl-4 font-semibold text-acid">Deep healthcare & ethical understanding</td>
                  </tr>
                  <tr>
                    <td className="py-4 pr-4 font-semibold text-white">Patient Ownership</td>
                    <td className="py-4 px-4 text-white/50">Rented patient list (competitors displayed)</td>
                    <td className="py-4 px-4 text-white/50">Varies, often holds accounts hostage</td>
                    <td className="py-4 pl-4 font-semibold text-acid">100% direct patient database ownership</td>
                  </tr>
                  <tr>
                    <td className="py-4 pr-4 font-semibold text-white">Website Speed & Technology</td>
                    <td className="py-4 px-4 text-white/50">Locked aggregator profile</td>
                    <td className="py-4 px-4 text-white/50">Heavy, bloated WordPress themes (4s+ loads)</td>
                    <td className="py-4 pl-4 font-semibold text-acid">Sub-second Next.js custom architecture</td>
                  </tr>
                  <tr>
                    <td className="py-4 pr-4 font-semibold text-white">WhatsApp Integration</td>
                    <td className="py-4 px-4 text-white/50">Forced app download for patients</td>
                    <td className="py-4 px-4 text-white/50">Generic contact forms sent via email</td>
                    <td className="py-4 pl-4 font-semibold text-acid">Native 1-tap pre-formatted WhatsApp chat</td>
                  </tr>
                  <tr>
                    <td className="py-4 pr-4 font-semibold text-white">Targeting High-Value Cases</td>
                    <td className="py-4 px-4 text-white/50">Attracts price-sensitive searchers</td>
                    <td className="py-4 px-4 text-white/50">Focuses on vanity clicks & low CPCs</td>
                    <td className="py-4 pl-4 font-semibold text-acid">Engineered for Implants, Aligners & RCTs</td>
                  </tr>
                  <tr>
                    <td className="py-4 pr-4 font-semibold text-white">Contractual Lock-In</td>
                    <td className="py-4 px-4 text-white/50">High annual directory subscriptions</td>
                    <td className="py-4 px-4 text-white/50">6 to 12-month agency retainers</td>
                    <td className="py-4 pl-4 font-semibold text-acid">Transparent month-to-month partnership</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Section 4: 30 / 60 / 90 Days Growth Process */}
          <div>
            <div className="text-center">
              <span className="text-xs font-black uppercase tracking-widest text-acid">
                Structured Roadmap
              </span>
              <h2 className="mt-3 font-display text-3xl font-bold text-white md:text-4xl">
                Our 30 / 60 / 90 Day Dental Growth Implementation Framework
              </h2>
              <p className="mx-auto mt-2 max-w-2xl text-sm text-white/60">
                Predictable, milestone-driven execution designed to build lasting clinic equity.
              </p>
            </div>

            <div className="mt-12 grid gap-6 md:grid-cols-3">
              {[
                {
                  period: "Days 1 – 30",
                  phase: "Foundation & Immediate Patient Inquiries",
                  bullets: [
                    "Complete audit of Google Business Profile & local citation NAP consistency.",
                    "Deployment of high-speed clinic landing page with 1-tap WhatsApp triage.",
                    "Launch of hyper-targeted Google Search Ads for emergency pain relief & high-intent treatments.",
                    "Front-desk staff training on instant WhatsApp inquiry handling & booking confirmation."
                  ]
                },
                {
                  period: "Days 31 – 60",
                  phase: "Local Maps Expansion & Review Automation",
                  bullets: [
                    "Rollout of dedicated treatment pages (Dental Implants, Invisible Aligners, Pediatric Care).",
                    "Implementation of automated post-procedure WhatsApp review collection sequence.",
                    "Local schema optimization (MedicalBusiness, Dentist, OpeningHoursSpecification).",
                    "Geo-targeted Meta awareness campaigns profiling doctor credentials in your Kolkata neighborhood."
                  ]
                },
                {
                  period: "Days 61 – 90",
                  phase: "Dominance, Recall Systems & Scale",
                  bullets: [
                    "Consolidation into Top 3 Google Local Map Pack across target pin codes.",
                    "Activation of automated 6-month patient hygiene and check-up recall reminders.",
                    "Refinement of negative keyword lists to maximize high-margin restorative cases.",
                    "Transparent monthly ROI and cost-per-chair consultation reporting."
                  ]
                }
              ].map((phase, idx) => (
                <div
                  key={idx}
                  className="flex flex-col justify-between rounded-xl border border-white/10 bg-black/40 p-6 md:p-8"
                >
                  <div>
                    <span className="rounded-full bg-acid/15 px-3 py-1 text-xs font-black uppercase tracking-wider text-acid">
                      {phase.period}
                    </span>
                    <h3 className="mt-4 text-xl font-bold text-white">{phase.phase}</h3>
                    <ul className="mt-6 space-y-3">
                      {phase.bullets.map((b, bIdx) => (
                        <li key={bIdx} className="flex items-start gap-2.5 text-xs leading-5 text-white/75">
                          <CheckCircle2 size={15} className="mt-0.5 shrink-0 text-acid" />
                          <span>{b}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Section 5: Regulatory Footnote */}
          <div className="rounded-xl border border-amber-500/20 bg-amber-500/5 p-6 text-xs leading-6 text-amber-200/80">
            <div className="flex items-center gap-2 font-bold uppercase tracking-wider text-amber-400">
              <ShieldCheck size={16} />
              <span>Dental Council Advertising Ethics & Compliance Notice</span>
            </div>
            <p className="mt-2">
              All digital marketing campaigns, Google Ads strategies, social media educational content,
              and website designs architected by PPR Global strictly adhere to the professional code
              of ethics governing healthcare practices. We do not engage in misleading commercial solicitation,
              fabricated comparative claims, outcome guarantees, or unauthorized discounting schemes.
              Clinics must verify advertising parameters with the West Bengal Dental Council or the
              Dental Council of India to ensure full alignment with regional statutory guidelines.
            </p>
          </div>

          {/* Section 6: Interactive Dental Pricing Block */}
          <DentalPricing
            tiers={dentalMarketingPricing}
            title="Kolkata Dental Marketing Retainer Packages"
            subtitle="Predictable monthly investment with no long-term lock-in. Transparent CPL reporting and direct account ownership."
            scorecardHref="#dental-scorecard"
          />

          {/* Section 7: Interactive Dental Scorecard Audit */}
          <div className="pt-8">
            <DentalScorecard
              source="dental-marketing-page"
            />
          </div>

          {/* Section 8: FAQs with Schema Markup */}
          <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-6 md:p-10">
            <span className="text-xs font-black uppercase tracking-widest text-acid">
              Common Questions
            </span>
            <h2 className="mt-3 font-display text-2xl font-bold text-white md:text-3xl">
              Frequently Asked Questions About Dental Marketing in Kolkata
            </h2>
            <div className="mt-8 grid gap-4 md:grid-cols-2">
              {dentalFaqs.map((faq, idx) => (
                <div key={idx} className="rounded-xl border border-white/5 bg-black/40 p-5">
                  <h3 className="font-semibold text-white">{faq.question}</h3>
                  <p className="mt-3 text-xs leading-6 text-white/65 md:text-sm">
                    {faq.answer}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Section 9: Lead Capture Form */}
          <div
            id="service-quote"
            className="rounded-2xl border border-acid/25 bg-[#0d0d0f] p-6 shadow-[0_20px_70px_rgba(0,0,0,0.5)] md:p-10"
          >
            <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-center">
              <div>
                <p className="text-xs font-black uppercase tracking-[0.2em] text-acid">
                  Partner With Us
                </p>
                <h2 className="mt-2 font-display text-3xl font-semibold leading-tight text-white md:text-5xl">
                  Schedule a Dental Practice Growth Consultation
                </h2>
                <p className="mt-3 max-w-2xl text-sm leading-6 text-white/70 md:text-base md:leading-7">
                  Speak directly with lead engineer Patit Roy. We will analyze your clinic&apos;s current
                  Google Maps ranking, website speed, and local competitor footprint with zero obligation.
                </p>
              </div>
              <a
                href={`https://wa.me/919609079663?text=${encodeURIComponent(
                  "Hi Patit, I run a dental clinic in Kolkata and would like to discuss our digital marketing and patient acquisition strategy."
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-12 shrink-0 items-center justify-center gap-2 rounded-full bg-acid px-6 text-xs font-black uppercase tracking-[0.16em] text-ink transition-transform hover:scale-105"
              >
                Instant WhatsApp Chat <ArrowUpRight size={15} />
              </a>
            </div>
            <div className="mt-8 border-t border-white/10 pt-8">
              <LeadCaptureForm
                variant="contact"
                source="dental-marketing"
              />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

function ArrowDownRight(props: { size: number }) {
  return (
    <svg
      width={props.size}
      height={props.size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="7" y1="7" x2="17" y2="17" />
      <polyline points="17 7 17 17 7 17" />
    </svg>
  );
}
