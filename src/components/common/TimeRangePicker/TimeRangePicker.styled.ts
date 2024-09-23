import styled from '@emotion/styled';

import { colors } from '@/styles/global';

const intensityColors = [
  '#F1EFFF',
  '#E6E4FF',
  '#DBD7FF',
  '#CECAFF',
  '#BDB8FF',
  '#A7A0FF',
  '#978EFF',
  '#857BFF',
  '#7468FF',
  '#654AFF',
];

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
  intensity: number;
  totalPeopleNum: number;
}>`
  flex: 1;
  height: 35px;
  background-color: ${(props) => {
    if (props.isSelected) return colors.purple;
    if (props.intensity > 0) {
      const baseIndex = 10 - props.totalPeopleNum;
      const colorIndex = 10 - baseIndex + props.intensity;
      return intensityColors[colorIndex];
    }
    return colors.GY6;
  }};
  cursor: pointer;
  touch-action: none;
  border-left: 0.5px solid ${colors.WH};
  border-right: 0.5px solid ${colors.WH};
  border-bottom: 1px ${colors.WH}
    ${(props) => (props.isLast || props.intensity > 0 || props.index === 14 ? 'solid' : 'dashed')};
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
