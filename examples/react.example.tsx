/**
 * Example: React Application
 * 
 * This example shows how to integrate Vercel Speed Insights
 * with a React application (Create React App or Vite).
 * 
 * Add this to your App.tsx or App.jsx file.
 */

import { SpeedInsights } from '@vercel/speed-insights/react';

function App() {
  return (
    <div className="App">
      {/* Your application content */}
      <header>
        <h1>Talking AI</h1>
      </header>
      <main>
        {/* Main app content */}
      </main>
      <SpeedInsights />
    </div>
  );
}

export default App;
