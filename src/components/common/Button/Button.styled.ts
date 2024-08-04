import styled from '@emotion/styled';

import { colors } from '@/styles/global';

import { Props } from './Button.types';

export const StyledButton = styled.button<Props>`
  width: ${({ width = 'fit-content' }) => (width === 'full' ? '100%' : 'fit-content')};
  height: 62px;
  padding: ${({ padding = 0 }) => (typeof padding === 'number' ? `${padding}px` : padding)};
  transition: background-color 0.3s;
  border: none;
  cursor: pointer;
  border-radius: 12px;
  font-size: 20px;

  // Styles for primary variant
  ${(props) =>
    props.variant === 'primary' &&
    `
      background-color: ${colors.purple};
      color: white;
      @media (hover: hover) and (pointer: fine) {
        &:hover {
          background-color: ${colors.hover};
        }
      }
    `}

  // Disabled state
  ${(props) =>
    props.disabled &&
    `
      background-color: ${colors.GY5};  
      cursor: not-allowed;
      @media (hover: hover) and (pointer: fine) {
        &:hover {
          background-color: ${colors.GY5};
        }
      }
    `}
`;
