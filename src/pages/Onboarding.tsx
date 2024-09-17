import { Navigate, useNavigate, useSearchParams } from 'react-router-dom';

import { Button } from '@/components/common/Button';
import { FlexBox } from '@/components/common/FlexBox';
import { Icon } from '@/components/common/Icon';
import { Head3 } from '@/components/common/Typography';
import { KakaoLoginButton } from '@/components/features/KakaoLoginButton';
import { useAuth } from '@/hooks/useAuth';
import { ENV } from '@/lib/env';

export const Onboarding = () => {
  const { isAuthenticated } = useAuth();
  const navigate = useNavigate();

  const [searchParams] = useSearchParams();
  const id = searchParams.get('id');
  const isAccessedWithUUID = id !== null; // NOTE: 일정 입력 목적으로 접근한 경우

  // NOTE: 로그인한 유저가 일정 입력 목적으로 접근한 경우
  if (isAuthenticated && isAccessedWithUUID) {
    return <Navigate to={`/${id}`} />;
  }

  // NOTE: 로그인한 유저가 일정 입력 목적이 아닌 경우
  if (isAuthenticated && !isAccessedWithUUID) {
    return <Navigate to="/meeting" />;
  }

  return (
    <FlexBox width="100%" height="100vh" padding="0 20px 82px">
      <FlexBox height="100%" gap={56}>
        <Icon name="jjakkakLogo1" size={136} />
        <Head3>{`모임의 시작을\n더욱 간편하게`}</Head3>
      </FlexBox>
      <FlexBox width="100%" gap={12}>
        {!isAuthenticated &&
          isAccessedWithUUID && ( // NOTE: 로그인 안 한 유저가 일정 입력 목적으로 접근한 경우
            <Button variant="tertiary" height="small" onClick={() => navigate(`/${id}`)}>
              비회원으로 시작하기
            </Button>
          )}
        <KakaoLoginButton
          href={
            isAccessedWithUUID
              ? `${ENV.API_BASE_URL}/auth/oauth2/kakao?redirect=/${id}` // NOTE: 로그인 후 모임 상세로 이동
              : `${ENV.API_BASE_URL}/auth/oauth2/kakao?redirect=/meeting` // NOTE: 로그인 후 모임 목록으로 이동
          }
        />
      </FlexBox>
    </FlexBox>
  );
};
