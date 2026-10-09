"use client";

import { Star, Quote } from "lucide-react";
import { Reveal } from "./Reveal";
import { testimonials } from "@/lib/social-proof";

export function TestimonialsSection() {
  return (
    <section className="defer-section relative px-4 py-20 md:py-28">
      <div className="mx-auto max-w-7xl">
        <Reveal className="mb-12 flex flex-col justify-between gap-4 md:flex-row md:items-end">
          <div>
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.22em] text-acid">
              Client Reviews &amp; Social Proof
            </p>
            <h2 className="font-display text-4xl font-semibold leading-tight text-white md:text-6xl">
              Trusted by Kolkata &amp; Global Business Owners.
            </h2>
          </div>
          <p className="max-w-md text-sm leading-6 text-white/64">
            Hear directly from founders, clinic directors, and brand creators whose digital presence
            and customer funnels were built by PPR Global.
          </p>
        </Reveal>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {testimonials.map((item) => (
            <Reveal
              key={item.id}
              className="group flex flex-col justify-between rounded-lg bg-white/[0.045] p-6 shadow-[inset_0_0_0_1px_rgba(255,255,255,0.12)] transition-colors hover:bg-white/[0.07]"
            >
              <div>
                <div className="mb-4 flex items-center justify-between">
                  <div className="flex gap-1 text-acid" aria-label={`Rating ${item.rating || 5} out of 5 stars`}>
                    {Array.from({ length: item.rating || 5 }).map((_, i) => (
                      <Star key={i} size={15} fill="currentColor" strokeWidth={0} />
                    ))}
                  </div>
                  <Quote size={20} className="text-white/20" aria-hidden="true" />
                </div>
                <blockquote className="text-sm leading-6 text-white/78 italic">
                  &ldquo;{item.quote}&rdquo;
                </blockquote>
              </div>

              <div className="mt-6 border-t border-white/10 pt-4">
                <p className="font-display text-base font-bold text-white group-hover:text-acid transition-colors">
                  {item.name}
                </p>
                <p className="text-xs text-white/60">
                  {item.role} · {item.business}
                </p>
                <p className="mt-0.5 text-[11px] font-semibold uppercase tracking-wider text-acid/80">
                  {item.location}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
