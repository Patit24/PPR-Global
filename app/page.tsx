"use client";

import {
  ArrowUpRight,
  Building2,
  CalendarDays,
  Check,
  Dumbbell,
  MessageCircle,
  Send,
  Stethoscope,
  Store,
  Utensils,
  Volume2,
  VolumeX,
  X
} from "lucide-react";
import {
  AnimatePresence,
  motion,
  useMotionValue,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform
} from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import type { CSSProperties, MouseEvent } from "react";
import { useRef, useState } from "react";
import { CursorGlow } from "@/components/CursorGlow";
import { FloatingObjects } from "@/components/FloatingObjects";
import { MagneticButton } from "@/components/MagneticButton";
import { ProjectCard } from "@/components/ProjectCard";
import { Reveal } from "@/components/Reveal";
import {
  fieldOptions,
  navItems,
  pricing,
  projects,
  resourcePosts,
  services,
  stats
} from "@/lib/content";

const marquee = "WEBSITES • APPS • ADS • SEO • AUTOMATION • CRM • UI/UX • ";
const whatsappNowNumber = "919609079663";
const bookCallNumber = "919734019005";
type Project = (typeof projects)[number];

function whatsappLink(phone: string, message: string) {
  return `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
}

const businessTypes = [
  { name: "Restaurant", icon: Utensils },
  { name: "Dental", icon: Stethoscope },
  { name: "Gym", icon: Dumbbell },
  { name: "Real Estate", icon: Building2 },
  { name: "Interior", icon: Store },
  { name: "Other", icon: Building2 }
];

const buildNeeds = [
  { name: "Booking", cost: 1500 },
  { name: "Admin Panel", cost: 1500 },
  { name: "Payment", cost: 1500 },
  { name: "WhatsApp", cost: 1500 },
  { name: "SEO", cost: 1500 }
];

const calculatorBaseCost = 6000;

const processSteps = [
  {
    number: "01",
    title: "Strategy Call",
    detail: "We map your business, offer, pages, features, budget, and launch priority.",
    deliverable: "Scope + launch plan",
    duration: "Day 01"
  },
  {
    number: "02",
    title: "UX + Proposal",
    detail: "You get the structure, features, timeline, and clear estimated project cost.",
    deliverable: "Proposal + sitemap",
    duration: "Day 02"
  },
  {
    number: "03",
    title: "Design Sprint",
    detail: "Premium screens, copy blocks, motion direction, and conversion sections are prepared.",
    deliverable: "UI preview",
    duration: "Days 03-05"
  },
  {
    number: "04",
    title: "Build + Launch",
    detail: "Development, testing, WhatsApp/SEO setup, hosting support, and final handover.",
    deliverable: "Live website",
    duration: "Launch"
  }
];

export default function Home() {
  const shouldReduceMotion = useReducedMotion();
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [formError, setFormError] = useState("");
  const [isBannerSoundOn, setIsBannerSoundOn] = useState(false);
  const workRef = useRef<HTMLElement>(null);
  const bannerVideoRef = useRef<HTMLVideoElement>(null);
  const { scrollYProgress } = useScroll();
  const { scrollYProgress: workScrollProgress } = useScroll({
    target: workRef,
    offset: ["start start", "end end"]
  });
  const heroY = useTransform(scrollYProgress, [0, 0.22], [0, -54]);
  const heroMouseX = useMotionValue(0);
  const heroMouseY = useMotionValue(0);
  const heroSpringX = useSpring(heroMouseX, { stiffness: 120, damping: 22, mass: 0.4 });
  const heroSpringY = useSpring(heroMouseY, { stiffness: 120, damping: 22, mass: 0.4 });
  const markRotateY = useTransform(heroSpringX, [-1, 1], [-180, 180]);
  const markRotateX = useTransform(heroSpringY, [-1, 1], [130, -130]);
  const markRotateZ = useTransform(heroSpringX, [-1, 1], [-8, 8]);
  const markX = useTransform(heroSpringX, [-1, 1], [-18, 18]);
  const markY = useTransform(heroSpringY, [-1, 1], [-12, 12]);
  const cardX = useTransform(heroSpringX, [-1, 1], [10, -10]);
  const cardY = useTransform(heroSpringY, [-1, 1], [8, -8]);
  const dotX = useTransform(heroSpringX, [-1, 1], ["18%", "74%"]);
  const dotY = useTransform(heroSpringY, [-1, 1], ["72%", "28%"]);
  const workX = useTransform(workScrollProgress, [0, 1], ["0%", "-56%"]);
  const workProgressWidth = useTransform(workScrollProgress, [0, 1], ["8%", "100%"]);
  const handleContactEnquiry = (event: MouseEvent<HTMLButtonElement>) => {
    const form = event.currentTarget.form;
    if (!form) {
      return;
    }
    const formData = new FormData(form);
    const name = String(formData.get("name") || "").trim();
    const whatsapp = String(formData.get("whatsapp") || "").trim();
    const service = String(formData.get("service") || "").trim();

    if (!name || !whatsapp || !service) {
      setFormError("Please add your name, WhatsApp number, and service needed.");
      form.reportValidity();
      return;
    }

    setFormError("");
    const message = `Hi Patit, I want to send an enquiry to PPR Global.
Name: ${name}
Email: ${formData.get("email") || ""}
WhatsApp: ${whatsapp}
Service Needed: ${service}
Budget: ${formData.get("budget") || ""}
Message: ${formData.get("message") || ""}`;
    window.location.href = whatsappLink(whatsappNowNumber, message);
  };
  const toggleBannerSound = () => {
    const video = bannerVideoRef.current;
    if (!video) {
      return;
    }

    const nextSoundState = !isBannerSoundOn;
    video.muted = !nextSoundState;
    if (nextSoundState) {
      void video.play();
    }
    setIsBannerSoundOn(nextSoundState);
  };

  return (
    <>
      <CursorGlow />
      <FloatingObjects />
      <header className="fixed left-0 right-0 top-0 z-50 border-b border-black/10 bg-white/88 px-4 py-4 text-ink backdrop-blur-xl">
        <nav className="mx-auto flex max-w-7xl items-center justify-between">
          <a
            href="#top"
            className="font-display text-sm font-black uppercase tracking-[0.18em] outline-none focus-visible:ring-2 focus-visible:ring-acid md:text-base"
          >
            [PATIT ROY]
          </a>
          <div className="hidden items-center gap-7 md:flex">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="font-display text-sm font-black uppercase tracking-[0.2em] outline-none transition-colors hover:text-black/55 focus-visible:ring-2 focus-visible:ring-acid"
              >
                {item.label}
              </a>
            ))}
          </div>
          <a
            href={whatsappLink(
              whatsappNowNumber,
              "Hi Patit, I want to discuss a project with PPR Global."
            )}
            className="grid h-10 min-w-10 place-items-center rounded-full bg-acid px-4 text-xs font-black uppercase tracking-[0.16em] outline-none transition-transform hover:scale-[1.04] focus-visible:ring-2 focus-visible:ring-ink"
            aria-label="Chat on WhatsApp"
          >
            <span className="hidden md:inline">IND 2026</span>
            <MessageCircle className="md:hidden" size={18} aria-hidden="true" />
          </a>
        </nav>
      </header>

      <main id="top" className="relative">
        <section
          className="relative isolate min-h-[calc(100dvh-2rem)] overflow-hidden bg-[#f7f7f1] px-4 pb-5 pt-24 text-ink md:pt-32"
          onMouseMove={(event) => {
            const rect = event.currentTarget.getBoundingClientRect();
            heroMouseX.set(((event.clientX - rect.left) / rect.width - 0.5) * 2);
            heroMouseY.set(((event.clientY - rect.top) / rect.height - 0.5) * 2);
          }}
          onMouseLeave={() => {
            heroMouseX.set(0);
            heroMouseY.set(0);
          }}
        >
          <div
            aria-hidden="true"
            className="absolute inset-0 -z-10 opacity-75"
            style={{
              backgroundImage:
                "radial-gradient(circle, rgba(5,5,5,0.12) 1px, transparent 1px)",
              backgroundSize: "18px 18px"
            }}
          />
          <motion.div
            aria-hidden="true"
            className="absolute z-10 h-5 w-5 rounded-full bg-acid shadow-[0_0_42px_rgba(184,255,61,0.72)]"
            style={{ left: dotX, top: dotY }}
            animate={shouldReduceMotion ? undefined : { scale: [1, 1.18, 1] }}
            transition={{ duration: 2.8, repeat: Infinity, ease: "linear" }}
          />
          <motion.div
            className="relative mx-auto grid min-h-[calc(100dvh-9rem)] w-full max-w-7xl grid-rows-[auto_1fr] gap-4 md:min-h-[calc(100dvh-8.5rem)]"
            style={{ y: shouldReduceMotion ? undefined : heroY }}
          >
            <div className="relative z-20 grid gap-5 md:grid-cols-[minmax(0,0.72fr)_0.28fr]">
              <div className="max-w-[52rem]">
                <p className="mb-3 font-display text-sm font-black uppercase tracking-[0.2em] text-black/48">
                  Founder of PPR Global
                </p>
                <h1 className="font-display text-4xl font-semibold uppercase leading-[0.94] tracking-normal text-ink md:text-5xl lg:text-6xl">
                  Website & app development for Kolkata businesses.
                </h1>
                <p className="mt-5 max-w-xl text-base font-semibold leading-7 text-black/62 md:text-lg">
                  Affordable websites, apps, automation, ads funnels, CRM systems, and
                  conversion-ready software delivered fast from Kolkata, West Bengal, for local
                  and global brands.
                </p>
              </div>
              <p
                className="justify-self-start text-left font-display text-sm font-black uppercase leading-[1.2] tracking-[0.15em] md:max-w-xs md:justify-self-end md:text-right md:text-base"
              >
                [Websites / Apps]
                <br />
                [Automation / CRM]
                <br />
                [Ads / SEO / UI/UX]
              </p>
            </div>

            <div className="relative z-10 grid min-h-[25rem] items-center py-4 md:min-h-[29rem] xl:min-h-[31rem]">
              <motion.div
                className="mx-auto grid w-full max-w-[720px] place-items-center md:max-w-[760px]"
                style={{
                  x: shouldReduceMotion ? undefined : markX,
                  y: shouldReduceMotion ? undefined : markY,
                  rotateX: shouldReduceMotion ? undefined : markRotateX,
                  rotateY: shouldReduceMotion ? undefined : markRotateY,
                  rotateZ: shouldReduceMotion ? undefined : markRotateZ,
                  transformPerspective: 900,
                  transformStyle: "preserve-3d",
                  willChange: "transform"
                }}
                initial={false}
              >
                <div className="hero-mark relative aspect-[1.05] w-[62vw] max-w-[410px] md:w-[46vw] md:max-w-[470px] xl:max-w-[520px]">
                  <span className="absolute left-[5%] top-[5%]">P</span>
                  <span className="absolute left-[36%] top-[23%]">P</span>
                  <span className="absolute left-[25%] top-[48%]">R</span>
                </div>
              </motion.div>

              <motion.div
                className="absolute bottom-0 left-0 hidden w-64 rounded-md border border-black/16 bg-[#f7f7f1] p-3 shadow-[0_18px_70px_rgba(0,0,0,0.13)] md:block"
                style={{ x: shouldReduceMotion ? undefined : cardX, y: shouldReduceMotion ? undefined : cardY }}
                initial={shouldReduceMotion ? false : { opacity: 0, x: -24, filter: "blur(6px)" }}
                animate={shouldReduceMotion ? undefined : { opacity: 1, x: 0, filter: "blur(0px)" }}
                transition={{ type: "spring", duration: 0.72, bounce: 0, delay: 0.24 }}
              >
                <div className="mb-2 flex items-center justify-between font-display text-sm font-black uppercase tracking-[0.15em]">
                  <span>Launch Sprint</span>
                  <span>[2026]</span>
                </div>
                <div className="image-grain relative aspect-[1.2] overflow-hidden rounded-sm bg-black">
                  <video
                    ref={bannerVideoRef}
                    className="h-full w-full object-cover"
                    autoPlay
                    muted={!isBannerSoundOn}
                    loop
                    playsInline
                    preload="metadata"
                    aria-label="Patit Roy banner video preview"
                  >
                    <source src="/videos/patit-banner-card.mp4" media="(min-width: 768px)" type="video/mp4" />
                  </video>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/34 via-transparent to-black/10" />
                  <div className="absolute inset-4 rounded-sm border border-white/22" />
                  <button
                    type="button"
                    onClick={toggleBannerSound}
                    className="absolute right-3 top-3 inline-flex min-h-9 items-center gap-2 rounded-full bg-black/72 px-3 py-2 text-[10px] font-black uppercase tracking-[0.14em] text-white shadow-[0_10px_30px_rgba(0,0,0,0.28)] outline-none backdrop-blur-md transition-colors hover:bg-black focus-visible:ring-2 focus-visible:ring-acid"
                    aria-label={isBannerSoundOn ? "Turn banner sound off" : "Turn banner sound on"}
                  >
                    {isBannerSoundOn ? (
                      <Volume2 size={14} aria-hidden="true" />
                    ) : (
                      <VolumeX size={14} aria-hidden="true" />
                    )}
                    {isBannerSoundOn ? "Sound On" : "Sound Off"}
                  </button>
                </div>
                <a
                  href="#work"
                  className="mt-3 flex min-h-10 items-center justify-between font-display text-base font-black uppercase tracking-[0.12em] outline-none focus-visible:ring-2 focus-visible:ring-ink"
                >
                  [Watch] <ArrowUpRight size={20} aria-hidden="true" />
                </a>
              </motion.div>

              <motion.a
                href={whatsappLink(bookCallNumber, "Hi Patit, I want to book a call for my project.")}
                className="absolute bottom-0 right-0 hidden min-h-16 items-center gap-4 rounded-md bg-black px-4 py-3 font-display text-base font-black uppercase tracking-[0.18em] text-white outline-none focus-visible:ring-2 focus-visible:ring-acid md:inline-flex"
                initial={shouldReduceMotion ? false : { opacity: 0, x: 24, filter: "blur(6px)" }}
                animate={shouldReduceMotion ? undefined : { opacity: 1, x: 0, filter: "blur(0px)" }}
                transition={{ type: "spring", duration: 0.72, bounce: 0, delay: 0.28 }}
                whileHover={shouldReduceMotion ? undefined : { y: -4 }}
                whileTap={{ scale: 0.98 }}
              >
                <span className="grid h-11 w-11 place-items-center rounded-sm bg-white text-ink">
                  <MessageCircle size={20} aria-hidden="true" />
                </span>
                Book a Call
              </motion.a>

              <motion.div
                className="absolute right-0 top-1/2 hidden -translate-y-1/2 bg-black px-4 py-7 font-display text-sm font-black uppercase tracking-[0.18em] text-white [writing-mode:vertical-rl] md:block"
                initial={shouldReduceMotion ? false : { opacity: 0, x: 20 }}
                animate={shouldReduceMotion ? undefined : { opacity: 1, x: 0 }}
                transition={{ type: "spring", duration: 0.58, bounce: 0, delay: 0.34 }}
              >
                PPR Global
              </motion.div>
            </div>

            <motion.a
              href="#work"
              className="absolute bottom-0 left-1/2 -translate-x-1/2 font-display text-sm font-black uppercase tracking-[0.25em] outline-none focus-visible:ring-2 focus-visible:ring-ink"
              animate={shouldReduceMotion ? undefined : { y: [0, 7, 0] }}
              transition={{ duration: 1.8, repeat: Infinity, ease: "linear" }}
            >
              Scroll ↓
            </motion.a>
          </motion.div>
        </section>

        <section className="defer-section overflow-hidden border-y border-white/10 bg-white/[0.035] py-5">
          <motion.div
            className="flex w-max gap-8 whitespace-nowrap font-display text-3xl font-semibold uppercase text-white/82 md:text-5xl"
            animate={shouldReduceMotion ? undefined : { x: ["0%", "-50%"] }}
            transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
          >
            <span>{marquee.repeat(4)}</span>
            <span aria-hidden="true">{marquee.repeat(4)}</span>
          </motion.div>
        </section>

        <section id="work" ref={workRef} className="defer-section relative scroll-mt-28 px-4 py-20 md:h-[300vh] md:pb-0 md:pt-16">
          <div className="mx-auto max-w-7xl md:sticky md:top-20 md:flex md:h-[calc(100dvh-5rem)] md:flex-col md:justify-center md:overflow-hidden md:py-3">
            <Reveal className="mb-8 flex flex-col justify-between gap-5 md:mb-5 md:flex-row md:items-end">
              <div>
                <p className="mb-3 text-sm font-semibold uppercase tracking-[0.22em] text-acid">
                  Featured Work
                </p>
                <h2 className="max-w-3xl font-display text-5xl font-semibold leading-none text-white md:max-w-[44rem] md:text-4xl xl:text-5xl">
                  Website case studies for Kolkata, healthcare, interior, automation, and app projects.
                </h2>
              </div>
              <div className="max-w-[26rem]">
                <p className="text-sm leading-6 text-white/62 md:text-base md:leading-7">
                  Scroll vertically and the case studies move horizontally, giving the portfolio
                  a more cinematic agency showcase.
                </p>
                <div className="mt-5 h-1 overflow-hidden rounded-full bg-white/10">
                  <motion.div
                    className="h-full rounded-full bg-acid"
                    style={{ width: shouldReduceMotion ? "100%" : workProgressWidth }}
                  />
                </div>
              </div>
            </Reveal>
            <motion.div
              className="project-track -mx-4 flex gap-5 overflow-x-auto px-4 pb-4 md:mx-0 md:w-max md:overflow-visible md:px-0 md:pb-0 md:pr-[35vw]"
              style={{ x: shouldReduceMotion ? undefined : workX, willChange: "transform" }}
            >
              {projects.map((project, index) => (
                <ProjectCard
                  key={project.title}
                  project={project}
                  index={index}
                  onOpenCaseStudy={() => setSelectedProject(project)}
                />
              ))}
            </motion.div>
          </div>
        </section>

        <section id="services" className="defer-section px-4 py-24">
          <div className="mx-auto max-w-7xl">
            <Reveal className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr]">
              <div>
                <p className="mb-4 text-sm font-semibold uppercase tracking-[0.22em] text-acid">
                  Services
                </p>
                <h2 className="font-display text-5xl font-semibold leading-none text-white md:text-7xl">
                  Website development, mobile apps & automation for Kolkata businesses.
                </h2>
              </div>
              <div className="grid gap-3 sm:grid-cols-2">
                {services.map((service, index) => {
                  const Icon = service.icon;
                  return (
                    <Reveal
                      key={service.name}
                      delay={index * 0.025}
                      className="group relative min-h-28 overflow-hidden rounded-lg bg-white/[0.045] p-5 shadow-[inset_0_0_0_1px_rgba(255,255,255,0.1)]"
                    >
                      <motion.div
                        aria-hidden="true"
                        className="absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                        style={{
                          background:
                            "radial-gradient(circle at 30% 20%, rgba(184,255,61,0.18), transparent 35%), linear-gradient(135deg, rgba(255,255,255,0.08), transparent)"
                        }}
                      />
                      <Link
                        href={`/services/${service.slug}`}
                        className="relative flex h-full items-center gap-4 outline-none focus-visible:ring-2 focus-visible:ring-acid"
                        onClick={(event) => event.stopPropagation()}
                      >
                      <motion.div
                        className="relative flex h-full items-center gap-4"
                        whileHover={shouldReduceMotion ? undefined : { x: 8 }}
                        transition={{ type: "spring", duration: 0.35, bounce: 0 }}
                      >
                        <motion.span
                          className="grid h-12 w-12 shrink-0 place-items-center rounded-full bg-acid/12 text-acid shadow-[inset_0_0_0_1px_rgba(184,255,61,0.22)]"
                          whileHover={shouldReduceMotion ? undefined : { rotate: 12, scale: 1.08 }}
                          transition={{ type: "spring", duration: 0.35, bounce: 0.12 }}
                        >
                          <Icon size={21} aria-hidden="true" />
                        </motion.span>
                        <div>
                          <span className="text-xs font-bold uppercase tracking-[0.2em] text-white/36">
                            {String(index + 1).padStart(2, "0")}
                          </span>
                          <p className="mt-2 text-lg font-semibold text-white">{service.name}</p>
                        </div>
                      </motion.div>
                      </Link>
                      <ArrowUpRight
                        className="absolute right-5 top-5 text-white/20 transition-colors duration-200 group-hover:text-acid"
                        size={18}
                        aria-hidden="true"
                      />
                    </Reveal>
                  );
                })}
              </div>
            </Reveal>
          </div>
        </section>

        <section className="defer-section relative overflow-hidden px-4 py-24">
          <motion.div
            aria-hidden="true"
            className="absolute left-1/2 top-24 h-72 w-[min(54rem,80vw)] -translate-x-1/2 rounded-full bg-acid/10 blur-3xl"
            animate={shouldReduceMotion ? undefined : { opacity: [0.45, 0.8, 0.45], scale: [0.96, 1.04, 0.96] }}
            transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut" }}
          />
          <div className="mx-auto max-w-7xl">
            <Reveal className="relative mb-10 flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
              <div>
                <p className="mb-4 text-sm font-semibold uppercase tracking-[0.22em] text-acid">
                  Pricing
                </p>
                <h2 className="max-w-4xl font-display text-5xl font-semibold leading-none text-white md:text-7xl">
                  Premium delivery. Clear entry pricing.
                </h2>
              </div>
              <div className="max-w-sm rounded-lg bg-white/[0.045] p-4 shadow-[inset_0_0_0_1px_rgba(255,255,255,0.1)]">
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-white/42">
                  Built for speed
                </p>
                <p className="mt-2 text-base leading-7 text-white/68">
                  Transparent starting prices for sharp launches, upgrade-ready systems, and
                  premium motion builds.
                </p>
              </div>
            </Reveal>
            <div className="relative grid gap-4 lg:grid-cols-12">
              {pricing.map((plan, index) => {
                const featured = index === 3;
                const features =
                  index === 4
                    ? ["Feature planning", "Native-ready UX", "API integration"]
                    : index === 3
                      ? ["Framer-style motion", "3D interaction", "Premium scroll effects"]
                      : index === 2
                        ? ["Dynamic pages", "Forms + data", "Growth-ready setup"]
                        : index === 1
                          ? ["Admin control", "Editable content", "Secure dashboard"]
                          : ["Fast delivery", "Responsive layout", "SEO basics"];

                return (
                  <Reveal
                    key={plan.name}
                    delay={index * 0.04}
                    className={`group relative overflow-hidden rounded-lg ${
                      featured ? "lg:col-span-4 lg:row-span-2" : "lg:col-span-4"
                    }`}
                  >
                    <motion.div
                      className={`relative h-full overflow-hidden rounded-lg p-6 shadow-[inset_0_0_0_1px_rgba(255,255,255,0.12)] ${
                        featured
                          ? "bg-acid text-ink"
                          : "bg-[linear-gradient(145deg,rgba(255,255,255,0.085),rgba(255,255,255,0.026))] text-white"
                      }`}
                      whileHover={shouldReduceMotion ? undefined : { y: -8 }}
                      transition={{ type: "spring", duration: 0.42, bounce: 0 }}
                    >
                      <motion.div
                        aria-hidden="true"
                        className={`absolute inset-x-0 top-0 h-1 ${featured ? "bg-ink" : "bg-acid"}`}
                        initial={shouldReduceMotion ? false : { scaleX: 0 }}
                        whileInView={shouldReduceMotion ? undefined : { scaleX: 1 }}
                        viewport={{ once: true }}
                        transition={{ type: "spring", duration: 0.78, bounce: 0, delay: index * 0.05 }}
                        style={{ transformOrigin: "left" }}
                      />
                      <motion.div
                        aria-hidden="true"
                        className={`absolute -right-10 -top-10 h-32 w-32 rounded-full blur-2xl ${
                          featured ? "bg-white/35" : "bg-acid/12"
                        }`}
                        animate={
                          shouldReduceMotion ? undefined : { scale: [1, 1.15, 1], opacity: [0.45, 0.8, 0.45] }
                        }
                        transition={{ duration: 4 + index * 0.25, repeat: Infinity, ease: "easeInOut" }}
                      />
                      <div className="relative flex h-full flex-col">
                        <div className="mb-7 flex items-start justify-between gap-4">
                          <div>
                            <span
                              className={`text-xs font-black uppercase tracking-[0.18em] ${
                                featured ? "text-black/54" : "text-acid"
                              }`}
                            >
                              {featured ? "Most premium" : `Plan 0${index + 1}`}
                            </span>
                            <h3
                              className={`mt-3 text-2xl font-semibold leading-tight ${
                                featured ? "text-ink" : "text-white"
                              }`}
                            >
                              {plan.name}
                            </h3>
                          </div>
                          <span
                            className={`grid h-11 w-11 shrink-0 place-items-center rounded-full ${
                              featured ? "bg-ink text-acid" : "bg-acid/12 text-acid"
                            }`}
                          >
                            <ArrowUpRight size={18} aria-hidden="true" />
                          </span>
                        </div>
                        <p
                          className={`font-display text-4xl font-semibold leading-none md:text-5xl ${
                            featured ? "text-ink" : "text-acid"
                          }`}
                        >
                          {plan.price}
                        </p>
                        <p className={`mt-5 text-sm leading-6 ${featured ? "text-black/66" : "text-white/62"}`}>
                          {plan.detail}
                        </p>
                        <div className="mt-7 grid gap-2">
                          {features.map((feature) => (
                            <div
                              key={feature}
                              className={`flex min-h-10 items-center gap-3 rounded-md px-3 text-sm ${
                                featured ? "bg-black/8 text-black/72" : "bg-white/[0.055] text-white/70"
                              }`}
                            >
                              <Check size={16} className={featured ? "text-ink" : "text-acid"} aria-hidden="true" />
                              <span>{feature}</span>
                            </div>
                          ))}
                        </div>
                        <a
                          href={whatsappLink(
                            whatsappNowNumber,
                            `Hi Patit, I want to start a project with PPR Global.
Service: ${plan.name}
Starting Price: ${plan.price}
Please send me a proposal.`
                          )}
                          className={`mt-8 inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-full px-5 text-xs font-black uppercase tracking-[0.15em] outline-none transition-transform hover:scale-[1.02] focus-visible:ring-2 ${
                            featured
                              ? "bg-ink text-white focus-visible:ring-ink"
                              : "bg-white text-ink focus-visible:ring-acid"
                          }`}
                        >
                          Start Project <ArrowUpRight size={15} aria-hidden="true" />
                        </a>
                      </div>
                    </motion.div>
                  </Reveal>
                );
              })}
            </div>
          </div>
        </section>

        <ProjectBuilderSection />

        <section id="about" className="defer-section px-4 py-24 md:py-32">
          <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
            <Reveal>
              <p className="mb-4 text-sm font-semibold uppercase tracking-[0.22em] text-acid">
                About
              </p>
                <h2 className="font-display text-5xl font-semibold leading-none text-white md:text-7xl">
                Kolkata website development company led by Patit Roy.
              </h2>
            </Reveal>
            <Reveal className="rounded-lg bg-white/[0.045] p-7 shadow-[inset_0_0_0_1px_rgba(255,255,255,0.12)] md:p-10">
              <p className="text-xl leading-9 text-white/78">
                I&apos;m Patit Roy, founder of PPR Global. We help businesses turn ideas into
                high-performing websites, mobile apps, automation systems, and marketing
                funnels. Our team works with Kolkata, West Bengal, and global clients across
                industries, delivering premium digital solutions at affordable cost.
              </p>
              <div className="mt-8 grid gap-3 sm:grid-cols-2">
                {["Fast delivery", "Modern UI", "Global collaboration", "Growth-ready systems"].map(
                  (item) => (
                    <div key={item} className="flex items-center gap-3 text-white/74">
                      <Check className="text-acid" size={18} aria-hidden="true" />
                      <span>{item}</span>
                    </div>
                  )
                )}
              </div>
            </Reveal>
          </div>
        </section>

        <section className="defer-section px-4 py-20">
          <div className="mx-auto grid max-w-7xl gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {stats.map((stat, index) => (
              <Reveal
                key={stat.label}
                delay={index * 0.04}
                className="rounded-lg bg-acid p-6 text-ink"
              >
                <p className="font-display text-5xl font-semibold leading-none">{stat.value}</p>
                <p className="mt-4 text-sm font-bold uppercase tracking-[0.16em]">{stat.label}</p>
              </Reveal>
            ))}
          </div>
        </section>

        <section id="resources" className="defer-section px-4 py-24">
          <div className="mx-auto max-w-7xl">
            <Reveal className="mb-10 flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
              <div>
                <p className="mb-4 text-sm font-semibold uppercase tracking-[0.22em] text-acid">
                  Resources
                </p>
                <h2 className="max-w-4xl font-display text-5xl font-semibold leading-none text-white md:text-7xl">
                  Practical guides for Kolkata businesses planning digital growth.
                </h2>
              </div>
              <p className="max-w-md text-base leading-7 text-white/62">
                Short explainers on pricing, WhatsApp CRM, and local SEO so buyers can understand
                what they need before requesting a proposal.
              </p>
            </Reveal>
            <div className="grid gap-4 md:grid-cols-3">
              {resourcePosts.map((post, index) => (
                <Reveal
                  key={post.slug}
                  delay={index * 0.04}
                  className="group rounded-lg bg-white/[0.055] p-5 shadow-[inset_0_0_0_1px_rgba(255,255,255,0.12)]"
                >
                  <Link href={`/resources/${post.slug}`} className="block outline-none focus-visible:ring-2 focus-visible:ring-acid">
                    <p className="text-xs font-black uppercase tracking-[0.18em] text-acid">
                      Guide 0{index + 1}
                    </p>
                    <h3 className="mt-4 text-2xl font-semibold leading-tight text-white">
                      {post.title}
                    </h3>
                    <p className="mt-4 text-sm leading-6 text-white/62">{post.description}</p>
                    <span className="mt-6 inline-flex min-h-10 items-center gap-2 text-xs font-black uppercase tracking-[0.16em] text-acid transition-colors group-hover:text-white">
                      Read Guide <ArrowUpRight size={15} aria-hidden="true" />
                    </span>
                  </Link>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="defer-section px-4 py-24 md:py-32">
          <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.9fr_1.1fr]">
            <Reveal className="lg:sticky lg:top-28 lg:self-start">
              <p className="mb-4 text-sm font-semibold uppercase tracking-[0.22em] text-acid">
                Contact
              </p>
              <h2 className="font-display text-6xl font-semibold leading-none text-white md:text-8xl">
                Have a project in mind?
              </h2>
              <p className="mt-7 max-w-xl font-display text-3xl font-semibold leading-tight text-white/74 md:text-5xl">
                Let&apos;s build something powerful.
              </p>
              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <MagneticButton
                  href={whatsappLink(
                    whatsappNowNumber,
                    "Hi Patit, I want to discuss a project with PPR Global."
                  )}
                >
                  <MessageCircle className="mr-2" size={17} aria-hidden="true" />
                  WhatsApp Now
                </MagneticButton>
                <MagneticButton
                  href={whatsappLink(bookCallNumber, "Hi Patit, I want to book a call for my project.")}
                  variant="secondary"
                >
                  <CalendarDays className="mr-2" size={17} aria-hidden="true" />
                  Book a Call
                </MagneticButton>
              </div>
            </Reveal>

            <Reveal>
              <form className="rounded-lg bg-white/[0.055] p-5 shadow-[inset_0_0_0_1px_rgba(255,255,255,0.12)] md:p-8">
                <div className="grid gap-5 md:grid-cols-2">
                  <Field id="name" label="Name" placeholder="Your name" required />
                  <Field id="email" label="Email" type="email" placeholder="you@example.com" />
                  <Field
                    id="whatsapp"
                    label="WhatsApp Number"
                    type="tel"
                    placeholder="+91 98765 43210"
                    required
                  />
                  <Select id="service" label="Service Needed" options={fieldOptions.services} required />
                  <Select id="budget" label="Budget" options={fieldOptions.budgets} />
                  <div className="md:col-span-2">
                    <label
                      htmlFor="message"
                      className="mb-2 block text-sm font-semibold text-white/78"
                    >
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={6}
                      placeholder="Tell us what you want to build..."
                      className="w-full resize-y rounded-md bg-black/34 px-4 py-3 text-base text-white outline-none shadow-[inset_0_0_0_1px_rgba(255,255,255,0.12)] transition-shadow placeholder:text-white/34 focus:shadow-[inset_0_0_0_2px_#b8ff3d]"
                    />
                  </div>
                </div>
                {formError ? (
                  <p className="mt-4 rounded-md bg-acid/12 px-4 py-3 text-sm font-semibold text-acid">
                    {formError}
                  </p>
                ) : (
                  <p className="mt-4 text-sm text-white/44">
                    This sends your enquiry directly on WhatsApp with the selected details.
                  </p>
                )}
                <button
                  type="button"
                  onClick={handleContactEnquiry}
                  className="mt-6 inline-flex min-h-12 w-full items-center justify-center rounded-full bg-acid px-6 py-3 text-sm font-bold uppercase tracking-[0.16em] text-ink outline-none transition-transform hover:scale-[1.01] focus-visible:ring-2 focus-visible:ring-acid focus-visible:ring-offset-2 focus-visible:ring-offset-ink sm:w-auto"
                >
                  <Send className="mr-2" size={17} aria-hidden="true" />
                  Send Enquiry
                </button>
              </form>
            </Reveal>
          </div>
        </section>
        <footer className="defer-section border-t border-white/10 px-4 py-10">
          <div className="mx-auto grid max-w-7xl gap-8 text-sm text-white/58 md:grid-cols-[1.2fr_0.8fr_0.8fr]">
            <div>
              <p className="font-display text-lg font-black uppercase tracking-[0.18em] text-white">
                PPR Global
              </p>
              <p className="mt-3 max-w-xl leading-7">
                Website development company in Kolkata, West Bengal, serving Indian SMBs and
                global clients with websites, apps, WhatsApp automation, ads, SEO/GEO, and CRM systems.
              </p>
            </div>
            <div>
              <p className="font-semibold uppercase tracking-[0.16em] text-acid">Service Area</p>
              <p className="mt-3 leading-7">Kolkata, West Bengal, India</p>
              <p className="leading-7">Remote projects worldwide</p>
            </div>
            <div>
              <p className="font-semibold uppercase tracking-[0.16em] text-acid">Contact</p>
              <a className="mt-3 block leading-7 hover:text-white" href="tel:+919609079663">
                +91 96090 79663
              </a>
              <a className="leading-7 hover:text-white" href="tel:+919734019005">
                +91 97340 19005
              </a>
            </div>
          </div>
        </footer>
      </main>
      <AnimatePresence>
        {selectedProject ? (
          <CaseStudyModal
            project={selectedProject}
            shouldReduceMotion={Boolean(shouldReduceMotion)}
            onClose={() => setSelectedProject(null)}
          />
        ) : null}
      </AnimatePresence>
    </>
  );
}

function CaseStudyModal({
  project,
  onClose,
  shouldReduceMotion
}: {
  project: Project;
  onClose: () => void;
  shouldReduceMotion: boolean;
}) {
  const caseStudy = project.caseStudy;
  const gallery =
    "gallery" in caseStudy && Array.isArray(caseStudy.gallery) ? caseStudy.gallery : [];
  const mainImageSrc = "imageSrc" in project ? project.imageSrc : undefined;
  const accentStyle = { "--case-accent": caseStudy.accent } as CSSProperties;

  return (
    <motion.div
      role="dialog"
      aria-modal="true"
      aria-labelledby="case-study-title"
      className="fixed inset-0 z-[80] overflow-y-auto bg-black/82 px-3 py-4 text-white backdrop-blur-xl md:px-6 md:py-6"
      initial={shouldReduceMotion ? false : { opacity: 0 }}
      animate={shouldReduceMotion ? undefined : { opacity: 1 }}
      exit={shouldReduceMotion ? undefined : { opacity: 0 }}
    >
      <button
        type="button"
        className="fixed inset-0 z-0 cursor-default"
        aria-label="Close case study"
        onClick={onClose}
      />
      <motion.article
        className="relative z-10 mx-auto min-h-[calc(100dvh-2rem)] max-w-7xl overflow-hidden rounded-lg border border-white/12 bg-[#f6f5ef] text-ink shadow-[0_30px_120px_rgba(0,0,0,0.45)]"
        initial={shouldReduceMotion ? false : { y: 34, scale: 0.985, filter: "blur(10px)" }}
        animate={shouldReduceMotion ? undefined : { y: 0, scale: 1, filter: "blur(0px)" }}
        exit={shouldReduceMotion ? undefined : { y: 20, scale: 0.99, filter: "blur(8px)" }}
        transition={{ type: "spring", duration: 0.62, bounce: 0 }}
      >
        <div className="sticky top-0 z-20 flex items-center justify-between border-b border-black/10 bg-[#f6f5ef]/90 px-4 py-4 backdrop-blur-xl md:px-6">
          <p className="font-display text-sm font-black uppercase tracking-[0.18em]">
            [{project.title}]
          </p>
          <button
            type="button"
            onClick={onClose}
            className="grid h-11 w-11 place-items-center rounded-full bg-black text-white outline-none transition-transform hover:scale-105 focus-visible:ring-2 focus-visible:ring-acid"
            aria-label="Close interior case study"
          >
            <X size={20} aria-hidden="true" />
          </button>
        </div>

        <div className="grid gap-8 px-4 py-8 md:px-8 md:py-10 lg:grid-cols-[0.82fr_1.18fr]">
          <div className="lg:sticky lg:top-24 lg:self-start">
            <p className="mb-4 font-display text-sm font-black uppercase tracking-[0.22em] text-black/45">
              {caseStudy.category}
            </p>
            <h2
              id="case-study-title"
              className="font-display text-5xl font-semibold leading-none md:text-7xl"
            >
              {caseStudy.headline}
            </h2>
            <p className="mt-6 text-lg leading-8 text-black/68">
              {caseStudy.summary}
            </p>
            <div className="mt-8 grid gap-3 sm:grid-cols-3 lg:grid-cols-1">
              {[
                ["Year", project.year],
                ["Scope", caseStudy.scope],
                ["Timeline", caseStudy.duration]
              ].map(([label, value]) => (
                <motion.div
                  key={label}
                  className="rounded-md border border-black/10 bg-white/60 p-4"
                  whileHover={shouldReduceMotion ? undefined : { x: 6 }}
                  transition={{ type: "spring", duration: 0.32, bounce: 0 }}
                >
                  <p className="text-xs font-black uppercase tracking-[0.18em] text-black/42">
                    {label}
                  </p>
                  <p className="mt-2 font-display text-xl font-semibold">{value}</p>
                </motion.div>
              ))}
            </div>
            <a
              href="#contact"
              onClick={onClose}
              className="mt-8 inline-flex min-h-12 items-center gap-2 rounded-full bg-black px-5 text-sm font-black uppercase tracking-[0.16em] text-white outline-none transition-transform hover:scale-[1.03] focus-visible:ring-2 focus-visible:ring-acid"
            >
              Build Similar <ArrowUpRight size={16} aria-hidden="true" />
            </a>
          </div>

          <div className="space-y-5">
            <motion.div
              className="image-grain relative aspect-[16/11] overflow-hidden rounded-lg bg-black shadow-[0_20px_70px_rgba(0,0,0,0.18)]"
              initial={shouldReduceMotion ? false : { opacity: 0, y: 20 }}
              animate={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
              transition={{ type: "spring", duration: 0.58, bounce: 0, delay: 0.08 }}
              style={mainImageSrc ? undefined : { background: project.image }}
            >
              {mainImageSrc ? (
                <Image
                  src={mainImageSrc}
                  alt={`${project.title} full case-study preview`}
                  fill
                  sizes="(min-width: 1024px) 58vw, 100vw"
                  className="object-contain p-3"
                  priority
                />
              ) : (
                <div className="absolute inset-0 grid place-items-center p-6">
                  <div className="w-full max-w-xl rounded-lg border border-white/18 bg-black/38 p-5 text-white backdrop-blur-md">
                    <div className="mb-5 flex items-center justify-between">
                      <span className="font-display text-sm font-black uppercase tracking-[0.18em]">
                        Live Preview
                      </span>
                      <span className="rounded-full bg-white/10 px-3 py-1 text-xs">
                        {project.year}
                      </span>
                    </div>
                    <div className="grid gap-3">
                      {caseStudy.highlights.slice(0, 4).map((item, index) => (
                        <div
                          key={item}
                          className="flex items-center justify-between rounded-md bg-white/8 p-3"
                        >
                          <span>{item}</span>
                          <span className="font-display text-xl text-acid">
                            {String(index + 1).padStart(2, "0")}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}
              <div
                className="absolute left-4 top-4 rounded-full px-3 py-1 text-xs font-black uppercase tracking-[0.16em] text-ink"
                style={{ backgroundColor: caseStudy.accent }}
              >
                Featured project
              </div>
            </motion.div>

            {gallery.length ? (
              <div className="grid gap-4 md:grid-cols-2">
                {gallery.map((item, index) => (
                <motion.figure
                  key={item.src}
                  className="group overflow-hidden rounded-lg border border-black/10 bg-white p-2"
                  initial={shouldReduceMotion ? false : { opacity: 0, y: 24 }}
                  whileInView={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{
                    type: "spring",
                    duration: 0.58,
                    bounce: 0,
                    delay: index * 0.055
                  }}
                >
                  <div className="relative aspect-[4/3] overflow-hidden rounded-md bg-black/8">
                    <Image
                      src={item.src}
                      alt={`${item.title} interior website screen`}
                      fill
                      sizes="(min-width: 768px) 28vw, 100vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                      style={{ objectPosition: item.position }}
                    />
                  </div>
                  <figcaption className="flex items-center justify-between gap-3 px-2 py-3 font-display text-sm font-black uppercase tracking-[0.14em]">
                    <span>{item.title}</span>
                    <span className="text-black/42">[{item.label}]</span>
                  </figcaption>
                </motion.figure>
                ))}
              </div>
            ) : null}

            <div
              className="grid gap-4 rounded-lg border border-black/10 bg-white/70 p-4 md:grid-cols-3"
              style={accentStyle}
            >
              <div className="md:col-span-2">
                <p className="mb-3 text-xs font-black uppercase tracking-[0.18em] text-black/42">
                  Key Highlights
                </p>
                <div className="grid gap-2 sm:grid-cols-2">
                  {caseStudy.highlights.map((highlight) => (
                    <div key={highlight} className="flex items-start gap-2 text-sm text-black/68">
                      <Check
                        size={16}
                        className="mt-0.5 shrink-0"
                        color={caseStudy.accent}
                        aria-hidden="true"
                      />
                      <span>{highlight}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <p className="mb-3 text-xs font-black uppercase tracking-[0.18em] text-black/42">
                  Stack
                </p>
                <div className="flex flex-wrap gap-2">
                  {caseStudy.technologies.map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-black/10 bg-white px-3 py-1 text-xs font-semibold text-black/66"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.article>
    </motion.div>
  );
}

function ProjectBuilderSection() {
  const shouldReduceMotion = useReducedMotion();
  const [selectedBusiness, setSelectedBusiness] = useState("Restaurant");
  const [selectedNeeds, setSelectedNeeds] = useState(["Booking", "Admin Panel", "WhatsApp", "SEO"]);

  const estimatedCost =
    calculatorBaseCost +
    selectedNeeds.reduce((total, need) => {
      const needData = buildNeeds.find((item) => item.name === need);
      return total + (needData?.cost ?? 0);
    }, 0);
  const proposalMessage = `Hi Patit, I want a website proposal from PPR Global.
Business Type: ${selectedBusiness}
Selected Features: ${selectedNeeds.length ? selectedNeeds.join(", ") : "No extra features selected"}
Estimated Cost: ₹${estimatedCost.toLocaleString("en-IN")}
Please guide me with the next step.`;

  const toggleNeed = (need: string) => {
    setSelectedNeeds((current) =>
      current.includes(need) ? current.filter((item) => item !== need) : [...current, need]
    );
  };

  return (
    <section className="defer-section relative overflow-hidden px-4 py-24 md:py-32">
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 opacity-55"
        style={{
          backgroundImage:
            "linear-gradient(rgba(184,255,61,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(184,255,61,0.04) 1px, transparent 1px)",
          backgroundSize: "48px 48px"
        }}
      />
      <div className="mx-auto max-w-7xl">
        <Reveal className="mb-12 grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-end">
          <div>
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.22em] text-acid">
              Project Builder
            </p>
            <h2 className="font-display text-5xl font-semibold leading-none text-white md:text-7xl">
              Estimate, plan, and preview your build before we start.
            </h2>
          </div>
          <p className="max-w-2xl text-lg leading-8 text-white/64">
            Choose your business type, select the features you need, get an instant estimate,
            then see the exact process PPR Global follows from strategy to launch.
          </p>
        </Reveal>

        <div className="space-y-8">
          <Reveal className="rounded-lg bg-white/[0.045] p-4 shadow-[inset_0_0_0_1px_rgba(255,255,255,0.12)] md:p-6">
            <div className="mb-6 flex items-center justify-between gap-4">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-acid">
                  Build Cost Calculator
                </p>
                <h3 className="mt-2 font-display text-3xl font-semibold text-white">
                  Configure your website.
                </h3>
              </div>
              <div className="hidden rounded-full bg-acid/12 px-4 py-2 text-xs font-black uppercase tracking-[0.16em] text-acid md:block">
                Instant Estimate
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-6">
              {businessTypes.map((business, index) => {
                const Icon = business.icon;
                const selected = selectedBusiness === business.name;
                return (
                  <motion.button
                    key={business.name}
                    type="button"
                    onClick={() => setSelectedBusiness(business.name)}
                    className={`group relative min-h-32 overflow-hidden rounded-lg p-4 text-left outline-none shadow-[inset_0_0_0_1px_rgba(255,255,255,0.12)] transition-colors focus-visible:ring-2 focus-visible:ring-acid ${
                      selected ? "bg-acid text-ink" : "bg-black/30 text-white hover:bg-white/[0.075]"
                    }`}
                    initial={shouldReduceMotion ? false : { opacity: 0, y: 18, filter: "blur(5px)" }}
                    whileInView={shouldReduceMotion ? undefined : { opacity: 1, y: 0, filter: "blur(0px)" }}
                    viewport={{ once: true }}
                    transition={{ type: "spring", duration: 0.48, bounce: 0, delay: index * 0.035 }}
                    whileHover={shouldReduceMotion ? undefined : { rotateX: 5, rotateY: -5, y: -4 }}
                    whileTap={{ scale: 0.98 }}
                    style={{ transformPerspective: 900, transformStyle: "preserve-3d" }}
                  >
                    <Icon className={selected ? "text-ink" : "text-acid"} size={24} aria-hidden="true" />
                    <span className="mt-8 block text-base font-semibold">{business.name}</span>
                    <span className={`mt-1 block text-xs ${selected ? "text-black/55" : "text-white/40"}`}>
                      Base ₹{calculatorBaseCost.toLocaleString("en-IN")}
                    </span>
                  </motion.button>
                );
              })}
            </div>

            <div className="mt-6 grid gap-6 lg:grid-cols-[1fr_0.72fr]">
              <div>
                <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-white/50">
                  Need
                </p>
                <div className="grid gap-3 sm:grid-cols-2">
                  {buildNeeds.map((need) => {
                    const selected = selectedNeeds.includes(need.name);
                    return (
                      <button
                        key={need.name}
                        type="button"
                        onClick={() => toggleNeed(need.name)}
                        className={`flex min-h-12 items-center justify-between rounded-md px-4 text-left outline-none transition-colors focus-visible:ring-2 focus-visible:ring-acid ${
                          selected ? "bg-acid text-ink" : "bg-black/32 text-white shadow-[inset_0_0_0_1px_rgba(255,255,255,0.1)]"
                        }`}
                      >
                        <span className="flex items-center gap-3 font-semibold">
                          <span
                            className={`grid h-5 w-5 place-items-center rounded border ${
                              selected ? "border-ink bg-ink text-acid" : "border-white/22 text-transparent"
                            }`}
                          >
                            <Check size={13} aria-hidden="true" />
                          </span>
                          {need.name}
                        </span>
                        <span className={`text-xs font-bold ${selected ? "text-black/54" : "text-white/40"}`}>
                          +₹{need.cost.toLocaleString("en-IN")}
                        </span>
                      </button>
                    );
                  })}
                </div>
              </div>

              <motion.div
                className="relative overflow-hidden rounded-lg bg-acid p-5 text-ink"
                initial={shouldReduceMotion ? false : { opacity: 0, y: 18, filter: "blur(5px)" }}
                whileInView={shouldReduceMotion ? undefined : { opacity: 1, y: 0, filter: "blur(0px)" }}
                viewport={{ once: true }}
                transition={{ type: "spring", duration: 0.5, bounce: 0 }}
              >
                <p className="text-xs font-black uppercase tracking-[0.2em] text-black/55">
                  Estimated Cost
                </p>
                <p className="mt-3 font-display text-5xl font-semibold leading-none">
                  ₹{estimatedCost.toLocaleString("en-IN")}
                </p>
                <p className="mt-4 text-sm leading-6 text-black/64">
                  All websites start from ₹{calculatorBaseCost.toLocaleString("en-IN")}. Each selected feature adds ₹1,500.
                </p>
                <a
                  href={whatsappLink(whatsappNowNumber, proposalMessage)}
                  className="mt-6 inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-full bg-ink px-5 text-xs font-black uppercase tracking-[0.16em] text-white outline-none transition-transform hover:scale-[1.02] focus-visible:ring-2 focus-visible:ring-ink"
                >
                  Get Proposal <ArrowUpRight size={15} aria-hidden="true" />
                </a>
              </motion.div>
            </div>
          </Reveal>

          <Reveal className="overflow-hidden rounded-lg bg-[linear-gradient(145deg,rgba(255,255,255,0.085),rgba(255,255,255,0.026))] p-5 shadow-[inset_0_0_0_1px_rgba(255,255,255,0.12)] md:p-7">
            <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
              <div className="lg:sticky lg:top-28 lg:self-start">
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-acid">
                  Interactive Process Timeline
                </p>
                <h3 className="mt-3 font-display text-4xl font-semibold leading-none text-white md:text-6xl">
                  From idea to launch in clear stages.
                </h3>
                <p className="mt-5 max-w-lg text-base leading-7 text-white/62">
                  Every project moves through a visible workflow: strategy, proposal, design,
                  build, testing, and handover. No confusion. No guessing.
                </p>
                <div className="mt-7 grid gap-3 sm:grid-cols-2 lg:grid-cols-1">
                  {["Clear scope", "Fast delivery", "Premium UI", "Launch support"].map((item) => (
                    <div
                      key={item}
                      className="flex min-h-11 items-center gap-3 rounded-md bg-black/30 px-4 text-sm font-semibold text-white/72"
                    >
                      <Check className="text-acid" size={16} aria-hidden="true" />
                      {item}
                    </div>
                  ))}
                </div>
              </div>

              <div className="relative">
                <div className="absolute bottom-8 left-6 top-8 hidden w-px bg-white/10 md:block" />
                <motion.div
                  aria-hidden="true"
                  className="absolute left-6 top-8 hidden w-px origin-top bg-acid md:block"
                  initial={shouldReduceMotion ? false : { scaleY: 0 }}
                  whileInView={shouldReduceMotion ? undefined : { scaleY: 1 }}
                  viewport={{ once: true, margin: "-120px" }}
                  transition={{ type: "spring", duration: 1.1, bounce: 0 }}
                  style={{ height: "calc(100% - 4rem)" }}
                />
                <div className="grid gap-4">
                  {processSteps.map((step, index) => (
                    <motion.div
                      key={step.number}
                      className="group relative rounded-lg bg-black/34 p-4 shadow-[inset_0_0_0_1px_rgba(255,255,255,0.1)] md:ml-14 md:p-5"
                      initial={shouldReduceMotion ? false : { opacity: 0, y: 22, filter: "blur(5px)" }}
                      whileInView={shouldReduceMotion ? undefined : { opacity: 1, y: 0, filter: "blur(0px)" }}
                      viewport={{ once: true, margin: "-80px" }}
                      transition={{ type: "spring", duration: 0.55, bounce: 0, delay: index * 0.06 }}
                      whileHover={shouldReduceMotion ? undefined : { y: -5 }}
                    >
                      <span className="absolute -left-[4.25rem] top-5 hidden h-12 w-12 place-items-center rounded-full bg-acid font-display text-xl font-semibold text-ink shadow-[0_0_0_8px_rgba(184,255,61,0.08)] md:grid">
                        {step.number}
                      </span>
                      <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-start">
                        <div>
                          <span className="font-display text-3xl font-semibold text-acid md:hidden">
                            {step.number}
                          </span>
                          <h4 className="mt-2 text-2xl font-semibold text-white md:mt-0">
                            {step.title}
                          </h4>
                          <p className="mt-3 max-w-2xl text-sm leading-6 text-white/58">
                            {step.detail}
                          </p>
                        </div>
                        <div className="grid gap-2 sm:min-w-44">
                          <span className="rounded-full bg-acid/12 px-3 py-1 text-center text-xs font-black uppercase tracking-[0.14em] text-acid">
                            {step.duration}
                          </span>
                          <span className="rounded-full bg-white/[0.06] px-3 py-1 text-center text-xs font-semibold text-white/64">
                            {step.deliverable}
                          </span>
                        </div>
                      </div>
                      <motion.div
                        aria-hidden="true"
                        className="mt-5 h-1 rounded-full bg-acid"
                        initial={shouldReduceMotion ? false : { scaleX: 0 }}
                        whileInView={shouldReduceMotion ? undefined : { scaleX: 1 }}
                        viewport={{ once: true }}
                        transition={{ type: "spring", duration: 0.65, bounce: 0, delay: index * 0.08 }}
                        style={{ transformOrigin: "left" }}
                      />
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function Field({
  id,
  label,
  type = "text",
  placeholder,
  required = false
}: {
  id: string;
  label: string;
  type?: string;
  placeholder: string;
  required?: boolean;
}) {
  return (
    <div>
      <label htmlFor={id} className="mb-2 block text-sm font-semibold text-white/78">
        {label}
      </label>
      <input
        id={id}
        name={id}
        type={type}
        placeholder={placeholder}
        required={required}
        className="h-12 w-full rounded-md bg-black/34 px-4 text-base text-white outline-none shadow-[inset_0_0_0_1px_rgba(255,255,255,0.12)] transition-shadow placeholder:text-white/34 focus:shadow-[inset_0_0_0_2px_#b8ff3d]"
      />
    </div>
  );
}

function Select({
  id,
  label,
  options,
  required = false
}: {
  id: string;
  label: string;
  options: string[];
  required?: boolean;
}) {
  return (
    <div>
      <label htmlFor={id} className="mb-2 block text-sm font-semibold text-white/78">
        {label}
      </label>
      <select
        id={id}
        name={id}
        required={required}
        className="h-12 w-full rounded-md bg-black/34 px-4 text-base text-white outline-none shadow-[inset_0_0_0_1px_rgba(255,255,255,0.12)] transition-shadow focus:shadow-[inset_0_0_0_2px_#b8ff3d]"
        defaultValue=""
      >
        <option value="" disabled>
          Select one
        </option>
        {options.map((option) => (
          <option key={option} value={option} className="bg-ink">
            {option}
          </option>
        ))}
      </select>
    </div>
  );
}
