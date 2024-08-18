import { css } from '@emotion/react';
import styled from '@emotion/styled';

import { colors } from '@/styles/global';

import { Props } from './TextField.types';

const variantStyles = {
  filled: css`
    color: ${colors.BK};
    background-color: ${colors.WH};

    & input::placeholder {
      color: ${colors.GY5};
    }

    &:has(input:disabled) {
      color: ${colors.GY4};
      background-color: #eaeaea; // TODO: global로 관리
      & input::placeholder {
        color: ${colors.GY4};
      }
    }
  `,
};

export const StyledTextFieldContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 5px;
`;
export const StyledTextFieldWrapper = styled.div<Pick<Props, 'variant'>>`
  display: flex;
  border-radius: 5px;
  padding-right: 15px;
  gap: 10px;
  cursor: text;
  ${({ variant = 'filled' }) => variantStyles[variant]}

  &:has(input:focus) {
    outline: 1px solid ${colors.purple};
  }
  &:has(input:disabled) {
    cursor: default;
  }
`;
export const StyledInput = styled.input`
  all: unset;
  min-width: 0;
  width: 100%;
  padding: 15px 0 15px 15px;
  font-size: 16px;
`;
