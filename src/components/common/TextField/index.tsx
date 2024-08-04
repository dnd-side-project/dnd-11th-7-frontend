import { forwardRef } from 'react';

import { StyledTextField } from './TextField.styled';
import { Props } from './TextField.types';

export const TextField = forwardRef<HTMLInputElement, Props>(
  ({ variant = 'filled', width = 'full', ...props }, ref) => {
    return <StyledTextField variant={variant} width={width} ref={ref} {...props} />;
  }
);
