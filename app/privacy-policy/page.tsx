import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight, ShieldCheck, Lock, Cookie, Eye } from "lucide-react";
import { business } from "@/lib/business";

export const metadata: Metadata = {
  title: "Privacy Policy & Cookie Disclosures",
  description:
    "Privacy policy, Google AdSense cookie disclosures, personal data handling, GDPR/CCPA compliance, and contact options for PPR Global.",
  alternates: {
    canonical: "/privacy-policy"
  }
};

export default function PrivacyPolicyPage() {
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
          Privacy Policy
        </h1>
        <p className="mt-4 text-xs font-semibold uppercase tracking-widest text-white/50">
          Effective Date: September 16, 2026 · AdSense & GDPR Compliant
        </p>

        <div className="mt-8 space-y-8 rounded-xl border border-white/10 bg-white/[0.04] p-6 text-base leading-8 text-white/75 md:p-10">
          <section>
            <h2 className="text-xl font-bold text-white">1. Introduction & Scope</h2>
            <p className="mt-2">
              At PPR Global ({business.url}), accessible from any web browser and device, the privacy of our
              visitors and clients is of utmost importance to us. This Privacy Policy document outlines the types
              of personal information that is collected and recorded by PPR Global, how we use it, and the rights
              you have over your data in compliance with Google AdSense policies, the European General Data
              Protection Regulation (GDPR), the California Consumer Privacy Act (CCPA), and the Digital Personal
              Data Protection (DPDP) Act of India.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white">2. Google AdSense & Third-Party Advertising Cookies</h2>
            <div className="mt-3 rounded-lg border border-acid/30 bg-acid/5 p-4 text-sm leading-7 text-white/85">
              <p className="font-semibold text-acid">Mandatory Google Publisher Disclosure:</p>
              <ul className="mt-2 list-disc pl-5 space-y-1">
                <li>
                  Third-party vendors, including Google, use cookies to serve ads based on a user&apos;s prior visits
                  to our website or other websites across the internet.
                </li>
                <li>
                  Google&apos;s use of advertising cookies (such as the DoubleClick DART cookie) enables it and its
                  partners to serve ads to our users based on their visit to our sites and/or other sites on the Internet.
                </li>
                <li>
                  Users may opt out of personalized advertising by visiting{" "}
                  <a
                    href="https://www.google.com/settings/ads"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-acid underline font-semibold"
                  >
                    Google Ads Settings
                  </a>.
                </li>
                <li>
                  Alternatively, users can opt out of a third-party vendor&apos;s use of cookies for personalized advertising
                  by visiting{" "}
                  <a
                    href="https://www.aboutads.info/choices"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-acid underline font-semibold"
                  >
                    www.aboutads.info/choices
                  </a>{" "}
                  or{" "}
                  <a
                    href="https://youronlinechoices.eu/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-acid underline font-semibold"
                  >
                    Your Online Choices
                  </a>.
                </li>
              </ul>
            </div>
            <p className="mt-3">
              These third-party ad servers or ad networks use technology in their respective advertisements and links
              that appear on PPR Global, which are sent directly to your browser. They automatically receive your IP
              address when this occurs. Other technologies (such as cookies, JavaScript, or Web Beacons) may also be
              used by our site&apos;s third-party ad networks to measure the effectiveness of their advertising campaigns
              and/or to personalize the advertising content that you see on the site.
            </p>
            <p className="mt-2 text-sm text-white/60">
              Note: PPR Global has no access to or control over these cookies that are used by third-party advertisers.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white">3. Information We Collect Directly</h2>
            <p className="mt-2">
              We collect contact information strictly when you voluntarily submit it via our consultation forms,
              quote calculator, direct email, or WhatsApp conversation:
            </p>
            <ul className="mt-2 list-disc pl-5 space-y-1">
              <li>Full Name and Job Title/Company Name</li>
              <li>Email address and Phone/WhatsApp Number</li>
              <li>Project requirements, target budget range, and timeline</li>
              <li>Preferred consultation time slot</li>
            </ul>
            <p className="mt-2">
              We do not sell, rent, or lease your personal contact details to any third-party marketing brokers.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white">4. Log Files & Analytics</h2>
            <p className="mt-2">
              PPR Global follows a standard procedure of using log files. These files log visitors when they visit
              websites. The information collected by log files includes internet protocol (IP) addresses, browser type,
              Internet Service Provider (ISP), date and time stamp, referring/exit pages, and possibly the number of clicks.
              These are not linked to any information that is personally identifiable. The purpose of the information is
              for analyzing trends, administering the site, tracking users&apos; movement on the website, and gathering
              demographic information.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white">5. Third-Party Service Providers</h2>
            <p className="mt-2">
              We employ trusted third-party cloud infrastructure to operate this website securely:
            </p>
            <ul className="mt-2 list-disc pl-5 space-y-1">
              <li><strong>Vercel</strong>: Global Edge CDN hosting and secure SSL delivery.</li>
              <li><strong>Supabase</strong>: Encrypted database storage for customer enquiries.</li>
              <li><strong>Resend</strong>: Transactional notifications for enquiry confirmations.</li>
              <li><strong>Cloudflare</strong>: Spam filtering and Turnstile bot protection.</li>
              <li><strong>Google Analytics (GA4)</strong>: Anonymized site engagement metrics.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white">6. GDPR Data Protection Rights</h2>
            <p className="mt-2">
              We want to ensure you are fully aware of all your data protection rights. Every user is entitled to:
            </p>
            <ul className="mt-2 list-disc pl-5 space-y-1">
              <li>The right to access – You have the right to request copies of your personal data.</li>
              <li>The right to rectification – You have the right to request correction of inaccurate info.</li>
              <li>The right to erasure – You have the right to request that we erase your personal data.</li>
              <li>The right to restrict or object to processing under certain conditions.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white">7. CCPA Privacy Rights (Do Not Sell My Personal Information)</h2>
            <p className="mt-2">
              Under the California Consumer Privacy Act (CCPA), California consumers have the right to request disclosure
              of categories of data collected, deletion of personal data, and the right to opt out of the sale of personal
              data. PPR Global does not sell consumers&apos; personal data.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white">8. Children&apos;s Information</h2>
            <p className="mt-2">
              Another part of our priority is adding protection for children while using the internet. We encourage parents
              and guardians to observe, participate in, and/or monitor and guide their online activity. PPR Global does not
              knowingly collect any Personal Identifiable Information from children under the age of 13.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white">9. Data Controller & Contact Information</h2>
            <p className="mt-2">
              If you have additional questions or require more information about our Privacy Policy, do not hesitate
              to contact our Data Protection Officer:
            </p>
            <div className="mt-3 rounded-lg bg-black/30 p-4 font-mono text-sm text-white/90">
              <p>PPR Global (Attn: Patit Roy)</p>
              <p>Address: {business.address.display}</p>
              <p>Phone / WhatsApp: {business.phoneNumbers[0].display}</p>
              <p>Website: {business.url}</p>
            </div>
          </section>
        </div>
      </article>
    </main>
  );
}
