import styled from '@emotion/styled';

import { colors } from '@/styles/global';

export const StyledCardContainer = styled.div`
  width: 90%;
  height: auto;
  min-height: 80vh;
  border: 1px solid ${colors.GY6};
  border-radius: 16px;
  padding: 17px;
  background-color: ${colors.WH};
  box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.06);
  overflow-y: scroll;
  touch-action: none;
`;

export const StyledDayContainer = styled.div`
  display: flex;
  width: 100%;
  margin-bottom: 28px;
  justify-content: space-between;
`;

export const StyledTimeContainer = styled.div`
  width: 10%;
  height: 100%;
  display: flex;
  flex-direction: column;
  padding-right: 10px;
  justify-content: space-around;
  align-items: center;
`;

export const StyledTimeBoxContainer = styled.div`
  width: 85%;
  display: flex;
  flex: 1;
  padding-right: 10%;
`;

export const StyledTimeLabel = styled.div`
  width: 10%;
  text-align: center;
  color: ${colors.GY6};
  display: flex;
  justify-content: center;
`;
