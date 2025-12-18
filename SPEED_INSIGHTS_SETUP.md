# Vercel Speed Insights Setup

This project now includes Vercel Speed Insights for monitoring performance metrics of your application.

## Installation

The `@vercel/speed-insights` package has been added to the project. Dependencies can be installed with:

```bash
npm install
```

## Integration for Frontend

### For Next.js (13.5+)

Add to your `pages/_app.tsx` or `app/layout.tsx`:

```tsx
import { SpeedInsights } from "@vercel/speed-insights/next";

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <Component {...pageProps} />
      <SpeedInsights />
    </>
  );
}
```

### For React Applications

Add to your main `App.tsx`:

```tsx
import { SpeedInsights } from '@vercel/speed-insights/react';

export default function App() {
  return (
    <div>
      {/* Your app content */}
      <SpeedInsights />
    </div>
  );
}
```

### For Other Frameworks

For Vue, Svelte, Astro, or other frameworks, refer to the [official Vercel Speed Insights documentation](https://vercel.com/docs/speed-insights/setup).

## Next Steps

1. **Enable Speed Insights in Vercel Dashboard**: Go to your Vercel project dashboard and enable Speed Insights under the "Speed Insights" tab
2. **Deploy to Vercel**: Deploy your application to enable tracking
3. **Monitor Metrics**: View performance metrics in the Vercel dashboard

## Backend API

This backend API (`api/ask.js`) serves as the AI endpoint. Ensure your frontend application integrates Speed Insights for monitoring browser performance.

## Documentation

- [Speed Insights Package Documentation](https://vercel.com/docs/speed-insights/package)
- [Metrics Overview](https://vercel.com/docs/speed-insights/metrics)
- [Privacy and Compliance](https://vercel.com/docs/speed-insights/privacy-policy)
