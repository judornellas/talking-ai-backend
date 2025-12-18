import { inject } from '@vercel/speed-insights';

/**
 * Middleware to wrap API handlers with Vercel Speed Insights tracking
 * This allows serverless functions to report performance metrics
 */
export default function withSpeedInsights(handler) {
  return async function handlerWithInsights(req, res) {
    // Inject Speed Insights to track performance
    if (process.env.NODE_ENV === 'production') {
      inject();
    }

    // Call the original handler
    return handler(req, res);
  };
}
