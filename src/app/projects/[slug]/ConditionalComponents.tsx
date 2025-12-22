// app/components/ConditionalComponents.tsx
'use client';

import { usePathname } from 'next/navigation';
import NavBar from '../../components/NavBar';
import CustomCursor from '../../components/CustomCursor';

export default function ConditionalComponents() {
  const pathname = usePathname();
  const isProjectPage = pathname?.startsWith('/projects/');

  // Don't render on project pages
  if (isProjectPage) {
    return null;
  }

  return (
    <>
      <CustomCursor />
      <NavBar />
    </>
  );
}