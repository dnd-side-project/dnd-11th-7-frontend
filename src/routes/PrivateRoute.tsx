import { Navigate, useLocation } from 'react-router-dom';

import { useAuth } from '@/hooks/useAuth';

type Props = {
  children: React.ReactNode;
};

/**
 * @description 로그인이 필요한 페이지를 래핑하는 컴포넌트.
 * 로그인 여부 확인 후, 로그인했다면 래핑한 페이지를 렌더하고 로그인하지 않았다면 로그인 페이지로 리다이렉트함
 */
export const PrivateRoute = ({ children }: Props) => {
  const { pathname, state } = useLocation();
  const { isAuthenticated } = useAuth();
  const isAccessAllowed = state === 'allow'; // NOTE: accessToken이 없어도 예외적으로 접근을 허용할 때 사용 (e.g. 비회원으로 일정 입력하기)

  if (!isAuthenticated && !isAccessAllowed) {
    /**
     * 로그인하지 않았을 때 권한을 필요로 하는 페이지(children으로 렌더링할 페이지)에 접근하면,
     * 로그인을 마치고 다시 권한을 필요로 하는 페이지로 이동하도록 현재 페이지(children으로 렌더링할 페이지)의 pathname을 전달
     */
    console.error('접근할 수 없는 페이지입니다.');
    return <Navigate to={`/login?redirect=${pathname}`} />;
  }

  return <>{children}</>;
};
