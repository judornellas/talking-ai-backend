/**
 * Example: Remix Application
 * 
 * This example shows how to integrate Vercel Speed Insights
 * with a Remix application.
 * 
 * Add this to your app/root.tsx file.
 */

import { SpeedInsights } from '@vercel/speed-insights/remix';

export default function App() {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Talking AI</title>
      </head>
      <body>
        {/* App content */}
        <SpeedInsights />
      </body>
    </html>
  );
}
