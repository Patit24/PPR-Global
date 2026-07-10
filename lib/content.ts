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
    imageAlt: "Interior Amit website design and development Kolkata",
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
    imageAlt: "AS Interior Studio website UI/UX design Kolkata",
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
    imageAlt: "Dr. Shaheen Dental Clinic website with online booking Kolkata",
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
    imageAlt: "Deinterio Interior Group business website Kolkata",
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
    imageAlt: "WhatsApp automation CRM dashboard for small business Kolkata",
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
    imageSrc: "/projects/showcase/mobile-app-development-showcase.png",
    imageAlt: "Mobile app development Kolkata iOS Android",
    imageFit: "contain",
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
  { name: "WhatsApp Automation", slug: "whatsapp-automation-kolkata", icon: Bot },
  { name: "CRM Dashboard", slug: "crm-kolkata", icon: Layers3 }
];

export const servicePages = [
  {
    slug: "website-development-kolkata",
    name: "Website Development Company in Kolkata",
    shortName: "Website Development",
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
      "As the gym grows, the website can connect to CRM tracking, follow-up reminders, payment links, attendance tools, or simple dashboards. The first goal is always clear: help more nearby people enquire and visit."
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
    slug: "mobile-app-development",
    name: "Mobile App Development",
    shortName: "Mobile Apps",
    description:
      "Launch user-friendly mobile apps with clean UX, scalable architecture, API integrations, and product-ready screens.",
    price: "Starts from ₹14,999",
    highlights: ["iOS and Android planning", "UX flows", "API integrations", "Launch support"],
    keywords: [
      "mobile app development Kolkata",
      "app developer West Bengal",
      "affordable mobile app development India",
      "React Native app development"
    ],
    body: [
      "PPR Global helps founders and business owners turn app ideas into practical mobile products. The process starts with the core user flow: what the customer needs to do, what screens are required, what data should be stored, and what integrations are needed for the first usable version.",
      "App builds can include onboarding, dashboards, booking, payments, user accounts, notifications, admin control, API integrations, and responsive product screens. For early-stage businesses, the focus is usually on launching a clean MVP that feels credible, works reliably, and can be improved after real users begin using it.",
      "The team supports both app UX planning and development execution. That means the product is not just coded screen by screen; it is shaped around business goals, user clarity, technical scalability, and launch readiness."
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
    slug: "seo-geo-services-kolkata",
    name: "SEO / GEO Services in Kolkata",
    shortName: "SEO / GEO",
    description:
      "Improve local discovery with technical SEO, service pages, local keyword targeting, and AI-search-ready content structure.",
    price: "Custom quote",
    highlights: ["Local SEO", "Service page strategy", "Schema setup", "Search-intent content"],
    keywords: [
      "SEO services Kolkata",
      "local SEO West Bengal",
      "GEO services India",
      "AI search optimization Kolkata"
    ],
    body: [
      "PPR Global provides SEO and GEO support for businesses that want to be found by people searching for real services, not just brand names. The work focuses on technical cleanup, metadata, service pages, structured data, local intent keywords, internal linking, and content that answers buyer questions clearly.",
      "For Kolkata businesses, local SEO usually starts with service-area language, consistent contact details, Google Business Profile readiness, location-focused pages, and case studies that show relevant proof. GEO adds another layer: formatting information so AI search engines and answer systems can understand the business, services, location, pricing, and credibility signals.",
      "This service pairs well with website redesigns, new service pages, landing pages, and content planning. The aim is to build a search foundation that can compound over time instead of relying only on paid ads."
    ],
    faqs: [
      {
        question: "Do you handle local SEO for Kolkata businesses?",
        answer:
          "Yes. PPR Global can improve location signals, service pages, metadata, schema, and content structure for Kolkata and West Bengal searches."
      },
      {
        question: "What is GEO?",
        answer:
          "GEO means generative engine optimization: structuring content so AI search tools can understand and cite the business accurately."
      }
    ],
    relatedProjectSlug: "dr-shaheen-dental-clinic"
  },
  {
    slug: "google-meta-ads-kolkata",
    name: "Google Ads & Meta Ads for Kolkata Businesses",
    shortName: "Ads Management",
    description:
      "Build paid ad funnels for service businesses with landing pages, WhatsApp leads, tracking, and campaign optimization.",
    price: "Custom quote",
    highlights: ["Google Ads", "Meta Ads", "Landing pages", "WhatsApp lead capture"],
    keywords: [
      "Google Ads agency Kolkata",
      "Meta Ads management Kolkata",
      "WhatsApp lead ads India",
      "paid ads for small business Kolkata"
    ],
    body: [
      "PPR Global builds paid ad funnels for businesses that want enquiries, bookings, calls, or WhatsApp conversations. The work can include Google Search campaigns, Meta Ads, landing page structure, lead forms, click-to-WhatsApp flows, tracking setup, and ongoing creative or campaign adjustments.",
      "Good ad performance depends on more than launching a campaign. The offer, page speed, landing page copy, trust sections, service area, budget, lead quality, and follow-up process all affect results. PPR Global connects these pieces so ad spend has a clearer path to enquiries.",
      "This is a practical fit for clinics, interiors, gyms, restaurants, real estate, local services, and agencies that need a focused lead-generation setup without building a large marketing team."
    ],
    faqs: [
      {
        question: "Can ads send leads directly to WhatsApp?",
        answer:
          "Yes. Campaigns can use WhatsApp click-to-chat, landing page buttons, or forms that pass enquiry details into WhatsApp."
      },
      {
        question: "Do I need a landing page before running ads?",
        answer:
          "A focused landing page is strongly recommended because it improves clarity, tracking, trust, and conversion quality."
      }
    ],
    relatedProjectSlug: "interior-amit"
  }
];

export const resourcePosts = [
  {
    slug: "website-cost-kolkata",
    title: "How Much Does a Website Cost in Kolkata?",
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
    description:
      "Why a one-page website struggles to rank for multiple services, and how dedicated service pages help Google understand your business.",
    keywords: ["local SEO service pages", "SEO for Kolkata business", "service page SEO"],
    body: [
      "A single homepage can explain a business, but it usually cannot rank well for every service the business offers. Google needs focused URLs that clearly match search intent. A website development page, WhatsApp automation page, SEO page, and app development page can each target a different buyer need.",
      "Good service pages do not need to be huge. They need a clear headline, useful explanation, what is included, proof or related work, FAQs, local context, and a simple enquiry path. That structure helps both visitors and search engines understand the page."
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
