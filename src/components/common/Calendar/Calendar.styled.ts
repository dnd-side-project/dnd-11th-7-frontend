import styled from '@emotion/styled';

import { colors } from '@/styles/global';

import { ButtonProps } from './Calendar.types';

export const StyledCalendarContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const StyledDateHeader = styled.div`
  width: 100%;
  height: 28px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 20px;
  margin: 5px 0;
`;

export const StyledWeekHeader = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  text-align: center;
  gap: 12px;
  margin-top: 27px;
  margin-bottom: 18px;
  font-size: 16px;
`;
export const StyledDatesGrid = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  text-align: center;
  place-items: center;
  gap: 12px;
`;

export const StyledDateButton = styled.button<ButtonProps>`
  width: 40px;
  aspect-ratio: 1;
  background-color: ${({ isSelected, isInRange }) =>
    isSelected ? colors.purple : isInRange ? colors.purple : colors.WH};
  border: none;
  border-radius: 100%;
  cursor: ${({ isDisabled }) => (isDisabled ? 'not-allowed' : 'pointer')};
  font-size: 16px;
  color: ${({ isSelected, isDisabled, isNextMonth, isPrevMonth, isInRange, isPast }) =>
    isPast || isDisabled || isNextMonth || isPrevMonth
      ? colors.GY4
      : isSelected || isInRange
        ? colors.WH
        : colors.BK};
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  z-index: 1;
  opacity: ${({ isNextMonth }) => (isNextMonth ? 0.5 : 1)};

  touch-action: manipulation;
  -webkit-tap-highlight-color: transparent;
  user-select: none;
`;
