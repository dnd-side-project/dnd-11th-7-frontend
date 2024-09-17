import React, { Suspense } from 'react';
import { QueryClientProvider } from '@tanstack/react-query';
import dayjs from 'dayjs';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import 'dayjs/locale/ko';

import { queryClient } from '@/lib/reactQuery.ts';
import { router } from '@/routes/route';

import './index.css';

dayjs.locale('ko');

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <Suspense>
        {/* TODO Suspense fallback */}
        <RouterProvider router={router} />
      </Suspense>
    </QueryClientProvider>
  </React.StrictMode>
);
