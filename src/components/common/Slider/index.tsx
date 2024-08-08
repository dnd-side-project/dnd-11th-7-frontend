import { forwardRef } from 'react';

import { BubbleLabel, SliderContainer, SliderLabel, StyledSlider } from './Slider.styled';
import { Props } from './Slider.types';

export const Slider = forwardRef<HTMLInputElement, Props>(
  ({ min = 1, max = 10, value, showBubble = true, ...props }, ref) => {
    return (
      <SliderContainer>
        {showBubble && (
          <BubbleLabel value={value} min={min} max={max}>
            {value}명
          </BubbleLabel>
        )}
        <StyledSlider ref={ref} type="range" min={min} max={max} value={value} {...props} />
        <SliderLabel value={value} min={min} max={max}>
          {value}명
        </SliderLabel>
      </SliderContainer>
    );
  }
);
