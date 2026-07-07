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
  title: "Patit Roy | PPR Global",
  description:
    "Premium software agency portfolio for Patit Roy, founder of PPR Global. Websites, apps, automation systems, ads funnels, SEO/GEO, CRM and custom business software for global clients.",
  keywords: [
    "Patit Roy",
    "PPR Global",
    "software agency",
    "website development",
    "mobile app development",
    "WhatsApp automation",
    "CRM systems",
    "Google Ads",
    "Meta Ads",
    "SEO GEO"
  ],
  openGraph: {
    title: "Patit Roy | Building Digital Products For Brands Worldwide",
    description:
      "PPR Global crafts modern websites, apps, automation systems, ads funnels and scalable digital experiences.",
    type: "website"
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${space.variable}`}>
      <body>{children}</body>
    </html>
  );
}
