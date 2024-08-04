import { forwardRef } from 'react';

import { StyledFlexBox } from './FlexBox.styled';
import { Props } from './FlexBox.types';

export const FlexBox = forwardRef<HTMLDivElement, Props>(({ children, ...props }, ref) => {
  return (
    <StyledFlexBox ref={ref} {...props}>
      {children}
    </StyledFlexBox>
  );
});
