"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { Reveal } from "./Reveal";
import { homepageFaqs } from "@/lib/faqs";
import { trackEvent } from "@/lib/lead/analytics";

export function HomepageFaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (index: number) => {
    const isOpening = openIndex !== index;
    setOpenIndex(isOpening ? index : null);
    if (isOpening) {
      trackEvent("faq_open", { question: homepageFaqs[index].question });
    }
  };

  return (
    <section id="faq" className="defer-section relative px-4 py-24 md:py-32">
      <div className="mx-auto max-w-5xl">
        <Reveal className="mb-12 text-center md:mb-16">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.22em] text-acid">
            Got Questions?
          </p>
          <h2 className="font-display text-4xl font-semibold leading-tight text-white md:text-6xl">
            Frequently Asked Questions.
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-white/64">
            Everything you need to know about pricing, project timelines, full code ownership, and how we deliver your site fast.
          </p>
        </Reveal>

        <div className="space-y-3.5">
          {homepageFaqs.map((faq, index) => {
            const isOpen = openIndex === index;
            const headingId = `faq-heading-${index}`;
            const panelId = `faq-panel-${index}`;

            return (
              <Reveal
                key={faq.question}
                className="overflow-hidden rounded-lg bg-white/[0.045] shadow-[inset_0_0_0_1px_rgba(255,255,255,0.12)] transition-colors hover:bg-white/[0.065]"
              >
                <h3>
                  <button
                    type="button"
                    id={headingId}
                    aria-expanded={isOpen}
                    aria-controls={panelId}
                    onClick={() => toggle(index)}
                    className="flex w-full items-center justify-between gap-4 p-5 text-left text-base font-bold text-white outline-none transition-colors focus-visible:ring-2 focus-visible:ring-acid focus-visible:ring-offset-2 focus-visible:ring-offset-ink md:text-lg"
                  >
                    <span className="flex items-center gap-3">
                      <span className="text-xs font-black uppercase tracking-wider text-acid">
                        0{index + 1}
                      </span>
                      <span>{faq.question}</span>
                    </span>
                    <span
                      className={`grid h-8 w-8 shrink-0 place-items-center rounded-full bg-white/10 text-white transition-transform duration-200 ${
                        isOpen ? "rotate-180 bg-acid text-ink" : ""
                      }`}
                    >
                      <ChevronDown size={18} aria-hidden="true" />
                    </span>
                  </button>
                </h3>
                {isOpen ? (
                  <div
                    id={panelId}
                    role="region"
                    aria-labelledby={headingId}
                    className="border-t border-white/10 px-5 pb-5 pt-3"
                  >
                    <p className="text-sm leading-7 text-white/78 md:text-base md:leading-8">
                      {faq.answer}
                    </p>
                  </div>
                ) : null}
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
