import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { business } from "@/lib/business";

export const metadata: Metadata = {
  title: "Privacy Policy | PPR Global",
  description:
    "Privacy policy for PPR Global enquiry forms, WhatsApp contact, analytics and lead management.",
  alternates: {
    canonical: "/privacy-policy"
  }
};

export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen bg-ink px-4 py-24 text-white">
      <article className="mx-auto max-w-4xl">
        <Link href="/" className="inline-flex items-center gap-2 text-sm font-black uppercase tracking-[0.16em] text-acid">
          Back home <ArrowUpRight size={15} />
        </Link>
        <h1 className="mt-12 font-display text-5xl font-semibold leading-none md:text-7xl">
          Privacy Policy
        </h1>
        <div className="mt-8 space-y-6 rounded-lg bg-white/[0.055] p-6 text-base leading-8 text-white/72 shadow-[inset_0_0_0_1px_rgba(255,255,255,0.12)]">
          <p>
            PPR Global collects contact details only when you submit them through an enquiry form,
            WhatsApp link, callback request or direct communication.
          </p>
          <p>
            Submitted details may include your name, email address, phone number, selected service,
            budget, project message, page URL, referrer, device type and campaign parameters. This
            information is used to respond to your enquiry and manage project communication.
          </p>
          <p>
            PPR Global may use Supabase for lead storage, Resend for transactional email, Cloudflare
            Turnstile for spam prevention, Google Analytics for non-personal website events, and an
            optional Google Sheets webhook for internal lead tracking.
          </p>
          <p>
            Personal contact details are not sent to Google Analytics. To request deletion or
            correction of an enquiry, contact {business.phoneNumbers[0].display}.
          </p>
          <p>Last updated: July 12, 2026.</p>
        </div>
      </article>
    </main>
  );
}

