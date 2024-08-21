import styled from '@emotion/styled';

import { colors } from '@/styles/global';

export const StyledMemberButton = styled.div`
  position: relative;
  width: 52px;
  height: 52px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const StyledCircleContainer = styled.svg`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  height: 100%;
  z-index: 1;
`;

export const StyledCircleCheckBox = styled.svg`
  position: absolute;
  top: 0;
  right: 0;
  width: 30%;
  height: 30%;
  z-index: 2;
`;

export const StyledCircleIcon = styled.svg`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 50%;
  height: 50%;
  z-index: 3;
`;

export const StyledText = styled.span`
  font-size: 12px;
  color: ${colors.GY3};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 55px;
  text-align: center;
  margin-top: 4px;
`;
