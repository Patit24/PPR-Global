import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap"
});

const space = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space",
  display: "swap"
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.pprglobal.online"),
  title: "PPR Global | Website & App Development Agency in Kolkata",
  description:
    "PPR Global builds websites, mobile apps, WhatsApp automation and CRM systems for Kolkata businesses. Fast delivery, transparent pricing from ₹6,000. Get a free quote.",
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
    title: "PPR Global | Website & App Development Agency in Kolkata",
    description:
      "PPR Global crafts modern websites, apps, automation systems, ads funnels and scalable digital experiences for Kolkata and global clients.",
    url: "https://www.pprglobal.online",
    siteName: "PPR Global",
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
    title: "PPR Global | Website & App Development Agency in Kolkata",
    description:
      "Affordable, modern, fast-delivery websites, apps, automation, ads funnels, SEO/GEO and CRM systems in Kolkata.",
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
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": ["ProfessionalService", "LocalBusiness"],
        "@id": "https://www.pprglobal.online/#localbusiness",
        name: "PPR Global",
        founder: {
          "@type": "Person",
          name: "Patit Roy"
        },
        url: "https://www.pprglobal.online",
        image: "https://www.pprglobal.online/opengraph-image",
        telephone: "+91-9609079663",
        priceRange: "₹₹",
        serviceType: [
          "Website Development",
          "Mobile App Development",
          "WhatsApp Automation",
          "CRM Systems",
          "Google Ads",
          "Meta Ads",
          "SEO",
          "UI/UX Design",
          "Lead Management"
        ],
        areaServed: [
          { "@type": "City", name: "Kolkata" },
          { "@type": "AdministrativeArea", name: "West Bengal" },
          { "@type": "Country", name: "India" }
        ],
        address: {
          "@type": "PostalAddress",
          addressLocality: "Kolkata",
          addressRegion: "West Bengal",
          addressCountry: "IN"
        },
        makesOffer: [
          "Website development",
          "Mobile app development",
          "WhatsApp automation",
          "CRM dashboard development",
          "Google Ads",
          "Meta Ads",
          "SEO / GEO"
        ].map((name) => ({
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name
          }
        }))
      },
      {
        "@type": "Organization",
        "@id": "https://www.pprglobal.online/#organization",
        name: "PPR Global",
        url: "https://www.pprglobal.online",
        founder: "Patit Roy",
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
        name: "PPR Global",
        url: "https://www.pprglobal.online",
        publisher: {
          "@id": "https://www.pprglobal.online/#organization"
        }
      }
    ]
  };

  return (
    <html lang="en" className={`${inter.variable} ${space.variable}`}>
      <head>
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-3048767030984334"
          crossOrigin="anonymous"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}
