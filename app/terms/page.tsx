import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { business } from "@/lib/business";

export const metadata: Metadata = {
  title: "Terms",
  description: "Basic website and enquiry terms for PPR Global.",
  alternates: {
    canonical: "/terms"
  }
};

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-ink px-4 py-24 text-white">
      <article className="mx-auto max-w-4xl">
        <Link href="/" className="inline-flex items-center gap-2 text-sm font-black uppercase tracking-[0.16em] text-acid">
          Back home <ArrowUpRight size={15} />
        </Link>
        <h1 className="mt-12 font-display text-5xl font-semibold leading-none md:text-7xl">
          Terms
        </h1>
        <div className="mt-8 space-y-6 rounded-lg bg-white/[0.055] p-6 text-base leading-8 text-white/72 shadow-[inset_0_0_0_1px_rgba(255,255,255,0.12)]">
          <p>
            This website provides information about PPR Global services, pricing starting points,
            case studies, resources and enquiry options. Final project scope, timelines and pricing
            are confirmed after direct discussion.
          </p>
          <p>
            Submitting an enquiry does not create a formal project agreement. A project starts only
            after scope, deliverables, payment terms and communication process are agreed between
            the client and PPR Global.
          </p>
          <p>
            Website content may be updated as services, pricing and availability change. For current
            project availability, contact {business.phoneNumbers[0].display}.
          </p>
          <p>Last updated: July 12, 2026.</p>
        </div>
      </article>
    </main>
  );
}
