import { useNavigate, useSearchParams } from 'react-router-dom';

import { Button } from '@/components/common/Button';
import { FlexBox } from '@/components/common/FlexBox';
import { Icon } from '@/components/common/Icon';
import { Head3 } from '@/components/common/Typography';
import { KakaoLoginButton } from '@/components/features/KakaoLoginButton';
import { ENV } from '@/lib/env';

export const Login = () => {
  const [searchParams] = useSearchParams();
  const redirect = searchParams.get('redirect') ?? '/meeting'; // NOTE: 로그인 완료 후 redirect할 url이 없다면, /meeting((모임 목록)으로 이동
  const navigate = useNavigate();

  return (
    <FlexBox width="100%" height="100vh" padding="0 20px 82px">
      <FlexBox height="100%" gap={56}>
        <Icon name="jjakkakLogo1" size={136} />
        <Head3>{`모임의 시작을\n더욱 간편하게`}</Head3>
      </FlexBox>
      <FlexBox width="100%" gap={12}>
        {is비회원접근가능Url(redirect) && (
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

/**
 * NOTE: 비회원도 접근 가능한 페이지지만 로그인 유도를 위해 Login 페이지로 리다이렉트됐을 때,
 * `비회원으로 시작하기` 버튼 노출이 필요함
 *
 * 로그인 완료 후 리다이렉트할 url이 비회원 허용 페이지인지 확인하기 위해 url을 정규식으로 검사함
 * 비회원 허용 페이지에는 [/:uuid/new (일정 입력), ...]가 있음
 */
const 비회원접근가능UrlRegExp = [/^\/[A-Za-z\d]{8}\/new$/];
const is비회원접근가능Url = (url: string) =>
  비회원접근가능UrlRegExp.some((regex) => regex.test(url));
