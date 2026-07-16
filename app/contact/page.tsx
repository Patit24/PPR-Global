import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight, MapPin, Phone } from "lucide-react";
import { LeadCaptureForm } from "@/components/leads/LeadCaptureForm";
import { business } from "@/lib/business";

export const metadata: Metadata = {
  title: "Contact | Website, App & Automation Agency in Kolkata",
  description:
    "Contact PPR Global in Barasat, Kolkata for website development, mobile apps, WhatsApp automation, CRM, SEO/GEO and ads projects.",
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
            Contact PPR Global
          </h1>
          <p className="mt-7 text-lg leading-8 text-white/70">
            PPR Global is a website, mobile app and business automation agency founded by Patit Roy
            in Kolkata, West Bengal, India.
          </p>
          <div className="mt-8 space-y-4">
            <div className="flex gap-3 rounded-lg bg-white/[0.055] p-4">
              <MapPin className="shrink-0 text-acid" size={20} />
              <p className="text-white/72">{business.address.display}</p>
            </div>
            {business.phoneNumbers.map((phone) => (
              <a key={phone.href} href={phone.href} className="flex gap-3 rounded-lg bg-white/[0.055] p-4 text-white/72 hover:text-acid">
                <Phone className="shrink-0 text-acid" size={20} />
                {phone.display}
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
