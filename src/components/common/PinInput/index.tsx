import { forwardRef } from 'react';

import { PIN } from '@/constants/pin';

import {
  StyledCharInput,
  StyledInputContainer,
  StyledCharContainer,
  StyledHelperText,
} from './PinInput.styled';
import { Props } from './PinInput.types';

import { usePinInput } from '../../../hooks/usePinInput';
import { Caption } from '../Typography/index';

export const PinInput = forwardRef<HTMLInputElement, Props>(({ value, onPinChange, ...props }) => {
  const { isValid, inputRefs, handleChange, handleKeyDown } = usePinInput({ value, onPinChange });
  return (
    <StyledInputContainer>
      <StyledCharContainer>
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
      </StyledCharContainer>
      <StyledHelperText>
        {isValid === false && (
          <Caption color="RD" regularWeight>
            영문 혹은 숫자만 입력 가능합니다.
          </Caption>
        )}
      </StyledHelperText>
    </StyledInputContainer>
  );
});
