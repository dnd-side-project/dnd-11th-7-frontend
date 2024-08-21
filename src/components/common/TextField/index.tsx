import { ChangeEvent, forwardRef } from 'react';
import { css } from '@emotion/react';

import { IconButton } from '@/components/common/IconButton';
import { Caption } from '@/components/common/Typography';
import { colors } from '@/styles/global';
import { createIsValidInstance } from '@/utils/validation';

import { StyledInput, StyledTextFieldContainer, StyledTextFieldWrapper } from './TextField.styled';
import { Props } from './TextField.types';

export const TextField = forwardRef<HTMLInputElement, Props>(
  (
    { variant = 'filled', value, disabled, validator, onChange, onClickClear, ...inputProps },
    ref
  ) => {
    const hasInput = value ? value.length > 0 : false;
    const validationState = validator && value ? validator(value) : createIsValidInstance(); // NOTE: validator가 없으면 항상 유효한 상태로 간주
    const canShowClearButton = hasInput && onClickClear && !disabled;

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
      if (onChange) {
        onChange(e);
      }
    };

    const handleClickClear = () => {
      if (onClickClear) {
        onClickClear();
      }
    };

    return (
      <StyledTextFieldContainer>
        <StyledTextFieldWrapper
          variant={variant}
          style={
            validationState.isValid === false
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
        {validationState.isValid === false && (
          <Caption color="RD" regularWeight>
            {validationState.message || '올바른 값을 입력해 주세요.'}
          </Caption>
        )}
      </StyledTextFieldContainer>
    );
  }
);

TextField.displayName = 'TextField';
