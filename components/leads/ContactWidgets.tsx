"use client";

import { CalendarDays, MessageCircle } from "lucide-react";
import { trackEvent } from "@/lib/lead/analytics";

const defaultWhatsAppMessage =
  "Hi PPR Global, I visited your portfolio and would like to discuss a project.";

export function ContactWidgets() {
  return (
    <>
      <div className="fixed bottom-5 right-5 z-50 hidden flex-col gap-3 md:flex">
        <a
          href={`/api/whatsapp?message=${encodeURIComponent(defaultWhatsAppMessage)}`}
          onClick={() => trackEvent("whatsapp_click", { source: "floating_button" })}
          className="grid h-14 w-14 place-items-center rounded-full bg-acid text-ink shadow-[0_18px_50px_rgba(184,255,61,0.22)] outline-none transition-transform hover:scale-105 focus-visible:ring-2 focus-visible:ring-white"
          aria-label="Chat with PPR Global on WhatsApp"
        >
          <MessageCircle size={24} aria-hidden="true" />
        </a>
        <a
          href="#contact"
          onClick={() => trackEvent("callback_click", { source: "floating_button" })}
          className="grid h-14 w-14 place-items-center rounded-full border border-white/12 bg-white/10 text-white shadow-[0_18px_50px_rgba(0,0,0,0.24)] backdrop-blur-md outline-none transition-transform hover:scale-105 focus-visible:ring-2 focus-visible:ring-acid"
          aria-label="Request a callback"
        >
          <CalendarDays size={22} aria-hidden="true" />
        </a>
      </div>
      <div className="fixed bottom-0 left-0 right-0 z-50 grid grid-cols-2 border-t border-white/10 bg-black/88 text-xs font-black uppercase tracking-[0.13em] text-white backdrop-blur-xl md:hidden">
        <a
          href={`/api/whatsapp?message=${encodeURIComponent(defaultWhatsAppMessage)}`}
          onClick={() => trackEvent("whatsapp_click", { source: "mobile_bar" })}
          className="flex min-h-14 items-center justify-center gap-2 border-r border-white/10"
        >
          <MessageCircle size={17} aria-hidden="true" />
          WhatsApp
        </a>
        <a
          href="#contact"
          onClick={() => trackEvent("callback_click", { source: "mobile_bar" })}
          className="flex min-h-14 items-center justify-center gap-2"
        >
          <CalendarDays size={17} aria-hidden="true" />
          Callback
        </a>
      </div>
    </>
  );
}

