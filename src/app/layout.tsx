import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import CustomCursor from "./components/CustomCursor";
import { Analytics } from '@vercel/analytics/react';
import ClientWrapper from "./components/ClientWrapper";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Moss Victor Portfolio",
  description: "Portfolio of Moss Victor - Software Engineer & AI Prompt Engineer",
  robots: "index, follow",
  viewport: "width=device-width, initial-scale=1.0",

  openGraph: {
    title: "Moss Victor Portfolio",
    description: "Software Engineer & AI Prompt Engineer specializing in Next.js, React, and modern web development",
    type: "website",
    url: "https://yourdomain.com", // Replace with your actual domain
    images: [
      {
        url: "/og-image.png", // Create this image in your public folder
        width: 1200,
        height: 630,
        alt: "Moss Victor Portfolio Preview",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Moss Victor Portfolio",
    description: "Software Engineer & AI Prompt Engineer",
    images: ["/og-image.png"], // Same image for Twitter
  },
  keywords: ["Software Engineer", "AI Prompt Engineer", "Frontend Developer", "Next.js", "React", "Portfolio"],
  authors: [{ name: "Moss Victor" }],
  creator: "Moss Victor",
  publisher: "Moss Victor",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="theme-color" content="#252529" />
      </head>
      <body className={`${inter.className} bg-[#1A191D] text-white antialiased`}>
        {/* Always show CustomCursor on ALL pages */}
        <CustomCursor />
        <ClientWrapper>
          {children}
        </ClientWrapper>
        <Analytics />
      </body>
    </html>
  );
}