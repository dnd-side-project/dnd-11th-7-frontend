import { css } from '@emotion/react';

import { FlexBox } from '@/components/common/FlexBox';
import { Icon } from '@/components/common/Icon';
import { Head3 } from '@/components/common/Typography';

export const Login = () => {
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

      {/* TODO : 카카오 로그인 버튼 컴포넌트 구현하기 */}
      <FlexBox padding="0 20px" margin="0 0 94px 0">
        <img src="/icons/kakao_login.png" alt="login" />
      </FlexBox>
    </FlexBox>
  );
};