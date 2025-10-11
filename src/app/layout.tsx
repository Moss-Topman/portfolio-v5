import type { Metadata } from "next";
import { Inter } from "next/font/google"; // Or your font; Inter is clean sans-serif like the target site
import "./globals.css"; // Already set up
import NavBar from "./components/NavBar"; // We'll create this

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Your Name - Software Engineer", // Customize to your name
  description: "Portfolio simulating tamalsen.dev",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-[#0a0a0f] text-white antialiased`}>
        <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:top-0 focus:left-0 focus:bg-white focus:text-black focus:p-2">Skip to main content</a> {/* Accessibility: visible skip link on focus */}
        <NavBar />
        <main id="main-content">{children}</main>
        {/* Footer later */}
      </body>
    </html>
  );
}