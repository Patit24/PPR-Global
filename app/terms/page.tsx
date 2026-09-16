import type { Metadata } from "next";
import Link from "next/link";
import { business } from "@/lib/business";

export const metadata: Metadata = {
  title: "Terms and Conditions | PPR Global",
  description: "Comprehensive website, engineering, and client service terms for PPR Global.",
  alternates: {
    canonical: "/terms"
  }
};

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-ink px-4 py-24 text-white">
      <article className="mx-auto max-w-4xl">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm font-black uppercase tracking-[0.16em] text-acid hover:underline"
        >
          ← Back to Home
        </Link>
        <h1 className="mt-12 font-display text-4xl font-semibold leading-tight md:text-6xl">
          Terms and Conditions
        </h1>
        <p className="mt-4 text-xs font-semibold uppercase tracking-widest text-white/50">
          Last Updated: September 16, 2026
        </p>

        <div className="mt-8 space-y-8 rounded-xl border border-white/10 bg-white/[0.04] p-6 text-base leading-8 text-white/75 md:p-10">
          <section>
            <h2 className="text-xl font-bold text-white">1. Agreement to Terms</h2>
            <p className="mt-2">
              By accessing or using the PPR Global website ({business.url}) or contracting any software development,
              design, marketing, or consulting services from PPR Global, you agree to be bound by these Terms and
              Conditions. If you disagree with any part of these terms, you must discontinue use of our site and services.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white">2. Scope of Services & Project Proposals</h2>
            <p className="mt-2">
              PPR Global provides bespoke web design, full-stack application development, WhatsApp API automation,
              custom CRM architectures, SEO/GEO optimization, and performance advertising management.
            </p>
            <p className="mt-2">
              Initial consultations, website estimates, and pricing ranges displayed on this site serve as indicative
              benchmarks. Formal client engagements commence only upon mutual written approval of a formal Scope of
              Work (SOW) detailing milestones, deliverables, timelines, and payment terms.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white">3. Intellectual Property & Source Code Ownership</h2>
            <p className="mt-2">
              Unlike traditional agencies that impose ongoing proprietary lock-ins, PPR Global guarantees that upon full
              settlement of all milestone invoices:
            </p>
            <ul className="mt-2 list-disc pl-5 space-y-1">
              <li>
                The client receives 100% full ownership of custom application source code, UI designs, and database schemas.
              </li>
              <li>
                Open-source libraries (e.g. Next.js, React, Tailwind CSS) remain subject to their respective open-source licenses (MIT/Apache).
              </li>
              <li>
                Clients retain full ownership of their brand assets, registered domains, and third-party hosting accounts.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white">4. Payment Milestones & Invoicing</h2>
            <p className="mt-2">
              Unless otherwise specified in an individual SOW, standard projects follow structured milestone phases:
            </p>
            <ul className="mt-2 list-disc pl-5 space-y-1">
              <li>Phase 1: 40% initial deposit prior to project commencement and architecture setup.</li>
              <li>Phase 2: 30% upon approval of the interactive UI preview and frontend build.</li>
              <li>Phase 3: 30% upon final user acceptance testing and production deployment.</li>
            </ul>
            <p className="mt-2">
              Invoices are issued digitally with multiple secure payment methods supported (UPI, NEFT/RTGS, Bank Transfer,
              and International Wire).
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white">5. Warranties & Bug-Fix Period</h2>
            <p className="mt-2">
              PPR Global stands behind the quality of its code. Every custom website or application comes with a complimentary
              30-day post-launch warranty during which any bugs or defects originating from the agreed scope of work are
              resolved promptly at zero additional cost.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white">6. Limitation of Liability</h2>
            <p className="mt-2">
              In no event shall PPR Global, its founder, or its team be liable for any indirect, incidental, special,
              consequential, or punitive damages, including loss of profits, data, or business interruption arising from
              third-party server downtime (Vercel, AWS, Cloudflare), domain registrars, or external API failures (Meta, WhatsApp, Google).
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white">7. Governing Law & Dispute Resolution</h2>
            <p className="mt-2">
              These Terms shall be governed by and construed in accordance with the laws of India. Any disputes arising out
              of or relating to these terms or services provided by PPR Global shall be subject to the exclusive jurisdiction
              of the courts located in Kolkata, West Bengal, India.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white">8. Contact Details</h2>
            <p className="mt-2">
              For any legal or contractual inquiries, please contact:
            </p>
            <p className="mt-1 font-semibold text-white">
              PPR Global · {business.address.display} · {business.phoneNumbers[0].display}
            </p>
          </section>
        </div>
      </article>
    </main>
  );
}
