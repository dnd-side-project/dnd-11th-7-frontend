import { css } from '@emotion/react';
import styled from '@emotion/styled';

import { colors } from '@/styles/global';

import { Props } from './Button.types';

const buttonVariantStyles = {
  CTN: css`
    color: ${colors.WH};
    background-color: ${colors.purple};

    &:disabled {
      color: ${colors.GY4};
      background-color: ${colors.P3};
      cursor: not-allowed;
    }

    @media (hover: hover) and (pointer: fine) {
      &:hover:not(:disabled) {
        background-color: #6456ff;
      }
    }
  `,
  grey: css`
    color: ${colors.GY1};
    background-color: ${colors.GY5};

    &:disabled {
      color: ${colors.GY4};
      cursor: not-allowed;
    }

    @media (hover: hover) and (pointer: fine) {
      &:hover:not(:disabled) {
        background-color: ${colors.GY4};
      }
    }
  `,
  box: css`
    color: ${colors.GY1};
    background-color: ${colors.P2};

    &:disabled {
      color: ${colors.GY4};
      background-color: ${colors.P3};
      cursor: not-allowed;
    }

    @media (hover: hover) and (pointer: fine) {
      &:hover:not(:disabled) {
        background-color: ${colors.P1};
      }
    }
  `,
};

export const StyledButton = styled.button<Props>`
  width: 100%;
  height: ${({ height = 62 }) => height}px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 17px;
  padding-bottom: 17px;
  border: none;
  border-radius: 12px;
  cursor: pointer;
  transition: background-color 0.3s;
  font-weight: 500;
  font-size: ${({ fontSize = 'large' }) =>
    fontSize === 'small' ? '16px' : fontSize === 'medium' ? '18px' : '20px'};

  ${({ variant = 'CTN' }) => buttonVariantStyles[variant]};
`;
