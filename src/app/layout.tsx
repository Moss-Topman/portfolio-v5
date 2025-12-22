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
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
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