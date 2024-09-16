import { css } from '@emotion/react';
import { Navigate } from 'react-router-dom';

import { FlexBox } from '@/components/common/FlexBox';
import { Icon } from '@/components/common/Icon';
import { Head3 } from '@/components/common/Typography';
import { KakaoLoginButton } from '@/components/features/KakaoLoginButton';
import { useAuth } from '@/hooks/useAuth';
import { ENV } from '@/lib/env';

export const Login = () => {
  const { isAuthenticated } = useAuth();

  if (isAuthenticated) {
    return <Navigate to="/" />;
  }

  return (
    <FlexBox
      justifyContent="space-between"
      alignItems="center"
      css={css`
        width: 100%;
        height: 100vh;
        position: relative;
      `}
    >
      <FlexBox
        flexDir="column"
        justifyContent="center"
        alignItems="center"
        margin="60px 0 0 0"
        css={css`
          flex: 1;
        `}
      >
        <Icon name="jjakkakCircle1" width="133" height="133" />
        <FlexBox
          flexDir="column"
          justifyContent="center"
          alignItems="center"
          margin="60px 0 100px 0"
        >
          <Head3>함께 하는 시간을</Head3>
          <Head3>더욱 특별하게</Head3>
        </FlexBox>
      </FlexBox>

      <FlexBox width="100%" padding="0 20px" margin="0 0 94px 0">
        <KakaoLoginButton href={`${ENV.API_BASE_URL}/auth/oauth2/kakao`} />
      </FlexBox>
    </FlexBox>
  );
};
