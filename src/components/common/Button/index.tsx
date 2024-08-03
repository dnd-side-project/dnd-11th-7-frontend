// Button.tsx
import { forwardRef } from 'react';

import { StyledButton } from './Button.styled';
import { Props } from './Button.types';

export const Button = forwardRef<HTMLButtonElement, Props>(({ children, ...props }, ref) => {
  return (
    <StyledButton ref={ref} {...props}>
      {children}
    </StyledButton>
  );
});
