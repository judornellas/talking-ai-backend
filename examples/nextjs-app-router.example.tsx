/**
 * Example: Next.js with App Router (13.5+)
 * 
 * This example shows how to integrate Vercel Speed Insights
 * with a Next.js application using the App Router.
 * 
 * Add this to your app/layout.tsx file.
 */

import { SpeedInsights } from "@vercel/speed-insights/next";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <title>Talking AI</title>
      </head>
      <body>
        {children}
        <SpeedInsights />
      </body>
    </html>
  );
}
