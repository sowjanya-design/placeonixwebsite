import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  display: "swap",
});

const SITE_NAME = "Placeonix";
const DEFAULT_TITLE =
  "Placeonix — SAP & IT Training and Placement Institute in Hyderabad";
const DEFAULT_DESCRIPTION =
  "SAP & IT training and placement institute in Hyderabad. Training · Placement · Future.";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.placeonix.com"),
  title: {
    default: DEFAULT_TITLE,
    template: "%s",
  },
  description: DEFAULT_DESCRIPTION,
  icons: {
    icon: "/favicon.png",
    apple: "/favicon.png",
  },
  manifest: "/site.webmanifest",
  openGraph: {
    type: "website",
    locale: "en_IN",
    siteName: SITE_NAME,
    url: "/",
    title: DEFAULT_TITLE,
    description: DEFAULT_DESCRIPTION,
    images: [{ url: "/icon-512.png", width: 512, height: 512, alt: SITE_NAME }],
  },
  twitter: {
    card: "summary",
    title: DEFAULT_TITLE,
    description: DEFAULT_DESCRIPTION,
    images: ["/icon-512.png"],
  },
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "EducationalOrganization",
  name: "Placeonix",
  url: "https://www.placeonix.com",
  logo: "https://www.placeonix.com/icon-512.png",
  description: DEFAULT_DESCRIPTION,
  address: {
    "@type": "PostalAddress",
    streetAddress: "Kapil Kavuri Hub, No. 144, 9th Floor, 152, Financial District",
    addressLocality: "Hyderabad",
    addressRegion: "Telangana",
    postalCode: "500032",
    addressCountry: "IN",
  },
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+91-99494-94020",
    contactType: "admissions",
    email: "support@placeonix.com",
  },
  sameAs: ["https://www.instagram.com/_placeonix?igsh=bTJkMW82a2E1cTNt"],
};

export const viewport: Viewport = {
  themeColor: "#4f46e5",
};

import RevealObserver from "@/components/layout/RevealObserver";
import LeadPopup from "@/components/home/LeadPopup";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.className}>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
        <RevealObserver />
        <LeadPopup />
        {children}
      </body>
    </html>
  );
}
