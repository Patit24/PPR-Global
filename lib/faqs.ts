export type FAQItem = {
  question: string;
  answer: string;
};

// Editable data file for homepage FAQ accordion and JSON-LD schema
// NOTE: Edit answers anytime without touching presentation logic.
export const homepageFaqs: FAQItem[] = [
  {
    question: "What is your pricing and are there any hidden costs?",
    answer:
      "All websites start from $300 USD (~₹28,750 INR) with transparent scope. We provide an exact itemized proposal before starting. There are zero surprise fees or hidden charges; any optional 3rd-party costs (domain or premium APIs) are explained upfront."
  },
  {
    question: "What is the typical project timeline?",
    answer:
      "Standard business websites are built and launched in 7 to 14 days ('Live in 7 days' fast-track available for starter sites). Custom web applications, booking platforms, and CRM dashboards typically take 3 to 4 weeks depending on feature complexity."
  },
  {
    question: "Do I have 100% ownership of my website and code?",
    answer:
      "Yes, completely. Once the final milestone is reached, 100% full intellectual property, Next.js source code, GitHub repository rights, and domain access belong entirely to your business. We never lock clients into proprietary software."
  },
  {
    question: "How do hosting, domain, and monthly maintenance work?",
    answer:
      "We deploy websites on world-class high-speed infrastructure (Vercel / Cloudflare / AWS) with free SSL and global CDN. We configure your domain and provide optional affordable maintenance and backup plans, or hand over documentation for self-hosting."
  },
  {
    question: "What is your revision and feedback policy during development?",
    answer:
      "Every project includes iterative review stages: wireframe alignment, design mockup preview, and staging link revisions. We include dedicated revision rounds to refine typography, animations, copy, and layout until you are fully satisfied."
  },
  {
    question: "How does WhatsApp lead automation work for my business?",
    answer:
      "We connect your website forms and direct contact buttons to automated WhatsApp pipelines. When a customer taps a CTA or requests a quote, their details are pre-formatted so you receive instant actionable notifications on your phone with zero delay."
  },
  {
    question: "What happens after our website is launched?",
    answer:
      "After go-live, we submit your sitemap to Google Search Console and Bing IndexNow, perform speed audits, test all lead capture channels, and provide a 30-day post-launch technical warranty to ensure everything runs smoothly."
  }
];
