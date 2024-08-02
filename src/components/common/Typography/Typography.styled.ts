import { css } from '@emotion/react';
import styled from '@emotion/styled';

import { weights } from '@/styles/global';

const typographyStyles = {
  h1: css`
    font-size: 32px;
    font-weight: ${weights.semibold};
    line-height: 140%;
  `,
  h2: css`
    font-size: 28px;
    font-weight: ${weights.semibold};
    line-height: 140%;
  `,
  h3: css`
    font-size: 24px;
    font-weight: ${weights.semibold};
    line-height: 140%;
  `,
  b1: css`
    font-size: 20px;
    font-weight: ${weights.semibold};
    line-height: 140%;
  `,
  b2: css`
    font-size: 16px;
    font-weight: ${weights.semibold};
    line-height: 140%;
  `,
  b3: css`
    font-size: 12px;
    font-weight: ${weights.semibold};
    line-height: 140%;
  `,
  caption: css`
    font-size: 12px;
    font-weight: ${weights.semibold};
    line-height: 140%;
    display: inline-block;
  `,
};

export const StyledTypography = styled.p<{ variant: TypographyVariant }>`
  ${({ variant }) => typographyStyles[variant]}
`;

export type TypographyVariant = keyof typeof typographyStyles;
