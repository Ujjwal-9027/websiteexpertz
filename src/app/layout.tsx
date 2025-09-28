import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default:
      "WebsiteExpertz - Transform Your Business Online | High-Converting Websites & Digital Marketing",
    template: "%s | WebsiteExpertz",
  },
  description:
    "Professional web development and digital marketing that drives real results. We create high-converting websites, SEO optimization, and comprehensive digital strategies that turn visitors into customers and grow your revenue.",
  keywords: [
    "web development",
    "SEO optimization",
    "digital marketing",
    "high-converting websites",
    "mobile-responsive design",
    "e-commerce solutions",
    "business growth",
    "professional web design",
    "conversion optimization",
    "Google SEO",
    "website redesign",
    "digital transformation",
  ],
  authors: [{ name: "WebsiteExpertz", url: "https://websiteexpertz.com" }],
  creator: "WebsiteExpertz",
  publisher: "WebsiteExpertz",
  category: "Web Development & Digital Marketing",
  classification: "Business Services",
  openGraph: {
    title: "WebsiteExpertz - Transform Your Business Online",
    description:
      "Professional web development and digital marketing that drives real results. High-converting websites, SEO optimization, and digital strategies that grow your revenue.",
    type: "website",
    locale: "en_US",
    siteName: "WebsiteExpertz",
    url: "https://websiteexpertz.com",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "WebsiteExpertz - Professional Web Development & Digital Marketing",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@websiteexpertz",
    creator: "@websiteexpertz",
    title: "WebsiteExpertz - Transform Your Business Online",
    description:
      "Professional web development and digital marketing that drives real results. High-converting websites and digital strategies that grow your revenue.",
    images: ["/twitter-card.jpg"],
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
  verification: {
    google: "your-google-verification-code",
    other: {
      "msvalidate.01": "your-bing-verification-code",
    },
  },
  alternates: {
    canonical: "https://websiteexpertz.com",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "WebsiteExpertz",
    description:
      "Professional web development and digital marketing services that drive real business results",
    url: "https://websiteexpertz.com",
    logo: "https://websiteexpertz.com/logo.png",
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+1-XXX-XXX-XXXX",
      contactType: "customer service",
      availableLanguage: "English",
    },
    address: {
      "@type": "PostalAddress",
      addressCountry: "US",
    },
    sameAs: [
      "https://twitter.com/websiteexpertz",
      "https://linkedin.com/company/websiteexpertz",
      "https://facebook.com/websiteexpertz",
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Digital Services",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Website Development",
            description:
              "High-converting websites that turn visitors into customers",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "SEO Optimization",
            description: "Get found on Google and grow your business",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Digital Marketing",
            description:
              "Complete digital strategies that drive qualified traffic",
          },
        },
      ],
    },
  };

  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Header />
        <main>{children}</main>
      </body>
    </html>
  );
}
