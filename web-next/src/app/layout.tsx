import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Script from "next/script";
import dynamic from "next/dynamic";
import RevealObserver from "@/components/layout/RevealObserver";

const LeadPopup = dynamic(() => import("@/components/home/LeadPopup"));

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  display: "swap",
});

const SITE_NAME = "Placeonix";
const DEFAULT_TITLE =
  "Placeonix — SAP & IT Training and Placement Institute in Hyderabad";
const DEFAULT_DESCRIPTION =
  "Placeonix offers top SAP, Cloud, and IT training courses in Hyderabad. Launch your IT career with real placement support.";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.placeonix.com"),
  title: {
    default: DEFAULT_TITLE,
    template: "%s",
  },
  description: DEFAULT_DESCRIPTION,
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon.png", type: "image/png" },
    ],
    apple: "/favicon.png",
  },
  manifest: "/site.webmanifest",
  alternates: {
    canonical: "https://www.placeonix.com",
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    siteName: SITE_NAME,
    url: "https://www.placeonix.com",
    title: DEFAULT_TITLE,
    description: DEFAULT_DESCRIPTION,
    images: [{ url: "https://www.placeonix.com/icon-512.png", width: 512, height: 512, alt: SITE_NAME }],
  },
  twitter: {
    card: "summary",
    title: DEFAULT_TITLE,
    description: DEFAULT_DESCRIPTION,
    images: ["https://www.placeonix.com/icon-512.png"],
  },
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": ["EducationalOrganization", "LocalBusiness"],
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
  geo: {
    "@type": "GeoCoordinates",
    latitude: 17.4144,
    longitude: 78.3489,
  },
  hasMap: "https://maps.google.com/?q=Kapil+Kavuri+Hub+Financial+District+Hyderabad",
  areaServed: ["Hyderabad", "Gachibowli", "Financial District", "Hitec City", "Madhapur", "Telangana", "India"],
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.9",
    reviewCount: "248",
    bestRating: "5",
    worstRating: "1",
  },
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+91-99494-94020",
    contactType: "admissions",
    email: "support@placeonix.com",
  },
  sameAs: [
    "https://www.instagram.com/_placeonix?igsh=bTJkMW82a2E1cTNt",
    "https://www.facebook.com/Placeonix",
    "https://www.linkedin.com/company/placeonix",
  ],
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday"
      ],
      "opens": "09:00",
      "closes": "18:00"
    }
  ]
};

export const viewport: Viewport = {
  themeColor: "#4f46e5",
};

const GA_ID = process.env.NEXT_PUBLIC_GA_ID;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.className}>
      <body>
        {GA_ID && GA_ID !== "G-PLACEONIX" && (
          <>
            <Script src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`} strategy="afterInteractive" />
            <Script
              id="gtag-init"
              strategy="afterInteractive"
              dangerouslySetInnerHTML={{
                __html: `
                  window.dataLayer = window.dataLayer || [];
                  function gtag(){dataLayer.push(arguments);}
                  gtag('js', new Date());
                  gtag('config', '${GA_ID}');
                `,
              }}
            />
          </>
        )}
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
