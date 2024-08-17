import { ChangeEvent, forwardRef, useRef } from 'react';

import { StyledCharInput, StyledInputContainer } from './PinInput.styled';
import { Props } from './PinInput.types';

export const PinInput = forwardRef<HTMLInputElement, Props>(
  ({ value, onPinChange, ...props }, ref) => {
    const inputRefs = useRef<(HTMLInputElement | null)[]>([]);

    const focusInput = (index: number) => {
      inputRefs.current[index]?.focus();
    };

    const handleChange = (e: ChangeEvent<HTMLInputElement>, index: number) => {
      const newPinValue = [...value];
      newPinValue[index] = e.target.value;
      onPinChange(newPinValue);

      if (e.target.value.length === 1 && index < value.length - 1) {
        focusInput(index + 1);
      }
    };

    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>, index: number) => {
      if (e.key !== 'Backspace') {
        return;
      }
      const newPinValue = [...value];
      if (newPinValue[index]) {
        newPinValue[index] = '';
        onPinChange(newPinValue);
      }
      if (index > 0) {
        focusInput(index - 1);
      }
    };

    return (
      <StyledInputContainer>
        {[...Array(6)].map((_, index) => (
          <StyledCharInput
            key={index}
            ref={(el) => (inputRefs.current[index] = el)}
            type="text"
            maxLength={1}
            value={value[index] || ''}
            onChange={(e) => handleChange(e, index)}
            onKeyDown={(e) => handleKeyDown(e, index)}
            {...props}
          />
        ))}
      </StyledInputContainer>
    );
  }
);
