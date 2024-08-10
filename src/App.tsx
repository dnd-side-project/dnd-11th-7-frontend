import { Outlet } from 'react-router-dom';

import { AppLayout } from '@/components/common/AppLayout';

export const App = () => {
  return (
    <AppLayout>
      <Outlet />
    </AppLayout>
  );
};
