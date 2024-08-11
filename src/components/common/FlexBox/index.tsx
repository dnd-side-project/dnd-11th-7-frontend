import { forwardRef } from 'react';

import { StyledFlexBox } from './FlexBox.styled';
import { Props } from './FlexBox.types';

export const FlexBox = forwardRef<HTMLDivElement, Props>(
  ({ as = 'div', children, ...props }, ref) => {
    return (
      <StyledFlexBox as={as} ref={ref} {...props}>
        {children}
      </StyledFlexBox>
    );
  }
);
