import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { poppins, robotoMono } from "./fonts";
import "./globals.css";
import ClientLayout from "./components/ClientLayout";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://useatlasdemand.com"),
  title: {
    default: "Moss Victor – Software Engineer & AI Prompt Engineer",
    template: "%s | Moss Victor Portfolio",
  },
  description:
    "Portfolio of Moss Victor – Software Engineer, AI Prompt Engineer, and trading strategy developer. Explore projects, architecture, and metrics.",
  keywords: [
    "Software Engineer",
    "AI Prompt Engineer",
    "Next.js",
    "React",
    "Trading Strategies",
    "Moss Victor",
  ],
  authors: [{ name: "Moss Victor", url: "https://useatlasdemand.com" }],
  creator: "Moss Victor",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://useatlasdemand.com",
    siteName: "Moss Victor Portfolio",
    title: "Moss Victor – Software Engineer & AI Prompt Engineer",
    description:
      "Portfolio showcasing software engineering, AI prompt engineering, and quantitative projects.",
    images: [
      {
        url: "/assets/og-image.png",
        width: 1200,
        height: 630,
        alt: "Moss Victor Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Moss Victor – Software Engineer & AI Prompt Engineer",
    description:
      "Portfolio showcasing software engineering, AI prompt engineering, and quantitative projects.",
    images: ["/assets/og-image.png"],
    creator: "@mossvictor",
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
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Moss Victor",
    url: "https://useatlasdemand.com",
    jobTitle: "Software Engineer & AI Prompt Engineer",
    description:
      "Portfolio showcasing software engineering, AI prompt engineering, and quantitative projects.",
    sameAs: [],
  };

  return (
    <html lang="en" className={`${poppins.variable} ${robotoMono.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {/* Preconnects removed — fonts are self-hosted via next/font, no external requests needed */}
      </head>
      <body className={`${inter.className} bg-[#1A191D] text-white antialiased`}>
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}