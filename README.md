# Talking AI Backend

Backend API for the Talking AI application with integrated Vercel Speed Insights for performance monitoring.

## Overview

This is a Node.js backend powered by Vercel serverless functions. It provides an AI-powered question-answering API that integrates with OpenAI's GPT models.

## Project Structure

```
.
├── api/
│   └── ask.js                 # Main API endpoint for AI questions
├── examples/                  # Framework-specific integration examples
│   ├── nextjs-app-router.example.tsx
│   ├── nextjs-pages-router.example.tsx
│   ├── react.example.tsx
│   ├── remix.example.tsx
│   └── vue.example.vue
├── package.json              # Project dependencies
├── vercel.json              # Vercel configuration
└── SPEED_INSIGHTS_SETUP.md  # Speed Insights setup guide
```

## Prerequisites

- Node.js 18+
- Vercel account
- OpenAI API key

## Installation

1. Clone the repository
2. Install dependencies:

```bash
npm install
```

## Environment Variables

Create a `.env.local` file with the following:

```
OPENAI_API_KEY=your_openai_api_key_here
```

## API Endpoints

### POST `/api/ask`

Ask the AI a question.

**Request:**
```json
{
  "question": "What is JavaScript?"
}
```

**Response:**
```json
{
  "answer": "JavaScript is a programming language..."
}
```

## Performance Monitoring with Vercel Speed Insights

This project includes Vercel Speed Insights for monitoring your application's performance.

### Setup Steps

1. **Install Dependencies**: Already done with `npm install`

2. **Enable Speed Insights in Vercel Dashboard**:
   - Go to your [Vercel dashboard](https://vercel.com/dashboard)
   - Select your project
   - Click on the "Speed Insights" tab
   - Click "Enable"

3. **Integrate in Frontend**:
   - If you have a frontend application, add the Speed Insights component
   - See the [examples](./examples/) directory for framework-specific implementations
   - Or read [SPEED_INSIGHTS_SETUP.md](./SPEED_INSIGHTS_SETUP.md) for detailed instructions

4. **Deploy to Vercel**:
   ```bash
   vercel deploy
   ```

5. **View Metrics**:
   - Return to your Vercel dashboard
   - After users visit your site, metrics will appear in the Speed Insights tab

### Framework-Specific Examples

- [Next.js (App Router)](./examples/nextjs-app-router.example.tsx)
- [Next.js (Pages Router)](./examples/nextjs-pages-router.example.tsx)
- [React](./examples/react.example.tsx)
- [Remix](./examples/remix.example.tsx)
- [Vue](./examples/vue.example.vue)

For other frameworks (Astro, Svelte, Nuxt, etc.), refer to the [official documentation](https://vercel.com/docs/speed-insights/setup).

## Local Development

```bash
npm run dev
```

This will start the Vercel development server at `http://localhost:3000`.

## Building

```bash
npm run build
```

## Linting

```bash
npm run lint
```

## Performance Best Practices

When using Speed Insights, monitor these key metrics:

- **LCP (Largest Contentful Paint)**: Time when the largest content element is visible
- **FID (First Input Delay)**: Response time to first user interaction
- **CLS (Cumulative Layout Shift)**: Visual stability of the page
- **TTFB (Time to First Byte)**: Server response time

## Documentation

- [Vercel Speed Insights Documentation](https://vercel.com/docs/speed-insights)
- [Speed Insights Package](https://vercel.com/docs/speed-insights/package)
- [Metrics Guide](https://vercel.com/docs/speed-insights/metrics)
- [Privacy & Compliance](https://vercel.com/docs/speed-insights/privacy-policy)

## License

MIT

## Support

For issues and questions, please create an issue on GitHub or contact the maintainers.
