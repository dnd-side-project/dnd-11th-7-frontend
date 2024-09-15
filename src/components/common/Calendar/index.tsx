import { forwardRef } from 'react';
import { css } from '@emotion/react';
import dayjs from 'dayjs';

import {
  StyledDateHeader,
  StyledWeekHeader,
  StyledCalendarContainer,
  StyledDateButton,
  StyledDatesGrid,
} from './Calendar.styled';
import { Props } from './Calendar.types';

import { useCalendar } from '../../../hooks/useCalendar';
import { Icon } from '../Icon';

export const Calendar = forwardRef<HTMLDivElement, Props>(
  ({ startDate, endDate, onDateChange, ...props }, ref) => {
    const {
      today,
      currentMonth,
      handleDateChange,
      handleDateSelect,
      generateDates,
      isCurrentMonth,
    } = useCalendar({ startDate, endDate, onDateChange });

    const handleDateClick =
      (date: dayjs.Dayjs, isDisabled: boolean, isCurrentMonth: boolean) =>
      (e: React.MouseEvent | React.TouchEvent) => {
        e.preventDefault();
        if (!isDisabled && isCurrentMonth) {
          handleDateSelect(date);
        }
      };

    return (
      <StyledCalendarContainer ref={ref} {...props}>
        <StyledDateHeader>
          <Icon
            name="left"
            color="GY2"
            onClick={() => handleDateChange('prev')}
            css={css`
              cursor: pointer;
              visibility: ${isCurrentMonth ? 'hidden' : 'visible'};
            `}
          />
          {currentMonth.format('YYYY년 M월')}
          <Icon
            name="right"
            color="GY2"
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
              onTouchEnd={handleDateClick(date, isDisabled, isCurrentMonth)}
              onClick={handleDateClick(date, isDisabled, isCurrentMonth)}
              isPast={date.isBefore(today, 'day')}
              isPrevMonth={!isCurrentMonth && date.isBefore(currentMonth.startOf('month'))}
              isNextMonth={!isCurrentMonth && date.isAfter(currentMonth.endOf('month'))}
              {...props}
            >
              {date.date()}
            </StyledDateButton>
          ))}
        </StyledDatesGrid>
      </StyledCalendarContainer>
    );
  }
);
