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
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "ProfessionalService"],
    name: "PPR Global",
    founder: {
      "@type": "Person",
      name: "Patit Roy"
    },
    url: "https://www.pprglobal.online",
    image: "https://www.pprglobal.online/opengraph-image",
    telephone: "+91-9609079663",
    priceRange: "₹₹",
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
    sameAs: ["https://www.pprglobal.online"],
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
  };

  return (
    <html lang="en" className={`${inter.variable} ${space.variable}`}>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
        {children}
      </body>
    </html>
  );
}
