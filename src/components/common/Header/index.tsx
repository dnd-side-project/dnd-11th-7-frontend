import { css } from '@emotion/react';

import { FlexBox } from '@/components/common/FlexBox';

import { Props } from './Header.types';

export const Header = ({ left, middle, right }: Props) => {
  return (
    <FlexBox
      flexDir="row"
      css={css`
        width: 100%;
        height: 52px;
      `}
      padding="0 20px"
      justifyContent="space-between"
    >
      <div>{left}</div>
      <div>{middle}</div>
      <div>{right}</div>
    </FlexBox>
  );
};
