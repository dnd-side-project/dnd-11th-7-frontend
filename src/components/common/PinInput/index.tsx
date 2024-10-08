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

export const PinInput = forwardRef<HTMLInputElement, Props>(
  ({ value, onPinChange, message, ...props }) => {
    const { isValid, inputRefs, handleChange, handleKeyDown } = usePinInput({ value, onPinChange });

    const showErrorMessage = !isValid || (typeof message === 'string' && message.length > 0);
    const errorMessage = !isValid ? '영문 혹은 숫자만 입력 가능합니다.' : message;

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
          {showErrorMessage && (
            <Caption color="RD" regularWeight>
              {errorMessage}
            </Caption>
          )}
        </StyledHelperText>
      </StyledInputContainer>
    );
  }
);
