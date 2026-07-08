import {
  AppWindow,
  BadgeIndianRupee,
  Bot,
  ChartNoAxesCombined,
  Code2,
  Layers3,
  Megaphone,
  Palette,
  Search,
  Smartphone,
  Sparkles,
  Workflow
} from "lucide-react";

export const navItems = [
  { label: "Work", href: "#work" },
  { label: "Services", href: "#services" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" }
];

export const projects = [
  {
    slug: "interior-amit",
    title: "Interior Amit Website",
    year: "2026",
    tags: ["Interior", "UI/UX", "Responsive"],
    description:
      "A premium interior studio presentation with luxury visuals, mobile-first layouts, and consultation-focused actions.",
    image: "linear-gradient(135deg, #e7c08c 0%, #4b3729 42%, #0c0b0a 100%)",
    imageSrc: "/projects/showcase/interior-amit-showcase.png",
    imageFit: "contain",
    caseStudy: {
      category: "Website / UI UX / Portfolio",
      headline: "Interior Design Website.",
      summary:
        "A warm, editorial website system for an interior brand, designed to show high-value project photography, explain services clearly, and convert visitors into qualified enquiries.",
      scope: "Website + UI/UX",
      duration: "3 weeks",
      accent: "#e7c08c",
      highlights: [
        "Luxury visual direction for premium interiors",
        "Responsive service and portfolio pages",
        "WhatsApp-first consultation journey",
        "SEO-ready page structure"
      ],
      technologies: ["Next.js", "Tailwind", "Framer Motion", "WhatsApp CTA"],
      gallery: [
        {
          title: "Heritage Residence",
          label: "Portfolio",
          src: "/projects/interior/portfolio-heritage-shot.jpg",
          position: "84% 58%"
        },
        {
          title: "Design + Build",
          label: "Services",
          src: "/projects/interior/services-page-shot.jpg",
          position: "70% 55%"
        },
        {
          title: "Meaningful Details",
          label: "About",
          src: "/projects/interior/about-page-shot.jpg",
          position: "70% 52%"
        },
        {
          title: "Service Grid",
          label: "Experience",
          src: "/projects/interior/home-services-shot.jpg",
          position: "68% 48%"
        },
        {
          title: "Project Process",
          label: "Flow",
          src: "/projects/interior/process-page-shot.jpg",
          position: "68% 50%"
        }
      ]
    }
  },
  {
    slug: "as-interior-studio",
    title: "AS Interior Studio",
    year: "2026",
    tags: ["Interior", "Development", "Motion"],
    description:
      "A modern interior website concept built around elegant hero storytelling, project browsing, and lead generation.",
    image: "linear-gradient(135deg, #d9a33d 0%, #42301d 46%, #0d0d0d 100%)",
    imageSrc: "/projects/showcase/as-interior-showcase.png",
    imageFit: "contain",
    caseStudy: {
      category: "Interior / Web Design / Motion",
      headline: "Premium Studio Website.",
      summary:
        "A cinematic interior studio landing experience built around aspirational spaces, clear services, and consultation-focused conversion.",
      scope: "UI/UX + Frontend",
      duration: "3 weeks",
      accent: "#c9a24a",
      highlights: [
        "Elegant hero composition with desktop and mobile previews",
        "Clear project and service navigation",
        "Consultation-led call to action",
        "Luxury color palette and typography"
      ],
      technologies: ["HTML5", "CSS3", "JavaScript", "GSAP"]
    }
  },
  {
    slug: "dr-shaheen-dental-clinic",
    title: "Dr. Shaheen Dental Clinic",
    year: "2026",
    tags: ["Healthcare", "Booking", "SEO"],
    description:
      "A clean healthcare experience for treatment discovery, appointment booking, local trust, and clinic credibility.",
    image: "linear-gradient(135deg, #dffbf7 0%, #0fa3a3 45%, #062023 100%)",
    imageSrc: "/projects/showcase/dr-shaheen-dental-showcase.png",
    imageFit: "contain",
    caseStudy: {
      category: "Healthcare / Booking / SEO",
      headline: "Dental Clinic Website.",
      summary:
        "A clean, trustworthy healthcare website designed to help patients discover treatments, understand credibility, and book appointments quickly.",
      scope: "Website + Booking Flow",
      duration: "4 weeks",
      accent: "#0fa3a3",
      highlights: [
        "Patient-friendly treatment discovery",
        "Appointment-focused CTA system",
        "Local trust and review sections",
        "Mobile-first healthcare experience"
      ],
      technologies: ["Next.js", "Tailwind CSS", "Framer Motion", "SEO"]
    }
  },
  {
    slug: "deinterio-interior-group",
    title: "Deinterio Interior Group",
    year: "2025",
    tags: ["Business", "UI/UX", "Frontend"],
    description:
      "A dark premium website for an interior group, combining service credibility, craft highlights, and consultation CTAs.",
    image: "linear-gradient(135deg, #d4af37 0%, #1f2530 46%, #05070a 100%)",
    imageSrc: "/projects/showcase/deinterio-showcase.png",
    imageFit: "contain",
    caseStudy: {
      category: "Business / Interior / Frontend",
      headline: "Interior Group Website.",
      summary:
        "A premium dark interface for an interior company, built to showcase expertise, service proof, and high-intent consultation access.",
      scope: "UI/UX + Frontend",
      duration: "4 weeks",
      accent: "#d4af37",
      highlights: [
        "Trust-led service storytelling",
        "Premium material and craft sections",
        "Responsive desktop and mobile presentation",
        "Conversion-ready consultation CTA"
      ],
      technologies: ["Next.js", "Tailwind CSS", "GSAP", "Framer Motion"]
    }
  },
  {
    slug: "whatsapp-automation-crm",
    title: "WhatsApp Automation CRM",
    year: "2026",
    tags: ["Automation", "CRM", "Dashboard"],
    description:
      "A WhatsApp-first CRM for lead routing, follow-ups, reminders, and compact team visibility.",
    image: "linear-gradient(135deg, #b8ff3d 0%, #25673a 42%, #080a08 100%)",
    caseStudy: {
      category: "Automation / CRM / Dashboard",
      headline: "WhatsApp Automation CRM.",
      summary:
        "A lightweight lead-management system that routes WhatsApp enquiries, tracks follow-ups, and gives teams a simple view of daily sales activity.",
      scope: "Automation + CRM",
      duration: "2-5 weeks",
      accent: "#b8ff3d",
      highlights: [
        "Lead capture from WhatsApp",
        "Follow-up reminders and status stages",
        "Team dashboard for daily visibility",
        "Client-ready proposal and invoice flow"
      ],
      technologies: ["React", "Node.js", "WhatsApp API", "CRM Logic"]
    }
  },
  {
    slug: "mobile-app-development",
    title: "Mobile App Development",
    year: "2026",
    tags: ["iOS", "Android", "Product"],
    description:
      "Feature-driven mobile product builds from UX wireframes to launch-ready app architecture.",
    image: "linear-gradient(135deg, #ececff 0%, #5a607d 45%, #08080d 100%)",
    caseStudy: {
      category: "Mobile / Product / App Design",
      headline: "Mobile App Development.",
      summary:
        "A feature-led app build process for founders and businesses that need clean UX, scalable architecture, and launch-ready product screens.",
      scope: "UX + App Build",
      duration: "4-10 weeks",
      accent: "#9ea7ff",
      highlights: [
        "User flows and app architecture",
        "Cross-platform screen planning",
        "API and payment-ready structure",
        "Launch support and iteration roadmap"
      ],
      technologies: ["React Native", "Next.js APIs", "Firebase", "Payments"]
    }
  }
];

export const services = [
  { name: "Static Website", slug: "static-website-design-kolkata", icon: Code2 },
  { name: "Dynamic Website", slug: "dynamic-website-development-kolkata", icon: Workflow },
  { name: "Website with Admin Panel", slug: "website-with-admin-panel-kolkata", icon: AppWindow },
  { name: "3D Motion Animated Website", slug: "3d-motion-animated-website", icon: Sparkles },
  { name: "Mobile App Development", slug: "mobile-app-development", icon: Smartphone },
  { name: "Google Ads", slug: "google-ads-management-kolkata", icon: Megaphone },
  { name: "Meta Ads", slug: "meta-ads-management-kolkata", icon: ChartNoAxesCombined },
  { name: "SEO / GEO", slug: "seo-geo-services-kolkata", icon: Search },
  { name: "UI/UX Design", slug: "ui-ux-design-kolkata", icon: Palette },
  { name: "WhatsApp Automation", slug: "whatsapp-automation-crm", icon: Bot },
  { name: "CRM Dashboard", slug: "crm-dashboard-development", icon: Layers3 }
];

export const servicePages = [
  {
    slug: "website-development-kolkata",
    name: "Website Development Company in Kolkata",
    shortName: "Website Development",
    description:
      "PPR Global builds fast, affordable websites for Kolkata and West Bengal businesses, including static websites, dynamic websites, admin panels, and SEO-ready landing pages.",
    price: "Starts from ₹6,000",
    highlights: ["Static and dynamic websites", "Admin panel options", "WhatsApp enquiry flow", "SEO-ready structure"]
  },
  {
    slug: "whatsapp-automation-crm",
    name: "WhatsApp Automation & CRM Systems",
    shortName: "WhatsApp Automation",
    description:
      "Automate enquiries, follow-ups, lead tracking, and team visibility with WhatsApp-first CRM systems for Indian SMBs.",
    price: "Custom quote",
    highlights: ["Lead routing", "Follow-up reminders", "CRM dashboard", "Proposal and invoice flow"]
  },
  {
    slug: "mobile-app-development",
    name: "Mobile App Development",
    shortName: "Mobile Apps",
    description:
      "Launch user-friendly mobile apps with clean UX, scalable architecture, API integrations, and product-ready screens.",
    price: "Starts from ₹14,999",
    highlights: ["iOS and Android planning", "UX flows", "API integrations", "Launch support"]
  },
  {
    slug: "seo-geo-services-kolkata",
    name: "SEO / GEO Services in Kolkata",
    shortName: "SEO / GEO",
    description:
      "Improve local discovery with technical SEO, service pages, local keyword targeting, and AI-search-ready content structure.",
    price: "Custom quote",
    highlights: ["Local SEO", "Service page strategy", "Schema setup", "Search-intent content"]
  },
  {
    slug: "google-meta-ads-kolkata",
    name: "Google Ads & Meta Ads for Kolkata Businesses",
    shortName: "Ads Management",
    description:
      "Build paid ad funnels for service businesses with landing pages, WhatsApp leads, tracking, and campaign optimization.",
    price: "Custom quote",
    highlights: ["Google Ads", "Meta Ads", "Landing pages", "WhatsApp lead capture"]
  }
];

export const pricing = [
  { name: "Static Website", price: "₹6,000", detail: "Fast-launch one-page or starter website" },
  { name: "Website with Admin Panel", price: "₹7,500", detail: "Editable business website with control panel" },
  { name: "Dynamic Website", price: "₹9,999", detail: "Database-backed website for growing teams" },
  { name: "3D Motion Animated Website", price: "₹13,999", detail: "Premium animated experience with motion polish" },
  { name: "Apps", price: "Starts ₹14,999", detail: "Based on features, platforms, and integrations" }
];

export const stats = [
  { value: "25+", label: "Global Clients" },
  { value: "50+", label: "Websites & Apps" },
  { value: "20+", label: "Automation Systems" },
  { value: "30+", label: "Ads & SEO Campaigns" }
];

export const fieldOptions = {
  services: [
    "Static Website",
    "Dynamic Website",
    "Admin Panel Website",
    "Mobile App",
    "Ads / SEO",
    "Automation / CRM"
  ],
  budgets: ["₹3,999 - ₹9,999", "₹10,000 - ₹25,000", "₹25,000 - ₹75,000", "₹75,000+"]
};

export const BadgeIcon = BadgeIndianRupee;
