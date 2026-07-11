"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { X } from "lucide-react";
import { trackEvent } from "@/lib/lead/analytics";
import { LeadCaptureForm } from "./LeadCaptureForm";

const storageKey = "ppr-lead-popup-dismissed-at";
const sevenDaysMs = 7 * 24 * 60 * 60 * 1000;

function wasDismissedRecently() {
  if (typeof window === "undefined") return true;
  const dismissedAt = Number(localStorage.getItem(storageKey) || 0);
  return dismissedAt > 0 && Date.now() - dismissedAt < sevenDaysMs;
}

export function LeadPopup() {
  const shouldReduceMotion = useReducedMotion();
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (wasDismissedRecently()) {
      return;
    }

    const open = (reason: string) => {
      if (wasDismissedRecently()) return;
      setIsOpen(true);
      trackEvent("lead_popup_view", { reason });
    };

    const timer = window.setTimeout(() => open("time_20s"), 20000);

    const onScroll = () => {
      const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
      if (maxScroll > 0 && window.scrollY / maxScroll > 0.45) {
        open("scroll_45");
      }
    };

    const onProjectView = () => {
      const count = Number(sessionStorage.getItem("ppr-project-view-count") || 0) + 1;
      sessionStorage.setItem("ppr-project-view-count", String(count));
      if (count >= 2) {
        open("two_projects");
      }
    };

    const onMouseLeave = (event: MouseEvent) => {
      if (event.clientY <= 0 && window.matchMedia("(min-width: 768px)").matches) {
        open("exit_intent");
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("ppr:portfolio-project-view", onProjectView);
    document.addEventListener("mouseleave", onMouseLeave);

    return () => {
      window.clearTimeout(timer);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("ppr:portfolio-project-view", onProjectView);
      document.removeEventListener("mouseleave", onMouseLeave);
    };
  }, []);

  const dismiss = () => {
    localStorage.setItem(storageKey, String(Date.now()));
    setIsOpen(false);
    trackEvent("lead_popup_dismiss");
  };

  return (
    <AnimatePresence>
      {isOpen ? (
        <motion.div
          className="fixed inset-0 z-[100] grid place-items-end bg-black/62 px-3 py-3 text-white backdrop-blur-md md:place-items-center md:p-6"
          initial={shouldReduceMotion ? false : { opacity: 0 }}
          animate={shouldReduceMotion ? undefined : { opacity: 1 }}
          exit={shouldReduceMotion ? undefined : { opacity: 0 }}
        >
          <button
            type="button"
            className="absolute inset-0 cursor-default"
            aria-label="Dismiss lead popup"
            onClick={dismiss}
          />
          <motion.div
            className="relative max-h-[92dvh] w-full max-w-3xl overflow-y-auto rounded-lg border border-white/12 bg-[#0d0d0f] p-5 shadow-[0_30px_120px_rgba(0,0,0,0.48)] md:p-7"
            initial={shouldReduceMotion ? false : { y: 28, scale: 0.98, filter: "blur(8px)" }}
            animate={shouldReduceMotion ? undefined : { y: 0, scale: 1, filter: "blur(0px)" }}
            exit={shouldReduceMotion ? undefined : { y: 18, scale: 0.99, filter: "blur(6px)" }}
            transition={{ type: "spring", duration: 0.58, bounce: 0 }}
          >
            <button
              type="button"
              onClick={dismiss}
              className="absolute right-4 top-4 grid h-10 w-10 place-items-center rounded-full bg-white/8 outline-none transition-colors hover:bg-white/14 focus-visible:ring-2 focus-visible:ring-acid"
              aria-label="Close enquiry popup"
            >
              <X size={18} aria-hidden="true" />
            </button>
            <p className="text-sm font-black uppercase tracking-[0.2em] text-acid">Free consultation</p>
            <h2 className="mt-4 max-w-xl font-display text-4xl font-semibold leading-none md:text-6xl">
              Planning Your Next Digital Project?
            </h2>
            <p className="mt-4 max-w-2xl text-base leading-7 text-white/68">
              Share your requirements and receive a free consultation from PPR Global.
            </p>
            <div className="mt-6">
              <LeadCaptureForm variant="popup" source="popup" onSuccess={dismiss} />
            </div>
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}

