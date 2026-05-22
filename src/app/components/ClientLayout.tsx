"use client";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import NavBar from "./NavBar";

const CustomCursor = dynamic(() => import("./CustomCursor"), {
  ssr: false,
  loading: () => null,
});

export default function ClientLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isProjectPage = pathname?.startsWith("/projects/");
  const [mounted, setMounted] = useState(false);
  useEffect(() => { setMounted(true); }, []);

  return (
    <>
      {mounted && <CustomCursor />}
      {!isProjectPage && <NavBar />}
      <main>{children}</main>
    </>
  );
}