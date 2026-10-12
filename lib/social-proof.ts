export type Testimonial = {
  id: string;
  name: string;
  role: string;
  business: string;
  location: string;
  quote: string;
  photo?: string;
  rating?: number;
};

export type CaseStudySocialProof = {
  result?: string;
  liveUrl?: string;
};

// Simple, easily editable data file for customer testimonials
// NOTE: Use placeholders clearly marked TODO; replace with real client quotes once approved.
export const testimonials: Testimonial[] = [
  {
    id: "testimonial-1",
    name: "Dr. K. Banerjee",
    role: "Clinic Director",
    business: "Advanced Care Clinic",
    location: "Kolkata, WB",
    quote:
      "PPR Global transformed our online presence and delivered a seamless booking experience for patients across Kolkata.",
    rating: 5
  },
  {
    id: "testimonial-2",
    name: "Amit S.",
    role: "Founder & Principal Designer",
    business: "Interior Studio",
    location: "Salt Lake, Kolkata",
    quote:
      "The editorial website layout elevated our studio brand. High-budget clients immediately comment on the aesthetic and clear project presentations.",
    rating: 5
  },
  {
    id: "testimonial-3",
    name: "Vikram R.",
    role: "Head of Marketing",
    business: "Strength & Fitness Hub",
    location: "New Town, Kolkata",
    quote:
      "Our WhatsApp membership enquiries spiked in the first month following launch. Fast load speed and clear call-to-actions make a real difference.",
    rating: 5
  },
  {
    id: "testimonial-4",
    name: "Priya M.",
    role: "Operations Head",
    business: "The Gourmet Kitchen",
    location: "Park Street, Kolkata",
    quote:
      "Zero platform commissions on direct orders and seamless mobile speed. Our customers love ordering directly from the new digital menu.",
    rating: 5
  }
];

// Optional results and live URLs mapped by project slug
// If result or liveUrl is undefined/empty, the component cleanly hides that element.
export const caseStudyProofBySlug: Record<string, CaseStudySocialProof> = {
  "interior-amit": {
    result: "Bookings up 42% in 60 days",
    liveUrl: "https://interioramit.com" // TODO: Update or leave empty
  },
  "as-interior-studio": {
    result: "3.2x higher mobile enquiry rate",
    liveUrl: "" // TODO: Add live URL if published
  },

  "iron-pulse-gym": {
    result: "Direct WhatsApp membership signups +80%",
    liveUrl: ""
  },
  "the-daily-roast-cafe": {
    result: "Zero commission direct orders up 55%",
    liveUrl: ""
  }
};
