import styled from '@emotion/styled';

import { colors } from '@/styles/global';

export const StyledScheduleLayoutContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  background: linear-gradient(
    180deg,
    rgba(133, 123, 255, 0.9) 0%,
    rgba(133, 123, 255, 0.9) 60%,
    ${colors.GY6} 100%
  );
`;
