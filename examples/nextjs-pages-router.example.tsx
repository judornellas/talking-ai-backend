/**
 * Example: Next.js with Pages Router
 * 
 * This example shows how to integrate Vercel Speed Insights
 * with a Next.js application using the Pages Router.
 * 
 * Add this to your pages/_app.tsx file.
 */

import type { AppProps } from 'next/app';
import { SpeedInsights } from '@vercel/speed-insights/next';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Component {...pageProps} />
      <SpeedInsights />
    </>
  );
}

export default MyApp;
