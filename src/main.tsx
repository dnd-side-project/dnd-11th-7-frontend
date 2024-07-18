import React from 'react';
import { QueryClientProvider } from '@tanstack/react-query';
import ReactDOM from 'react-dom/client';

import { queryClient } from '@/lib/reactQuery.ts';

import { App } from './App.tsx';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <App />
    </QueryClientProvider>
  </React.StrictMode>
);
