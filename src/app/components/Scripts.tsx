"use client";

import Script from "next/script";

export default function Scripts() {
  return (
    <>
      {/* Vercel Analytics */}
      <Script
        strategy="lazyOnload"
        src="/_vercel/insights/script.js" // adjust if different
        // or use the @vercel/analytics package's component, but we want defer
      />
      {/* Sentry */}
      <Script
        strategy="lazyOnload"
        id="sentry-init"
        dangerouslySetInnerHTML={{
          __html: `
            // Sentry initialisation if not already handled by the SDK
            // If you use @sentry/nextjs, it's already deferred; we can skip.
          `,
        }}
      />
    </>
  );
}