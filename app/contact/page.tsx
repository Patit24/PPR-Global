import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight, MapPin, Phone } from "lucide-react";
import { LeadCaptureForm } from "@/components/leads/LeadCaptureForm";
import { business } from "@/lib/business";

export const metadata: Metadata = {
  title: "Book Free 15-Min Strategy Call | PPR Global Kolkata",
  description:
    "Book a free strategy session with founder Patit Roy. Fast 7-day website & app delivery, custom WhatsApp CRM, transparent pricing starting at ₹6,000 in Kolkata.",
  alternates: {
    canonical: "/contact"
  }
};

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-ink px-4 py-24 text-white">
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.8fr_1.2fr]">
        <section>
          <Link href="/" className="inline-flex items-center gap-2 text-sm font-black uppercase tracking-[0.16em] text-acid">
            Back home <ArrowUpRight size={15} />
          </Link>
          <h1 className="mt-12 font-display text-5xl font-semibold leading-none md:text-7xl">
            Book a Free 15-Min Strategy Call
          </h1>
          <p className="mt-7 text-lg leading-8 text-white/70">
            Speak directly with founder Patit Roy. Get a tailored project plan, clear milestone
            pricing, and your first design preview within 72 hours.
          </p>

          <div className="mt-6 flex flex-wrap gap-2 text-xs font-semibold text-white/60">
            <span className="rounded-full bg-white/5 px-3 py-1.5 border border-white/10 text-acid">
              ⚡ 7-Day Fast Delivery
            </span>
            <span className="rounded-full bg-white/5 px-3 py-1.5 border border-white/10 text-white/80">
              🎯 100% Free Consultation
            </span>
            <span className="rounded-full bg-white/5 px-3 py-1.5 border border-white/10 text-white/80">
              🔒 Zero-Spam Guarantee
            </span>
          </div>

          <div className="mt-8 space-y-4">
            <a
              href="https://wa.me/919609079663?text=Hi%20Patit%2C%20I%20want%20to%20book%20a%20strategy%20call%20for%20my%20project."
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between rounded-lg bg-acid p-4 font-bold text-ink transition-transform hover:scale-[1.02]"
            >
              <div className="flex items-center gap-3">
                <span className="grid h-10 w-10 place-items-center rounded-full bg-ink text-acid">
                  <ArrowUpRight size={18} />
                </span>
                <div>
                  <p className="text-xs font-black uppercase tracking-[0.16em] text-black/60">
                    Prefer instant messaging?
                  </p>
                  <p className="text-base font-semibold">Chat with Patit on WhatsApp</p>
                </div>
              </div>
              <ArrowUpRight size={20} />
            </a>

            <div className="flex gap-3 rounded-lg bg-white/[0.055] p-4">
              <MapPin className="shrink-0 text-acid" size={20} />
              <div>
                <p className="text-white/80 font-medium">{business.address.display}</p>
                <p className="mt-1 text-xs text-white/50">
                  Serving Salt Lake Sector V, New Town, Rajarhat, Park Street, Kolkata & Remote Worldwide
                </p>
              </div>
            </div>
            {business.phoneNumbers.map((phone) => (
              <a
                key={phone.href}
                href={phone.href}
                className="flex gap-3 rounded-lg bg-white/[0.055] p-4 text-white/72 transition-colors hover:text-acid"
              >
                <Phone className="shrink-0 text-acid" size={20} />
                <span>{phone.display} ({phone.label})</span>
              </a>
            ))}
          </div>
        </section>
        <section className="rounded-lg bg-white/[0.055] p-5 shadow-[inset_0_0_0_1px_rgba(255,255,255,0.12)] md:p-8">
          <LeadCaptureForm source="contact_page" />
        </section>
      </div>
    </main>
  );
}
