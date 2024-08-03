import styled from '@emotion/styled';

import { colors } from '@/styles/global';

import { Props } from './Button.types';

// StyledButton component using Emotion styled with Typescript
export const StyledButton = styled.button<Props>`
  width: ${(props) => {
    switch (props.width) {
      case 'full':
        return '100%';
      default:
        return 'fit-content';
    }
  }};
  height: 62px;
  padding: 17px 159px;
  transition: background-color 0.3s;
  border: none;
  cursor: pointer;
  border-radius: 12px;

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
