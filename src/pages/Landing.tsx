import { Navigate } from 'react-router-dom';

import { useAuth } from '@/hooks/useAuth';

// NOTE: 랜딩 페이지는 로그인하지 않은 사용자에게만 보여짐
export const Landing = () => {
  const { isAuthenticated } = useAuth();

  if (isAuthenticated) {
    return <Navigate to="/meeting" />;
  }

  return <div>랜딩페이지</div>;
};
