import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import { LeadSystem } from "@/components/leads/LeadSystem";
import { business } from "@/lib/business";
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
        founder: {
          "@type": "Person",
          "@id": "https://www.pprglobal.online/#founder",
          name: business.founder
        },
        url: business.url,
        image: business.primaryImage,
        telephone: "+91-9609079663",
        priceRange: business.priceRange,
        serviceType: [...business.services],
        areaServed: [
          { "@type": "City", name: "Kolkata" },
          { "@type": "AdministrativeArea", name: "West Bengal" },
          { "@type": "Country", name: "India" }
        ],
        address: {
          "@type": "PostalAddress",
          streetAddress: business.address.streetAddress,
          addressLocality: business.address.addressLocality,
          addressRegion: business.address.addressRegion,
          postalCode: business.address.postalCode,
          addressCountry: business.address.addressCountry
        },
        hasMap: business.googleBusinessProfileUrl,
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
        "@type": "Person",
        "@id": "https://www.pprglobal.online/#founder",
        name: business.founder,
        jobTitle: "Founder",
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
        founder: {
          "@id": "https://www.pprglobal.online/#founder"
        },
        sameAs: [business.googleBusinessProfileUrl],
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
      }
    ]
  };

  return (
    <html lang="en" className={`${inter.variable} ${space.variable}`}>
      <head>
        {gaMeasurementId ? (
          <>
            <script async src={`https://www.googletagmanager.com/gtag/js?id=${gaMeasurementId}`} />
            <script
              dangerouslySetInnerHTML={{
                __html: `
                  window.dataLayer = window.dataLayer || [];
                  function gtag(){dataLayer.push(arguments);}
                  gtag('js', new Date());
                  gtag('config', '${gaMeasurementId}');
                `
              }}
            />
          </>
        ) : null}
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
        <LeadSystem />
      </body>
    </html>
  );
}
