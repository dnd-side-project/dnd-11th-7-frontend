import { css } from '@emotion/react';
import styled from '@emotion/styled';

import { FlexBox } from '@/components/common/FlexBox';
import { colors } from '@/styles/global';

import { Props } from './Header.types';

export const Header = ({ left, middle, right }: Props) => {
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
        background-color: ${colors.GY6};
      `}
    >
      <LeftWrapper>{left}</LeftWrapper>
      <MiddleWrapper>{middle}</MiddleWrapper>
      <RightWrapper>{right}</RightWrapper>
    </FlexBox>
  );
};

const LeftWrapper = styled.div``;
const MiddleWrapper = styled.div`
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  text-align: center;
`;
const RightWrapper = styled.div``;
