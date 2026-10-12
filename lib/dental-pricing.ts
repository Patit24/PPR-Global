// Dental packages pricing data file
// NOTE: Starting points for Kolkata dental clinic web development & digital marketing.
// Marked with TODO placeholders so you can update pricing anytime.

export type DentalPricingTier = {
  id: string;
  name: string;
  targetAudience: string;
  priceInr: string;
  priceUsd: string;
  period?: string;
  features: string[];
  recommended?: boolean;
};

export const dentalWebsitePricing: DentalPricingTier[] = [
  {
    id: "single-doctor",
    name: "Starter Dental Practice",
    targetAudience: "Single-Doctor Clinics & Independent Dental Practitioners",
    priceInr: "₹7,999",
    priceUsd: "$99",
    features: [
      "Custom responsive Next.js clinic website (under 1s load speed)",
      "Treatment pages (Root Canal, Implants, Braces, Teeth Whitening)",
      "Doctor bio, BDS/MDS degree badges & clinic registration display",
      "One-tap WhatsApp appointment booking flow",
      "Google Maps Barasat/Kolkata directions integration",
      "Patient reviews & testimonials showcase",
      "Full code ownership & GitHub handover (no recurring lock-in)",
      "30-day post-launch technical warranty"
    ]
  },
  {
    id: "multi-chair",
    name: "Multi-Chair Dental Center",
    targetAudience: "Multi-Chair Clinics, Dental Chains & Polyclinics",
    priceInr: "₹48,500", // TODO: Update multi-chair price in INR
    priceUsd: "$520",    // TODO: Update multi-chair price in USD
    recommended: true,
    features: [
      "Everything in Starter Dental Practice",
      "Multi-doctor profiles with individual specialty booking",
      "Interactive time-slot selector & automated WhatsApp alerts",
      "Comprehensive treatment pricing guide & patient FAQs",
      "Before-visit patient preparation & consent notice guidelines",
      "Local schema markup (Dentist, MedicalBusiness, BreadcrumbList)",
      "High-speed image CDN for clinic interior photography",
      "Google Search Console & Bing IndexNow setup"
    ]
  }
];

export const dentalMarketingPricing: DentalPricingTier[] = [
  {
    id: "local-seo-starter",
    name: "Local Maps & Visibility",
    targetAudience: "Clinics looking to dominate their 3-5 km Kolkata locality",
    priceInr: "₹18,500", // TODO: Update monthly retainer in INR
    priceUsd: "$220",    // TODO: Update monthly retainer in USD
    period: "/month",
    features: [
      "Google Business Profile (GBP) audit, category tuning & weekly posts",
      "Local Kolkata healthcare directory citations (Practo, Justdial, Sulekha)",
      "On-page treatment keyword optimization (e.g., 'dentist near me Salt Lake')",
      "Review collection WhatsApp automation workflow",
      "Monthly local keyword rank & phone enquiry tracking"
    ]
  },
  {
    id: "growth-engine",
    name: "Complete Clinic Growth Engine",
    targetAudience: "Clinics wanting consistent high-value implant & aligner patient enquiries",
    priceInr: "₹34,500", // TODO: Update monthly retainer in INR
    priceUsd: "$390",    // TODO: Update monthly retainer in USD
    period: "/month",
    recommended: true,
    features: [
      "Everything in Local Maps & Visibility",
      "Targeted Google Search Ads setup for emergency & cosmetic dentistry",
      "Compliant Meta Ads (Facebook & Instagram) clinic awareness campaigns",
      "High-converting landing page optimization with WhatsApp pre-fill",
      "WhatsApp auto-responder & missed call text-back workflow setup",
      "Monthly transparent reporting (CPL, ad spend, verified calls)"
    ]
  }
];
