import { forwardRef } from 'react';

import { StyledSlider } from './Slider.styled';
import { Props } from './Slider.types';

export const Slider = forwardRef<HTMLInputElement, Props>(({ ...props }, ref) => {
  return <StyledSlider ref={ref} type="range" {...props} />;
});
