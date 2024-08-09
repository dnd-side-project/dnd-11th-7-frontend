import { css } from '@emotion/react';
import styled from '@emotion/styled';

import { colors } from '@/styles/global';

import { Props } from './Chip.types';

const chipStyles = {
  span: css`
    cursor: default;
    font-size: 12px;
    padding: 2.5px 12px;
  `,
  button: css`
    cursor: pointer;
    font-size: 14px;
  `,
};
const chipVariantStyles = {
  filled: css`
    color: ${colors.WH};
    background-color: ${colors.purple};
  `,
  greyFilled: css`
    color: black;
    background-color: ${colors.GY5};
  `,
  dimmed: css`
    color: ${colors.WH};
    background-color: ${colors.GY5};
  `,
};

export const StyledChip = styled.span<Props>`
  all: unset;
  padding: 6px 12px;
  border-radius: 999px;

  ${({ variant = 'filled' }) => chipVariantStyles[variant]};
  ${({ component = 'span' }) => chipStyles[component]};
`;
