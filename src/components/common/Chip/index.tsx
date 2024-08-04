import { forwardRef } from 'react';
import { css } from '@emotion/react';

import { FlexBox } from '@/components/common/FlexBox';

import { StyledChip } from './Chip.styled';
import { GroupProps, Props } from './Chip.types';

/**
 * @description button으로 사용하는 경우 component='button' 적용해 주세요.
 */
export const Chip = ({ component = 'span', variant = 'filled', children, ...props }: Props) => {
  return (
    <StyledChip as={component} component={component} variant={variant} {...props}>
      {children}
    </StyledChip>
  );
};

const Group = forwardRef<HTMLDivElement, GroupProps>(({ children }, ref) => {
  return (
    <FlexBox
      flexDir="row"
      gap="12px 6px"
      flexWrap="wrap"
      css={css`
        width: fit-content;
      `}
      ref={ref}
    >
      {children}
    </FlexBox>
  );
});

Chip.Group = Group;
