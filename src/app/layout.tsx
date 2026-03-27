import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import "./globals.css";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://legendindustries.in"),
  title: {
    default:
      "LEGEND INDUSTRIES | Bulk Bag Manufacturing & Corporate Gifting — Hyderabad",
    template: "%s | LEGEND INDUSTRIES",
  },
  description:
    "Hyderabad-based bag manufacturing since 1998. Custom bags, jute & cotton eco bags, corporate gifting. Bulk orders, custom branding, PAN India supply. Built for reliability.",
  keywords: [
    "bag manufacturer Hyderabad",
    "bulk bag manufacturing",
    "custom bags India",
    "corporate gifting bags",
    "jute bags manufacturer",
    "cotton bags bulk",
    "promotional bags",
    "duffle bag manufacturer",
    "laptop bag manufacturer",
    "school bag manufacturer",
    "eco-friendly bags",
    "corporate gift items",
    "PAN India bag supplier",
    "LEGEND INDUSTRIES",
  ],
  openGraph: {
    type: "website",
    locale: "en_IN",
    siteName: "LEGEND INDUSTRIES",
    title: "LEGEND INDUSTRIES | Bulk Bag Manufacturing & Corporate Gifting",
    description:
      "Hyderabad-based bag manufacturing since 1998. Custom bags, corporate gifting, bulk production. PAN India supply.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "/",
  },
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "LEGEND INDUSTRIES",
  description:
    "Hyderabad-based bag manufacturing and corporate gifting company established in 1998. Specializing in bulk bag production, custom branding, and PAN India supply.",
  foundingDate: "1998",
  url: "https://legendindustries.in",
  logo: "https://legendindustries.in/logo.png",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Hyderabad",
    addressRegion: "Telangana",
    addressCountry: "IN",
  },
  areaServed: {
    "@type": "Country",
    name: "India",
  },
  serviceType: [
    "Bag Manufacturing",
    "Corporate Gifting",
    "Custom Branding",
    "Bulk Production",
  ],
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "LEGEND INDUSTRIES",
  description:
    "Bulk bag manufacturing and corporate gifting. Custom bags, jute & cotton eco bags, corporate products. PAN India supply from Hyderabad.",
  foundingDate: "1998",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Hyderabad",
    addressRegion: "Telangana",
    addressCountry: "IN",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: "17.3850",
    longitude: "78.4867",
  },
  priceRange: "$$",
  openingHours: "Mo-Sa 09:00-18:00",
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is the minimum order quantity?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We specialize in bulk orders. Typical minimums start around 100 units, but this varies by product. Contact us with your specific requirements for an accurate quote.",
      },
    },
    {
      "@type": "Question",
      name: "What is the typical production and delivery timeline?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Production typically takes 1–3 weeks depending on order size and customization complexity. Delivery timelines are discussed during the order process.",
      },
    },
    {
      "@type": "Question",
      name: "What products do you manufacture?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We manufacture custom bags (travel, duffle, laptop, school, drawstring), jute and cotton eco bags, corporate gifting items, and utility products like water bottles — all with custom branding options.",
      },
    },
    {
      "@type": "Question",
      name: "Do you supply PAN India?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, we supply across India. Our production facility is based in Hyderabad, Telangana, and we deliver to clients PAN India.",
      },
    },
    {
      "@type": "Question",
      name: "Can you customize products with our company logo?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, customization is our core strength. We offer logo printing, custom sizes, material selection, color combinations, and custom packaging for bulk orders.",
      },
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(localBusinessSchema),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(faqSchema),
          }}
        />
      </head>
      <body className={`${inter.variable} font-sans antialiased`}>
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
