import { css } from '@emotion/react';

import { FlexBox } from '@/components/common/FlexBox';
import { colors } from '@/styles/global';

import { LeftWrapper, MiddleWrapper, RightWrapper } from './Header.styled';
import { Props } from './Header.types';

export const Header = ({ left, middle, right, backgroundColor = 'GY6' }: Props) => {
  return (
    <FlexBox
      as="header"
      flexDir="row"
      width="100%"
      height="52px"
      padding="0 20px"
      justifyContent="space-between"
      css={css`
        position: sticky;
        top: 0;
        z-index: 50;
        background-color: ${colors[backgroundColor]};
      `}
    >
      <LeftWrapper>{left}</LeftWrapper>
      <MiddleWrapper>{middle}</MiddleWrapper>
      <RightWrapper>{right}</RightWrapper>
    </FlexBox>
  );
};
