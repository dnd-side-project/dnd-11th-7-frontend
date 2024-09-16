import styled from '@emotion/styled';

import { colors } from '@/styles/global';

import { Props } from './Border.types';

export const StyledBorder = styled.hr<Props>`
  width: ${({ width = '100%' }) => width};
  border-width: ${({ height = 1 }) => `${height}px`};
  border-color: ${({ color }) => colors[color]};
  border-style: ${({ borderStyle = 'solid' }) => borderStyle};
  background-color: transparent;
`;
