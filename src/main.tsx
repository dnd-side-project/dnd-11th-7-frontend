import React from 'react';
import { QueryClientProvider } from '@tanstack/react-query';
// eslint-disable-next-line import/order
import ReactDOM from 'react-dom/client';

import './index.css';
import { RouterProvider } from 'react-router-dom';

import { queryClient } from '@/lib/reactQuery.ts';

import { router } from './routes/route';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  </React.StrictMode>
);
