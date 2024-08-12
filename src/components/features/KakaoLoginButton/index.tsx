import { KAKAO_LOGIN_URL } from '@/constants/auth';

import { KakaoButtonContainer } from './KakaoLoginButton.styled';

import { FlexBox } from '../../common/FlexBox';
import { Icon } from '../../common/Icon';

export const KakaoLoginButton = () => {
  const redirectToKakaoLogin = () => {
    window.location.href = KAKAO_LOGIN_URL;
  };

  return (
    <KakaoButtonContainer onClick={redirectToKakaoLogin}>
      <FlexBox flexDir="row" alignItems="center" justifyContent="center" gap={8}>
        <Icon name="kakaotalk2" size={18} />
        카카오톡으로 로그인
      </FlexBox>
    </KakaoButtonContainer>
  );
};
