import styled from '@emotion/styled';

import { colors } from '@/styles/global';

export const StyledSpeechBubble = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${colors.WH};
  border-radius: 8px;
  padding: 5px;

  & > svg {
    position: absolute;
    right: 1.5px;
    bottom: -8px;
  }
`;
