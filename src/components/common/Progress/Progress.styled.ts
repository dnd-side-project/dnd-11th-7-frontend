import styled from '@emotion/styled';

import { colors } from '@/styles/global';

import { Props } from './Progress.types';

export const StyledProgress = styled.div<Props>`
  width: 180px;
  height: 6px;
  border-radius: 5px;
  background-color: ${colors.GY5};
  overflow: hidden;
  position: relative;

  &::before {
    content: '';
    display: block;
    height: 100%;
    border-radius: 5px;
    background-color: ${colors.purple};
    position: absolute;
    top: 0;
    left: 0;
    width: ${({ value = 0, min = 0, max = 100 }) => `${((value - min) / (max - min)) * 100}%`};
    transition: width 0.5s ease-out;
  }
`;
