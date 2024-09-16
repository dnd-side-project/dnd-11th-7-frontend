import { useQuery } from '@tanstack/react-query';
import { Navigate } from 'react-router-dom';

import { queries } from '@/apis';

export const LoginSuccess = () => {
  const { isLoading, isError } = useQuery({ ...queries.member.reissue });

  if (isLoading) {
    return <div>로그인중</div>; // TODO Loading Indicator
  }

  if (isError) {
    alert('로그인 실패');
    return <Navigate to="/login" replace />;
  }

  return <Navigate to="/" replace />;
};
