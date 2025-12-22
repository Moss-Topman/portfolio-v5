"use client";

import { usePathname } from 'next/navigation';
import NavBar from './NavBar';

export default function ClientWrapper({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isProjectPage = pathname?.startsWith('/projects/');

  return (
    <>
      {!isProjectPage && <NavBar />}
      <main>{children}</main>
    </>
  );
}