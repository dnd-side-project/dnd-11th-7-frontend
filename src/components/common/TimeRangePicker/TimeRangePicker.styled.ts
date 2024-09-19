import styled from '@emotion/styled';

import { colors } from '@/styles/global';

export const StyledTimeBoxContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 525px;
`;

export const TimeBoxSelector = styled.div<{
  index: number;
  isSelected: boolean;
  isFirst: boolean;
  isLast: boolean;
}>`
  flex: 1;
  height: 35px;
  background-color: ${(props) => (props.isSelected ? colors.purple : colors.GY6)};
  cursor: pointer;
  touch-action: none;
  border-left: 0.5px solid ${colors.WH};
  border-right: 0.5px solid ${colors.WH};
  border-bottom: 1px ${colors.WH}
    ${(props) => (props.isLast || props.index === 14 ? 'solid' : 'dashed')};
  border-radius: ${(props) => {
    if (props.isSelected) {
      if (props.isFirst && props.isLast) return '8px';
      if (props.isFirst) return '8px 8px 0 0';
      if (props.isLast) return '0 0 8px 8px';
    }
    if (props.index === 0) return '8px 8px 0 0';
    if (props.index === 14) return '0 0 8px 8px';
    return '0';
  }};
`;
