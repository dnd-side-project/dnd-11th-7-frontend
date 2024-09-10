import { css } from '@emotion/react';
import styled from '@emotion/styled';

import { colors, weights } from '@/styles/global';

import { GroupProps, Props } from './Chip.types';

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
const groupTypeStyles = {
  wrap: css`
    width: fit-content;
    display: flex;
    justify-content: center;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 12px 6px;
  `,
  slide: css`
    display: flex;
    gap: 6px;
    overflow-x: auto;
    white-space: nowrap;
    &::-webkit-scrollbar {
      display: none;
    }
    &::after {
      content: '';
      position: absolute;
      top: 0;
      right: 0;
      width: 32px;
      height: 100%;
      background: linear-gradient(to left, white, transparent);
      pointer-events: none;
    }
  `,
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const StyledChip = styled.span<Props<any>>`
  all: unset;
  font-weight: ${weights.semibold};
  border-radius: 999px;
  user-select: none;

  ${({ shape = 'rounded' }) => chipShapeStyles[shape]};
  ${({ component = 'span' }) => chipStyles[component]};
  ${({ variant = 'primary' }) => chipVariantStyles[variant]};
`;

export const StyledChipGroup = styled.div<GroupProps>`
  ${({ type = 'wrap' }) => groupTypeStyles[type]};
`;
