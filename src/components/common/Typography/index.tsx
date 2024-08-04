import { ComponentPropsWithoutRef, ElementType } from 'react';

import { colors, Colors, weights } from '@/styles/global';

import { StyledTypography, TypographyVariant } from './Typography.styled';

type Props = { regularWeight?: boolean; color?: Colors } & ComponentPropsWithoutRef<'p'>;

const withBaseTypography = (element: ElementType, variant: TypographyVariant) => {
  const Typography = ({
    children,
    regularWeight = false,
    color = 'BK',
    style,
    ...props
  }: Props) => {
    const _style = { ...style, color: colors[color] };

    return (
      <StyledTypography
        as={element}
        variant={variant}
        style={regularWeight ? { ..._style, fontWeight: weights.regular } : _style}
        {...props}
      >
        {children}
      </StyledTypography>
    );
  };
  return Typography;
};

export const Head1 = withBaseTypography('h1', 'h1');
export const Head2 = withBaseTypography('h2', 'h2');
export const Head3 = withBaseTypography('h3', 'h3');
export const Body1 = withBaseTypography('p', 'b1');
export const Body2 = withBaseTypography('p', 'b2');
export const Body3 = withBaseTypography('p', 'b3');
export const Caption = withBaseTypography('p', 'caption');
