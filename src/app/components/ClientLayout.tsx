"use client";

import { usePathname } from "next/navigation";
import dynamic from "next/dynamic";
import NavBar from "./NavBar";

// Dynamically load CustomCursor only when needed
const CustomCursor = dynamic(() => import("./CustomCursor"), {
  ssr: false,
  loading: () => null, // no fallback, just don't render anything
});

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const isProjectPage = pathname?.startsWith("/projects/");

  return (
    <>
      <CustomCursor />   {/* This will now load asynchronously */}
      {!isProjectPage && <NavBar />}
      <main>{children}</main>
    </>
  );
}