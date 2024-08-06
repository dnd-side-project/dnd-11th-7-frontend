import { forwardRef } from 'react';

import { StyledProgress } from './Progress.styled';
import { Props } from './Progress.types';

export const Progress = forwardRef<HTMLDivElement, Props>(({ ...props }, ref) => {
  return <StyledProgress ref={ref} {...props} />;
});
