import React, { useEffect } from "react";
import ReactDOM from "react-dom";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import NavBar from "./components/NavBar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Moss Victor Portfolio",
  description: "Portfolio of Moss Victor - Software Engineer & AI Prompt Engineer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  useEffect(() => {
    if (process.env.NODE_ENV === "development") {
      import("@axe-core/react").then((axe) => {
        axe.default(React, ReactDOM, 1000);
      });
    }
  }, []);

  return (
    <html lang="en">
      <body className={`${inter.className} bg-[#0a0a0f] text-white antialiased`}>
        <NavBar />
        <main>{children}</main>
      </body>
    </html>
  );
}