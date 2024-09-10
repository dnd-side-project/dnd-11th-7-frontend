import styled from '@emotion/styled';

import { colors } from '@/styles/global';

export const StyeldButton = styled.button`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  width: 40%;
  min-width: 108px;
  height: 60px;
  align-items: center;
  justify-content: center;
  border: 2px solid ${colors.GY4};
  border-radius: 12px;
  background-color: ${colors.WH};
  cursor: pointer;

  &:has(img) {
    height: 174px;
  }
`;
