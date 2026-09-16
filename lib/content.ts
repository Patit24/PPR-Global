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
  { label: "Work", href: "/#work" },
  { label: "Services", href: "/#services" },
  { label: "Resources", href: "/resources" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" }
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
    imageAlt: "Interior Amit website design and development Kolkata",
    imageFit: "contain",
    caseStudy: {
      category: "Website / UI UX / Portfolio",
      headline: "Interior Design Website.",
      summary:
        "A warm, editorial website system for an interior brand, designed to show high-value project photography, explain services clearly, and convert visitors into qualified enquiries.",
      narrative:
        "Interior Amit needed a digital presence that could match the premium feel of its physical design work. Before the project, the studio's visual proof, services, and consultation path were not presented in a way that helped high-intent visitors understand the quality quickly. PPR Global shaped the website around large interior visuals, warm editorial typography, clear service sections, and a WhatsApp-first enquiry journey. The final experience gives the brand a more polished portfolio, makes completed work easier to explore on mobile, and gives potential clients a direct route from inspiration to consultation without searching through scattered contact points.",
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
    imageAlt: "AS Interior Studio website UI/UX design Kolkata",
    imageFit: "contain",
    caseStudy: {
      category: "Interior / Web Design / Motion",
      headline: "Premium Studio Website.",
      summary:
        "A cinematic interior studio landing experience built around aspirational spaces, clear services, and consultation-focused conversion.",
      narrative:
        "AS Interior Studio needed a website concept that could feel aspirational without hiding the practical details clients look for before booking a consultation. The design direction started with a rich hero, strong device previews, and a luxury palette that supports the studio's positioning. PPR Global organized the experience around services, portfolio browsing, and consultation calls to action so visitors can move from visual interest to enquiry with fewer steps. The outcome is a cinematic, responsive presentation that helps the studio look more established, keeps the service journey clear, and gives mobile users the same premium first impression as desktop visitors.",
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
    imageAlt: "Dr. Shaheen Dental Clinic website with online booking Kolkata",
    imageFit: "contain",
    caseStudy: {
      category: "Healthcare / Booking / SEO",
      headline: "Dental Clinic Website.",
      summary:
        "A clean, trustworthy healthcare website designed to help patients discover treatments, understand credibility, and book appointments quickly.",
      narrative:
        "Dr. Shaheen's Dental Clinic needed a patient-friendly website that could build trust before someone called the clinic. Before the project, treatment information, credibility signals, and appointment actions were not packaged into a clear digital journey. PPR Global designed a calm healthcare interface with treatment discovery, local trust sections, appointment-focused calls to action, and mobile layouts for patients searching from their phones. The result is a clinic website that explains care with more confidence, reduces friction for first-time visitors, and turns interested patients into same-day appointment requests through clear booking and WhatsApp contact paths.",
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
    imageAlt: "Deinterio Interior Group business website Kolkata",
    imageFit: "contain",
    caseStudy: {
      category: "Business / Interior / Frontend",
      headline: "Interior Group Website.",
      summary:
        "A premium dark interface for an interior company, built to showcase expertise, service proof, and high-intent consultation access.",
      narrative:
        "Deinterio Interior Group needed a darker, more premium web presence that could communicate trust, execution quality, and service depth in one place. The challenge was to present interior expertise without making the site feel generic or overly decorative. PPR Global created a structured business website with craft highlights, premium material messaging, responsive device presentation, and consultation-ready calls to action. The final experience gives prospects a clearer reason to trust the company, helps the brand explain its strengths faster, and creates a polished path for visitors who are ready to discuss a design or turnkey interior project.",
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
    imageSrc: "/projects/showcase/whatsapp-crm-showcase.png",
    imageAlt: "WhatsApp automation CRM dashboard for small business Kolkata",
    imageFit: "contain",
    caseStudy: {
      category: "Automation / CRM / Dashboard",
      headline: "WhatsApp Automation CRM.",
      summary:
        "A lightweight lead-management system that routes WhatsApp enquiries, tracks follow-ups, and gives teams a simple view of daily sales activity.",
      narrative:
        "Many small teams rely on WhatsApp for sales but lose follow-ups once chats become busy. This CRM concept was built for businesses that need a simple operating layer above daily messages. PPR Global planned a WhatsApp-first workflow that captures lead details, tracks status stages, reminds teams about follow-ups, and gives owners a compact dashboard for daily visibility. The system is intentionally lightweight so restaurants, clinics, interiors, and service teams can adopt it without changing how they already communicate. The outcome is cleaner lead handling, fewer missed enquiries, and a more professional proposal-to-invoice flow from one practical dashboard.",
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
    imageSrc: "/projects/showcase/mobile-app-development-showcase.png",
    imageAlt: "Mobile app development Kolkata iOS Android",
    imageFit: "contain",
    caseStudy: {
      category: "Mobile / Product / App Design",
      headline: "Mobile App Development.",
      summary:
        "A feature-led app build process for founders and businesses that need clean UX, scalable architecture, and launch-ready product screens.",
      narrative:
        "Mobile app projects often begin with a good idea but no clear product flow, feature priority, or launch structure. PPR Global's mobile app process starts by defining the core user journey, essential screens, data needs, and integrations before development begins. The showcased app direction focuses on clean UX, cross-platform planning, API-ready architecture, payment possibilities, and a roadmap that can grow after launch. This gives founders and business owners a practical path from concept to usable product. Instead of only creating screens, the work clarifies how customers move through the app and how the business can support future versions.",
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
  },
  {
    slug: "wedstory-wedding-photography",
    title: "WedStory Wedding Studio",
    year: "2026",
    tags: ["Wedding", "Photography", "Booking"],
    description:
      "A luxury wedding photography and cinematic film portfolio featuring full-screen visual storytelling, package breakdowns, and instant WhatsApp booking.",
    image: "linear-gradient(135deg, #f7d794 0%, #c44569 48%, #1f0b18 100%)",
    imageSrc: "/projects/showcase/wedstory-showcase.png",
    imageAlt: "WedStory Wedding Studio photography website Kolkata",
    imageFit: "contain",
    caseStudy: {
      category: "Photography / Portfolio / Booking",
      headline: "Luxury Wedding Photography Portfolio.",
      summary:
        "A cinematic visual portfolio built for a high-end wedding photography studio, designed to showcase couple love stories, highlight package tiers, and drive instant consultation requests on WhatsApp.",
      narrative:
        "Wedding photography clients make decisions based on emotion, visual aesthetic, and trust. WedStory needed a digital experience that reflected the elegance of destination weddings and cinematic films. PPR Global developed a mobile-first visual experience with full-screen photography grids, wedding film embeds, transparent package breakdowns (Pre-Wedding, Traditional, Candid, Cinematic), and direct WhatsApp booking. Since launching, inquiries from high-budget couples increased significantly, and client consultations became much easier to qualify.",
      scope: "Website + Booking Journey",
      duration: "3 weeks",
      accent: "#f7d794",
      highlights: [
        "Cinematic full-screen photo & film showcase",
        "Transparent package pricing comparison",
        "Direct WhatsApp booking & availability check",
        "Lightning-fast mobile image loading"
      ],
      technologies: ["Next.js", "Tailwind CSS", "Framer Motion", "WhatsApp CTA"]
    }
  },
  {
    slug: "pulse-smart-gym",
    title: "Pulse Smart Gym",
    year: "2026",
    tags: ["Fitness", "SaaS", "Membership"],
    description:
      "A modern fitness club platform with class schedules, trainer rosters, membership tiers, and free trial pass booking via WhatsApp.",
    image: "linear-gradient(135deg, #00f2fe 0%, #4facfe 50%, #051329 100%)",
    imageSrc: "/projects/showcase/pulse-gym-showcase.png",
    imageAlt: "Pulse Smart Gym website and membership booking Kolkata",
    imageFit: "contain",
    caseStudy: {
      category: "Fitness / Membership / Local SEO",
      headline: "High-Energy Fitness Club Platform.",
      summary:
        "A conversion-focused gym website built to drive free trial passes, explain membership perks, and turn nearby fitness enthusiasts into active members.",
      narrative:
        "Pulse Smart Gym needed to stand out in a competitive local market where gyms typically rely only on word-of-mouth. PPR Global created an energetic, dark-themed fitness platform highlighting cutting-edge gym equipment, certified trainer credentials, daily class schedules (CrossFit, Strength, HIIT, Yoga), and transparent membership plans. A prominent 'Claim Free Day Pass' conversion funnel routes prospective members straight to the front desk WhatsApp, giving the sales team immediate contact with high-intent leads.",
      scope: "Web Design + Trial Funnel",
      duration: "2 weeks",
      accent: "#4facfe",
      highlights: [
        "Interactive weekly class timetable",
        "Certified trainer profiles & specialties",
        "Instant 1-Day Pass WhatsApp booking",
        "Local SEO ranking for nearby gym searches"
      ],
      technologies: ["Next.js", "Tailwind CSS", "Framer Motion", "Lead Funnel"]
    }
  },
  {
    slug: "rp-sports-activewear",
    title: "RP Sports & Activewear",
    year: "2026",
    tags: ["Ecommerce", "Sports", "Catalog"],
    description:
      "A high-energy sports equipment and custom teamwear catalog with instant product enquiry, size guides, and WhatsApp order flow.",
    image: "linear-gradient(135deg, #ff5e62 0%, #ff9966 52%, #1a0808 100%)",
    imageSrc: "/projects/showcase/rp-sports-showcase.png",
    imageAlt: "RP Sports activewear and athletic gear website",
    imageFit: "contain",
    caseStudy: {
      category: "Ecommerce / Sports / Catalog",
      headline: "Performance Sports & Custom Teamwear Catalog.",
      summary:
        "A responsive digital catalog built for sports apparel, professional athletic gear, and customized team jersey bulk orders with direct WhatsApp checkout.",
      narrative:
        "RP Sports distributes athletic gear, cricket equipment, and customized team jerseys for schools, clubs, and corporate tournaments. The challenge was displaying a massive inventory without the heavy friction of standard cart checkouts that cause high drop-offs in India. PPR Global implemented a dynamic product catalog with category filtering, size charts, and a one-click WhatsApp order button that automatically pre-populates product name, SKU, and sizing into the message. This streamlined customer inquiries and expedited wholesale teamwear orders.",
      scope: "Catalog + WhatsApp Commerce",
      duration: "3 weeks",
      accent: "#ff5e62",
      highlights: [
        "Category filtering across multi-sport gear",
        "Custom team jersey bulk order builder",
        "One-click WhatsApp order with pre-filled SKU",
        "Mobile-optimized product galleries"
      ],
      technologies: ["Next.js", "Tailwind CSS", "Lucide React", "WhatsApp API"]
    }
  },
  {
    slug: "daily-roast-cafe",
    title: "The Daily Roast Cafe",
    year: "2026",
    tags: ["Hospitality", "Menu", "Ordering"],
    description:
      "An artisan cafe and bistro website with interactive categorized menu, digital QR access, table reservation system, and direct WhatsApp ordering.",
    image: "linear-gradient(135deg, #e67e22 0%, #d35400 45%, #180900 100%)",
    imageSrc: "/projects/showcase/daily-roast-showcase.png",
    imageAlt: "The Daily Roast Cafe website and digital menu Kolkata",
    imageFit: "contain",
    caseStudy: {
      category: "Hospitality / Restaurant / QR Menu",
      headline: "Artisan Cafe Website & WhatsApp Ordering.",
      summary:
        "A warm, aesthetic digital presence for an artisan specialty coffee roastery and bistro, eliminating 3rd-party aggregator fees through direct WhatsApp ordering.",
      narrative:
        "The Daily Roast wanted to offer their customers an effortless way to view the seasonal coffee menu, reserve tables, and place takeaway orders without paying exorbitant 25-30% aggregator commission fees. PPR Global built a warm, editorial restaurant website featuring an interactive digital QR menu, dietary tags (Vegan, Gluten-Free), table booking forms, and a zero-commission WhatsApp ordering system. The site also established local SEO visibility for coffee lovers and remote workers seeking work-friendly cafes in the city.",
      scope: "Branding + Digital Menu + Ordering",
      duration: "2 weeks",
      accent: "#e67e22",
      highlights: [
        "Interactive digital QR menu with search & tags",
        "Zero-commission WhatsApp takeout ordering",
        "Table reservation request flow",
        "Work-friendly amenities & reviews showcase"
      ],
      technologies: ["Next.js", "Tailwind CSS", "Framer Motion", "QR Menu Engine"]
    }
  },
  {
    slug: "sahil-erp-system",
    title: "Sahil ERP Business Suite",
    year: "2026",
    tags: ["Enterprise", "ERP", "Dashboard"],
    description:
      "A custom cloud ERP software for small and medium businesses featuring inventory tracking, GST billing, client ledgers, and team role permissions.",
    image: "linear-gradient(135deg, #6a11cb 0%, #2575fc 55%, #050d21 100%)",
    imageSrc: "/projects/showcase/sahil-erp-showcase.png",
    imageAlt: "Sahil ERP business management software dashboard",
    imageFit: "contain",
    caseStudy: {
      category: "Enterprise / SaaS / CRM & ERP",
      headline: "Custom Cloud ERP & Inventory Management.",
      summary:
        "A bespoke, lightweight ERP solution engineered for growing Indian enterprises to replace chaotic spreadsheets with real-time stock tracking, invoicing, and profit analytics.",
      narrative:
        "Operating multiple warehouses and retail distribution channels on manual spreadsheets led to stock discrepancies, delayed billing, and lack of clarity on daily profit margins. PPR Global engineered Sahil ERP—a tailored, web-based business management suite designed for simplicity and speed. The system integrates real-time inventory management, GST-compliant invoice generation, supplier purchase orders, client credit ledgers, and role-based access for warehouse staff and managers. Daily operations became 3x faster, with zero inventory losses reported post-implementation.",
      scope: "Full-Stack ERP Architecture",
      duration: "6 weeks",
      accent: "#2575fc",
      highlights: [
        "Real-time multi-warehouse inventory sync",
        "1-click GST-compliant PDF invoice creation",
        "Client & vendor ledger tracking",
        "Granular role-based security & audit logs"
      ],
      technologies: ["Next.js", "TypeScript", "Tailwind CSS", "PostgreSQL / Supabase"]
    }
  }
];

export const services = [
  { name: "Static Website", slug: "static-website-design-kolkata", icon: Code2 },
  { name: "Dynamic Website", slug: "dynamic-website-development-kolkata", icon: Workflow },
  { name: "Website with Admin Panel", slug: "website-with-admin-panel-kolkata", icon: AppWindow },
  { name: "3D Motion Animated Website", slug: "3d-motion-animated-website", icon: Sparkles },
  { name: "Mobile App Development", slug: "mobile-app-development-kolkata", icon: Smartphone },
  { name: "Google Ads", slug: "google-ads-kolkata", icon: Megaphone },
  { name: "Meta Ads", slug: "meta-ads-kolkata", icon: ChartNoAxesCombined },
  { name: "SEO / GEO", slug: "seo-kolkata", icon: Search },
  { name: "UI/UX Design", slug: "ui-ux-design-kolkata", icon: Palette },
  { name: "WhatsApp Automation", slug: "whatsapp-automation-kolkata", icon: Bot },
  { name: "CRM Dashboard", slug: "crm-kolkata", icon: Layers3 }
];

export const servicePages = [
  {
    slug: "website-development-kolkata",
    name: "Website Development Company in Kolkata",
    shortName: "Website Development",
    metaTitle: "Website Development Company in Kolkata | Starts ₹6,000 (7-Day Launch)",
    metaDescription:
      "Looking for a top website development company in Kolkata? We build fast, responsive websites with WhatsApp integration & SEO from ₹6,000. Get a free quote!",
    description:
      "PPR Global builds fast, affordable websites for Kolkata and West Bengal businesses, including static websites, dynamic websites, admin panels, and SEO-ready landing pages.",
    price: "Starts from ₹6,000",
    highlights: ["Static and dynamic websites", "Admin panel options", "WhatsApp enquiry flow", "SEO-ready structure"],
    keywords: [
      "website development company in Kolkata",
      "web design agency Kolkata",
      "affordable website developer Kolkata",
      "business website development West Bengal"
    ],
    body: [
      "PPR Global builds business websites for owners who need a sharp online presence without a slow agency process. The work is focused on clear messaging, fast loading pages, mobile-friendly layouts, WhatsApp enquiry flow, and the sections a customer needs before they call or submit a lead.",
      "This service is useful for restaurants, clinics, interior brands, gyms, real estate teams, consultants, and local service businesses in Kolkata and West Bengal. Projects can start as a clean static website and grow into dynamic pages, admin panels, blogs, booking flows, payment links, SEO landing pages, or custom integrations as the business matures.",
      "Every website is planned around conversion first: what the visitor should understand, what proof they need, and how quickly they can contact the business. PPR Global also helps with basic technical SEO, analytics-ready structure, responsive design, and launch support so the site can be used seriously from day one."
    ],
    faqs: [
      {
        question: "How much does a website cost in Kolkata?",
        answer:
          "A starter static website begins from ₹6,000. Final pricing depends on page count, admin panel needs, booking, payment, WhatsApp automation, SEO, and design complexity."
      },
      {
        question: "Can the website include an admin panel?",
        answer:
          "Yes. PPR Global builds websites with admin panels for businesses that need to update content, manage enquiries, publish pages, or control service information without editing code."
      }
    ],
    relatedProjectSlug: "interior-amit"
  },
  {
    slug: "whatsapp-automation-kolkata",
    name: "WhatsApp Automation for Small Business in Kolkata",
    shortName: "WhatsApp Automation",
    metaTitle: "WhatsApp Automation for Business in Kolkata | Instant CRM & Chatbots",
    metaDescription:
      "Automate enquiries, follow-ups & customer CRM on WhatsApp for your Kolkata business. Stop losing leads in chat. 48-hour setup. Book a free live demo today!",
    description:
      "WhatsApp automation for small business in Kolkata helps owners capture enquiries, follow up faster, and manage leads without losing chats.",
    price: "Custom quote",
    highlights: ["Lead routing", "Follow-up reminders", "CRM dashboard", "Proposal and invoice flow"],
    keywords: [
      "whatsapp automation for small business kolkata",
      "WhatsApp CRM for small business India",
      "lead management automation Kolkata",
      "WhatsApp business automation Kolkata"
    ],
    body: [
      "WhatsApp automation for small business in Kolkata is useful when enquiries arrive all day but the team has no clean way to tag, assign, quote, or follow up. PPR Global builds practical WhatsApp-first systems that capture customer details, route leads, schedule reminders, and keep every conversation tied to a visible sales status.",
      "A typical setup can include lead source tracking, auto-replies, customer tags, follow-up reminders, quote request flows, uploaded files, invoice status, and a compact internal dashboard for owners or team members. This makes the system useful for clinics, salons, restaurants, real estate teams, interior studios, coaching businesses, service agencies, and local sales teams.",
      "The goal is not to overcomplicate operations. The system is designed around the workflow the team already uses, then adds automation where it saves time: routing, reminders, status updates, proposal requests, and reporting. PPR Global can connect the CRM to a website form, landing page, ads funnel, or direct WhatsApp click-to-chat campaign."
    ],
    faqs: [
      {
        question: "Can WhatsApp automation work with website enquiries?",
        answer:
          "Yes. Website forms, landing pages, and proposal buttons can send structured enquiry details into WhatsApp and the CRM so the team can follow up faster."
      },
      {
        question: "Is this only for large teams?",
        answer:
          "No. The system can be lightweight for a solo business owner or expanded for teams that need lead assignment, status tracking, uploaded files, and reporting."
      }
    ],
    relatedProjectSlug: "whatsapp-automation-crm"
  },
  {
    slug: "crm-kolkata",
    name: "CRM for Small Business in Kolkata",
    shortName: "Small Business CRM",
    metaTitle: "CRM for Small Business in Kolkata | Custom Sales & Lead Dashboard",
    metaDescription:
      "Affordable custom CRM dashboards for small businesses in Kolkata. Track leads, sales pipelines, follow-up alerts & WhatsApp chats in one place. Try a free demo!",
    description:
      "CRM for small business in Kolkata gives owners a simple dashboard for leads, follow-ups, files, invoices, and team visibility.",
    price: "Custom quote",
    highlights: ["Lead pipeline", "Follow-up tracking", "Uploaded files", "Team dashboard"],
    keywords: [
      "crm for small business kolkata",
      "small business CRM Kolkata",
      "simple CRM setup India",
      "CRM dashboard development Kolkata"
    ],
    body: [
      "CRM for small business in Kolkata should feel simple enough for daily use, not like enterprise software forced onto a small team. PPR Global designs lightweight CRM dashboards that show new leads, pending tasks, follow-up dates, uploaded files, chat notes, invoices, and the current progress of each customer.",
      "This works especially well for dentists, salons, real estate agents, interior studios, gyms, coaching centres, and local service teams that receive enquiries from WhatsApp, calls, ads, forms, and referrals. Instead of tracking everything across notebooks or chat history, the CRM keeps the next action visible.",
      "A build can start with a clean lead tracker and grow into roles, admin controls, notifications, proposal status, payment records, reporting, and website integrations. The aim is to give the owner a practical operating system that matches how the business already sells."
    ],
    faqs: [
      {
        question: "Is a small business CRM expensive?",
        answer:
          "It does not have to be. PPR Global can start with a focused CRM for leads and follow-ups, then add advanced modules only when the business needs them."
      },
      {
        question: "Can the CRM connect with WhatsApp leads?",
        answer:
          "Yes. WhatsApp enquiries, website forms, landing page leads, and ads enquiries can be structured into one follow-up dashboard."
      }
    ],
    relatedProjectSlug: "whatsapp-automation-crm"
  },
  {
    slug: "lead-management",
    name: "Lead Management System for Small Business in India",
    shortName: "Lead Management",
    metaTitle: "Lead Management System for Small Business in India | PPR Global",
    metaDescription:
      "Never lose another sales lead. Simple, high-impact lead management software for Indian SMBs. Track WhatsApp, calls & website enquiries. Free consultation!",
    description:
      "A lead management system for small business in India helps teams capture, assign, follow up, and report on enquiries from one place.",
    price: "Custom quote",
    highlights: ["Lead capture", "Status stages", "Task reminders", "Owner reports"],
    keywords: [
      "lead management system for small business india",
      "lead tracking system India",
      "sales follow up dashboard",
      "lead management software Kolkata"
    ],
    body: [
      "A lead management system for small business in India becomes valuable when enquiries are coming from multiple places and nobody is fully sure what happened next. PPR Global builds compact systems that record the source, customer need, status, owner, next follow-up date, notes, files, and proposal stage for each lead.",
      "The setup can support restaurants, clinics, gyms, real estate teams, interiors, education businesses, and service providers that rely on fast response time. Owners can see which leads are new, which are pending, which need a quote, and which are close to conversion.",
      "The system can be connected to forms, WhatsApp buttons, ads funnels, landing pages, and admin panels. It can stay simple at launch and later expand into team permissions, invoices, automated reminders, reporting, and customer history."
    ],
    faqs: [
      {
        question: "What should a lead management system include?",
        answer:
          "At minimum it should include lead source, contact details, requirement, status, next follow-up, notes, assigned person, and a clear owner view."
      },
      {
        question: "Can this replace spreadsheets?",
        answer:
          "Yes. PPR Global can convert an existing spreadsheet workflow into a cleaner dashboard with reminders, filters, roles, and reporting."
      }
    ],
    relatedProjectSlug: "whatsapp-automation-crm"
  },
  {
    slug: "website-for-dentists-kolkata",
    name: "Website for Dentists in Kolkata",
    shortName: "Dentist Website",
    metaTitle: "Dental Clinic Website Design in Kolkata | Instant WhatsApp Booking",
    metaDescription:
      "Attract more patients with custom dental clinic websites in Kolkata. WhatsApp appointment booking, patient reviews, treatment guides & local SEO. Starts ₹6,000.",
    description:
      "A website for dentists in Kolkata should build trust, explain treatments, support appointment booking, and connect patients through WhatsApp.",
    price: "Starts from ₹6,000",
    highlights: ["Treatment pages", "Appointment CTA", "Google reviews", "Local SEO structure"],
    keywords: [
      "website for dentists kolkata",
      "dental clinic website Kolkata",
      "dentist appointment website",
      "healthcare website design Kolkata"
    ],
    body: [
      "A website for dentists in Kolkata needs to do more than look clean. It should help patients understand treatments, trust the clinic, check location details, read credibility signals, and book an appointment without confusion. PPR Global designs dental websites around patient clarity and fast enquiry flow.",
      "The page structure can include treatment sections, doctor profiles, clinic photos, appointment buttons, WhatsApp booking, Google review prompts, FAQs, map links, and service-area language for local search. The design stays calm, mobile-friendly, and easy for patients to scan.",
      "For growing clinics, the website can expand into blogs, treatment landing pages, lead tracking, follow-up reminders, ads landing pages, or a simple booking dashboard. The goal is a website that supports both patient trust and daily clinic operations."
    ],
    faqs: [
      {
        question: "Can the site include appointment booking?",
        answer:
          "Yes. The booking flow can use WhatsApp, a form, calendar links, or a custom dashboard depending on how the clinic wants to manage appointments."
      },
      {
        question: "Can dental treatment pages help SEO?",
        answer:
          "Yes. Dedicated pages for services like root canal, braces, implants, whitening, and emergency care can help Google understand clinic relevance."
      }
    ],
    relatedProjectSlug: "dr-shaheen-dental-clinic"
  },
  {
    slug: "website-for-interior-designers-kolkata",
    name: "Website for Interior Designers in Kolkata",
    shortName: "Interior Website",
    metaTitle: "Interior Design Website Company in Kolkata | Luxury Studio Portfolios",
    metaDescription:
      "Showcase your interior projects with high-converting portfolio websites in Kolkata. Luxury UI, project galleries & direct WhatsApp consultations. Starts ₹6,000.",
    description:
      "A website for interior designers in Kolkata should showcase premium work, explain services, and convert visitors into consultation enquiries.",
    price: "Starts from ₹6,000",
    highlights: ["Portfolio showcase", "Consultation CTA", "Luxury UI", "Project gallery"],
    keywords: [
      "website for interior designers kolkata",
      "interior design website Kolkata",
      "portfolio website for interior studio",
      "interior designer web design India"
    ],
    body: [
      "A website for interior designers in Kolkata should make the visitor feel the quality of the studio before they ever call. PPR Global builds visual, portfolio-led websites with strong project galleries, service pages, consultation CTAs, and mobile layouts that make completed work easy to explore.",
      "The structure can include residential and commercial services, before-after galleries, design process sections, testimonials, project categories, budget enquiry forms, and WhatsApp consultation buttons. The visual direction can be minimal, luxury, editorial, or highly animated depending on the studio brand.",
      "Interior businesses also benefit from local SEO pages and case-study style content because clients often compare quality, trust, timeline, and budget before reaching out. A focused website helps turn that research into qualified enquiries."
    ],
    faqs: [
      {
        question: "Can you add a project gallery?",
        answer:
          "Yes. The website can include categorized galleries for flats, villas, offices, kitchens, bedrooms, and commercial interiors."
      },
      {
        question: "Can the design look premium?",
        answer:
          "Yes. PPR Global can build a luxury portfolio style with motion, typography, image-led sections, and strong consultation calls to action."
      }
    ],
    relatedProjectSlug: "interior-amit"
  },
  {
    slug: "website-for-gyms-kolkata",
    name: "Website for Gyms in Kolkata",
    shortName: "Gym Website",
    metaTitle: "Gym & Fitness Website Design in Kolkata | Free Trial Pass Booking",
    metaDescription:
      "Grow gym memberships with high-converting fitness websites in Kolkata. Includes trial pass booking, class schedules, trainer profiles & WhatsApp CTAs. Starts ₹6,000.",
    description:
      "A website for gyms in Kolkata helps fitness businesses promote memberships, class schedules, trainers, trials, and WhatsApp bookings.",
    price: "Starts from ₹6,000",
    highlights: ["Membership sections", "Class booking", "Trainer profiles", "Trial enquiry flow"],
    keywords: [
      "website for gym kolkata",
      "gym website design Kolkata",
      "fitness website development India",
      "gym membership landing page"
    ],
    body: [
      "A website for gyms in Kolkata should turn attention into trial bookings, membership enquiries, and class signups. PPR Global builds fitness websites with clear pricing sections, trainer profiles, class schedules, transformation proof, WhatsApp CTAs, and mobile-first layouts for people browsing quickly.",
      "The site can include personal training, group classes, facilities, gallery, offers, reviews, trial forms, QR membership links, and location-focused SEO content. For gyms running ads, PPR Global can also create landing pages focused on trial passes, weight loss programs, or local membership campaigns.",
      "As the gym grows, the website can connect to CRM tracking, follow-up reminders, payment links, attendance tools, or simple dashboards. The first goal is always clear: help more nearby people enquire and visit.",
    ],
    faqs: [
      {
        question: "Can a gym website collect trial bookings?",
        answer:
          "Yes. Trial forms can send details to WhatsApp or a CRM so staff can follow up quickly."
      },
      {
        question: "Can you build landing pages for gym ads?",
        answer:
          "Yes. PPR Global can build focused landing pages for membership offers, transformation programs, personal training, and local campaigns."
      }
    ],
    relatedProjectSlug: "mobile-app-development"
  },
  {
    slug: "website-for-real-estate-kolkata",
    name: "Website for Real Estate Agents in Kolkata",
    shortName: "Real Estate Website",
    metaTitle: "Real Estate Website & CRM in Kolkata | Property Buyer Lead System",
    metaDescription:
      "Custom real estate websites in Kolkata with verified property listings, buyer requirement forms & WhatsApp CRM. Capture serious property enquiries fast. Free quote!",
    description:
      "A website for real estate agents in Kolkata helps showcase properties, capture buyer leads, and manage enquiries through WhatsApp or CRM.",
    price: "Starts from ₹6,000",
    highlights: ["Property listings", "Buyer lead forms", "WhatsApp enquiry", "CRM integration"],
    keywords: [
      "website for real estate agents kolkata",
      "real estate website Kolkata",
      "property listing website India",
      "real estate CRM Kolkata"
    ],
    body: [
      "A website for real estate agents in Kolkata should make property browsing simple and lead capture fast. PPR Global builds real estate websites with listing sections, location pages, enquiry buttons, WhatsApp contact, buyer requirements, project highlights, and trust-building content for local markets.",
      "The setup can support residential flats, commercial spaces, rental listings, land, project launches, broker portfolios, and developer microsites. Each property can include photos, price range, location, features, map context, and enquiry actions that send structured details to the sales team.",
      "For teams handling many enquiries, the website can connect to a CRM with lead source, property interest, budget, follow-up date, files, and status. This gives agents a cleaner way to manage serious buyers without losing conversations."
    ],
    faqs: [
      {
        question: "Can the website include property listings?",
        answer:
          "Yes. Listings can be static for a starter site or editable through an admin panel for frequent updates."
      },
      {
        question: "Can enquiries go to WhatsApp and CRM?",
        answer:
          "Yes. Buyer enquiries can open WhatsApp with property details and also be tracked in a lead dashboard."
      }
    ],
    relatedProjectSlug: "whatsapp-automation-crm"
  },
  {
    slug: "mobile-app-development-kolkata",
    name: "Mobile App Development Company in Kolkata",
    shortName: "Mobile Apps",
    metaTitle: "Mobile App Development Company in Kolkata | iOS & Android Apps from ₹14,999",
    metaDescription:
      "Leading mobile app development agency in Kolkata. Custom iOS & Android apps, startup MVPs, sleek UI/UX & fast turnaround. Packages from ₹14,999. Talk to our founder!",
    description:
      "Mobile app development company in Kolkata building clean iOS, Android, and MVP products with UX planning, APIs, dashboards, and launch support.",
    price: "Starts from ₹14,999",
    highlights: ["iOS and Android planning", "UX flows", "API integrations", "Launch support"],
    keywords: [
      "mobile app development company kolkata",
      "mobile app development Kolkata",
      "app developer West Bengal",
      "affordable mobile app development India"
    ],
    body: [
      "PPR Global works as a mobile app development company in Kolkata for founders, local businesses, and service teams that need a practical product instead of only a clickable concept. The process starts with the core user flow: what the customer needs to do, what screens are required, what data should be stored, and what integrations are needed for the first usable version.",
      "App builds can include onboarding, dashboards, booking, payments, user accounts, notifications, admin control, API integrations, and responsive product screens. For early-stage businesses, the focus is usually on launching a clean MVP that feels credible, works reliably, and can be improved after real users begin using it.",
      "The team supports both app UX planning and development execution. That means the product is not just coded screen by screen; it is shaped around business goals, user clarity, technical scalability, and launch readiness for Kolkata, India, and global clients."
    ],
    faqs: [
      {
        question: "What is the starting cost for an app?",
        answer:
          "Apps start from ₹14,999 and depend on features, screens, login, backend, payments, admin panel, and integrations."
      },
      {
        question: "Can you build an MVP first?",
        answer:
          "Yes. PPR Global can plan and build a first version with the most important user flows, then expand features after launch feedback."
      }
    ],
    relatedProjectSlug: "mobile-app-development"
  },
  {
    slug: "seo-kolkata",
    name: "SEO Company in Kolkata",
    shortName: "SEO Kolkata",
    metaTitle: "Best SEO Company in Kolkata | #1 Google Rankings & AI Search (GEO)",
    metaDescription:
      "Rank #1 on Google with Kolkata's top SEO company. Technical SEO, local search optimization, and Generative Engine Optimization (GEO). Request a free SEO audit!",
    description:
      "SEO company in Kolkata helping businesses improve technical SEO, local service pages, schema, internal links, and search-intent content.",
    price: "Custom quote",
    highlights: ["Local SEO", "Service page strategy", "Schema setup", "Search-intent content"],
    keywords: [
      "seo company kolkata",
      "SEO services Kolkata",
      "local SEO West Bengal",
      "AI search optimization Kolkata"
    ],
    body: [
      "PPR Global is an SEO company in Kolkata for businesses that want to be found by people searching for real services, not just brand names. The work focuses on technical cleanup, metadata, service pages, structured data, local intent keywords, internal linking, and content that answers buyer questions clearly.",
      "For Kolkata businesses, local SEO usually starts with service-area language, consistent contact details, Google Business Profile readiness, location-focused pages, and case studies that show relevant proof. The same foundation also helps AI search systems understand business services, pricing signals, location, and credibility.",
      "This service pairs well with website redesigns, new landing pages, Google Business Profile work, and content planning. The aim is to build a search foundation that can compound over time instead of relying only on paid ads."
    ],
    faqs: [
      {
        question: "Do you handle local SEO for Kolkata businesses?",
        answer:
          "Yes. PPR Global can improve location signals, service pages, metadata, schema, and content structure for Kolkata and West Bengal searches."
      },
      {
        question: "How long does SEO take?",
        answer:
          "Technical fixes can be completed quickly, but ranking improvements usually need consistent pages, content, reviews, links, and Google Business Profile activity over time."
      }
    ],
    relatedProjectSlug: "dr-shaheen-dental-clinic"
  },
  {
    slug: "geo-optimization",
    name: "Generative Engine Optimization India",
    shortName: "GEO Optimization",
    metaTitle: "Generative Engine Optimization (GEO) India | AI Search Visibility",
    metaDescription:
      "Get your business cited in Google AI Overviews, ChatGPT & Perplexity. Generative Engine Optimization (GEO) services for Indian businesses. Free AI audit!",
    description:
      "Generative Engine Optimization India service for businesses that want clearer visibility in AI answers, search summaries, and entity-based discovery.",
    price: "Custom quote",
    highlights: ["AI-search-ready pages", "Entity signals", "FAQ structure", "Schema markup"],
    keywords: [
      "generative engine optimization india",
      "GEO services India",
      "AI search optimization India",
      "answer engine optimization India"
    ],
    body: [
      "Generative Engine Optimization India is for businesses that want their website to be easier for AI search tools, answer engines, and modern search summaries to understand. PPR Global structures pages so services, location, pricing context, proof, FAQs, and brand details are clear instead of buried in vague marketing copy.",
      "A GEO setup can include entity-focused service pages, schema markup, FAQ blocks, short answer sections, internal links, consistent business details, author and founder signals, and clean metadata. This helps AI systems interpret what the business does, who it serves, and why it may be relevant for a specific search.",
      "GEO does not replace SEO. It works best when technical SEO, local SEO, useful content, Google Business Profile signals, and real case studies are already being improved together. PPR Global uses GEO as part of a practical search visibility plan for Indian service businesses."
    ],
    faqs: [
      {
        question: "Is GEO different from SEO?",
        answer:
          "Yes. SEO focuses on traditional search visibility, while GEO improves how clearly AI answer systems can understand and summarize the business."
      },
      {
        question: "Does GEO need new pages?",
        answer:
          "Often yes. Dedicated service pages, FAQs, schema, and clear entity information make the website easier for AI and search systems to parse."
      }
    ],
    relatedProjectSlug: "whatsapp-automation-crm"
  },
  {
    slug: "digital-marketing-kolkata",
    name: "Affordable Digital Marketing Agency in Kolkata",
    shortName: "Digital Marketing",
    metaTitle: "Affordable Digital Marketing Agency in Kolkata | Google Ads, Meta & SEO",
    metaDescription:
      "High-ROI digital marketing in Kolkata. Search ads, Meta campaigns & landing pages designed to generate qualified leads directly on WhatsApp. Book a free call!",
    description:
      "Affordable digital marketing agency in Kolkata helping small businesses with SEO, Google Ads, Meta Ads, landing pages, and WhatsApp lead funnels.",
    price: "Custom quote",
    highlights: ["SEO planning", "Google and Meta campaigns", "Landing pages", "WhatsApp lead capture"],
    keywords: [
      "affordable digital marketing agency kolkata",
      "digital marketing agency Kolkata",
      "small business marketing Kolkata",
      "lead generation agency Kolkata"
    ],
    body: [
      "PPR Global is an affordable digital marketing agency in Kolkata for small businesses that need enquiries, calls, WhatsApp leads, and a clearer online presence without a heavy agency process. The focus is on practical channels that connect directly to revenue conversations: SEO pages, Google Ads, Meta Ads, landing pages, forms, and WhatsApp click-to-chat flows.",
      "A typical campaign starts by understanding the business type, offer, location, budget, and follow-up process. From there, PPR Global can improve the website journey, create campaign-specific landing pages, set up tracking, structure ad funnels, and connect leads into WhatsApp or a CRM dashboard.",
      "This service fits clinics, interiors, gyms, restaurants, real estate teams, education businesses, local services, and new agencies. The goal is not noise or vanity traffic; it is a cleaner path from discovery to enquiry to follow-up."
    ],
    faqs: [
      {
        question: "Can digital marketing include both SEO and ads?",
        answer:
          "Yes. PPR Global can combine SEO service pages, Google Ads, Meta Ads, landing pages, and WhatsApp lead capture depending on the business goal."
      },
      {
        question: "Is this suitable for a small budget?",
        answer:
          "Yes. The plan can start with the highest-impact pages or campaigns first, then expand once lead quality and follow-up are clearer."
      }
    ],
    relatedProjectSlug: "interior-amit"
  },
  {
    slug: "google-ads-kolkata",
    name: "Google Ads Agency in Kolkata",
    shortName: "Google Ads",
    metaTitle: "Google Ads Agency in Kolkata | High-Intent PPC & Direct WhatsApp Leads",
    metaDescription:
      "Certified Google Ads management in Kolkata. Stop wasting ad budget with high-converting landing pages, targeted search campaigns & instant leads. Free strategy call!",
    description:
      "Google Ads agency in Kolkata creating search campaigns, landing pages, conversion tracking, and WhatsApp-ready lead funnels.",
    price: "Custom quote",
    highlights: ["Search campaigns", "Landing page copy", "Conversion tracking", "Lead quality review"],
    keywords: [
      "google ads agency kolkata",
      "Google Ads management Kolkata",
      "Google Search ads Kolkata",
      "paid search agency Kolkata"
    ],
    body: [
      "PPR Global works as a Google Ads agency in Kolkata for businesses that need high-intent enquiries from people already searching for a service. Campaigns can be planned around service keywords, location terms, budget limits, landing page relevance, and the follow-up workflow after a lead arrives.",
      "The setup can include keyword research, ad groups, search copy, negative keywords, landing page recommendations, conversion tracking, call or WhatsApp actions, and basic reporting. The campaign is designed around the buyer journey, not only clicks.",
      "Google Ads works best when the website or landing page clearly explains the offer, proof, pricing context, location, and contact action. PPR Global can improve those pieces together so campaign traffic has a stronger chance of turning into real enquiries."
    ],
    faqs: [
      {
        question: "Can Google Ads leads go to WhatsApp?",
        answer:
          "Yes. Campaign landing pages can include WhatsApp buttons, call buttons, and structured forms that help the team respond faster."
      },
      {
        question: "Do I need a landing page for Google Ads?",
        answer:
          "A focused landing page is recommended because it improves message match, trust, conversion tracking, and lead quality."
      }
    ],
    relatedProjectSlug: "dr-shaheen-dental-clinic"
  },
  {
    slug: "meta-ads-kolkata",
    name: "Meta Ads Agency in Kolkata",
    shortName: "Meta Ads",
    metaTitle: "Meta Ads Agency in Kolkata | Facebook & Instagram Lead Generation",
    metaDescription:
      "Drive qualified customer enquiries with Facebook & Instagram ads in Kolkata. High-converting creative testing, landing pages & WhatsApp follow-ups. Get a proposal!",
    description:
      "Meta Ads agency in Kolkata building Facebook and Instagram lead funnels with creative direction, landing pages, and WhatsApp follow-up.",
    price: "Custom quote",
    highlights: ["Facebook ads", "Instagram ads", "Creative testing", "WhatsApp follow-up"],
    keywords: [
      "meta ads agency kolkata",
      "Facebook ads agency Kolkata",
      "Instagram ads management Kolkata",
      "Meta lead ads Kolkata"
    ],
    body: [
      "PPR Global is a Meta Ads agency in Kolkata for businesses that want to generate awareness, enquiries, and WhatsApp conversations through Facebook and Instagram. The work can include campaign structure, creative angles, offer messaging, lead forms, landing pages, and follow-up flows.",
      "Meta campaigns are strongest when the creative, audience, offer, page, and response process are aligned. PPR Global can help plan the ad journey from first impression to enquiry, then connect the lead into WhatsApp or a CRM so the team can respond quickly.",
      "This is useful for local services, clinics, interiors, gyms, restaurants, real estate, education, events, and product-based businesses. Campaigns can start focused, then expand after the best offers and lead sources become clear."
    ],
    faqs: [
      {
        question: "Can Meta Ads collect leads without a website?",
        answer:
          "Yes, lead forms and WhatsApp campaigns can work without a full website, but a landing page often improves trust and qualification."
      },
      {
        question: "Can you help with ad creatives?",
        answer:
          "Yes. PPR Global can help shape creative direction, hooks, landing page copy, and campaign messaging for service businesses."
      }
    ],
    relatedProjectSlug: "interior-amit"
  },
  {
    slug: "healthcare-meta-ads-kolkata",
    name: "Healthcare Meta Ads Agency in Kolkata",
    shortName: "Healthcare Meta Ads",
    metaTitle: "Healthcare Meta Ads Agency in Kolkata | Patient Appointment Funnels",
    metaDescription:
      "Ethical, high-converting Facebook & Instagram ads for doctors & clinics in Kolkata. Generate genuine patient enquiries directly on WhatsApp. Free consultation!",
    description:
      "Healthcare Meta Ads agency in Kolkata helping clinics and medical service providers build compliant, trust-led Facebook and Instagram lead funnels.",
    price: "Custom quote",
    highlights: ["Clinic lead funnels", "Appointment CTAs", "Trust-led landing pages", "WhatsApp follow-up"],
    keywords: [
      "healthcare meta ads agency kolkata",
      "medical meta ads agency kolkata",
      "clinic Facebook ads Kolkata",
      "dental clinic Meta Ads Kolkata"
    ],
    body: [
      "PPR Global supports healthcare Meta Ads in Kolkata for clinics, dentists, wellness providers, and medical service businesses that need clearer appointment enquiries from Facebook and Instagram. The work focuses on trust-led messaging, service clarity, appointment actions, and a follow-up process that helps the clinic respond quickly.",
      "Healthcare advertising needs more care than generic lead generation. Campaigns should avoid exaggerated promises, use responsible wording, explain services clearly, and guide people toward a booking or consultation request. PPR Global can connect ads with landing pages, WhatsApp, call buttons, and enquiry forms.",
      "This service is suitable for dental clinics, diagnostic services, wellness clinics, physiotherapy, aesthetics, and other appointment-based healthcare businesses. The goal is a clean patient journey from ad to service information to enquiry."
    ],
    faqs: [
      {
        question: "Can healthcare ads connect to appointment booking?",
        answer:
          "Yes. Ads can lead to WhatsApp, phone calls, lead forms, or a landing page with appointment-focused CTAs."
      },
      {
        question: "Do healthcare ads need careful wording?",
        answer:
          "Yes. Medical and clinic campaigns should use responsible, clear copy and avoid unrealistic claims."
      }
    ],
    relatedProjectSlug: "dr-shaheen-dental-clinic"
  },
  {
    slug: "ui-ux-design-kolkata",
    name: "UI UX Design Agency in Kolkata",
    shortName: "UI/UX Design",
    metaTitle: "UI UX Design Agency in Kolkata | Web, Mobile App & Dashboard Design",
    metaDescription:
      "Award-winning UI/UX design in Kolkata. We design modern website interfaces, mobile apps, and SaaS dashboards with conversion-focused UX. View our design showcase!",
    description:
      "UI UX design agency in Kolkata designing websites, apps, dashboards, landing pages, and conversion-focused digital product interfaces.",
    price: "Custom quote",
    highlights: ["Website UI", "Mobile app UX", "Dashboard design", "Conversion-focused flows"],
    keywords: [
      "ui ux design agency kolkata",
      "UI UX designer Kolkata",
      "app UI design Kolkata",
      "website UI design agency Kolkata"
    ],
    body: [
      "PPR Global is a UI UX design agency in Kolkata for businesses that need interfaces people can understand quickly and use confidently. The work covers website UI, mobile app screens, dashboards, landing pages, admin panels, CRM systems, and conversion-focused enquiry flows.",
      "A strong UI/UX process starts with the user action: book, enquire, buy, upload, track, approve, or manage. PPR Global maps that flow first, then designs layouts, navigation, forms, visual hierarchy, mobile behavior, and interaction states around the real task.",
      "The design style can be minimal, premium, bold, playful, or operational depending on the business. The goal is always the same: make the product easier to trust, easier to use, and easier to launch with clean development."
    ],
    faqs: [
      {
        question: "Can you design before development?",
        answer:
          "Yes. PPR Global can create UI/UX layouts first, then move into development once the screens and flow are approved."
      },
      {
        question: "Do you design dashboards and admin panels?",
        answer:
          "Yes. CRM dashboards, admin panels, lead trackers, and business software interfaces are part of the UI/UX service."
      }
    ],
    relatedProjectSlug: "whatsapp-automation-crm"
  },
  {
    slug: "ecommerce-development-kolkata",
    name: "Ecommerce Website Development in Kolkata",
    shortName: "Ecommerce",
    metaTitle: "Ecommerce Website Development Kolkata | Online Stores & WhatsApp Order",
    metaDescription:
      "Launch your online store with Kolkata's trusted ecommerce developer. Fast mobile checkout, WhatsApp ordering & secure payment gateways. Start selling online now!",
    description:
      "Ecommerce website development in Kolkata for stores that need product pages, checkout flows, payment setup, order management, and mobile-first shopping.",
    price: "Custom quote",
    highlights: ["Product catalog", "Checkout planning", "Payment setup", "Order management"],
    keywords: [
      "ecommerce website development kolkata",
      "online store development Kolkata",
      "Shopify website Kolkata",
      "ecommerce developer West Bengal"
    ],
    body: [
      "PPR Global builds ecommerce websites in Kolkata for businesses that want to sell products online with a clean product journey and reliable enquiry or checkout flow. The build can include product categories, product detail pages, cart, payment links or gateways, WhatsApp ordering, delivery information, and basic order management.",
      "For small businesses, ecommerce does not always need to start as a complicated marketplace. A focused catalog with strong product photos, clear pricing, trust sections, WhatsApp support, and payment readiness can be enough to start selling and learn from real customers.",
      "The website can later expand into coupons, inventory, customer accounts, analytics, SEO category pages, email or WhatsApp updates, and admin controls. PPR Global keeps the first version practical so the store can launch without unnecessary delay."
    ],
    faqs: [
      {
        question: "Can ecommerce include WhatsApp ordering?",
        answer:
          "Yes. Products can include direct WhatsApp enquiry or ordering buttons, especially for businesses that want to confirm stock before payment."
      },
      {
        question: "Can you add payment gateway integration?",
        answer:
          "Yes. Payment links or gateway integrations can be added depending on the store requirements and platform choice."
      }
    ],
    relatedProjectSlug: "mobile-app-development"
  }
];

export const resourcePosts = [
  {
    slug: "website-cost-kolkata",
    title: "How Much Does a Website Cost in Kolkata?",
    metaTitle: "How Much Does a Website Cost in Kolkata? (2026 Price Breakdown)",
    metaDescription:
      "Complete 2026 website cost guide in Kolkata: static websites (₹6,000), admin panels (₹7,500), dynamic sites, and apps. Avoid hidden fees & pick the right tier.",
    description:
      "A practical pricing guide for Kolkata business owners comparing static websites, admin panels, dynamic websites, and add-on features.",
    keywords: ["website cost Kolkata", "website development pricing India", "affordable website Kolkata"],
    body: [
      "Website pricing in Kolkata depends on how much the site needs to do. A simple static website can be affordable because it mainly needs clean design, mobile responsiveness, clear copy, and a contact flow. A website with an admin panel costs more because the business needs editable content, login, dashboard screens, and database-backed features.",
      "The biggest cost drivers are page count, content writing, design complexity, booking, payment, WhatsApp integration, SEO pages, animation, and custom software logic. For many small businesses, the smart first step is a sharp starter website that can be expanded after real enquiries begin coming in."
    ]
  },
  {
    slug: "whatsapp-crm-small-business",
    title: "Why Small Businesses Need WhatsApp CRM",
    metaTitle: "Why Small Businesses Need WhatsApp CRM (Convert 40% More Leads)",
    metaDescription:
      "Discover how Indian small businesses use WhatsApp CRM automation to respond in 30 seconds, automate follow-ups, and stop losing sales in chat history. Free guide!",
    description:
      "How WhatsApp automation helps Indian SMBs capture leads, follow up faster, and avoid losing enquiries in chat history.",
    keywords: ["WhatsApp CRM small business", "WhatsApp automation India", "lead tracking WhatsApp"],
    body: [
      "Most Indian small businesses already sell through WhatsApp, but leads often get lost because messages are mixed with personal chats, old enquiries, files, payment screenshots, and follow-up reminders. A lightweight WhatsApp CRM turns those conversations into a simple pipeline.",
      "The best setup is usually practical: customer name, source, requirement, status, next follow-up date, notes, files, and invoice or proposal stage. This gives the owner visibility without forcing the team into complicated enterprise software."
    ]
  },
  {
    slug: "local-seo-service-pages",
    title: "Why Service Pages Help Local SEO",
    metaTitle: "Why Dedicated Service Pages Dominate Local SEO in Kolkata",
    metaDescription:
      "Why a 1-page website hurts your rankings. Learn how dedicated local service pages help your Kolkata business rank on Google Page 1 for high-intent search queries.",
    description:
      "Why a one-page website struggles to rank for multiple services, and how dedicated service pages help Google understand your business.",
    keywords: ["local SEO service pages", "SEO for Kolkata business", "service page SEO"],
    body: [
      "A single homepage can explain a business, but it usually cannot rank well for every service the business offers. Google needs focused URLs that clearly match search intent. A website development page, WhatsApp automation page, SEO page, and app development page can each target a different buyer need.",
      "Good service pages do not need to be huge. They need a clear headline, useful explanation, what is included, proof or related work, FAQs, local context, and a simple enquiry path. That structure helps both visitors and search engines understand the page."
    ]
  },
  {
    slug: "generative-engine-optimization-india",
    title: "What Is Generative Engine Optimization for Indian Businesses?",
    metaTitle: "What is GEO? Complete Generative Engine Optimization Guide India",
    metaDescription:
      "Learn how Generative Engine Optimization (GEO) helps Indian businesses get cited in Google AI Overviews, ChatGPT, and Perplexity answers. Free actionable guide.",
    description:
      "A practical guide to GEO, AI search visibility, structured service pages, schema, FAQs, and local entity signals for Indian businesses.",
    keywords: [
      "generative engine optimization india",
      "GEO services India",
      "AI search optimization India",
      "answer engine optimization"
    ],
    body: [
      "Generative Engine Optimization helps AI search systems understand a business clearly enough to summarize it, compare it, and connect it to relevant service searches. For Indian businesses, that means clear service pages, consistent location details, real case studies, FAQ answers, schema markup, and content that explains who the service is for.",
      "GEO is strongest when it sits on top of good SEO. A website still needs fast pages, helpful titles, internal links, local keywords, Google Business Profile signals, and useful body copy. The extra GEO layer makes the information easier for answer engines to parse: services, prices, coverage area, process, proof, and contact options.",
      "A practical first step is to turn thin service pages into focused pages of 150-300 words or more, add FAQ schema, link related case studies, and keep the brand entity consistent across the site, Google Business Profile, maps, social profiles, and directories.",
      "For PPR Global clients, GEO work usually starts with the pages that buyers and AI systems both need: service pages, pricing explanations, founder and business facts, location signals, FAQs, project proof, and clean internal links. Once those are in place, blog guides and directory citations can support the same entity from outside the website."
    ],
    faqs: [
      {
        question: "What is Generative Engine Optimization?",
        answer:
          "Generative Engine Optimization is the process of making website content easier for AI search tools and answer engines to understand, summarize, and cite."
      },
      {
        question: "Does GEO replace SEO?",
        answer:
          "No. GEO works best with SEO, local search signals, schema markup, helpful service pages, and consistent business entity information."
      },
      {
        question: "What pages help GEO the most?",
        answer:
          "Service pages, pricing guides, FAQ pages, case studies, founder pages, and location pages are useful because they give AI systems clear facts to extract."
      },
      {
        question: "How quickly can GEO improvements be added?",
        answer:
          "Basic schema, FAQs, internal links, and service-page copy can often be improved quickly, while broader authority signals need consistent publishing and citations."
      }
    ],
    relatedServiceSlugs: ["geo-optimization", "seo-kolkata", "website-development-kolkata"]
  },
  {
    slug: "restaurant-website-whatsapp-ordering-kolkata",
    title: "Restaurant Website and WhatsApp Ordering Setup in Kolkata",
    metaTitle: "Restaurant Website & WhatsApp Ordering in Kolkata | Zero Commission",
    metaDescription:
      "Eliminate third-party aggregator commissions with a custom restaurant website, digital QR menus & direct WhatsApp ordering in Kolkata. Full setup guide!",
    description:
      "What Kolkata restaurants should include on a website: menu pages, WhatsApp ordering, Google reviews, table booking, QR menus, and local SEO.",
    keywords: [
      "restaurant website Kolkata",
      "WhatsApp ordering website Kolkata",
      "restaurant website development India",
      "QR menu website Kolkata"
    ],
    body: [
      "A restaurant website in Kolkata should make ordering and table enquiries fast. The most useful setup includes a clear menu, opening hours, location, Google Maps link, photo gallery, offers, WhatsApp ordering, table booking, and a mobile layout that loads quickly for customers checking from their phones.",
      "WhatsApp ordering is often the simplest first step because many local customers already use it. A good button can pass the item name, pickup or delivery request, and customer message into WhatsApp so the restaurant team does not have to ask for the same details again.",
      "For local SEO, restaurants should publish cuisine, neighbourhood, delivery area, menu categories, reviews, photos, and frequently asked questions as readable text. This helps Google and AI search systems understand what the restaurant serves and where it is relevant.",
      "Cost depends on how advanced the ordering flow needs to be. A starter restaurant website can begin as a static site with menu and WhatsApp buttons, then expand into QR menu pages, table booking, payment links, an admin panel for menu updates, or a CRM for order and enquiry follow-up."
    ],
    faqs: [
      {
        question: "What should a restaurant website include?",
        answer:
          "It should include menu pages, WhatsApp ordering, table booking, location, opening hours, reviews, photos, offers, and clear call-to-action buttons."
      },
      {
        question: "Can WhatsApp ordering work without a full ecommerce system?",
        answer:
          "Yes. A restaurant can start with WhatsApp ordering and later add cart, payment, delivery tracking, or CRM features when needed."
      },
      {
        question: "Does WhatsApp ordering need a separate app?",
        answer:
          "No. Most restaurants can start with website buttons, menu pages, and pre-filled WhatsApp messages before investing in a separate customer app."
      },
      {
        question: "Can a restaurant update its menu without a developer?",
        answer:
          "Yes. A website with an admin panel can let the restaurant update menu items, prices, offers, photos, and availability."
      },
      {
        question: "How long does a restaurant website take to build?",
        answer:
          "A simple restaurant website can launch quickly when content and photos are ready. More advanced booking, payment, and admin features add extra build time."
      }
    ],
    relatedServiceSlugs: [
      "website-development-kolkata",
      "whatsapp-automation-kolkata",
      "website-with-admin-panel-kolkata",
      "digital-marketing-kolkata"
    ]
  },
  {
    slug: "gym-booking-website-kolkata",
    title: "Why Gyms in Kolkata Need a Booking Website",
    metaTitle: "Why Gyms in Kolkata Need a Booking Website (Trial Pass Funnels)",
    metaDescription:
      "How Kolkata gyms double trial bookings and membership sales using mobile-friendly websites, class schedules & instant WhatsApp booking flows. Read the guide.",
    description:
      "A practical guide for Kolkata gyms planning membership pages, trial booking, trainer profiles, class schedules, and WhatsApp lead capture.",
    keywords: [
      "gym booking website Kolkata",
      "gym website Kolkata",
      "fitness website development India",
      "gym membership landing page Kolkata"
    ],
    body: [
      "A gym website in Kolkata should turn interest into trial bookings and membership enquiries. The page should quickly show facilities, membership options, trainer profiles, class schedules, transformation proof, location, opening hours, and a direct WhatsApp or callback action.",
      "Most gym visitors are comparing trust, price, distance, trainer quality, and convenience. A good website answers those questions before the person calls. For campaigns, a focused landing page can promote a trial pass, personal training program, weight-loss offer, or new membership plan.",
      "A booking website can also connect with CRM or WhatsApp follow-up. That gives the gym team a simple way to track who requested a trial, who visited, who needs a reminder, and which campaign generated the lead.",
      "PPR Global usually builds this as a conversion path: membership offer, proof, class schedule, trainer trust, trial form, WhatsApp follow-up, and optional CRM stages. That keeps the first version practical while leaving room for payment links, member dashboards, or mobile app features later."
    ],
    faqs: [
      {
        question: "Can a gym website collect trial bookings?",
        answer:
          "Yes. The site can use a form, WhatsApp button, or CRM-connected lead flow to collect trial booking requests."
      },
      {
        question: "Should gyms show prices online?",
        answer:
          "Showing starting prices or membership ranges can improve trust and qualify leads, especially when paired with a consultation or trial offer."
      },
      {
        question: "How long does a gym booking website take to build?",
        answer:
          "A focused gym website can launch quickly when photos, pricing, schedule, and offer details are ready. CRM, payment, or app features add more time."
      },
      {
        question: "Can gym leads go to WhatsApp and CRM together?",
        answer:
          "Yes. A trial form can open WhatsApp for fast response and also save the lead into a CRM dashboard for follow-up tracking."
      },
      {
        question: "Can the gym website support ads campaigns?",
        answer:
          "Yes. A landing page can be created for trial passes, personal training, weight-loss programs, or local membership campaigns."
      }
    ],
    relatedServiceSlugs: [
      "website-for-gyms-kolkata",
      "crm-kolkata",
      "lead-management",
      "meta-ads-kolkata"
    ]
  },
  {
    slug: "real-estate-website-crm-kolkata",
    title: "Real Estate Website and CRM Setup for Kolkata Agents",
    metaTitle: "Real Estate Website & CRM for Kolkata Agents | Buyer Lead Funnel",
    metaDescription:
      "How Kolkata property brokers capture and close high-intent buyer leads with custom property listing websites and automated WhatsApp CRM follow-ups. Full guide.",
    description:
      "How real estate agents can use property pages, buyer lead forms, WhatsApp enquiries, CRM stages, and local SEO to manage serious buyers.",
    keywords: [
      "real estate website CRM Kolkata",
      "property website Kolkata",
      "real estate lead management India",
      "real estate website for agents Kolkata"
    ],
    body: [
      "A real estate website for Kolkata agents should help buyers understand properties quickly and send a serious enquiry. Useful sections include property listings, location details, price range, floor plan, amenities, photos, map context, buyer budget forms, and WhatsApp buttons tied to each property.",
      "The CRM side matters because property leads often need repeated follow-up. A simple dashboard can track buyer name, budget, preferred location, property interest, next follow-up date, notes, files, and current status. This stops serious conversations from getting lost inside WhatsApp history.",
      "For SEO, each property or project page should include readable location and feature details instead of only images. Local area names, property type, budget range, and FAQs help search engines understand the listing and help buyers decide faster.",
      "PPR Global can build a starter property website first, then add admin listing controls, WhatsApp automation, buyer requirements, CRM stages, and campaign landing pages. That approach helps agents launch quickly without losing the option to scale into a more complete lead system."
    ],
    faqs: [
      {
        question: "Can property enquiries go directly to WhatsApp?",
        answer:
          "Yes. Each listing can open WhatsApp with the property name, budget range, and enquiry context already included."
      },
      {
        question: "Do real estate agents need a CRM?",
        answer:
          "A CRM is useful when enquiries come from multiple channels and the agent needs reminders, status tracking, notes, and buyer history."
      },
      {
        question: "Can agents update property listings themselves?",
        answer:
          "Yes. A website with an admin panel can let agents add, edit, hide, or update property listings without touching code."
      },
      {
        question: "Can a real estate website show buyer budget forms?",
        answer:
          "Yes. Forms can collect budget, preferred location, property type, timeline, and contact details before the sales call."
      },
      {
        question: "Can real estate leads be tracked by property?",
        answer:
          "Yes. CRM stages can store which property each buyer asked about, source, follow-up date, notes, and current status."
      }
    ],
    relatedServiceSlugs: [
      "website-for-real-estate-kolkata",
      "crm-kolkata",
      "lead-management",
      "whatsapp-automation-kolkata"
    ]
  },
  {
    slug: "top-web-design-companies-in-kolkata",
    title: "Top Web Design and Development Companies in Kolkata (2026 Guide)",
    metaTitle: "Top Web Design Companies in Kolkata 2026 | Ratings & Pricing Guide",
    metaDescription:
      "Looking for the best web development agency in Kolkata? Compare top companies, pricing tiers (starts ₹6,000), delivery speed, tech stack, and portfolio proof.",
    description:
      "A detailed comparison of Kolkata's top web development agencies, evaluating modern tech stacks, turnaround times, transparent pricing, and common traps to avoid.",
    keywords: [
      "web design company in Kolkata",
      "best web developers Kolkata",
      "top IT agencies Kolkata",
      "website designers Salt Lake Sector V"
    ],
    body: [
      "Choosing the right web design company in Kolkata can mean the difference between a high-converting digital asset and a slow, abandoned project. Kolkata has become a major tech hub with agencies ranging from traditional legacy IT providers in Salt Lake Sector V to agile modern development studios. The key factor is whether the agency builds tailored, high-speed websites with modern frameworks or simply slaps generic, bloated templates together.",
      "A major red flag when hiring web designers in Kolkata is reliance on outdated, heavily-plugined WordPress setups that load in 6 to 10 seconds. Modern buyers browse on smartphones and abandon websites that do not load within 2 seconds. Furthermore, agencies often obscure hidden costs such as monthly hosting lock-ins, domain markups, and costly maintenance contracts.",
      "The best web design companies in Kolkata prioritize fast turnaround (7 to 14 days), modern UI/UX design, mobile responsiveness, and direct WhatsApp lead capture. They provide transparent, milestone-based pricing rather than open-ended hourly billing that balloons unexpectedly.",
      "At PPR Global, we deliver custom, high-speed websites starting at ₹6,000 with a first design direction ready within 72 hours. By building on modern stacks like Next.js and Tailwind CSS with direct founder access, clients in Kolkata get enterprise-grade speed and bespoke visual identity without agency middlemen."
    ],
    faqs: [
      {
        question: "How do I choose the best web design company in Kolkata?",
        answer:
          "Look for actual live portfolio links, mobile speed scores above 90 on Google PageSpeed Insights, transparent milestone pricing, and direct communication with developers rather than non-technical sales reps."
      },
      {
        question: "What is the average cost of hiring a web agency in Kolkata?",
        answer:
          "Basic starter websites range from ₹6,000 to ₹10,000. Custom dynamic websites with admin panels range from ₹15,000 to ₹35,000, while complex SaaS applications or mobile apps start at ₹25,000 to ₹75,000+."
      },
      {
        question: "How long does a website project usually take in Kolkata?",
        answer:
          "Traditional agencies often take 6 to 12 weeks due to slow feedback loops. PPR Global completes starter and business websites in 7 to 10 days, with the initial design preview delivered in 72 hours."
      },
      {
        question: "Do web design companies in Kolkata offer SEO services?",
        answer:
          "Yes. Quality web agencies include on-page SEO, local schema markup, Google Business Profile integration, and fast loading optimization as standard components of web development."
      }
    ],
    relatedServiceSlugs: [
      "website-development-kolkata",
      "ui-ux-design-kolkata",
      "seo-kolkata",
      "website-cost-kolkata"
    ]
  },
  {
    slug: "ecommerce-website-cost-india",
    title: "How Much Does an E-Commerce Website Cost in India? (2026 Breakdown)",
    metaTitle: "E-Commerce Website Cost in India 2026 | Complete Price Breakdown",
    metaDescription:
      "How much does an e-commerce website cost in India? Full 2026 guide comparing custom stores, Shopify vs WooCommerce, payment gateways, and WhatsApp checkout.",
    description:
      "A comprehensive guide to e-commerce website development costs in India, comparing custom builds, Shopify stores, payment gateways, and zero-commission WhatsApp catalogs.",
    keywords: [
      "ecommerce website cost India",
      "cost to build online store India",
      "ecommerce developer Kolkata",
      "Shopify vs custom website cost"
    ],
    body: [
      "The cost of developing an e-commerce website in India ranges from ₹10,000 for a starter product catalog to over ₹1,00,000 for high-volume custom online stores. Factors that dictate the price include the number of SKUs, payment gateway integrations (Razorpay, Cashfree, PhonePe), inventory management systems, shipping aggregators (Shiprocket), and custom checkout flows.",
      "For small Indian retail brands and boutique stores, traditional multi-step cart checkouts frequently suffer from high cart abandonment rates exceeding 75%. Indian consumers frequently prefer ordering directly through WhatsApp where they can verify sizes, check delivery dates, and request Cash on Delivery (COD) options before paying.",
      "When comparing platforms, Shopify requires ongoing recurring monthly subscriptions ($25 to $105/month) plus transaction fees and expensive app subscriptions. In contrast, a custom Next.js e-commerce storefront or lightweight catalog offers zero recurring platform fees, instantaneous sub-second page loads, and 100% data ownership.",
      "PPR Global builds scalable e-commerce solutions tailored to Indian businesses, offering both direct WhatsApp catalog checkouts for boutique brands and full payment gateway integrations for scaling retail businesses."
    ],
    faqs: [
      {
        question: "What is the cheapest way to start an e-commerce website in India?",
        answer:
          "A custom digital catalog with direct WhatsApp ordering is the most cost-effective and highest-converting option for Indian businesses starting out, eliminating monthly Shopify app costs."
      },
      {
        question: "Which payment gateways are best for Indian e-commerce sites?",
        answer:
          "Razorpay, Cashfree, PhonePe, and Paytm Payment Gateway are standard, offering UPI (GPay, PhonePe, Paytm), credit/debit cards, and net banking with settlement times of T+1 to T+2 days."
      },
      {
        question: "How long does it take to launch an online store in India?",
        answer:
          "A structured catalog or starter e-commerce website can be designed, populated, and launched within 10 to 14 days with product photography and pricing ready."
      }
    ],
    relatedServiceSlugs: [
      "ecommerce-development-kolkata",
      "website-development-kolkata",
      "whatsapp-automation-kolkata"
    ]
  },
  {
    slug: "nextjs-vs-wordpress-for-business",
    title: "Next.js vs WordPress: Which is Best for Your Business Website in 2026?",
    metaTitle: "Next.js vs WordPress for Business 2026 | Speed, SEO & Security",
    metaDescription:
      "Comparing Next.js and WordPress for business websites. Why modern companies in Kolkata choose Next.js for 100/100 Google PageSpeed, zero plugin vulnerabilities & higher SEO rankings.",
    description:
      "Why modern Indian companies are migrating from bulky WordPress setups to high-speed Next.js architectures for better SEO rankings, security, and conversion rates.",
    keywords: [
      "Next.js vs WordPress",
      "custom Next.js website advantages",
      "headless CMS vs WordPress",
      "WordPress alternative for speed"
    ],
    body: [
      "For over a decade, WordPress was the default choice for business websites. However, in 2026, Google's Core Web Vitals algorithms penalize slow, plugin-heavy websites with lower search rankings and higher ad bounce rates. This has driven high-growth businesses in Kolkata and India to adopt modern web frameworks like Next.js.",
      "WordPress sites typically rely on dozens of separate third-party plugins for SEO, security, forms, caching, and backups. Each plugin introduces bloated JavaScript, slows server response times, and creates potential security vulnerabilities that require constant updates and patching to prevent malware injections.",
      "Next.js, maintained by Vercel, produces pre-rendered, server-side rendered (SSR) or statically generated pages that load almost instantaneously. With clean code, zero unused CSS, automatic image optimization, and enterprise-grade security without database vulnerability exposure, Next.js websites regularly achieve perfect 95-100 Google PageSpeed scores.",
      "PPR Global builds business websites, SaaS portals, and landing pages natively with Next.js, React, and Tailwind CSS. The result is a lightning-fast digital asset that ranks higher on Google, delivers better conversion rates, and requires zero ongoing plugin maintenance headaches."
    ],
    faqs: [
      {
        question: "Is Next.js more expensive to develop than WordPress?",
        answer:
          "Initial development for Next.js is comparable to a quality custom WordPress theme (starting from ₹6,000–₹12,000), but Next.js significantly reduces ongoing hosting, premium plugin renewals, and security repair costs over time."
      },
      {
        question: "Can non-technical clients edit content on a Next.js website?",
        answer:
          "Yes. Next.js can be paired with an intuitive lightweight admin panel or headless CMS (Sanity, Strapi, or custom Supabase dashboard) allowing non-technical owners to update content easily."
      },
      {
        question: "Does Next.js rank better on Google than WordPress?",
        answer:
          "Yes. Next.js websites load significantly faster and provide cleaner semantic HTML and structured schema, satisfying Google's Core Web Vitals benchmarks and earning higher organic rankings."
      }
    ],
    relatedServiceSlugs: [
      "website-development-kolkata",
      "seo-kolkata",
      "geo-optimization"
    ]
  },
  {
    slug: "how-to-rank-google-maps-kolkata",
    title: "How to Rank on Google Maps in Kolkata (Local 3-Pack SEO Blueprint)",
    metaTitle: "How to Rank on Google Maps Kolkata | Local 3-Pack SEO Blueprint",
    metaDescription:
      "Rank #1 on Google Maps in Kolkata. Proven local SEO blueprint for clinics, interior designers, gyms, and local shops in Salt Lake, New Town, and Kolkata.",
    description:
      "A step-by-step local SEO playbook to help Kolkata local service businesses, clinics, and studios dominate the Google Maps 3-pack and capture high-intent phone calls.",
    keywords: [
      "how to rank on Google Maps Kolkata",
      "local SEO Kolkata",
      "Google Business Profile optimization Kolkata",
      "Google Maps 3-pack strategy"
    ],
    body: [
      "For local businesses in Kolkata—such as dental clinics in Salt Lake, interior design studios in Rajarhat, or gyms in South Kolkata—over 60% of high-intent search clicks go directly to the Google Maps 3-Pack. Ranking in these top three map spots generates steady inbound phone calls and WhatsApp inquiries without spending money on paid advertising.",
      "The first pillar of Google Maps ranking is complete Google Business Profile (GBP) optimization. This includes selecting the precise primary category, adding all relevant secondary categories, verifying exact physical address coordinates, listing working hours, and publishing weekly local updates with real job photos.",
      "The second pillar is Name, Address, and Phone (NAP) consistency across the web. Your business details must match character-for-character across your canonical website, local directories (Justdial, Sulekha, IndiaMART), and social profiles. Discrepancies confuse Google's local ranking algorithms and harm visibility.",
      "Finally, embedding a responsive website with Schema.org LocalBusiness structured data, localized city neighborhood landing pages, and consistent review acquisition accelerates map rankings. PPR Global integrates local geo-signals into every website build, helping clients capture local search market share."
    ],
    faqs: [
      {
        question: "How long does it take to rank on Google Maps in Kolkata?",
        answer:
          "With proper Google Business Profile optimization, localized website schema, and initial client review acquisition, businesses usually see noticeable ranking improvements in 4 to 8 weeks."
      },
      {
        question: "Do I need a physical office in Kolkata to rank on Google Maps?",
        answer:
          "Yes. Google requires a verified physical location or a clearly defined local service area within Kolkata to qualify for Google Maps and Local Pack rankings."
      },
      {
        question: "Why is my business not showing up on Google Maps?",
        answer:
          "Common reasons include incomplete profile verification, incorrect category choices, duplicate listings, NAP inconsistencies between your website and GBP, or lack of local customer reviews."
      }
    ],
    relatedServiceSlugs: [
      "seo-kolkata",
      "geo-optimization",
      "digital-marketing-kolkata"
    ]
  },
  {
    slug: "interior-designer-website-lead-generation",
    title: "How Interior Designers in Kolkata Attract High-Ticket Clients Online",
    metaTitle: "Interior Designer Lead Generation Kolkata | High-Ticket Clients",
    metaDescription:
      "How top interior studios in Kolkata generate 10+ premium residential client inquiries every month using portfolio websites, 3D floorplan funnels, and WhatsApp.",
    description:
      "A marketing and web design strategy for interior architects and turnkey design studios in Kolkata seeking premium residential and commercial contracts.",
    keywords: [
      "interior design marketing Kolkata",
      "website for interior designers Kolkata",
      "interior studio lead generation",
      "turnkey interior leads"
    ],
    body: [
      "Interior design is a high-ticket, visual service where prospective clients evaluate craftsmanship, style alignment, and professional credibility before requesting a site visit. In competitive hubs like New Town, Salt Lake Sector V, and Ballygunge, relying on word-of-mouth alone limits a studio's growth and leaves them vulnerable to price-shopping clients.",
      "High-converting interior websites present work through project narratives rather than disjointed photo galleries. Showing the initial floorplan, 3D design render, completed real photography, and homeowner testimonials demonstrates execution capability and builds immediate trust with affluent homeowners.",
      "Transparent process breakdowns (Discovery, 3D Visualization, Material Procurement, Turnkey Handover) reassure prospective clients that timelines and budgets will be respected. Adding a simple 'Estimate Your Interior Project Cost' calculator filters out low-intent inquiries and qualifies serious buyers.",
      "PPR Global designs bespoke interior websites (such as our projects for Deinterio and AS Interior Studio) featuring dark luxury aesthetics, high-resolution architectural galleries, and direct WhatsApp consultation funnels that consistently generate qualified project inquiries."
    ],
    faqs: [
      {
        question: "What sections should an interior designer website have?",
        answer:
          "A high-converting interior website needs an editorial hero, curated portfolio by space type (Living, Kitchen, Bedroom, Commercial), design process walkthrough, material standards, client video reviews, and a consultation booking form."
      },
      {
        question: "How can interior designers stop clients from price-shopping?",
        answer:
          "Establish premium positioning with editorial portfolio presentation, case studies detailing square footage and scope, and transparent starting package benchmarks that set expectations upfront."
      }
    ],
    relatedServiceSlugs: [
      "website-for-interior-designers-kolkata",
      "website-development-kolkata",
      "ui-ux-design-kolkata"
    ]
  },
  {
    slug: "dental-clinic-whatsapp-appointment-system",
    title: "How Dental and Medical Clinics in Kolkata Automate Patient Bookings",
    metaTitle: "Clinic Appointment Booking System Kolkata | WhatsApp Automation",
    metaDescription:
      "Reduce patient no-shows by 60%. Learn how doctors and dental clinics in Kolkata use WhatsApp automation to schedule appointments and send automated reminders.",
    description:
      "How private dental clinics, physiotherapists, and healthcare centers in Kolkata eliminate missed calls and automate patient appointment scheduling using WhatsApp.",
    keywords: [
      "clinic appointment booking system",
      "WhatsApp automation for doctors Kolkata",
      "dental clinic website Kolkata",
      "patient booking software"
    ],
    body: [
      "For medical and dental clinics in Kolkata, phone tag and unanswered calls during busy clinic hours represent thousands of rupees in lost patient revenue every week. Patients searching for urgent dental care, root canals, or cosmetic aligners will immediately move to the next clinic if their call is missed.",
      "WhatsApp automation solves this by providing instant 24/7 appointment scheduling. When a prospective patient lands on your website, a single tap opens WhatsApp with a pre-configured menu allowing them to select treatment type, choose preferred dates (Morning or Evening clinic shifts), and enter patient details in seconds.",
      "Automated reminder sequences sent 24 hours and 2 hours before scheduled appointments drastically reduce clinic no-show rates by over 50%. Post-consultation messages can automatically send digital clinic prescriptions, post-procedure care instructions, and Google Maps review links to build local clinic authority.",
      "PPR Global builds specialized healthcare web solutions (such as Dr. Shaheen Dental Clinic) combining trustworthy clinic web design with HIPAA/data-compliant WhatsApp booking flows that keep daily clinic appointment books full."
    ],
    faqs: [
      {
        question: "Can patient reminders be sent automatically without staff intervention?",
        answer:
          "Yes. Using official WhatsApp Business API workflows, appointment reminders and confirmations are dispatched automatically based on scheduled consultation times."
      },
      {
        question: "Do patients prefer booking appointments on WhatsApp or phone calls?",
        answer:
          "Over 70% of urban Indian patients prefer WhatsApp because it allows them to book asynchronously during work hours without waiting on hold or dealing with poor phone connectivity."
      }
    ],
    relatedServiceSlugs: [
      "website-for-dentists-kolkata",
      "whatsapp-automation-kolkata",
      "crm-kolkata"
    ]
  },
  {
    slug: "gym-fitness-club-marketing-strategy",
    title: "Gym Marketing Blueprint: How Fitness Clubs in Kolkata Add 50+ Members Monthly",
    metaTitle: "Gym Marketing Strategy Kolkata | Add 50+ New Members Monthly",
    metaDescription:
      "The complete gym marketing guide for Kolkata fitness centers: free trial day pass funnels, mobile websites, Meta Ads, and automated WhatsApp member onboarding.",
    description:
      "A complete digital marketing and lead conversion guide for gym owners, CrossFit boxes, and fitness studios looking to consistently enroll new paying members.",
    keywords: [
      "gym marketing strategies Kolkata",
      "how to get gym members",
      "fitness club website Kolkata",
      "gym trial pass landing page"
    ],
    body: [
      "Local fitness clubs in Kolkata often struggle with high seasonal churn, seeing massive spikes in January that taper off by March. The key to sustained, year-round gym profitability is building an automated inbound funnel that converts local social media scrollers and searchers into gym visits every single week.",
      "The highest-converting offer for fitness centers is the 'Free 1-Day VIP Trial Pass'. When local residents can experience premium gym machinery, clean locker rooms, and personal trainer coaching without financial risk, over 40% convert into paid quarterly or annual memberships.",
      "A fitness club website must feature weekly class timetables (Zumba, Strength, Yoga, CrossFit), trainer certifications, high-energy member transformation stories, and a prominent WhatsApp trial booking button. Long multi-page registration forms cause high drop-offs; a simple two-field pass claim flow converts best.",
      "PPR Global develops conversion-driven fitness platforms like Pulse Smart Gym, integrating localized Meta advertising campaigns, mobile-first responsive gym portals, and WhatsApp lead routing for front-desk staff."
    ],
    faqs: [
      {
        question: "How effective are Meta (Facebook & Instagram) ads for local gyms?",
        answer:
          "Extremely effective. Geotargeting ads within a 3 to 5 km radius of your fitness center with a Free Trial Pass offer consistently generates member leads at ₹50 to ₹120 per qualified inquiry."
      },
      {
        question: "What is the best way to reduce gym membership dropouts?",
        answer:
          "Automated WhatsApp check-ins during the member's first 30 days, personal trainer progress reviews, and community challenges keep attendance habits strong and renewal rates high."
      }
    ],
    relatedServiceSlugs: [
      "website-for-gyms-kolkata",
      "meta-ads-kolkata",
      "whatsapp-automation-kolkata"
    ]
  },
  {
    slug: "mobile-app-development-cost-kolkata",
    title: "How Much Does Mobile App Development Cost in Kolkata? (2026 Guide)",
    metaTitle: "Mobile App Development Cost in Kolkata 2026 | iOS & Android Guide",
    metaDescription:
      "Realistic mobile app development costs in Kolkata for iOS and Android. Cross-platform React Native, Flutter, MVP launch costs (starting ₹14,999), and timeline guide.",
    description:
      "A transparent 2026 price breakdown for mobile app development in Kolkata, covering MVP architecture, cross-platform frameworks, and launch timelines.",
    keywords: [
      "mobile app development cost Kolkata",
      "app developers in Kolkata",
      "iOS Android MVP cost India",
      "React Native app agency Kolkata"
    ],
    body: [
      "Building a mobile app in Kolkata is significantly more affordable than in Western markets or Tier-1 cities like Bangalore and Mumbai, while delivering equivalent architectural quality. For early-stage founders and small businesses, the primary challenge is understanding which features are essential for a Minimum Viable Product (MVP) and avoiding expensive scope creep.",
      "A simple MVP mobile application (such as a delivery app, booking portal, or customer loyalty platform) built with cross-platform frameworks like React Native or Flutter generally costs between ₹14,999 and ₹45,000. Medium complexity apps with user authentication, database syncing, push notifications, and payment gateways range from ₹50,000 to ₹1,20,000.",
      "Choosing cross-platform development (React Native or Flutter) allows businesses to deploy to both iOS (App Store) and Android (Google Play Store) using a single unified codebase. This cuts development costs and timelines by nearly 40% compared to maintaining two separate native Swift and Kotlin codebases.",
      "PPR Global builds modern mobile products with scalable backend architectures, clean user journeys, API integrations, and ongoing store submission support so founders can launch confidently without technical delays."
    ],
    faqs: [
      {
        question: "Should I build a native app or a cross-platform React Native app?",
        answer:
          "Cross-platform React Native is recommended for 95% of businesses. It cuts development costs in half, speeds up launch timelines, and delivers 60fps native performance on both iOS and Android."
      },
      {
        question: "What are the ongoing costs after launching a mobile app?",
        answer:
          "Ongoing costs include cloud backend hosting (Firebase, Supabase, or AWS starting from free to ₹1,500/month), Google Play Store developer account ($25 one-time), and Apple Developer Program ($99/year)."
      }
    ],
    relatedServiceSlugs: [
      "mobile-app-development-kolkata",
      "website-development-kolkata",
      "crm-kolkata"
    ]
  },
  {
    slug: "swiggy-zomato-alternative-direct-ordering",
    title: "Stop Paying 30% Commissions: Direct WhatsApp Food Ordering for Restaurants",
    metaTitle: "Direct WhatsApp Food Ordering for Restaurants | Cut 30% Commissions",
    metaDescription:
      "Why restaurants, cafes, and cloud kitchens in Kolkata are ditching heavy aggregator fees for direct digital QR menus and zero-commission WhatsApp food ordering.",
    description:
      "How restaurants, cafes, and cloud kitchens in Kolkata recover lost profit margins by building direct customer ordering channels with digital QR menus and WhatsApp.",
    keywords: [
      "Swiggy Zomato commission alternative",
      "direct restaurant ordering website Kolkata",
      "WhatsApp food ordering system",
      "digital QR menu Kolkata"
    ],
    body: [
      "Food delivery aggregators like Swiggy and Zomato provide valuable initial customer discovery, but charging 25% to 35% commission on every order devastates restaurant profit margins. Worse, aggregators withhold customer phone numbers and data, preventing restaurants from marketing directly to their own regular patrons.",
      "Direct WhatsApp food ordering is revolutionizing food business economics across Kolkata. By placing table QR codes and promoting online direct ordering on social media, diners browse an interactive digital menu, customize their order, and transmit it directly to the kitchen WhatsApp with zero aggregator fees.",
      "Saving 30% on commissions allows food businesses to offer small direct perks—such as 10% discounts or free delivery—while still retaining significantly higher net profits. Furthermore, direct orders capture customer contact numbers, enabling weekly WhatsApp marketing broadcasts for weekend specials.",
      "PPR Global builds direct ordering web systems (such as The Daily Roast Cafe) with instant search, category filters, allergen indicators, and seamless WhatsApp receipt generation."
    ],
    faqs: [
      {
        question: "Can direct WhatsApp ordering handle table dine-in and takeout?",
        answer:
          "Yes. Customers can scan a table QR code to order dine-in food or click a website link from home to order home delivery and takeaway."
      },
      {
        question: "Do I need special hardware to receive WhatsApp food orders?",
        answer:
          "No. Orders arrive directly as formatted text messages with item names, quantities, customer address, and total amount on your existing smartphone or manager tablet."
      }
    ],
    relatedServiceSlugs: [
      "restaurant-website-whatsapp-ordering-kolkata",
      "whatsapp-automation-kolkata",
      "website-development-kolkata"
    ]
  },
  {
    slug: "custom-crm-vs-zoho-hubspot-india",
    title: "Custom Lightweight CRM vs Zoho & HubSpot: What Indian SMBs Really Need",
    metaTitle: "Custom CRM vs Zoho & HubSpot for Indian SMBs | Practical Guide",
    metaDescription:
      "Why small businesses in India struggle with complex enterprise CRMs like Zoho and HubSpot, and why lightweight WhatsApp-first custom pipelines convert better.",
    description:
      "Why small and medium Indian enterprises abandon bloated SaaS software and how custom lightweight CRMs increase sales team adoption and conversion rates.",
    keywords: [
      "custom CRM vs Zoho",
      "HubSpot alternative for small business India",
      "lightweight CRM Kolkata",
      "simple sales pipeline software"
    ],
    body: [
      "Enterprise CRMs like HubSpot, Salesforce, and Zoho are powerful platforms built for large multinational sales corporations. However, when an Indian small business with a 3 to 10 person sales team attempts to implement them, adoption rates frequently plummet due to overwhelming feature bloat and complex navigation.",
      "Most Indian business sales interactions take place over WhatsApp and phone calls, not lengthy corporate email threads. When sales reps are forced to manually enter 15 fields into an English-only desktop CRM after every WhatsApp chat, they inevitably stop updating the software, leaving business owners blind.",
      "A custom lightweight CRM cuts out 90% of the useless complexity. It gives business owners what actually matters: instant lead capture from website forms and WhatsApp, lead status tracking (New, Contacted, Proposal Sent, Won, Lost), automated follow-up reminders, and daily deal values.",
      "PPR Global builds bespoke, lightning-fast CRM and ERP dashboards (such as Sahil ERP and our WhatsApp Automation Suite) designed around how Indian business owners and staff actually work, with zero recurring per-user monthly SaaS fees."
    ],
    faqs: [
      {
        question: "Why do Indian sales teams resist using Zoho or HubSpot?",
        answer:
          "Enterprise CRMs require too much manual data entry, lack native deep WhatsApp chat workflows, and feature confusing multi-level menus that slow down daily sales follow-ups."
      },
      {
        question: "How much does a custom lightweight CRM cost to build?",
        answer:
          "A tailored, one-time investment CRM system typically costs between ₹15,000 and ₹45,000, eliminating monthly recurring per-user subscription fees forever."
      }
    ],
    relatedServiceSlugs: [
      "crm-kolkata",
      "lead-management",
      "whatsapp-automation-kolkata"
    ]
  },
  {
    slug: "google-ads-vs-meta-ads-for-local-business",
    title: "Google Ads vs Meta Ads: Which Delivers Better ROI for Kolkata Businesses?",
    metaTitle: "Google Ads vs Meta Ads for Kolkata Businesses | 2026 ROI Comparison",
    metaDescription:
      "High-intent search vs visual demand generation. Compare cost per lead, conversion rates, and ROI for Google Ads and Meta Ads in Kolkata.",
    description:
      "A practical comparison of Google Search Ads and Meta (Facebook & Instagram) Ads for Kolkata businesses, helping owners allocate marketing budgets effectively.",
    keywords: [
      "Google Ads vs Meta Ads Kolkata",
      "digital marketing ROI Kolkata",
      "lead generation ads Kolkata",
      "local business ads strategy"
    ],
    body: [
      "When local businesses in Kolkata decide to invest in paid digital marketing, the most common dilemma is whether to spend their budget on Google Ads or Meta (Facebook and Instagram) Ads. Both platforms can generate high returns, but they serve fundamentally different types of customer purchase intent.",
      "Google Search Ads capture existing high-intent demand. When someone types 'root canal dentist near Salt Lake' or 'emergency commercial interior repair Kolkata', they have an immediate problem and a high urgency to buy. Google Ads conversion rates are typically high (8% to 15%), though cost-per-click can be competitive.",
      "Meta Ads generate new visual demand and awareness. When promoting wedding photography, fitness memberships, luxury cafes, or residential interior design packages, eye-catching video reels and carousel ads on Instagram interrupt users with aspirational content. Cost per lead on Meta is often significantly lower (₹60 to ₹180 per lead).",
      "The most effective strategy for Kolkata businesses is a hybrid marketing system: Google Ads to capture urgent, high-ticket buyers searching right now, paired with Meta Ads for local brand recognition and retargeting website visitors who didn't convert on their first visit. PPR Global manages end-to-end ad campaigns tied directly to dedicated high-converting landing pages."
    ],
    faqs: [
      {
        question: "Which platform is cheaper: Google Ads or Meta Ads in Kolkata?",
        answer:
          "Meta Ads generally deliver cheaper impressions and lower cost-per-lead, making it ideal for visual, lifestyle, and consumer services. Google Ads costs more per click but delivers higher-intent, ready-to-buy inquiries."
      },
      {
        question: "What minimum budget is needed for paid ads in Kolkata?",
        answer:
          "A starter ad budget of ₹10,000 to ₹25,000 per month is sufficient to test local campaign funnels and generate consistent inbound inquiries."
      }
    ],
    relatedServiceSlugs: [
      "google-ads-kolkata",
      "meta-ads-kolkata",
      "digital-marketing-kolkata"
    ]
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
