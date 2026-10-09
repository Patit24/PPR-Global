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
    name: "Dr. A. Shaheen", // TODO: Replace with verified client name
    role: "Lead Dentist & Director",
    business: "Dental Care Clinic",
    location: "Kolkata, WB",
    quote:
      "TODO: Client quote about website design, online appointment bookings, and local patient trust. 'PPR Global transformed our online presence and delivered a seamless booking experience for patients across Kolkata.'",
    rating: 5
  },
  {
    id: "testimonial-2",
    name: "Amit S.", // TODO: Replace with verified client name
    role: "Founder & Principal Designer",
    business: "Interior Studio",
    location: "Salt Lake, Kolkata",
    quote:
      "TODO: Client quote about high-ticket interior leads and visual portfolio clarity. 'The editorial website layout elevated our studio brand. High-budget clients immediately comment on the aesthetic.'",
    rating: 5
  },
  {
    id: "testimonial-3",
    name: "Vikram R.", // TODO: Replace with verified client name
    role: "Head of Marketing",
    business: "Strength & Fitness Hub",
    location: "New Town, Kolkata",
    quote:
      "TODO: Client quote about WhatsApp gym membership signups and landing page conversion. 'Our WhatsApp membership enquiries spiked in the first month following launch.'",
    rating: 5
  },
  {
    id: "testimonial-4",
    name: "Priya M.", // TODO: Replace with verified client name
    role: "Operations Head",
    business: "The Gourmet Kitchen",
    location: "Park Street, Kolkata",
    quote:
      "TODO: Client quote about direct restaurant table reservations without aggregator commissions. 'Zero platform commissions on direct orders and seamless mobile speed.'",
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
  "dr-shaheen-dental-clinic": {
    result: "Appointment booking requests +65%",
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
