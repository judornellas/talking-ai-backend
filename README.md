# Talking AI Backend

An AI-powered backend service using OpenAI API with Vercel Speed Insights performance monitoring.

## Features

- **AI Endpoint**: POST `/api/ask` - Ask questions to GPT-4o mini
- **Performance Monitoring**: Integrated Vercel Speed Insights for tracking API performance
- **Serverless**: Deployed on Vercel's serverless infrastructure

## Getting Started

### Prerequisites

- Node.js 18+
- Vercel account
- OpenAI API key

### Installation

1. Clone the repository:
```bash
git clone https://github.com/judornellas/talking-ai-backend.git
cd talking-ai-backend
```

2. Install dependencies:
```bash
npm install
# or
pnpm install
# or
yarn install
# or
bun install
```

3. Set up environment variables:
```bash
cp .env.example .env.local
# Edit .env.local and add your OpenAI API key
```

### Local Development

Run the development server:
```bash
npm run dev
```

### Deployment

Deploy to Vercel:
```bash
npm run deploy
```

Or connect your Git repository to Vercel for automatic deployments.

## API Endpoints

### POST /api/ask

Ask a question to the AI.

**Request:**
```json
{
  "question": "What is the capital of France?"
}
```

**Response:**
```json
{
  "answer": "The capital of France is Paris."
}
```

## Speed Insights

This project integrates Vercel Speed Insights to monitor API performance. Speed Insights automatically tracks:

- **Response times**: How long API requests take to complete
- **Performance metrics**: CPU, memory, and execution time
- **Error tracking**: Failed requests and exceptions

### Enabling Speed Insights

1. Go to your [Vercel Dashboard](https://vercel.com/dashboard)
2. Select your project
3. Navigate to the **Speed Insights** tab
4. Click **Enable**
5. Deploy your application

After deployment and user traffic, view your performance metrics in the Speed Insights dashboard.

### Performance Data

Once deployed and with user traffic, you can view:
- **Web Vitals**: Real user monitoring data
- **Performance Trends**: Historical performance data
- **Error Reports**: API error tracking

For more information, see [Vercel Speed Insights Documentation](https://vercel.com/docs/speed-insights).

## Project Structure

```
├── api/
│   ├── ask.js                 # Main AI question handler
│   └── middleware/
│       └── withSpeedInsights.js # Speed Insights middleware (optional)
├── vercel.json                # Vercel configuration
├── package.json               # Dependencies
├── .env.example               # Environment variables template
└── README.md                  # This file
```

## Environment Variables

- `OPENAI_API_KEY`: Your OpenAI API key
- `NODE_ENV`: Environment mode (development/production)

## License

MIT

## Support

For issues or questions, please open an issue on GitHub.
