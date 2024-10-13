import { useNavigate, useSearchParams } from 'react-router-dom';

import { Button } from '@/components/common/Button';
import { FlexBox } from '@/components/common/FlexBox';
import { Icon } from '@/components/common/Icon';
import { Head3 } from '@/components/common/Typography';
import { KakaoLoginButton } from '@/components/features/KakaoLoginButton';
import { ENV } from '@/lib/env';
import { isUnauthorizedUserAccessibleUrlRegExp } from '@/utils/regex';

export const Login = () => {
  const [searchParams] = useSearchParams();
  const redirect = searchParams.get('redirect') ?? '/meeting'; // NOTE: 로그인 완료 후 redirect할 url이 없다면, /meeting (모임 목록)으로 이동
  const navigate = useNavigate();

  return (
    <FlexBox width="100%" height="100vh" padding="0 20px 82px">
      <FlexBox height="100%" gap={56}>
        <Icon name="jjakkakLogo1" size={136} />
        <Head3>째깍, 모두의 일정을 한 눈에</Head3>
      </FlexBox>
      <FlexBox width="100%" gap={12}>
        {isUnauthorizedUserAccessibleUrl(redirect) && (
          <Button
            variant="tertiary"
            height="small"
            onClick={() => navigate(redirect, { state: 'allow' })}
          >
            비회원으로 시작하기
          </Button>
        )}
        <KakaoLoginButton href={`${ENV.API_BASE_URL}/auth/oauth2/kakao?redirect=${redirect}`} />
      </FlexBox>
    </FlexBox>
  );
};

const isUnauthorizedUserAccessibleUrl = (url: string) =>
  isUnauthorizedUserAccessibleUrlRegExp.some((regex) => regex.test(url));
