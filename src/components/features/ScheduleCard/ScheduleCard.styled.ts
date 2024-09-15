import { css } from '@emotion/react';
import styled from '@emotion/styled';

import { colors } from '@/styles/global';

import { Props } from './ScheduleCard.types';

const memberCardStyles = {
  default: css`
    border: 0.5px solid rgba(0, 0, 0, 0.1);
    box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.1);
    background-color: ${colors.WH};
  `,
  purple: css`
    background-color: ${colors.purple};
  `,
};

export const StyledMemberCardContainer = styled.div<Pick<Props, 'variant'>>`
  width: 100%;
  padding: 18px 12px;
  border-radius: 6px;
  overflow-x: auto;
  ${({ variant = 'default' }) => memberCardStyles[variant]};
`;

export const StyledMemberInfoContainer = styled.div<{ attendees: string[] }>`
  width: 100%;
  overflow-x: auto;
  white-space: nowrap;
  -webkit-overflow-scrolling: touch;
  margin-top: ${({ attendees = [] }) => (attendees ? '6px' : '0px')};
`;
