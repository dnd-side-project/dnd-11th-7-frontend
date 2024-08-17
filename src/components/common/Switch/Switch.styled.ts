import styled from '@emotion/styled';

import { colors } from '@/styles/global';

import { SwitchButtonProps } from './Switch.types';

export const StyeldButton = styled.button<SwitchButtonProps>`
  display: flex;
  flex-direction: column;
  width: 170px;
  height: 174px;
  align-items: center;
  justify-content: center;
  border: 2px solid ${colors.GY4};
  border-radius: 16px;
  background-color: ${colors.WH};
  cursor: pointer;
`;
