"use client";

import { useState } from "react";
import { ArrowUpRight, Check, Sparkles } from "lucide-react";
import type { DentalPricingTier } from "@/lib/dental-pricing";

interface DentalPricingProps {
  tiers: DentalPricingTier[];
  title?: string;
  subtitle?: string;
  scorecardHref?: string;
}

export function DentalPricing({
  tiers,
  title = "Transparent Dental Practice Packages",
  subtitle = "No hidden fees, no agency lock-ins. Full Next.js source code ownership and direct WhatsApp booking.",
  scorecardHref = "#dental-scorecard"
}: DentalPricingProps) {
  const [currency, setCurrency] = useState<"INR" | "USD">("INR");

  return (
    <div className="rounded-xl border border-white/12 bg-white/[0.04] p-6 md:p-8">
      <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
        <div>
          <div className="inline-flex items-center gap-2 rounded-full border border-acid/20 bg-acid/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-acid">
            <Sparkles size={13} />
            <span>Kolkata Dental Pricing</span>
          </div>
          <h3 className="mt-3 font-display text-2xl font-bold tracking-tight text-white md:text-3xl">
            {title}
          </h3>
          <p className="mt-2 max-w-2xl text-sm leading-6 text-white/60">
            {subtitle}
          </p>
        </div>

        {/* Currency Switcher */}
        <div className="flex items-center self-start rounded-full border border-white/12 bg-black/40 p-1 sm:self-auto">
          <button
            type="button"
            onClick={() => setCurrency("INR")}
            className={`rounded-full px-4 py-1.5 text-xs font-bold transition-all ${
              currency === "INR"
                ? "bg-acid text-ink shadow-sm"
                : "text-white/60 hover:text-white"
            }`}
          >
            INR (₹) Default
          </button>
          <button
            type="button"
            onClick={() => setCurrency("USD")}
            className={`rounded-full px-4 py-1.5 text-xs font-bold transition-all ${
              currency === "USD"
                ? "bg-acid text-ink shadow-sm"
                : "text-white/60 hover:text-white"
            }`}
          >
            USD ($) Global
          </button>
        </div>
      </div>

      {/* Pricing Cards Grid */}
      <div className="mt-8 grid gap-6 md:grid-cols-2">
        {tiers.map((tier) => {
          const displayPrice = currency === "INR" ? tier.priceInr : tier.priceUsd;
          return (
            <div
              key={tier.id}
              className={`relative flex flex-col justify-between rounded-xl p-6 transition-all ${
                tier.recommended
                  ? "border-2 border-acid bg-gradient-to-b from-white/[0.08] to-white/[0.03] shadow-[0_12px_40px_rgba(184,255,61,0.08)]"
                  : "border border-white/10 bg-black/30"
              }`}
            >
              {tier.recommended && (
                <div className="absolute -top-3 right-6 rounded-full bg-acid px-3 py-0.5 text-[11px] font-black uppercase tracking-wider text-ink">
                  Most Popular
                </div>
              )}

              <div>
                <p className="text-xs font-semibold uppercase tracking-wider text-acid">
                  {tier.targetAudience}
                </p>
                <h4 className="mt-2 text-xl font-bold text-white">{tier.name}</h4>

                <div className="mt-4 flex items-baseline gap-1.5">
                  <span className="font-display text-4xl font-extrabold text-white">
                    {displayPrice}
                  </span>
                  {currency === "INR" && (
                    <span className="text-xs text-white/50">INR</span>
                  )}
                  {currency === "USD" && (
                    <span className="text-xs text-white/50">USD</span>
                  )}
                  {tier.period && (
                    <span className="text-sm font-medium text-white/50">
                      {tier.period}
                    </span>
                  )}
                </div>

                <div className="mt-6 border-t border-white/10 pt-5">
                  <p className="text-xs font-semibold uppercase tracking-wider text-white/50">
                    Included in this setup:
                  </p>
                  <ul className="mt-3 space-y-2.5">
                    {tier.features.map((feature) => (
                      <li
                        key={feature}
                        className="flex items-start gap-2.5 text-xs leading-5 text-white/75"
                      >
                        <Check
                          size={15}
                          className="mt-0.5 shrink-0 text-acid"
                        />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="mt-8 pt-4">
                <a
                  href="#service-quote"
                  className={`inline-flex w-full items-center justify-center gap-2 rounded-full py-3 text-xs font-black uppercase tracking-wider transition-all ${
                    tier.recommended
                      ? "bg-acid text-ink hover:scale-[1.02]"
                      : "border border-white/20 bg-white/5 text-white hover:border-acid hover:text-acid"
                  }`}
                >
                  <span>Select {tier.name}</span>
                  <ArrowUpRight size={14} />
                </a>
              </div>
            </div>
          );
        })}
      </div>

      {/* Scorecard Banner Link */}
      <div className="mt-8 flex flex-col items-start justify-between gap-4 rounded-xl border border-acid/25 bg-acid/5 p-4 sm:flex-row sm:items-center sm:p-5">
        <div>
          <p className="text-xs font-bold uppercase tracking-wider text-acid">
            Free Practice Assessment
          </p>
          <p className="mt-1 text-sm font-medium text-white/80">
            Unsure which setup fits your clinic? Take our 2-minute Kolkata Dental Digital Scorecard.
          </p>
        </div>
        <a
          href={scorecardHref}
          className="inline-flex shrink-0 items-center gap-1.5 rounded-full border border-acid bg-acid px-4 py-2 text-xs font-black uppercase tracking-wider text-ink transition-transform hover:scale-105"
        >
          <span>Calculate Clinic Score</span>
          <ArrowUpRight size={14} />
        </a>
      </div>
    </div>
  );
}
