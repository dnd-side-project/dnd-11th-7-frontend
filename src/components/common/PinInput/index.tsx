import { forwardRef } from 'react';

import { PIN } from '@/constants/pin';

import { StyledCharInput, StyledInputContainer } from './PinInput.styled';
import { Props } from './PinInput.types';

import { usePinInput } from '../../../hooks/usePinInput';

export const PinInput = forwardRef<HTMLInputElement, Props>(({ value, onPinChange, ...props }) => {
  const { inputRefs, handleChange, handleKeyDown } = usePinInput({ value, onPinChange });
  return (
    <StyledInputContainer>
      {Array.from({ length: PIN.LENGTH }).map((_, index) => (
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
});
