'use client';

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { usePathname } from 'next/navigation';
import "./globals.css";
import NavBar from "./components/NavBar";
import CustomCursor from "./components/CustomCursor";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const isProjectPage = pathname?.startsWith('/projects/');

  return (
    <html lang="en">
      <head>
        <title>Moss Victor Portfolio</title>
        <meta name="description" content="Portfolio of Moss Victor - Software Engineer & AI Prompt Engineer" />
      </head>
      <body className={`${inter.className} bg-[#1A191D] text-white antialiased`}>
        {/* Always show CustomCursor on ALL pages */}
        <CustomCursor />
        
        {/* Only show main NavBar on non-project pages */}
        {!isProjectPage && <NavBar />}
        
        <main>{children}</main>
      </body>
    </html>
  );
}