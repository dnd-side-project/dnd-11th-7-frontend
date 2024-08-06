import styled from '@emotion/styled';

import { colors } from '@/styles/global';

import { Props } from './Button.types';

export const StyledButton = styled.button<Props>`
  width: ${({ width = 'full' }) => (width === 'full' ? '100%' : 'fit-content')};
  height: 62px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 17px;
  padding-bottom: 17px;
  font-size: 20px;
  border: none;
  border-radius: 12px;
  cursor: pointer;
  transition: background-color 0.3s;
  color: ${colors.WH};
  background-color: ${({ disabled }) => (disabled ? colors.GY5 : colors.purple)};
  ${colors.purple};
  @media (hover: hover) and (pointer: fine) {
    &:hover {
      background-color: ${({ disabled }) => (disabled ? colors.GY5 : colors.hover)};
    }
  }
`;
