import { forwardRef } from 'react';
import { css } from '@emotion/react';

import {
  StyledDateHeader,
  StyledWeekHeader,
  StyledCalendarContainer,
  StyledDateButton,
  StyledDatesGrid,
} from './Calendar.styled';
import { Props } from './Calendar.types';
import { useCalendar } from './useCalendar';

import { Icon } from '../Icon';

export const Calendar = forwardRef<HTMLDivElement, Props>(
  ({ startDate, endDate, onDateChange, ...props }, ref) => {
    const { currentMonth, handleDateChange, handleDateSelect, generateDates, isCurrentMonth } =
      useCalendar({ startDate, endDate, onDateChange });

    return (
      <StyledCalendarContainer ref={ref} {...props}>
        <StyledDateHeader>
          <Icon
            name="left"
            onClick={() => handleDateChange('prev')}
            css={css`
              cursor: pointer;
              visibility: ${isCurrentMonth ? 'hidden' : 'visible'};
            `}
          />
          {currentMonth.format('YYYY년 M월')}
          <Icon
            name="right"
            onClick={() => handleDateChange('next')}
            css={css`
              cursor: pointer;
            `}
          />
        </StyledDateHeader>
        <StyledWeekHeader>
          {['월', '화', '수', '목', '금', '토', '일'].map((day) => (
            <div key={day}>{day}</div>
          ))}
        </StyledWeekHeader>
        <StyledDatesGrid>
          {generateDates().map(({ date, isCurrentMonth, isDisabled, ...props }) => (
            <StyledDateButton
              key={date.toString()}
              isDisabled={isDisabled}
              onClick={() => !isDisabled && isCurrentMonth && handleDateSelect(date)}
              {...props}
            >
              {isCurrentMonth ? date.date() : ''}
            </StyledDateButton>
          ))}
        </StyledDatesGrid>
      </StyledCalendarContainer>
    );
  }
);
