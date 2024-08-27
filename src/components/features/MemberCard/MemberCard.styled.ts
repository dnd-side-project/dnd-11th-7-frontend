import styled from '@emotion/styled';

import { colors } from '@/styles/global';

import { Props } from './MemberCard.types';

export const StyledMemberCard = styled.div<Props>`
  width: 100%;
  padding-top: 20px;
  padding-bottom: 20px;
  padding-left: 10px;
  padding-right: 10px;
  border-radius: 12px;
  background-color: ${colors.GY6};
`;
