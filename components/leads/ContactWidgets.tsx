"use client";

import { CalendarDays, MessageCircle } from "lucide-react";
import { trackEvent } from "@/lib/lead/analytics";

const defaultWhatsAppMessage =
  "Hi PPR Global, I visited your portfolio and would like to discuss a project.";

export function ContactWidgets() {
  const openBookingModal = (event: React.MouseEvent, source: string) => {
    event.preventDefault();
    trackEvent("callback_click", { source });
    window.dispatchEvent(new CustomEvent("ppr:open-lead-popup"));
  };

  return (
    <>
      <div className="fixed bottom-6 right-6 z-50 hidden flex-col items-end gap-3 md:flex">
        <a
          href={`/api/whatsapp?message=${encodeURIComponent(defaultWhatsAppMessage)}`}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => trackEvent("whatsapp_click", { source: "floating_button" })}
          className="group relative grid h-14 w-14 place-items-center rounded-full bg-acid text-ink shadow-[0_18px_50px_rgba(184,255,61,0.3)] outline-none transition-transform hover:scale-110 focus-visible:ring-2 focus-visible:ring-white"
          aria-label="Chat with PPR Global on WhatsApp"
        >
          <span className="absolute right-1 top-1 h-3.5 w-3.5 rounded-full border-2 border-[#0d0d0f] bg-green-400" />
          <MessageCircle size={24} aria-hidden="true" />
          <span className="pointer-events-none absolute right-16 top-1/2 -translate-y-1/2 whitespace-nowrap rounded-md bg-ink/90 px-3 py-1.5 text-xs font-semibold text-white opacity-0 shadow-lg transition-opacity group-hover:opacity-100">
            Chat on WhatsApp
          </span>
        </a>
        <button
          type="button"
          onClick={(e) => openBookingModal(e, "floating_button")}
          className="group relative grid h-14 w-14 place-items-center rounded-full border border-white/20 bg-black/80 text-white shadow-[0_18px_50px_rgba(0,0,0,0.4)] backdrop-blur-md outline-none transition-transform hover:scale-110 hover:border-acid hover:text-acid focus-visible:ring-2 focus-visible:ring-acid"
          aria-label="Book a free 15-min strategy call"
        >
          <CalendarDays size={22} aria-hidden="true" />
          <span className="pointer-events-none absolute right-16 top-1/2 -translate-y-1/2 whitespace-nowrap rounded-md bg-ink/90 px-3 py-1.5 text-xs font-semibold text-white opacity-0 shadow-lg transition-opacity group-hover:opacity-100">
            Book 15-Min Strategy Call
          </span>
        </button>
      </div>

      <div className="fixed bottom-0 left-0 right-0 z-50 grid grid-cols-2 border-t border-white/12 bg-black/95 pb-[env(safe-area-inset-bottom)] text-xs font-black uppercase tracking-[0.14em] shadow-[0_-10px_30px_rgba(0,0,0,0.5)] backdrop-blur-2xl md:hidden">
        <a
          href={`/api/whatsapp?message=${encodeURIComponent(defaultWhatsAppMessage)}`}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => trackEvent("whatsapp_click", { source: "mobile_bar" })}
          className="flex min-h-14 items-center justify-center gap-2 border-r border-white/10 text-white/90 active:bg-white/5"
        >
          <MessageCircle size={18} className="text-acid" aria-hidden="true" />
          WhatsApp
        </a>
        <button
          type="button"
          onClick={(e) => openBookingModal(e, "mobile_bar")}
          className="flex min-h-14 items-center justify-center gap-2 bg-acid text-ink active:opacity-90"
        >
          <CalendarDays size={18} aria-hidden="true" />
          Book 15m Call
        </button>
      </div>
    </>
  );
}
