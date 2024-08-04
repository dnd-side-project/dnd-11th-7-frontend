import { css } from '@emotion/react';
import styled from '@emotion/styled';

import { colors } from '@/styles/global';

import { Props } from './TextField.types';

const textFieldStyles = {
  filled: css`
    color: ${colors.BK};
    background-color: ${colors.WH};

    &::placeholder {
      color: ${colors.GY4};
    }
  `,
};
const textFieldWidthStyles = {
  full: css`
    width: 100%;
  `,
};

export const StyledTextField = styled.input<Props>`
  all: unset;
  padding: 15px;
  border-radius: 5px;
  font-size: 16px;

  ${({ variant = 'filled' }) => textFieldStyles[variant]}
  ${({ width = 'full' }) => textFieldWidthStyles[width]}
`;
