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
    slug: "mobile-app-development-kolkata",
    name: "Mobile App Development Company in Kolkata",
    shortName: "Mobile Apps",
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
  },
  {
    slug: "generative-engine-optimization-india",
    title: "What Is Generative Engine Optimization for Indian Businesses?",
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
      "A practical first step is to turn thin service pages into focused pages of 150-300 words or more, add FAQ schema, link related case studies, and keep the brand entity consistent across the site, Google Business Profile, maps, social profiles, and directories."
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
      }
    ]
  },
  {
    slug: "restaurant-website-whatsapp-ordering-kolkata",
    title: "Restaurant Website and WhatsApp Ordering Setup in Kolkata",
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
      "For local SEO, restaurants should publish cuisine, neighbourhood, delivery area, menu categories, reviews, photos, and frequently asked questions as readable text. This helps Google and AI search systems understand what the restaurant serves and where it is relevant."
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
      }
    ]
  },
  {
    slug: "gym-booking-website-kolkata",
    title: "Why Gyms in Kolkata Need a Booking Website",
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
      "A booking website can also connect with CRM or WhatsApp follow-up. That gives the gym team a simple way to track who requested a trial, who visited, who needs a reminder, and which campaign generated the lead."
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
      }
    ]
  },
  {
    slug: "real-estate-website-crm-kolkata",
    title: "Real Estate Website and CRM Setup for Kolkata Agents",
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
      "For SEO, each property or project page should include readable location and feature details instead of only images. Local area names, property type, budget range, and FAQs help search engines understand the listing and help buyers decide faster."
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
      }
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
