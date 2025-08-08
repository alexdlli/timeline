import App from '@/presentation/App/App.tsx';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

// biome-ignore lint/style/noNonNullAssertion: This is mandatory by react
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
