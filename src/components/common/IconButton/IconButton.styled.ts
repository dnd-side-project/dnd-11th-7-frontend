import { css } from '@emotion/react';
import styled from '@emotion/styled';

import { colors } from '@/styles/global';

import { Props } from './IconButton.types';

const variantStyles = {
  default: css`
    display: flex;
    align-items: center;
    justify-content: center;
  `,
  square: css`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 57px;
    height: 57px;
    border: 1px solid ${colors.GY5};
    border-radius: 20px;
  `,
};

export const StyledButton = styled.button`
  all: unset;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 8px;
  cursor: pointer;
`;
export const IconWrapper = styled.div<Pick<Props, 'variant'>>`
  ${({ variant = 'default' }) => variantStyles[variant]}
`;
