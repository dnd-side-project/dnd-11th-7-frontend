import { useEffect } from 'react';
import { Navigate } from 'react-router-dom';

export const LoginFailure = () => {
  useEffect(() => {
    alert('서버에 문제가 생겼어요. 다시 로그인해 주세요.');
  }, []);

  return <Navigate to="/login" replace />;
};
