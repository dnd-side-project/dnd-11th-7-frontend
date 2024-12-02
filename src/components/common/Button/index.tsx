import { forwardRef } from 'react';

import { StyledButton } from './Button.styled';
import { Props } from './Button.types';

import { Loading } from '../Loading';

export const Button = forwardRef<HTMLButtonElement, Props>(
  ({ children, isLoading = false, ...props }, ref) => {
    return (
      <StyledButton ref={ref} {...props}>
        {isLoading ? <Loading /> : children}
      </StyledButton>
    );
  }
);
