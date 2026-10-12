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
  FileCheck2,
  FileText,
  HeartPulse,
  Hospital,
  Layers,
  Lock,
  MapPin,
  MessageCircle,
  Phone,
  PhoneCall,
  Search,
  ShieldCheck,
  Smartphone,
  Sparkles,
  Stethoscope,
  TrendingUp,
  UserCheck,
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
    <main className="min-h-screen bg-[#070d10] text-[#e8f3f1] selection:bg-teal-400 selection:text-black">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      {/* Atmospheric Clinical Glow Orbs */}
      <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
        <div className="absolute -top-40 left-1/2 h-[560px] w-[900px] -translate-x-1/2 rounded-full bg-[radial-gradient(ellipse_at_center,rgba(20,184,166,0.18)_0%,rgba(6,78,59,0.08)_50%,transparent_75%)] blur-3xl" />
        <div className="absolute top-[35%] -left-32 h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle_at_center,rgba(56,189,248,0.12)_0%,transparent_70%)] blur-3xl" />
        <div className="absolute top-[65%] -right-32 h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle_at_center,rgba(45,212,191,0.10)_0%,transparent_70%)] blur-3xl" />
      </div>

      {/* Hero Section */}
      <section className="relative z-10 overflow-hidden px-4 pb-20 pt-28 md:pt-32">
        {/* Clinical Grid Background */}
        <div
          aria-hidden="true"
          className="absolute inset-0 opacity-40"
          style={{
            backgroundImage:
              "linear-gradient(rgba(45,212,191,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(45,212,191,0.05) 1px, transparent 1px)",
            backgroundSize: "44px 44px"
          }}
        />

        <div className="relative mx-auto max-w-6xl">
          {/* Breadcrumb Navigation */}
          <nav aria-label="Breadcrumb" className="text-sm text-teal-200/50">
            <ol className="flex flex-wrap items-center gap-2">
              <li>
                <Link href="/" className="transition-colors hover:text-teal-300">
                  Home
                </Link>
              </li>
              <li>/</li>
              <li>
                <Link href="/services" className="transition-colors hover:text-teal-300">
                  Services
                </Link>
              </li>
              <li>/</li>
              <li className="text-teal-100 font-medium">Healthcare Website & App Development</li>
            </ol>
          </nav>

          <div className="mt-8 inline-flex items-center gap-2.5 rounded-full border border-teal-500/30 bg-teal-950/60 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.2em] text-teal-300 shadow-[0_0_24px_rgba(20,184,166,0.2)] backdrop-blur-md">
            <span className="flex h-2 w-2 rounded-full bg-teal-400 animate-pulse" />
            <HeartPulse size={14} className="text-teal-300" />
            <span>Healthcare Digital Engineering · India</span>
          </div>

          <h1 className="mt-6 max-w-5xl font-display text-4xl font-extrabold leading-[1.08] tracking-tight text-white md:text-6xl lg:text-7xl">
            Websites and Apps That Bring Patients to Your{" "}
            <span className="bg-gradient-to-r from-teal-300 via-emerald-300 to-cyan-300 bg-clip-text text-transparent">
              Healthcare Practice
            </span>
          </h1>

          <p className="mt-7 max-w-3xl text-lg leading-8 text-teal-100/80 md:text-xl md:leading-9">
            PPR Global designs and builds websites, mobile apps and lead systems for clinics,
            hospitals, diagnostic centres, dental practices and wellness brands. Patients find
            you on Google, book in under a minute, and get reminders on WhatsApp. Your team
            gets a clean dashboard instead of a notebook and a ringing phone.
          </p>

          <div className="mt-5 flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-teal-400">
            <MapPin size={14} />
            <span>Based in Kolkata. Working with healthcare and service businesses across India.</span>
          </div>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <a
              href="#healthcare-consultation"
              className="inline-flex min-h-12 items-center gap-2 rounded-full bg-gradient-to-r from-teal-400 to-emerald-400 px-7 text-xs font-black uppercase tracking-[0.16em] text-slate-950 shadow-[0_10px_35px_rgba(45,212,191,0.35)] transition-all hover:scale-105 hover:shadow-[0_14px_45px_rgba(45,212,191,0.5)]"
            >
              <span>Book a Free Consultation</span>
              <ArrowRight size={15} />
            </a>
            <a
              href="https://wa.me/919609079663?text=Hi%20Patit,%20I%20run%20a%20healthcare%20practice%20and%20want%20to%20know%20about%20a%20website%20or%20app."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-12 items-center gap-2 rounded-full border border-teal-500/30 bg-teal-950/40 px-6 text-xs font-black uppercase tracking-[0.16em] text-teal-200 backdrop-blur-md transition-all hover:border-teal-400 hover:bg-teal-900/50 hover:text-white"
            >
              <MessageCircle size={15} className="text-teal-400" />
              <span>Chat on WhatsApp</span>
            </a>
          </div>

          {/* Clinical Vital Signs Live Preview Strip */}
          <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                icon: <Stethoscope size={20} className="text-teal-300" />,
                title: "Doctor Profiles",
                desc: "Degrees, registration & verified credentials"
              },
              {
                icon: <Calendar size={20} className="text-teal-300" />,
                title: "Slot Booking",
                desc: "Under 60 seconds with WhatsApp sync"
              },
              {
                icon: <ShieldCheck size={20} className="text-teal-300" />,
                title: "DPDP 2023 Compliant",
                desc: "Consent-first data privacy & SSL security"
              },
              {
                icon: <Clock size={20} className="text-teal-300" />,
                title: "Automated Reminders",
                desc: "Cuts patient no-shows by up to 75%"
              }
            ].map((v, i) => (
              <div
                key={i}
                className="group relative overflow-hidden rounded-xl border border-teal-500/20 bg-gradient-to-b from-teal-950/40 to-slate-950/80 p-5 backdrop-blur-md transition-all hover:border-teal-400/50 hover:shadow-[0_8px_30px_rgba(20,184,166,0.15)]"
              >
                <div className="mb-3 inline-flex rounded-lg bg-teal-500/10 p-2.5">
                  {v.icon}
                </div>
                <h4 className="font-bold text-white group-hover:text-teal-300 transition-colors">
                  {v.title}
                </h4>
                <p className="mt-1 text-xs text-teal-100/60">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* The Problem We Solve */}
      <section className="relative z-10 border-t border-teal-900/40 bg-gradient-to-b from-[#091517] to-[#070e12] px-4 py-20">
        <div className="mx-auto max-w-6xl">
          <div className="max-w-3xl">
            <span className="text-xs font-black uppercase tracking-widest text-teal-400">
              Clinical Triage & Bottlenecks
            </span>
            <h2 className="mt-3 font-display text-3xl font-bold text-white md:text-5xl">
              The Problem We Solve
            </h2>
            <p className="mt-4 text-base leading-8 text-teal-100/80">
              Most patients now search online before they choose a doctor, clinic or lab. They
              compare options on their phone, check reviews, and look for a way to book immediately.
              If your website is slow, hard to read on mobile, or has no clear way to book, that
              patient moves to the next listing.
            </p>
          </div>

          <div className="mt-12">
            <p className="text-xs font-bold uppercase tracking-wider text-teal-300/80">
              Behind the scenes, many practices lose leads in other ways:
            </p>
            <div className="mt-5 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {[
                {
                  title: "Untracked Enquiries",
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
                  className="rounded-2xl border border-red-500/25 bg-gradient-to-b from-red-950/20 to-black/60 p-6 shadow-sm backdrop-blur-sm transition-all hover:border-red-400/40"
                >
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-red-500/15 text-xs font-black text-red-400">
                    ✕
                  </div>
                  <h4 className="mt-4 text-sm font-bold uppercase tracking-wider text-red-300">
                    {item.title}
                  </h4>
                  <p className="mt-2.5 text-xs leading-6 text-white/70">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-8 flex items-center gap-3 rounded-xl border border-teal-500/30 bg-teal-950/40 p-4 text-sm font-semibold text-teal-300">
              <Sparkles size={18} className="shrink-0 text-teal-400" />
              <span>A good digital system fixes each of these. That is what we build.</span>
            </div>
          </div>
        </div>
      </section>

      {/* What We Build for Healthcare Businesses */}
      <section className="relative z-10 px-4 py-24">
        <div className="mx-auto max-w-6xl">
          <div className="text-center">
            <span className="text-xs font-black uppercase tracking-widest text-teal-400">
              Engineered for Medical Practices
            </span>
            <h2 className="mt-3 font-display text-3xl font-bold text-white md:text-5xl">
              What We Build for Healthcare Businesses
            </h2>
            <p className="mx-auto mt-3 max-w-2xl text-sm leading-6 text-teal-100/70">
              Full-stack digital infrastructure designed specifically for clinics, doctors, diagnostic centers, dental practices and hospitals.
            </p>
          </div>

          <div className="mt-16 grid gap-8 md:grid-cols-2">
            {/* 1. Healthcare Websites */}
            <div className="relative overflow-hidden rounded-2xl border border-teal-500/25 bg-gradient-to-b from-[#0b1d1f] to-[#071317] p-7 md:p-9 shadow-[0_12px_45px_rgba(6,78,59,0.25)] transition-all hover:border-teal-400/60">
              <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-teal-500/15 text-teal-300 border border-teal-500/30">
                  <Stethoscope size={26} />
                </div>
                <div>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-teal-400">Pillar 01</span>
                  <h3 className="font-display text-xl font-bold text-white md:text-2xl">
                    1. Healthcare Websites That Earn Patient Trust
                  </h3>
                </div>
              </div>
              <p className="mt-5 text-sm leading-7 text-teal-100/75">
                Your website is your digital front desk. We build fast, mobile-first sites with
                clear doctor profiles, service pages, treatment information, location maps,
                working hours and visible contact options. Every page is structured so patients
                can find what they need in a few taps, and so search engines understand what you offer and where.
              </p>
              <div className="mt-6 border-t border-teal-900/60 pt-5">
                <ul className="space-y-3">
                  {[
                    "Doctor and specialist profile pages with qualifications and registration details",
                    "Service and treatment pages written for the questions patients actually ask",
                    "Online appointment request or booking forms",
                    "Click-to-call and WhatsApp buttons on every page",
                    "Patient reviews and Google Maps integration",
                    "Fast loading, secure (HTTPS) and mobile-first design"
                  ].map((pt, i) => (
                    <li key={i} className="flex items-start gap-2.5 text-xs leading-5 text-teal-100/80">
                      <CheckCircle2 size={16} className="mt-0.5 shrink-0 text-teal-400" />
                      <span>{pt}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* 2. Appointment and Patient Apps */}
            <div className="relative overflow-hidden rounded-2xl border border-cyan-500/25 bg-gradient-to-b from-[#091a24] to-[#06121a] p-7 md:p-9 shadow-[0_12px_45px_rgba(8,145,178,0.2)] transition-all hover:border-cyan-400/60">
              <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-cyan-500/15 text-cyan-300 border border-cyan-500/30">
                  <Smartphone size={26} />
                </div>
                <div>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-cyan-400">Pillar 02</span>
                  <h3 className="font-display text-xl font-bold text-white md:text-2xl">
                    2. Appointment and Patient Apps
                  </h3>
                </div>
              </div>
              <p className="mt-5 text-sm leading-7 text-teal-100/75">
                We develop Android and iOS apps for practices that want a direct, lasting channel to their patients.
              </p>
              <div className="mt-6 border-t border-cyan-900/60 pt-5">
                <ul className="space-y-3">
                  {[
                    "Appointment booking, rescheduling and cancellation",
                    "Doctor availability and slot management",
                    "Digital prescriptions and report access, where your workflow supports it",
                    "Reminders and follow-up notifications",
                    "Teleconsultation, built around the rules in India's telemedicine guidelines",
                    "Admin dashboard for your front desk and management team"
                  ].map((pt, i) => (
                    <li key={i} className="flex items-start gap-2.5 text-xs leading-5 text-teal-100/80">
                      <CheckCircle2 size={16} className="mt-0.5 shrink-0 text-cyan-400" />
                      <span>{pt}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* 3. Patient Lead Generation Systems */}
            <div className="relative overflow-hidden rounded-2xl border border-emerald-500/25 bg-gradient-to-b from-[#0a1e17] to-[#061410] p-7 md:p-9 shadow-[0_12px_45px_rgba(5,150,105,0.2)] transition-all hover:border-emerald-400/60">
              <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-500/15 text-emerald-300 border border-emerald-500/30">
                  <Activity size={26} />
                </div>
                <div>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-emerald-400">Pillar 03</span>
                  <h3 className="font-display text-xl font-bold text-white md:text-2xl">
                    3. Patient Lead Generation Systems
                  </h3>
                </div>
              </div>
              <p className="mt-5 text-sm leading-7 text-teal-100/75">
                A website or app only helps if people find it. We connect your digital presence
                to a lead system so every enquiry is captured, tracked and followed up.
              </p>
              <div className="mt-6 border-t border-emerald-900/60 pt-5">
                <ul className="space-y-3">
                  {[
                    "Lead capture forms on website, landing pages and app",
                    "WhatsApp automation for instant replies, booking links and reminders",
                    "A simple CRM so no enquiry is forgotten",
                    "Google Ads and Meta Ads campaigns built within platform health-advertising policies",
                    "Local SEO and Google Business Profile optimisation so you appear when patients search 'near me'"
                  ].map((pt, i) => (
                    <li key={i} className="flex items-start gap-2.5 text-xs leading-5 text-teal-100/80">
                      <CheckCircle2 size={16} className="mt-0.5 shrink-0 text-emerald-400" />
                      <span>{pt}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* 4. WhatsApp Automation */}
            <div className="relative overflow-hidden rounded-2xl border border-teal-500/25 bg-gradient-to-b from-[#081b1c] to-[#051113] p-7 md:p-9 shadow-[0_12px_45px_rgba(13,148,136,0.2)] transition-all hover:border-teal-400/60">
              <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-teal-500/15 text-teal-300 border border-teal-500/30">
                  <MessageCircle size={26} />
                </div>
                <div>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-teal-400">Pillar 04</span>
                  <h3 className="font-display text-xl font-bold text-white md:text-2xl">
                    4. WhatsApp Automation for Clinics and Labs
                  </h3>
                </div>
              </div>
              <p className="mt-5 text-sm leading-7 text-teal-100/75">
                Indian patients already use WhatsApp daily. We set up automated, consent-based
                messages for booking confirmations, appointment reminders, test report notifications
                and follow-up check-ins. Your staff handles the exceptions, not the routine.
              </p>
              <div className="mt-6 border-t border-teal-900/60 pt-5">
                <ul className="space-y-3">
                  {[
                    "One-tap pre-formatted WhatsApp chat triggers on mobile",
                    "Automated instant booking confirmation receipts",
                    "Automated reminder alerts 24 hours & 2 hours before appointments",
                    "Secure PDF test report delivery links with patient consent",
                    "Automated 6-month check-up recall prompts"
                  ].map((pt, i) => (
                    <li key={i} className="flex items-start gap-2.5 text-xs leading-5 text-teal-100/80">
                      <CheckCircle2 size={16} className="mt-0.5 shrink-0 text-teal-400" />
                      <span>{pt}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Who We Work With */}
      <section className="relative z-10 border-t border-teal-900/40 bg-gradient-to-b from-[#08161a] to-[#070e12] px-4 py-20">
        <div className="mx-auto max-w-6xl">
          <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
            <div>
              <p className="text-xs font-black uppercase tracking-[0.2em] text-teal-400">
                Clinical Verticals
              </p>
              <h2 className="mt-2 text-2xl font-bold text-white md:text-4xl">
                Who We Work With
              </h2>
            </div>
            <p className="max-w-md text-xs text-teal-200/60">
              Custom-calibrated workflows for practices across the healthcare spectrum.
            </p>
          </div>

          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { title: "Single-Doctor Clinics & Polyclinics", tag: "OPD Triage" },
              { title: "Dental Clinics & Dental Chains", tag: "Implants & Aligners" },
              { title: "Diagnostic Labs & Pathology Centres", tag: "Report Delivery" },
              { title: "Physiotherapy & Wellness Centres", tag: "Rehab Booking" },
              { title: "Skin, Hair & Cosmetic Clinics", tag: "Consultation Funnel" },
              { title: "Small & Mid-Size Hospitals", tag: "Multi-Specialty" },
              { title: "Healthtech & Telehealth Startups", tag: "App MVPs" },
              { title: "Diagnostic Imaging Centers", tag: "Slot Scheduling" }
            ].map((sector, i) => (
              <div
                key={i}
                className="group flex flex-col justify-between rounded-xl border border-teal-500/20 bg-slate-950/70 p-5 backdrop-blur-sm transition-all hover:border-teal-400/60 hover:-translate-y-1 hover:shadow-[0_8px_25px_rgba(20,184,166,0.15)]"
              >
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-teal-400/80">
                    {sector.tag}
                  </span>
                  <h4 className="mt-2 text-sm font-bold text-white group-hover:text-teal-300 transition-colors">
                    {sector.title}
                  </h4>
                </div>
                <div className="mt-4 flex items-center gap-1.5 text-xs text-teal-300 font-semibold">
                  <span>Custom Architecture</span>
                  <ArrowUpRight size={13} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Built With Privacy and Compliance in Mind */}
      <section className="relative z-10 px-4 py-20">
        <div className="mx-auto max-w-6xl rounded-3xl border border-teal-500/30 bg-gradient-to-b from-[#0b1e22]/90 to-[#071216]/90 p-7 md:p-12 shadow-[0_20px_70px_rgba(6,78,59,0.3)] backdrop-blur-md">
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-teal-400">
            <ShieldCheck size={18} />
            <span>Healthcare Data Ethics & Regulations</span>
          </div>
          <h2 className="mt-3 font-display text-2xl font-bold text-white md:text-4xl">
            Built With Privacy and Compliance in Mind
          </h2>
          <p className="mt-3 max-w-3xl text-sm leading-7 text-teal-100/75">
            Health data is sensitive, and the rules are real. We design systems with these in mind from day one:
          </p>

          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                icon: <Lock size={20} className="text-teal-300" />,
                title: "Data Protection & DPDP Act 2023",
                desc: "Patient data is collected only with clear consent and a stated purpose, in line with India's Digital Personal Data Protection Act, 2023."
              },
              {
                icon: <Database size={20} className="text-teal-300" />,
                title: "Security & Encryption Basics",
                desc: "Encrypted connections (SSL/HTTPS), role-based access for staff, secure cloud hosting and automated regular backups."
              },
              {
                icon: <FileText size={20} className="text-teal-300" />,
                title: "NMC Telemedicine Guidelines",
                desc: "Teleconsultation features follow the Telemedicine Practice Guidelines issued under the National Medical Commission framework."
              },
              {
                icon: <Layers size={20} className="text-teal-300" />,
                title: "Health Records & ABDM Readiness",
                desc: "Apps can be architected for interoperability and integration planning with the Ayushman Bharat Digital Mission (ABDM) ecosystem."
              },
              {
                icon: <TrendingUp size={20} className="text-teal-300" />,
                title: "Ethical Advertising Boundaries",
                desc: "We help you advertise within professional decorum and within Google and Meta health-ad policies, ensuring all claims are dignified."
              },
              {
                icon: <FileCheck2 size={20} className="text-teal-300" />,
                title: "Clear Professional Scope",
                desc: "PPR Global builds the technology. Your clinical and regulatory compliance remains your responsibility, and we recommend confirming specifics with your legal advisor."
              }
            ].map((box, i) => (
              <div
                key={i}
                className="rounded-xl border border-teal-500/20 bg-slate-950/60 p-5 backdrop-blur-sm transition-all hover:border-teal-400/40"
              >
                <div className="mb-3 inline-flex rounded-lg bg-teal-500/10 p-2">
                  {box.icon}
                </div>
                <h4 className="text-base font-bold text-white">{box.title}</h4>
                <p className="mt-2 text-xs leading-6 text-teal-100/70">{box.desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-8 rounded-xl border border-teal-500/20 bg-teal-950/30 p-4 text-xs leading-5 text-teal-200/70">
            <strong className="text-teal-300">Statutory Notice:</strong> PPR Global builds the technology. Your clinical, legal and regulatory compliance remains your responsibility, and we recommend confirming specifics with your legal advisor.
          </div>
        </div>
      </section>

      {/* How We Work */}
      <section className="relative z-10 border-t border-teal-900/40 bg-gradient-to-b from-[#081518] to-[#070d10] px-4 py-24">
        <div className="mx-auto max-w-6xl">
          <div className="text-center">
            <span className="text-xs font-black uppercase tracking-widest text-teal-400">
              Predictable Engineering Delivery
            </span>
            <h2 className="mt-3 font-display text-3xl font-bold text-white md:text-5xl">
              How We Work
            </h2>
            <p className="mx-auto mt-3 max-w-xl text-sm text-teal-100/70">
              Six deliberate stages from clinical discovery to launch and ongoing patient acquisition.
            </p>
          </div>

          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                step: "01",
                title: "Discovery call (free)",
                desc: "We learn about your practice, your patients, your current process and your goals."
              },
              {
                step: "02",
                title: "Plan and proposal",
                desc: "You get a clear scope, timeline and fixed pricing before any work begins."
              },
              {
                step: "03",
                title: "Design",
                desc: "You review layouts and flows for your site or app and give direct feedback."
              },
              {
                step: "04",
                title: "Build and test",
                desc: "We develop, test on real devices, and fix issues before launch."
              },
              {
                step: "05",
                title: "Launch and train",
                desc: "We go live and train your staff to use the dashboard with confidence."
              },
              {
                step: "06",
                title: "Grow",
                desc: "We support you with SEO, ads and WhatsApp campaigns, with monthly reporting you can understand."
              }
            ].map((s, idx) => (
              <div
                key={idx}
                className="group relative rounded-2xl border border-teal-500/20 bg-gradient-to-b from-[#091a1d] to-[#061114] p-7 transition-all hover:border-teal-400/50 hover:shadow-[0_8px_30px_rgba(20,184,166,0.15)]"
              >
                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-teal-400 to-emerald-400 font-display text-sm font-black text-slate-950 shadow-md">
                  {s.step}
                </span>
                <h3 className="mt-5 text-lg font-bold text-white group-hover:text-teal-300 transition-colors">
                  {s.title}
                </h3>
                <p className="mt-2 text-xs leading-6 text-teal-100/70">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why PPR Global */}
      <section className="relative z-10 px-4 py-20">
        <div className="mx-auto max-w-6xl">
          <div className="text-center">
            <span className="text-xs font-black uppercase tracking-widest text-teal-400">
              Agency Accountability
            </span>
            <h2 className="mt-3 font-display text-3xl font-bold text-white md:text-5xl">
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
                className="rounded-2xl border border-teal-500/20 bg-gradient-to-b from-teal-950/30 to-slate-950/70 p-6 backdrop-blur-sm"
              >
                <h3 className="text-lg font-bold text-white">{w.title}</h3>
                <p className="mt-3 text-xs leading-6 text-teal-100/70">{w.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Internal Cross-Links to Core Services */}
      <section className="relative z-10 border-t border-teal-900/40 bg-black/40 px-4 py-12">
        <div className="mx-auto max-w-6xl">
          <p className="text-xs font-black uppercase tracking-[0.2em] text-teal-400">
            Connected Practice Solutions
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
                className="rounded-full border border-teal-500/20 bg-teal-950/30 px-4 py-2 text-xs font-semibold text-teal-200 transition-colors hover:border-teal-400 hover:bg-teal-900/50 hover:text-white"
              >
                {link.label} →
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Frequently Asked Questions */}
      <section className="relative z-10 px-4 py-20">
        <div className="mx-auto max-w-6xl rounded-3xl border border-teal-500/25 bg-[#081519]/80 p-7 md:p-12 shadow-[0_20px_70px_rgba(0,0,0,0.5)] backdrop-blur-md">
          <span className="text-xs font-black uppercase tracking-widest text-teal-400">
            Clarity & Guidance
          </span>
          <h2 className="mt-3 font-display text-2xl font-bold text-white md:text-4xl">
            Frequently Asked Questions
          </h2>
          <div className="mt-8 grid gap-5 md:grid-cols-2">
            {healthcareFaqs.map((faq, idx) => (
              <div key={idx} className="rounded-2xl border border-teal-500/15 bg-slate-950/60 p-6 backdrop-blur-sm">
                <h3 className="font-semibold text-white">{faq.question}</h3>
                <p className="mt-3 text-xs leading-6 text-teal-100/70 md:text-sm">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lead Capture Form & Consultation Section */}
      <section id="healthcare-consultation" className="relative z-10 px-4 pb-24">
        <div className="mx-auto max-w-6xl rounded-3xl border border-teal-400/40 bg-gradient-to-b from-[#0a1e22] via-[#08171a] to-[#050e11] p-7 shadow-[0_25px_90px_rgba(20,184,166,0.25)] md:p-12">
          <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-center">
            <div>
              <p className="text-xs font-black uppercase tracking-[0.2em] text-teal-400">
                Tell Us About Your Practice
              </p>
              <h2 className="mt-2 font-display text-3xl font-semibold leading-tight text-white md:text-5xl">
                Ready to Fill Your Appointment Calendar?
              </h2>
              <p className="mt-3 max-w-2xl text-sm leading-6 text-teal-100/75 md:text-base md:leading-7">
                Tell us about your practice and we will suggest a website, app and lead plan
                that fits your goals and budget. The first consultation is completely free.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <a
                href="https://wa.me/919609079663?text=Hi%20Patit,%20I%20run%20a%20healthcare%20practice%20and%20want%20to%20know%20about%20a%20website%20or%20app."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-gradient-to-r from-teal-400 to-emerald-400 px-7 text-xs font-black uppercase tracking-[0.16em] text-slate-950 shadow-[0_8px_25px_rgba(45,212,191,0.35)] transition-transform hover:scale-105"
              >
                <span>WhatsApp Us</span>
                <ArrowUpRight size={15} />
              </a>
              <a
                href="tel:+919609079663"
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-teal-500/30 bg-teal-950/40 px-6 text-xs font-black uppercase tracking-[0.16em] text-teal-200 transition-colors hover:border-teal-400 hover:text-white"
              >
                <Phone size={15} />
                <span>Call Now: +91 9609079663</span>
              </a>
            </div>
          </div>

          <div className="mt-10 border-t border-teal-900/60 pt-8">
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
