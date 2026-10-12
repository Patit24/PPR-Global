import type { Metadata } from "next";
import Link from "next/link";
import {
  Activity,
  ArrowRight,
  ArrowUpRight,
  Calendar,
  CheckCircle2,
  Clock,
  Database,
  FileText,
  HeartPulse,
  Lock,
  MapPin,
  MessageCircle,
  Phone,
  ShieldCheck,
  Smartphone,
  Sparkles,
  Stethoscope,
  Users
} from "lucide-react";
import { LeadCaptureForm } from "@/components/leads/LeadCaptureForm";
import { business } from "@/lib/business";

const pageTitle = "Healthcare Website & App Development in Kolkata | PPR Global";
const pageDescription =
  "We build patient-friendly websites, appointment apps and WhatsApp lead systems for clinics, hospitals and diagnostic labs. Get a free consultation.";
const pageUrl = `${business.url}/healthcare-website-app-development`;

export const metadata: Metadata = {
  title: {
    absolute: pageTitle
  },
  description: pageDescription,
  keywords: [
    "healthcare website development India",
    "hospital website design",
    "clinic website development Kolkata",
    "doctor appointment app development",
    "patient lead generation",
    "healthcare digital marketing India",
    "diagnostic lab app",
    "telemedicine app development",
    "WhatsApp appointment booking"
  ],
  alternates: {
    canonical: "/healthcare-website-app-development"
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

const healthcareFaqs = [
  {
    question: "How much does a healthcare website cost in India?",
    answer:
      "Cost depends on the number of pages, specialized features such as online slot booking, and design complexity. A clean single-doctor clinic website starts from ₹28,750 ($300 USD), while an advanced multi-specialist hospital or diagnostic portal with custom scheduling and admin controls starts from ₹48,500 ($520 USD). We provide a transparent, fixed-scope quote after a free discovery call."
  },
  {
    question: "How long does it take to build a clinic website or app?",
    answer:
      "A standard clinic website is typically planned, designed, and deployed live within 10 to 14 business days. A custom patient appointment or diagnostic lab app takes between 3 to 6 weeks depending on telemedicine modules, patient report integrations, and authentication requirements."
  },
  {
    question: "Can patients book appointments directly on the website?",
    answer:
      "Yes. We configure both lightweight pre-filled WhatsApp booking flows and automated calendar slot selectors where patients pick their preferred doctor, date, and morning or evening OPD slot with immediate WhatsApp/SMS confirmation."
  },
  {
    question: "Do you build telemedicine apps?",
    answer:
      "Yes. We build video and chat teleconsultation features aligned with India's Telemedicine Practice Guidelines issued under the National Medical Commission framework, incorporating digital patient consent, prescription generation, and audit logging."
  },
  {
    question: "How do you keep patient data safe?",
    answer:
      "We design healthcare systems with privacy-by-design under the Digital Personal Data Protection (DPDP) Act 2023. This includes SSL/TLS encryption in transit, secure database hosting, role-based front desk access, regular backups, and zero unauthorized third-party tracker scripts."
  },
  {
    question: "Can you help us get more patients, not just build the website?",
    answer:
      "Yes. We provide complete patient acquisition systems combining Google Business Profile (Local 3-Pack SEO), policy-compliant Google Search Ads for high-intent emergency treatments, educational Meta Ads, and automated WhatsApp patient recall workflows."
  },
  {
    question: "Do you work with clinics outside Kolkata?",
    answer:
      "Yes. While our headquarters are in Kolkata (Jessore Rd, Barasat), we work with healthcare practices, polyclinics, and wellness brands across India (Delhi NCR, Mumbai, Bengaluru, Hyderabad) via scheduled video calls and async project updates."
  },
  {
    question: "Will my staff be able to manage the system without technical knowledge?",
    answer:
      "Yes. We build clean, intuitive administrative dashboards and provide step-by-step training for your reception and front desk staff so they can adjust doctor timings, block leave dates, and download patient lead sheets effortlessly."
  }
];

export default function HealthcareLandingPage() {
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
        name: "Healthcare Website & App Development",
        description: pageDescription,
        serviceType: "Healthcare Digital Engineering & Marketing",
        url: pageUrl,
        provider: {
          "@id": `${business.url}/#localbusiness`
        },
        areaServed: [
          "Kolkata",
          "West Bengal",
          "India",
          "Salt Lake",
          "New Town",
          "Park Street"
        ],
        offers: {
          "@type": "Offer",
          priceCurrency: "INR",
          price: "28750",
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
            name: "Healthcare Website & App Development",
            item: pageUrl
          }
        ]
      },
      {
        "@type": "FAQPage",
        "@id": `${pageUrl}#faq`,
        mainEntity: healthcareFaqs.map((faq) => ({
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
              <li className="text-white/70">Healthcare Website & App Development</li>
            </ol>
          </nav>

          <div className="mt-8 inline-flex items-center gap-2 rounded-full border border-acid/20 bg-acid/10 px-3.5 py-1 text-xs font-black uppercase tracking-[0.2em] text-acid">
            <HeartPulse size={14} />
            <span>Healthcare Engineering & Patient Acquisition · India</span>
          </div>

          <h1 className="mt-6 max-w-5xl font-display text-4xl font-extrabold leading-[1.08] text-white md:text-6xl lg:text-7xl">
            Websites and Apps That Bring Patients to Your Healthcare Practice
          </h1>

          <p className="mt-7 max-w-3xl text-lg leading-8 text-white/75 md:text-xl md:leading-9">
            PPR Global designs and builds websites, mobile apps and lead systems for clinics,
            hospitals, diagnostic centres, dental practices and wellness brands. Patients find
            you on Google, book in under a minute, and get reminders on WhatsApp. Your team
            gets a clean dashboard instead of a notebook and a ringing phone.
          </p>

          <p className="mt-4 text-xs font-semibold uppercase tracking-wider text-acid/90">
            Based in Kolkata. Working with healthcare and service businesses across India.
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <a
              href="#healthcare-consultation"
              className="inline-flex min-h-12 items-center gap-2 rounded-full bg-acid px-6 text-xs font-black uppercase tracking-[0.16em] text-ink transition-transform hover:scale-105"
            >
              <span>Book a Free Consultation</span>
              <ArrowRight size={15} />
            </a>
            <a
              href="https://wa.me/919609079663?text=Hi%20Patit,%20I%20run%20a%20healthcare%20practice%20and%20want%20to%20know%20about%20a%20website%20or%20app."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-12 items-center gap-2 rounded-full border border-white/20 bg-white/5 px-6 text-xs font-black uppercase tracking-[0.16em] text-white transition-colors hover:border-acid hover:text-acid"
            >
              <MessageCircle size={15} />
              <span>Chat on WhatsApp</span>
            </a>
          </div>
        </div>
      </section>

      {/* The Problem We Solve */}
      <section className="border-t border-white/10 bg-black/40 px-4 py-20">
        <div className="mx-auto max-w-6xl">
          <div className="max-w-3xl">
            <span className="text-xs font-black uppercase tracking-widest text-acid">
              Industry Challenge
            </span>
            <h2 className="mt-3 font-display text-3xl font-bold text-white md:text-4xl">
              The Problem We Solve
            </h2>
            <p className="mt-4 text-base leading-8 text-white/75">
              Most patients now search online before they choose a doctor, clinic or lab. They
              compare options on their phone, check reviews, and look for a way to book immediately.
              If your website is slow, hard to read on mobile, or has no clear way to book, that
              patient moves to the next listing.
            </p>
          </div>

          <div className="mt-10">
            <p className="text-sm font-semibold uppercase tracking-wider text-white/60">
              Behind the scenes, many practices lose leads in other ways:
            </p>
            <div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {[
                {
                  title: "Untracked Inquiries",
                  desc: "Enquiries arrive through calls, WhatsApp, Instagram and walk-ins, and nobody tracks which ones were answered."
                },
                {
                  title: "Front Desk Bottlenecks",
                  desc: "Appointment bookings depend entirely on one receptionist and a single ringing phone line."
                },
                {
                  title: "Empty Chair No-Shows",
                  desc: "Patients forget appointments without automated reminders, leading to empty slots and lost clinical revenue."
                },
                {
                  title: "Missed Follow-Ups",
                  desc: "Follow-ups for preventive check-ups, vaccinations and repeat tests never happen at scale."
                }
              ].map((item, idx) => (
                <div
                  key={idx}
                  className="rounded-xl border border-red-500/20 bg-red-950/10 p-5 shadow-sm"
                >
                  <p className="text-xs font-bold uppercase tracking-wider text-red-400">
                    {item.title}
                  </p>
                  <p className="mt-2 text-xs leading-6 text-white/70">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
            <p className="mt-6 text-sm font-medium text-acid">
              A good digital system fixes each of these. That is what we build.
            </p>
          </div>
        </div>
      </section>

      {/* What We Build for Healthcare Businesses */}
      <section className="px-4 py-20">
        <div className="mx-auto max-w-6xl">
          <div className="text-center">
            <span className="text-xs font-black uppercase tracking-widest text-acid">
              Our Healthcare Solutions
            </span>
            <h2 className="mt-3 font-display text-3xl font-bold text-white md:text-5xl">
              What We Build for Healthcare Businesses
            </h2>
            <p className="mx-auto mt-3 max-w-2xl text-sm leading-6 text-white/60">
              End-to-end digital infrastructure engineered specifically for clinics, doctors, diagnostic centers and hospitals.
            </p>
          </div>

          <div className="mt-14 grid gap-8 md:grid-cols-2">
            {/* 1. Healthcare Websites */}
            <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 md:p-8">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-acid/10 text-acid">
                  <Stethoscope size={22} />
                </div>
                <h3 className="font-display text-2xl font-bold text-white">
                  1. Healthcare Websites That Earn Patient Trust
                </h3>
              </div>
              <p className="mt-4 text-sm leading-7 text-white/70">
                Your website is your digital front desk. We build fast, mobile-first sites with
                clear doctor profiles, service pages, treatment information, location maps,
                working hours and visible contact options. Every page is structured so patients
                can find what they need in a few taps, and so search engines understand what you offer and where.
              </p>
              <ul className="mt-6 space-y-2.5">
                {[
                  "Doctor and specialist profile pages with qualifications and registration details",
                  "Service and treatment pages written for the questions patients actually ask",
                  "Online appointment request or booking forms",
                  "Click-to-call and WhatsApp buttons on every page",
                  "Patient reviews and Google Maps integration",
                  "Fast loading, secure (HTTPS) and mobile-first design"
                ].map((pt, i) => (
                  <li key={i} className="flex items-start gap-2.5 text-xs leading-5 text-white/75">
                    <CheckCircle2 size={15} className="mt-0.5 shrink-0 text-acid" />
                    <span>{pt}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* 2. Appointment and Patient Apps */}
            <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 md:p-8">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-acid/10 text-acid">
                  <Smartphone size={22} />
                </div>
                <h3 className="font-display text-2xl font-bold text-white">
                  2. Appointment and Patient Apps
                </h3>
              </div>
              <p className="mt-4 text-sm leading-7 text-white/70">
                We develop Android and iOS apps for practices that want a direct, lasting channel to their patients.
              </p>
              <ul className="mt-6 space-y-2.5">
                {[
                  "Appointment booking, rescheduling and cancellation",
                  "Doctor availability and slot management",
                  "Digital prescriptions and report access, where your workflow supports it",
                  "Reminders and follow-up notifications",
                  "Teleconsultation, built around the rules in India's telemedicine guidelines",
                  "Admin dashboard for your front desk and management team"
                ].map((pt, i) => (
                  <li key={i} className="flex items-start gap-2.5 text-xs leading-5 text-white/75">
                    <CheckCircle2 size={15} className="mt-0.5 shrink-0 text-acid" />
                    <span>{pt}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* 3. Patient Lead Generation Systems */}
            <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 md:p-8">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-acid/10 text-acid">
                  <Activity size={22} />
                </div>
                <h3 className="font-display text-2xl font-bold text-white">
                  3. Patient Lead Generation Systems
                </h3>
              </div>
              <p className="mt-4 text-sm leading-7 text-white/70">
                A website or app only helps if people find it. We connect your digital presence
                to a lead system so every enquiry is captured, tracked and followed up.
              </p>
              <ul className="mt-6 space-y-2.5">
                {[
                  "Lead capture forms on website, landing pages and app",
                  "WhatsApp automation for instant replies, booking links and reminders",
                  "A simple CRM so no enquiry is forgotten",
                  "Google Ads and Meta Ads campaigns built within platform health-advertising policies",
                  "Local SEO and Google Business Profile optimisation so you appear when patients search 'near me'"
                ].map((pt, i) => (
                  <li key={i} className="flex items-start gap-2.5 text-xs leading-5 text-white/75">
                    <CheckCircle2 size={15} className="mt-0.5 shrink-0 text-acid" />
                    <span>{pt}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* 4. WhatsApp Automation for Clinics and Labs */}
            <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 md:p-8">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-acid/10 text-acid">
                  <MessageCircle size={22} />
                </div>
                <h3 className="font-display text-2xl font-bold text-white">
                  4. WhatsApp Automation for Clinics and Labs
                </h3>
              </div>
              <p className="mt-4 text-sm leading-7 text-white/70">
                Indian patients already use WhatsApp daily. We set up automated, consent-based
                messages for booking confirmations, appointment reminders, test report notifications
                and follow-up check-ins. Your staff handles the exceptions, not the routine.
              </p>
              <ul className="mt-6 space-y-2.5">
                {[
                  "One-tap pre-formatted WhatsApp chat triggers on mobile",
                  "Automated instant booking confirmation receipts",
                  "Automated reminder alerts 24 hours & 2 hours before appointments",
                  "Secure PDF test report delivery links with patient consent",
                  "Automated 6-month check-up recall prompts"
                ].map((pt, i) => (
                  <li key={i} className="flex items-start gap-2.5 text-xs leading-5 text-white/75">
                    <CheckCircle2 size={15} className="mt-0.5 shrink-0 text-acid" />
                    <span>{pt}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Who We Work With */}
      <section className="border-t border-white/10 bg-black/40 px-4 py-16">
        <div className="mx-auto max-w-6xl">
          <p className="text-xs font-black uppercase tracking-[0.2em] text-acid">
            Clinical Sectors
          </p>
          <h2 className="mt-2 text-2xl font-bold text-white md:text-3xl">
            Who We Work With
          </h2>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[
              "Single-doctor clinics and polyclinics",
              "Dental clinics and dental chains",
              "Diagnostic labs and pathology centres",
              "Physiotherapy, ayurveda and wellness centres",
              "Skin, hair and cosmetic clinics",
              "Small and mid-size hospitals and nursing homes",
              "Healthtech startups building patient-facing products",
              "Specialized diagnostic imaging centers"
            ].map((sector, i) => (
              <div
                key={i}
                className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/[0.02] p-4 text-sm font-semibold text-white/80"
              >
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-acid/15 text-xs font-bold text-acid">
                  ✓
                </span>
                <span>{sector}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Built With Privacy and Compliance in Mind */}
      <section className="px-4 py-20">
        <div className="mx-auto max-w-6xl rounded-2xl border border-white/10 bg-white/[0.02] p-6 md:p-10">
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-acid">
            <ShieldCheck size={16} />
            <span>Healthcare Data Ethics & Regulations</span>
          </div>
          <h2 className="mt-3 font-display text-2xl font-bold text-white md:text-4xl">
            Built With Privacy and Compliance in Mind
          </h2>
          <p className="mt-3 max-w-3xl text-sm leading-7 text-white/70">
            Health data is sensitive, and the rules are real. We design systems with these in mind from day one:
          </p>

          <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "Data Protection & DPDP Act 2023",
                desc: "Patient data is collected only with clear consent and a stated purpose, in line with India's Digital Personal Data Protection Act, 2023."
              },
              {
                title: "Security & Encryption Basics",
                desc: "Encrypted connections (SSL/HTTPS), role-based access for staff, secure cloud hosting and automated regular backups."
              },
              {
                title: "NMC Telemedicine Guidelines",
                desc: "Teleconsultation features follow the Telemedicine Practice Guidelines issued under the National Medical Commission framework."
              },
              {
                title: "Health Records & ABDM Readiness",
                desc: "Apps can be architected for interoperability and integration planning with the Ayushman Bharat Digital Mission (ABDM) ecosystem."
              },
              {
                title: "Ethical Advertising Boundaries",
                desc: "We help you advertise within professional decorum and within Google and Meta health-ad policies, ensuring all claims are dignified."
              },
              {
                title: "Clear Professional Scope",
                desc: "PPR Global builds the technology. Your clinical and regulatory compliance remains your responsibility, and we recommend confirming specifics with your legal advisor."
              }
            ].map((box, i) => (
              <div key={i} className="rounded-xl border border-white/10 bg-black/30 p-5">
                <h4 className="text-base font-bold text-white">{box.title}</h4>
                <p className="mt-2 text-xs leading-6 text-white/65">{box.desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-8 rounded-xl border border-white/10 bg-white/[0.03] p-4 text-xs leading-5 text-white/60">
            <strong>Note:</strong> PPR Global builds the technology. Your clinical, legal and regulatory compliance remains your responsibility, and we recommend confirming specifics with your legal advisor.
          </div>
        </div>
      </section>

      {/* How We Work */}
      <section className="border-t border-white/10 bg-black/40 px-4 py-20">
        <div className="mx-auto max-w-6xl">
          <div className="text-center">
            <span className="text-xs font-black uppercase tracking-widest text-acid">
              Predictable Workflow
            </span>
            <h2 className="mt-3 font-display text-3xl font-bold text-white md:text-4xl">
              How We Work
            </h2>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                step: "1",
                title: "Discovery call (free)",
                desc: "We learn about your practice, your patients, your current process and your goals."
              },
              {
                step: "2",
                title: "Plan and proposal",
                desc: "You get a clear scope, timeline and fixed pricing before any work begins."
              },
              {
                step: "3",
                title: "Design",
                desc: "You review layouts and flows for your site or app and give direct feedback."
              },
              {
                step: "4",
                title: "Build and test",
                desc: "We develop, test on real devices, and fix issues before launch."
              },
              {
                step: "5",
                title: "Launch and train",
                desc: "We go live and train your staff to use the dashboard with confidence."
              },
              {
                step: "6",
                title: "Grow",
                desc: "We support you with SEO, ads and WhatsApp campaigns, with monthly reporting you can understand."
              }
            ].map((s, idx) => (
              <div
                key={idx}
                className="relative rounded-xl border border-white/10 bg-white/[0.02] p-6"
              >
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-acid font-display text-sm font-bold text-ink">
                  {s.step}
                </span>
                <h3 className="mt-4 text-lg font-bold text-white">{s.title}</h3>
                <p className="mt-2 text-xs leading-6 text-white/65">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why PPR Global */}
      <section className="px-4 py-20">
        <div className="mx-auto max-w-6xl">
          <div className="text-center">
            <span className="text-xs font-black uppercase tracking-widest text-acid">
              Client Advantages
            </span>
            <h2 className="mt-3 font-display text-3xl font-bold text-white md:text-4xl">
              Why PPR Global
            </h2>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {[
              {
                title: "Kolkata-based & Reachable",
                desc: "You work with a local team you can meet or call, not a faceless remote agency."
              },
              {
                title: "One Team for Everything",
                desc: "Website, app, WhatsApp, CRM and marketing under one unified engineering roof."
              },
              {
                title: "Built for Indian SMBs",
                desc: "We understand budgets, local search behavior and how Indian patients actually book."
              },
              {
                title: "Clear, Honest Reporting",
                desc: "You see real enquiries, bookings and cost per lead—never vanity metrics."
              }
            ].map((w, idx) => (
              <div
                key={idx}
                className="rounded-xl border border-white/10 bg-black/40 p-6"
              >
                <h3 className="text-lg font-bold text-white">{w.title}</h3>
                <p className="mt-3 text-xs leading-6 text-white/65">{w.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Internal Cross-Links to Core Services */}
      <section className="border-t border-white/10 bg-black/40 px-4 py-12">
        <div className="mx-auto max-w-6xl">
          <p className="text-xs font-black uppercase tracking-[0.2em] text-acid">
            Related Core Services
          </p>
          <div className="mt-4 flex flex-wrap gap-2.5">
            {[
              { label: "Website Development", href: "/services/website-development-kolkata" },
              { label: "Mobile App Development", href: "/services/mobile-app-development-kolkata" },
              { label: "WhatsApp Automation", href: "/services/whatsapp-automation-kolkata" },
              { label: "CRM Systems", href: "/services/crm-kolkata" },
              { label: "Google Ads", href: "/services/google-ads-kolkata" },
              { label: "SEO Services", href: "/services/seo-kolkata" },
              { label: "Dental Website Development", href: "/services/website-for-dentists-kolkata" },
              { label: "Dental Marketing Agency", href: "/digital-marketing-agency-for-dental-clinics-kolkata" }
            ].map((link, i) => (
              <Link
                key={i}
                href={link.href}
                className="rounded-full border border-white/12 bg-white/5 px-4 py-2 text-xs font-semibold text-white/70 transition-colors hover:border-acid hover:text-acid"
              >
                {link.label} →
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Frequently Asked Questions */}
      <section className="px-4 py-20">
        <div className="mx-auto max-w-6xl rounded-2xl border border-white/10 bg-white/[0.02] p-6 md:p-10">
          <span className="text-xs font-black uppercase tracking-widest text-acid">
            Clarity & Guidance
          </span>
          <h2 className="mt-3 font-display text-2xl font-bold text-white md:text-3xl">
            Frequently Asked Questions
          </h2>
          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {healthcareFaqs.map((faq, idx) => (
              <div key={idx} className="rounded-xl border border-white/5 bg-black/40 p-5">
                <h3 className="font-semibold text-white">{faq.question}</h3>
                <p className="mt-3 text-xs leading-6 text-white/65 md:text-sm">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lead Capture Form & Consultation Section */}
      <section id="healthcare-consultation" className="px-4 pb-24">
        <div className="mx-auto max-w-6xl rounded-2xl border border-acid/25 bg-[#0d0d0f] p-6 shadow-[0_20px_70px_rgba(0,0,0,0.5)] md:p-10">
          <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-center">
            <div>
              <p className="text-xs font-black uppercase tracking-[0.2em] text-acid">
                Tell Us About Your Practice
              </p>
              <h2 className="mt-2 font-display text-3xl font-semibold leading-tight text-white md:text-5xl">
                Ready to Fill Your Appointment Calendar?
              </h2>
              <p className="mt-3 max-w-2xl text-sm leading-6 text-white/70 md:text-base md:leading-7">
                Tell us about your practice and we will suggest a website, app and lead plan
                that fits your goals and budget. The first consultation is completely free.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <a
                href="https://wa.me/919609079663?text=Hi%20Patit,%20I%20run%20a%20healthcare%20practice%20and%20want%20to%20know%20about%20a%20website%20or%20app."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-acid px-6 text-xs font-black uppercase tracking-[0.16em] text-ink transition-transform hover:scale-105"
              >
                <span>WhatsApp Us</span>
                <ArrowUpRight size={15} />
              </a>
              <a
                href="tel:+919609079663"
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-white/20 bg-white/5 px-6 text-xs font-black uppercase tracking-[0.16em] text-white transition-colors hover:border-acid hover:text-acid"
              >
                <Phone size={15} />
                <span>Call Now: +91 9609079663</span>
              </a>
            </div>
          </div>

          <div className="mt-8 border-t border-white/10 pt-8">
            <LeadCaptureForm
              variant="contact"
              source="healthcare-landing-page"
              initialService="Website Development"
            />
          </div>
        </div>
      </section>
    </main>
  );
}
