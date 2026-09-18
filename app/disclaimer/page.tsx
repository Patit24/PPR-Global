import type { Metadata } from "next";
import Link from "next/link";
import { business } from "@/lib/business";

export const metadata: Metadata = {
  title: "Website & Advertising Disclaimer",
  description:
    "Website disclaimer, advertising policy, third-party services disclosure, and professional advice terms for PPR Global.",
  alternates: {
    canonical: "/disclaimer"
  }
};

export default function DisclaimerPage() {
  return (
    <main className="min-h-screen bg-ink px-4 py-24 text-white">
      <article className="mx-auto max-w-4xl">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm font-black uppercase tracking-[0.16em] text-acid"
        >
          ← Back to Home
        </Link>
        <h1 className="mt-12 font-display text-4xl font-semibold leading-tight md:text-6xl">
          Disclaimer
        </h1>
        <p className="mt-4 text-xs font-semibold uppercase tracking-widest text-white/50">
          Last Updated: September 16, 2026
        </p>

        <div className="mt-8 space-y-8 rounded-xl border border-white/10 bg-white/[0.04] p-6 text-base leading-8 text-white/75 md:p-10">
          <section>
            <h2 className="text-xl font-bold text-white">1. General Information</h2>
            <p className="mt-2">
              The information provided on this website ({business.url}) is for general informational, educational,
              and promotional purposes only. While PPR Global endeavors to keep the content accurate and up to date,
              we make no warranties or representations of any kind, express or implied, regarding the completeness,
              accuracy, reliability, suitability, or availability of the website or the information, services,
              or related graphics contained herein.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white">2. Professional & Technical Advice</h2>
            <p className="mt-2">
              The articles, technical guides, price estimates, and architectural insights published on this website
              reflect the opinions and industry practices of PPR Global and its founder, Patit Roy. They do not constitute
              binding legal, financial, or formal architectural guarantees for your specific business setup until a signed
              scope of work and agreement are established between both parties.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white">3. Client Results & Performance Projections</h2>
            <p className="mt-2">
              Any case studies, testimonials, lead counts, search rankings, or conversion metrics referenced on this
              website represent specific prior client achievements. Individual performance and business results vary
              based on industry, market competition, product quality, ad spend, and client sales execution. We do not
              promise or guarantee identical outcomes for future projects.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white">4. Advertising & Third-Party Cookies (Google AdSense)</h2>
            <p className="mt-2">
              PPR Global may display contextual and display advertisements powered by third-party advertising networks,
              including Google AdSense. Third-party vendors, including Google, use cookies to serve ads based on your prior
              visits to this website or other sites on the internet.
            </p>
            <p className="mt-2">
              You may opt out of personalized advertising at any time by visiting{" "}
              <a
                href="https://www.google.com/settings/ads"
                target="_blank"
                rel="noopener noreferrer"
                className="text-acid underline"
              >
                Google Ads Settings
              </a>{" "}
              or by visiting{" "}
              <a
                href="https://www.aboutads.info/choices"
                target="_blank"
                rel="noopener noreferrer"
                className="text-acid underline"
              >
                AboutAds Choices
              </a>.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white">5. External Links</h2>
            <p className="mt-2">
              Our website may contain links to external third-party websites or services (such as GitHub, Supabase,
              Vercel, WhatsApp, Google Maps, and client websites). PPR Global has no control over the content, privacy
              practices, or terms of third-party platforms and assumes no responsibility for external content.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white">6. Contact Information</h2>
            <p className="mt-2">
              If you have any questions or require further clarification regarding this disclaimer, please contact us at:
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
