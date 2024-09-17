import styled from '@emotion/styled';

import { colors } from '@/styles/global';

export const StyledCardContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  border: 1px solid ${colors.GY6};
  border-radius: 16px;
  padding: 17px 17px 23px 17px;
  background-color: ${colors.WH};
  box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.06);
`;

export const StyledDayContainer = styled.div`
  width: 100%;
  display: flex;
  position: sticky;
  justify-content: space-between;
  top: 0;
  z-index: 2;
  background-color: ${colors.WH};
  padding-bottom: 18px;
`;

export const StyledTimeScrollContainer = styled.div`
  display: flex;
  flex: 1;
  overflow: auto;
`;

export const StyledTimeContainer = styled.div`
  width: 10%;
  display: flex;
  flex-direction: column;
  padding-right: 10px;
  align-items: center;
`;

export const StyledTimeBoxContainer = styled.div`
  width: 85%;
  display: flex;
  flex: 1;
  padding-right: 10%;
  padding-top: 10px;
`;
