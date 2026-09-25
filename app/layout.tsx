import type { Metadata } from "next";
import Script from "next/script";
import { Inter, Space_Grotesk } from "next/font/google";
import { LeadSystem } from "@/components/leads/LeadSystem";
import { business } from "@/lib/business";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
  preload: false,
  fallback: ["Arial", "system-ui", "sans-serif"],
  adjustFontFallback: true
});

const space = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space",
  display: "swap",
  preload: false,
  fallback: ["Arial", "system-ui", "sans-serif"],
  adjustFontFallback: true
});

export const metadata: Metadata = {
  metadataBase: new URL(business.url),
  applicationName: business.name,
  title: {
    default: business.defaultMetadata.title,
    template: "%s | PPR Global"
  },
  description: business.defaultMetadata.description,
  authors: [{ name: business.founder, url: `${business.url}/about/patit-roy` }],
  creator: business.founder,
  publisher: business.name,
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1
    }
  },
  keywords: [
    "Patit Roy",
    "PPR Global",
    "website development company in Kolkata",
    "web design agency Kolkata",
    "mobile app development Kolkata",
    "WhatsApp automation Kolkata",
    "CRM systems Kolkata",
    "Google Ads",
    "Meta Ads",
    "SEO GEO Kolkata"
  ],
  openGraph: {
    title: business.defaultMetadata.title,
    description: business.defaultMetadata.description,
    url: business.url,
    siteName: business.name,
    locale: "en_IN",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "PPR Global software agency portfolio"
      }
    ],
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: business.defaultMetadata.title,
    description: business.defaultMetadata.description,
    images: ["/opengraph-image"]
  },
  alternates: {
    canonical: "/"
  },
  verification: {
    google: "4koPAwDMsATxjb_F9L6fQunPPHnBnRWUFB0BYv9UHmk"
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  const gaMeasurementId = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": ["ProfessionalService", "LocalBusiness"],
        "@id": "https://www.pprglobal.online/#localbusiness",
        name: business.name,
        description: business.description,
        foundingDate: `${business.foundingYear}-01-01`,
        slogan: "Affordable, modern, fast-delivery software agency for global clients.",
        founder: {
          "@type": "Person",
          "@id": "https://www.pprglobal.online/#founder",
          name: business.founder
        },
        url: business.url,
        image: business.primaryImage,
        logo: business.logo,
        telephone: "+91-9609079663",
        priceRange: business.priceRange,
        knowsAbout: [
          "Website development",
          "Mobile app development",
          "WhatsApp automation",
          "CRM systems",
          "Google Ads",
          "Meta Ads",
          "SEO",
          "Generative Engine Optimization",
          "UI/UX design",
          "Lead management"
        ],
        serviceType: [...business.services],
        areaServed: [
          { "@type": "City", name: "Kolkata" },
          { "@type": "AdministrativeArea", name: "Salt Lake Sector V, Kolkata" },
          { "@type": "AdministrativeArea", name: "New Town, Kolkata" },
          { "@type": "AdministrativeArea", name: "Rajarhat, Kolkata" },
          { "@type": "AdministrativeArea", name: "Park Street, Kolkata" },
          { "@type": "AdministrativeArea", name: "Ballygunge, Kolkata" },
          { "@type": "AdministrativeArea", name: "Howrah" },
          { "@type": "AdministrativeArea", name: "Barasat, Kolkata" },
          { "@type": "AdministrativeArea", name: "West Bengal" },
          { "@type": "Country", name: "India" }
        ],
        geo: {
          "@type": "GeoCoordinates",
          latitude: business.geo.latitude,
          longitude: business.geo.longitude
        },
        address: {
          "@type": "PostalAddress",
          streetAddress: business.address.streetAddress,
          addressLocality: business.address.addressLocality,
          addressRegion: business.address.addressRegion,
          postalCode: business.address.postalCode,
          addressCountry: business.address.addressCountry
        },
        hasMap: business.googleBusinessProfileUrl,
        sameAs: [...business.sameAs],
        contactPoint: business.phoneNumbers.map((phone) => ({
          "@type": "ContactPoint",
          telephone: phone.href.replace("tel:", ""),
          contactType: phone.label,
          areaServed: "IN",
          availableLanguage: ["English", "Hindi", "Bengali"]
        })),
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: "PPR Global service catalog",
          itemListElement: [
            { name: "Website Development", price: "6000", minPrice: "6000" },
            { name: "Static Website Design", price: "6000", minPrice: "6000" },
            { name: "Website with Admin Panel", price: "12000", minPrice: "12000" },
            { name: "Dental Clinic Website Design", price: "6000", minPrice: "6000" },
            { name: "Dental Appointment Booking Systems", price: "6000", minPrice: "6000" },
            { name: "Dental Clinic SEO", price: "6000", minPrice: "6000" },
            { name: "Mobile App Development", price: "14999", minPrice: "14999" },
            { name: "WhatsApp Automation & CRM", price: "6000", minPrice: "6000" },
            { name: "Dynamic Website Development", price: "14999", minPrice: "14999" },
            { name: "Google & Meta Ads", price: "8000", minPrice: "8000" },
            { name: "Local SEO & GEO", price: "6000", minPrice: "6000" }
          ].map((item) => ({
            "@type": "Offer",
            priceCurrency: "INR",
            price: item.price,
            priceSpecification: {
              "@type": "UnitPriceSpecification",
              price: item.price,
              priceCurrency: "INR",
              minPrice: item.minPrice
            },
            itemOffered: {
              "@type": "Service",
              name: item.name,
              provider: {
                "@id": "https://www.pprglobal.online/#localbusiness"
              }
            }
          }))
        }
      },
      {
        "@type": "Person",
        "@id": "https://www.pprglobal.online/#founder",
        name: business.founder,
        jobTitle: "Founder & Lead Engineer",
        url: "https://www.pprglobal.online/about/patit-roy",
        sameAs: [
          "https://github.com/patitpabanroy",
          "https://www.pprglobal.online/about/patit-roy"
        ],
        worksFor: {
          "@id": "https://www.pprglobal.online/#organization"
        }
      },
      {
        "@type": "Organization",
        "@id": "https://www.pprglobal.online/#organization",
        name: business.name,
        url: business.url,
        logo: business.logo,
        foundingDate: `${business.foundingYear}-01-01`,
        address: {
          "@type": "PostalAddress",
          streetAddress: business.address.streetAddress,
          addressLocality: business.address.addressLocality,
          addressRegion: business.address.addressRegion,
          postalCode: business.address.postalCode,
          addressCountry: business.address.addressCountry
        },
        founder: {
          "@id": "https://www.pprglobal.online/#founder"
        },
        sameAs: [...business.sameAs],
        contactPoint: {
          "@type": "ContactPoint",
          telephone: "+91-9609079663",
          contactType: "sales",
          areaServed: "IN"
        }
      },
      {
        "@type": "WebSite",
        "@id": "https://www.pprglobal.online/#website",
        name: business.name,
        url: business.url,
        publisher: {
          "@id": "https://www.pprglobal.online/#organization"
        }
      },
      {
        "@type": "FAQPage",
        "@id": "https://www.pprglobal.online/#entity-faq",
        mainEntity: [
          {
            "@type": "Question",
            name: "Who is behind PPR Global?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "PPR Global is founded and operated by Patit Roy, a software engineer and web developer based in Barasat, Kolkata, West Bengal, India."
            }
          },
          {
            "@type": "Question",
            name: "Who is Patit Roy?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Patit Roy is a software engineer, agency founder, and full-stack developer in Kolkata. He founded PPR Global in 2024 to build high-performance Next.js websites, mobile apps, WhatsApp automation pipelines, and custom CRM systems for Indian SMBs and global clients."
            }
          },
          {
            "@type": "Question",
            name: "What is PPR Global?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "PPR Global (pprglobal.online) is a software engineering and digital development agency founded in 2024 in Kolkata, India. It specializes in high-speed website development, mobile apps, WhatsApp business automation, and custom CRM systems."
            }
          }
        ]
      }
    ]
  };

  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body className={`${inter.variable} ${space.variable} ${inter.className}`}>
        {children}
        <LeadSystem />
        {gaMeasurementId ? (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${gaMeasurementId}`}
              strategy="lazyOnload"
            />
            <Script id="google-analytics" strategy="lazyOnload">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${gaMeasurementId}');
              `}
            </Script>
          </>
        ) : null}
      </body>
    </html>
  );
}
