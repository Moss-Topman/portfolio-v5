"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import dynamic from "next/dynamic";
import NavBar from "./NavBar";

const CustomCursor = dynamic(() => import("./CustomCursor"), {
  ssr: false,
  loading: () => null,
});

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const isProjectPage = pathname?.startsWith("/projects/");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined" && "requestIdleCallback" in window) {
      const id = requestIdleCallback(() => setMounted(true));
      return () => cancelIdleCallback(id);
    } else {
      const id = setTimeout(() => setMounted(true), 200);
      return () => clearTimeout(id);
    }
  }, []);

  return (
    <>
      {mounted && <CustomCursor />}
      {!isProjectPage && <NavBar />}
      <main>{children}</main>
    </>
  );
}