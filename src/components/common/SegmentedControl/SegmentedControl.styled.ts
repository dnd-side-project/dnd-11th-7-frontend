/* eslint-disable @typescript-eslint/no-explicit-any */
import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { motion } from 'framer-motion';

import { colors, weights } from '@/styles/global';

import { Props } from './SegmentedControl.types';

const containerStyles = {
  contained: css`
    background-color: ${colors.GY6};
    border-radius: 4px;
  `,
  underline: css``,
  textOnly: css``,
};
const selectedTabStyles = {
  // TODO weight 변경으로 인한 layout shift 없애기
  contained: css`
    font-weight: ${weights.semibold};
    color: ${colors.BK};
    transition: all 0.15s;
    transition-delay: 0.15s;
  `,
  underline: css`
    font-weight: ${weights.semibold};
    color: ${colors.BK};
    transition: all 0.15s;
    transition-delay: 0.15s;
  `,
  textOnly: css`
    font-weight: ${weights.semibold};
    color: ${colors.BK};
  `,
};
const indicatorStyles = {
  contained: css`
    border-radius: 4px;
    background-color: ${colors.GY5};
  `,
  underline: css`
    border-bottom: 1.5px solid ${colors.BK};
  `,
  textOnly: css``,
};

export const StyledContainer = styled.div<Pick<Props<any>, 'variant'>>`
  display: flex;
  min-width: min-content;
  max-width: max-content;
  ${({ variant }) => containerStyles[variant]}
`;
export const StyledTabButton = styled.button<Pick<Props<any>, 'variant'> & { isSelected: boolean }>`
  all: unset;
  position: relative;
  padding: 3.5px 14px;
  color: ${colors.GY4};
  font-size: 12px;
  font-weight: ${weights.regular};
  cursor: pointer;
  ${({ variant, isSelected }) => (isSelected ? selectedTabStyles[variant] : '')}

  & > span {
    position: relative;
    z-index: 10;
  }
`;
export const StyledIndicator = styled(motion.div)<Pick<Props<any>, 'variant'>>`
  position: absolute;
  inset: 0;
  z-index: 0;
  ${({ variant }) => indicatorStyles[variant]}
`;
