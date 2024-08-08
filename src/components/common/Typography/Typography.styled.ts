import { css } from '@emotion/react';
import styled from '@emotion/styled';

import { weights } from '@/styles/global';

const typographyStyles = {
  Head1: css`
    font-size: 32px;
    font-weight: ${weights.semibold};
    line-height: 140%;
  `,
  Head2: css`
    font-size: 28px;
    font-weight: ${weights.semibold};
    line-height: 140%;
  `,
  Head3: css`
    font-size: 24px;
    font-weight: ${weights.semibold};
    line-height: 140%;
  `,
  Head4: css`
    font-size: 22px;
    font-weight: ${weights.semibold};
    line-height: 140%;
  `,
  Body1: css`
    font-size: 20px;
    font-weight: ${weights.semibold};
    line-height: 140%;
  `,
  Body2: css`
    font-size: 18px;
    font-weight: ${weights.semibold};
    line-height: 140%;
  `,
  Body3: css`
    font-size: 16px;
    font-weight: ${weights.semibold};
    line-height: 140%;
  `,
  Body4: css`
    font-size: 14px;
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
