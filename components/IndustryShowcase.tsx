"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Check, Sparkles } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import { industryVerticals } from "@/lib/content";

export function IndustryShowcase() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section id="industries" className="defer-section relative overflow-hidden px-4 py-24 md:py-32 scroll-mt-24">
      {/* Background radial glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-1/4 h-[600px] w-[1000px] -translate-x-1/2 rounded-full blur-[160px] opacity-25"
        style={{
          background: "radial-gradient(circle, rgba(184,255,61,0.2) 0%, rgba(45,212,191,0.1) 50%, transparent 80%)"
        }}
      />

      <div className="relative mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="mb-14 flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-acid/30 bg-acid/10 px-4 py-1.5 text-xs font-black uppercase tracking-[0.2em] text-acid">
              <Sparkles size={14} />
              <span>Tailored Business Systems</span>
            </div>
            <h2 className="mt-4 max-w-4xl font-display text-4xl font-semibold leading-none text-white sm:text-5xl md:text-7xl">
              Websites & Apps Built for Your Industry.
            </h2>
          </div>
          <p className="max-w-md text-sm leading-7 text-white/65 md:text-base">
            Every business has distinct customer behavior. Click your industry to explore dedicated features, live case studies, starting pricing, and local SEO architecture built to rank on Google.
          </p>
        </div>

        {/* 9 Industry Cards Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {industryVerticals.map((industry, index) => {
            const IconComponent = industry.icon;
            return (
              <motion.article
                key={industry.id}
                initial={shouldReduceMotion ? false : { opacity: 0, y: 24, filter: "blur(6px)" }}
                whileInView={shouldReduceMotion ? undefined : { opacity: 1, y: 0, filter: "blur(0px)" }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ type: "spring", duration: 0.55, bounce: 0, delay: (index % 3) * 0.08 }}
                whileHover={shouldReduceMotion ? undefined : { y: -8 }}
                className={`group relative flex flex-col overflow-hidden rounded-2xl border bg-black/40 backdrop-blur-sm shadow-xl transition-all duration-300 ${industry.accentBorder}`}
              >
                {/* Visual Image Banner with Link */}
                <Link
                  href={industry.href}
                  className="relative aspect-[16/10] w-full overflow-hidden bg-white/[0.04]"
                  tabIndex={-1}
                  aria-hidden="true"
                >
                  <Image
                    src={industry.imageSrc}
                    alt={industry.imageAlt}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />
                  
                  {/* Subtle Glow Pill */}
                  <div className="absolute left-4 top-4">
                    <span className={`inline-flex items-center gap-1.5 rounded-full border bg-black/70 px-3 py-1 text-[11px] font-bold uppercase tracking-wider backdrop-blur-md ${industry.gradientBadge}`}>
                      <IconComponent size={13} />
                      <span>{industry.name}</span>
                    </span>
                  </div>

                  {/* Starting Price Pill */}
                  <div className="absolute bottom-3 right-4">
                    <span className="inline-flex items-center rounded-full bg-white/10 px-3 py-1 text-xs font-black tracking-wider text-white backdrop-blur-md">
                      Starts {industry.startingPrice}
                    </span>
                  </div>
                </Link>

                {/* Card Content Body */}
                <div className="flex flex-1 flex-col p-6">
                  <h3 className="font-display text-2xl font-bold text-white transition-colors group-hover:text-white">
                    <Link href={industry.href} className="outline-none focus-visible:ring-2 focus-visible:ring-acid">
                      {industry.name}
                    </Link>
                  </h3>
                  
                  <p className={`mt-1 text-xs font-bold uppercase tracking-wider ${industry.accentColor}`}>
                    {industry.tagline}
                  </p>

                  <p className="mt-3 text-sm leading-6 text-white/68">
                    {industry.description}
                  </p>

                  {/* Feature Bullets */}
                  <div className="mt-5 space-y-2 border-t border-white/10 pt-4">
                    {industry.features.map((feature) => (
                      <div key={feature} className="flex items-center gap-2 text-xs text-white/80">
                        <Check size={14} className={`shrink-0 ${industry.accentColor}`} />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* CTA Link to Dedicated Page */}
                  <div className="mt-6 pt-2">
                    <Link
                      href={industry.href}
                      className="inline-flex w-full min-h-11 items-center justify-between rounded-xl border border-white/10 bg-white/[0.05] px-4 py-2.5 text-xs font-black uppercase tracking-wider text-white transition-all duration-200 group-hover:bg-white group-hover:text-ink group-hover:border-transparent"
                    >
                      <span>Explore {industry.name}</span>
                      <ArrowUpRight size={16} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </Link>
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
