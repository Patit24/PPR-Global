"use client";

import { Check, Clock, Search, ShieldCheck } from "lucide-react";
import { Reveal } from "./Reveal";
import { LeadForm } from "./leads/LeadCaptureForm";

export function FreeAuditSection() {
  return (
    <section id="free-audit" className="defer-section relative px-4 py-24 md:py-32">
      {/* Subtle backdrop grid */}
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 opacity-35"
        style={{
          backgroundImage:
            "linear-gradient(rgba(184,255,61,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(184,255,61,0.05) 1px, transparent 1px)",
          backgroundSize: "40px 40px"
        }}
      />
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-12 rounded-2xl border border-acid/30 bg-gradient-to-br from-white/[0.06] via-black/40 to-[#070709] p-6 shadow-[0_20px_60px_rgba(0,0,0,0.6)] md:p-12 lg:grid-cols-[1fr_1.1fr] lg:items-center">
          <Reveal>
            <div className="inline-flex items-center gap-2 rounded-full border border-acid/40 bg-acid/15 px-3.5 py-1.5 text-xs font-black uppercase tracking-[0.16em] text-acid">
              <Clock size={13} aria-hidden="true" />
              <span>100% Free · No Obligation</span>
            </div>

            <h2 className="mt-5 font-display text-4xl font-semibold leading-tight text-white md:text-6xl">
              Free 10-Minute Website + Google Business Profile Review.
            </h2>

            <p className="mt-6 text-base leading-7 text-white/72 md:text-lg">
              Get an actionable video audit or breakdown from founder Patit Roy. We&apos;ll reveal why
              your site isn&apos;t ranking on Google Maps, find mobile speed bottlenecks, and show you exactly
              how to 2x your customer enquiries.
            </p>

            <div className="mt-8 space-y-3.5 border-t border-white/10 pt-6">
              {[
                "Local Kolkata SEO & Google Map ranking visibility check",
                "Mobile page speed & Core Web Vitals diagnosis",
                "Conversion audit: why visitors leave without calling or messaging",
                "Personalized 3-step action roadmap you can keep forever"
              ].map((item) => (
                <div key={item} className="flex items-start gap-3 text-sm text-white/80">
                  <span className="grid h-5 w-5 shrink-0 place-items-center rounded-full bg-acid text-ink">
                    <Check size={12} strokeWidth={3} aria-hidden="true" />
                  </span>
                  <span>{item}</span>
                </div>
              ))}
            </div>

            <div className="mt-8 flex items-center gap-4 text-xs font-semibold uppercase tracking-wider text-white/50">
              <span className="flex items-center gap-1.5">
                <ShieldCheck size={15} className="text-acid" /> Zero spam
              </span>
              <span>·</span>
              <span>Direct Founder Response</span>
              <span>·</span>
              <span>Delivered in 24h</span>
            </div>
          </Reveal>

          <Reveal className="rounded-xl border border-white/12 bg-black/60 p-6 shadow-2xl backdrop-blur-xl md:p-8">
            <div className="mb-6">
              <p className="text-xs font-black uppercase tracking-[0.18em] text-acid">
                Request Free Audit
              </p>
              <h3 className="mt-1 font-display text-2xl font-bold text-white">
                Where should we send your review?
              </h3>
            </div>
            <LeadForm
              variant="compact"
              source="free-audit"
              initialService="Free Website & GBP Review"
            />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
