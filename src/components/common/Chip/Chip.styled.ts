import { css } from '@emotion/react';
import styled from '@emotion/styled';

import { colors, weights } from '@/styles/global';

import { Props } from './Chip.types';

const chipStyles = {
  span: css`
    cursor: default;
    font-size: 12px;
    padding: 2.5px 10px;
  `,
  button: css`
    cursor: pointer;
    font-size: 14px;
    padding: 6px 12px;
    font-weight: ${weights.regular};

    &:disabled {
      cursor: not-allowed;
    }
  `,
};
const chipVariantStyles = {
  primary: css`
    color: ${colors.WH};
    background-color: ${colors.purple};
  `,
  secondary: css`
    color: ${colors.purple};
    background-color: ${colors.lightYellow};
  `,
  primaryReverse: css`
    color: ${colors.purple};
    background-color: ${colors.WH};
  `,
  grey: css`
    color: ${colors.GY1};
    background-color: ${colors.GY5};
  `,
  greyWeak: css`
    color: ${colors.GY2};
    background-color: ${colors.GY6};
    font-weight: ${weights.light};
  `,
  dimmed: css`
    color: ${colors.WH};
    background-color: ${colors.GY5};
  `,
};
const chipShapeStyles = {
  rounded: css`
    border-radius: 999px;
  `,
  rectangle: css`
    border-radius: 4px;
  `,
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const StyledChip = styled.span<Props<any>>`
  all: unset;
  font-weight: ${weights.semibold};
  border-radius: 999px;

  ${({ shape = 'rounded' }) => chipShapeStyles[shape]};
  ${({ component = 'span' }) => chipStyles[component]};
  ${({ variant = 'primary' }) => chipVariantStyles[variant]};
`;
