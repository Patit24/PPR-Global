export interface ScorecardOption {
  label: string;
  points: number;
}

export interface ScorecardQuestion {
  id: string;
  question: string;
  category: "website" | "booking" | "seo" | "reputation";
  options: ScorecardOption[];
}

export interface ScoreBand {
  minScore: number;
  maxScore: number;
  grade: "A" | "B" | "C";
  title: string;
  summary: string;
  recommendations: string[];
}

export const dentalScorecardQuestions: ScorecardQuestion[] = [
  {
    id: "q1_website",
    question: "How does your dental clinic website load on mobile phones?",
    category: "website",
    options: [
      { label: "Loads in under 1 second with instant WhatsApp button", points: 10 },
      { label: "Takes 2-4 seconds, but has decent mobile responsiveness", points: 6 },
      { label: "Slow (5+ seconds) or built on an outdated template", points: 2 },
      { label: "We don't have a dedicated website (only Facebook or Practo)", points: 0 }
    ]
  },
  {
    id: "q2_treatments",
    question: "Do you have dedicated landing pages for specific high-value dental treatments?",
    category: "website",
    options: [
      { label: "Yes, dedicated pages for Implants, Braces, Aligners & Root Canals", points: 10 },
      { label: "We have one general services page listing all treatments", points: 5 },
      { label: "Just a brief mention of treatments on the homepage", points: 2 },
      { label: "No treatment information online", points: 0 }
    ]
  },
  {
    id: "q3_booking",
    question: "How can patients currently book an appointment from your digital presence?",
    category: "booking",
    options: [
      { label: "Instant pre-filled WhatsApp booking with preferred date & slot", points: 10 },
      { label: "Click-to-call phone number only", points: 6 },
      { label: "A standard web contact form that sends an email", points: 3 },
      { label: "Patients must walk in or message on social media manually", points: 0 }
    ]
  },
  {
    id: "q4_reminders",
    question: "How does your clinic prevent patient appointment no-shows?",
    category: "booking",
    options: [
      { label: "Automated WhatsApp & SMS reminders sent 24h and 2h before the visit", points: 10 },
      { label: "Receptionist calls each patient manually the day before", points: 6 },
      { label: "Occasional manual reminder messages when staff has time", points: 3 },
      { label: "No reminder workflow; no-shows happen regularly", points: 0 }
    ]
  },
  {
    id: "q5_gbp",
    question: "Where does your clinic appear on Google Maps when searching 'Dentist near me' locally?",
    category: "seo",
    options: [
      { label: "Consistently in the Top 3 Local Map Pack in our locality", points: 10 },
      { label: "Positions 4 to 10 on Google Maps", points: 6 },
      { label: "Buried on page 2 or beyond", points: 2 },
      { label: "Google Business Profile is unverified or not set up", points: 0 }
    ]
  },
  {
    id: "q6_reviews",
    question: "What is your Google Business Profile review profile?",
    category: "reputation",
    options: [
      { label: "50+ verified 5-star reviews with active owner replies", points: 10 },
      { label: "20 to 50 reviews, mostly positive", points: 7 },
      { label: "Fewer than 20 reviews with irregular patient feedback", points: 3 },
      { label: "Fewer than 5 reviews or no system to collect reviews", points: 0 }
    ]
  },
  {
    id: "q7_review_automation",
    question: "Do you have an automated process to collect Google reviews post-treatment?",
    category: "reputation",
    options: [
      { label: "Automated WhatsApp review link sent 2 hours post-procedure", points: 10 },
      { label: "Front desk verbally asks patients or displays a QR code at reception", points: 6 },
      { label: "We occasionally remind patients via text message", points: 2 },
      { label: "No system; we rely purely on spontaneous patient reviews", points: 0 }
    ]
  },
  {
    id: "q8_doctor_credentials",
    question: "Are doctor degrees (BDS/MDS), specialties, and clinic credentials highlighted online?",
    category: "website",
    options: [
      { label: "Prominently displayed with council registration, photos, and clinical background", points: 10 },
      { label: "Doctor names mentioned with basic degrees", points: 6 },
      { label: "Doctor names only, no degree or registration details", points: 2 },
      { label: "Clinic name only; doctors are not profiled online", points: 0 }
    ]
  },
  {
    id: "q9_patient_faq",
    question: "Does your website answer common patient anxieties (pain, procedure duration, safety)?",
    category: "website",
    options: [
      { label: "Comprehensive FAQs addressing pain management, sterilization & pricing clarity", points: 10 },
      { label: "Brief general FAQ section on the clinic page", points: 5 },
      { label: "Patients must call to ask basic questions", points: 2 },
      { label: "No procedural or patient guidance online", points: 0 }
    ]
  },
  {
    id: "q10_advertising",
    question: "How do you generate new patient inquiries each month?",
    category: "seo",
    options: [
      { label: "Multichannel: Organic Local SEO + targeted Google/Meta Ads + WhatsApp funnel", points: 10 },
      { label: "Google Maps visibility + occasional social media posting", points: 6 },
      { label: "Practo / Justdial aggregators with high per-lead or commission costs", points: 4 },
      { label: "Strictly word-of-mouth and foot traffic referrals", points: 1 }
    ]
  }
];

export const dentalScoreBands: ScoreBand[] = [
  {
    minScore: 80,
    maxScore: 100,
    grade: "A",
    title: "High-Performing Clinic System (Top 10% in Kolkata)",
    summary:
      "Your clinic has built a strong digital foundation. You are capturing high-intent local patients and providing a clean booking path. The main focus now is scaling high-value treatments (Implants, Aligners) and maximizing patient lifetime retention.",
    recommendations: [
      "Launch targeted Google Search Ads specifically for high-margin cosmetic and restorative treatments.",
      "Implement deep schema markup (Dentist, MedicalProcedure, FAQPage) to capture Google AI Overviews.",
      "Automate 6-month check-up recall messages on WhatsApp to increase recurring patient hygiene visits."
    ]
  },
  {
    minScore: 50,
    maxScore: 79,
    grade: "B",
    title: "Moderate Digital Foundation with Critical Patient Leaks",
    summary:
      "Your practice attracts some local attention, but you are losing 40-60% of potential patients due to slow loading speeds, lack of dedicated treatment pages, or friction in your appointment booking process.",
    recommendations: [
      "Upgrade to a sub-second Next.js clinic website with dedicated treatment landing pages for root canals and implants.",
      "Replace manual phone scheduling with a direct 1-tap WhatsApp slot booking flow.",
      "Establish an automated post-treatment WhatsApp review prompt to steadily build Google 5-star authority."
    ]
  },
  {
    minScore: 0,
    maxScore: 49,
    grade: "C",
    title: "Urgent Clinic Visibility & Conversion Modernization Needed",
    summary:
      "Your clinic is virtually invisible to patients searching for immediate dental care in your Kolkata neighborhood. Nearby competitors are capturing the majority of walk-ins, emergency consultations, and high-value treatments.",
    recommendations: [
      "Build a modern, mobile-first clinic website with doctor credentials, clinic photos, and clear pricing context.",
      "Claim, optimize, and geo-target your Google Business Profile to rank in the local 3-pack for 'dentist near me'.",
      "Deploy instant WhatsApp enquiry paths so prospective patients can reach your front desk immediately without calling."
    ]
  }
];

export function calculateScoreBand(score: number): ScoreBand {
  for (const band of dentalScoreBands) {
    if (score >= band.minScore && score <= band.maxScore) {
      return band;
    }
  }
  return dentalScoreBands[dentalScoreBands.length - 1];
}
