import { ComponentPropsWithoutRef } from 'react';

import { FlexBox } from '@/components/common/FlexBox';
import { Icon } from '@/components/common/Icon';

import { KakaoButtonContainer } from './KakaoLoginButton.styled';

export const KakaoLoginButton = ({ ...props }: ComponentPropsWithoutRef<'a'>) => {
  return (
    <KakaoButtonContainer {...props}>
      <FlexBox flexDir="row" alignItems="center" justifyContent="center" gap={8}>
        <Icon name="kakaotalk2" size={18} />
        카카오톡으로 로그인
      </FlexBox>
    </KakaoButtonContainer>
  );
};
