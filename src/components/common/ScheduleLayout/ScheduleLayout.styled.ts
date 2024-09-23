import styled from '@emotion/styled';

import { colors } from '@/styles/global';

export const StyledScheduleLayoutContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  background: linear-gradient(
    180deg,
    rgba(144, 135, 254) 0%,
    rgba(144, 135, 254) 10%,
    rgba(144, 135, 254, 0.9) 60%,
    ${colors.GY6} 100%
  );
  background-size: 100% 350px;
  background-repeat: no-repeat;
`;
