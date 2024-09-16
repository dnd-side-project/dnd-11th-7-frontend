import { Navigate } from 'react-router-dom';

import { useAuth } from '@/hooks/useAuth';

type Props = {
  children: React.ReactNode;
};

export const PrivateRoute = ({ children }: Props) => {
  const { isAuthenticated } = useAuth();

  if (!isAuthenticated) {
    console.error('접근할 수 없는 페이지입니다.');
    return <Navigate to="/login" />;
  }

  return <>{children}</>;
};
