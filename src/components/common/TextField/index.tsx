import { ChangeEvent, forwardRef, useState } from 'react';
import { css } from '@emotion/react';

import { IconButton } from '@/components/common/IconButton';
import { Caption } from '@/components/common/Typography';
import { colors } from '@/styles/global';

import { StyledInput, StyledTextFieldContainer, StyledTextFieldWrapper } from './TextField.styled';
import { InvalidState, Props, ValidState } from './TextField.types';

export const TextField = forwardRef<HTMLInputElement, Props>(
  (
    { variant = 'filled', value, disabled, validator, onChange, onClickClear, ...inputProps },
    ref
  ) => {
    const [validState, setValidState] = useState<ValidState | InvalidState>({ isValid: true });
    const hasInput = value ? value.length > 0 : false;
    const isInvalidInput = validState.isValid === false;
    const canShowClearButton = hasInput && onClickClear && !disabled;

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
      if (validator) {
        setValidState(validator(e.target.value));
      }
      if (onChange) {
        onChange(e);
      }
    };

    const handleClickClear = () => {
      setValidState({ isValid: true });
      if (onClickClear) {
        onClickClear();
      }
    };

    return (
      <StyledTextFieldContainer>
        <StyledTextFieldWrapper
          variant={variant}
          style={
            isInvalidInput
              ? { outline: `1px solid ${colors.RD}`, ...inputProps.style }
              : inputProps.style
          }
        >
          <StyledInput
            value={value}
            disabled={disabled}
            onChange={handleChange}
            ref={ref}
            {...inputProps}
          />
          {canShowClearButton && (
            <IconButton iconName="deleteRounded" size={14} onClick={handleClickClear} css={css``} />
          )}
        </StyledTextFieldWrapper>
        {isInvalidInput && (
          <Caption color="RD" regularWeight>
            {validState.message || '올바른 값을 입력해 주세요.'}
          </Caption>
        )}
      </StyledTextFieldContainer>
    );
  }
);

TextField.displayName = 'TextField';
