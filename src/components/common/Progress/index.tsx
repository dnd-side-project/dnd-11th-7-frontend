import { forwardRef } from 'react';

import { StyledProgress } from './Progress.styled';
import { Props } from './Progress.types';

export const Progress = forwardRef<HTMLDivElement, Props>(({ min, max, value, ...props }, ref) => {
  return <StyledProgress min={min} max={max} value={value} ref={ref} {...props} />;
});
