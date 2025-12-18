"use client";

import { useEffect } from "react";

export default function AxeProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    if (process.env.NODE_ENV === 'development') {
      import('@axe-core/react').then(axe => axe.default(React, ReactDOM, 1000));
    }
  }, []);

  return <>{children}</>;
}