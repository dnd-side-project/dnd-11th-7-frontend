import { css } from '@emotion/react';
import styled from '@emotion/styled';

import { colors } from '@/styles/global';

import { Props } from './Button.types';

const buttonVariantStyles = {
  primary: css`
    color: ${colors.WH};
    background-color: ${colors.purple};
    font-size: 20px;

    @media (hover: hover) and (pointer: fine) {
      &:hover:not(:disabled) {
        background-color: #6456ff;
      }
    }
  `,
  secondary: css`
    color: ${colors.GY1};
    background-color: ${colors.P2};
    font-size: 18px;

    @media (hover: hover) and (pointer: fine) {
      &:hover:not(:disabled) {
        background-color: ${colors.P1};
      }
    }
  `,
  tertiary: css`
    color: ${colors.GY1};
    background-color: ${colors.GY5};
    font-size: 16px;

    @media (hover: hover) and (pointer: fine) {
      &:hover:not(:disabled) {
        background-color: ${colors.GY4};
      }
    }
  `,
};

const buttonHeightStyles = {
  large: css`
    height: 62px;
  `,
  medium: css`
    height: 55px;
  `,
  small: css`
    height: 50px;
  `,
};

export const StyledButton = styled.button<Props>`
  width: 100%;
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

  &:disabled {
    color: ${colors.GY4};
    background-color: ${colors.GY5};
  }
  ${({ height }) => buttonHeightStyles[height]};
  ${({ variant }) => buttonVariantStyles[variant]};
`;
