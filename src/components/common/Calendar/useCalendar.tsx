import { useState } from 'react';
import dayjs, { Dayjs } from 'dayjs';

import { Props } from './Calendar.types';

export const useCalendar = ({ startDate, endDate, onDateChange }: Props) => {
  const [currentMonth, setCurrentMonth] = useState(dayjs());

  const today = dayjs().startOf('day');
  const currentMonthStart = dayjs().startOf('month');

  // 이전 달, 다음 달로 선택
  const handleDateChange = (direction: string) => {
    setCurrentMonth((prev) => {
      const newMonth = direction === 'prev' ? prev.subtract(1, 'month') : prev.add(1, 'month');
      // 현재 달보다 이전으로는 이동 불가
      return newMonth.isBefore(currentMonthStart) ? currentMonthStart : newMonth;
    });
  };

  const handleDateSelect = (date: Dayjs) => {
    if (date.isBefore(today)) {
      return;
    }

    if (!startDate) {
      onDateChange(date, null);
    } else if (startDate && !endDate) {
      if (date.isSame(startDate, 'day')) {
        onDateChange(null, null);
      } else if (date.isAfter(startDate)) {
        const dayDifference = date.diff(startDate, 'day');
        if (dayDifference <= 14) {
          onDateChange(startDate, date);
        } else {
          onDateChange(startDate, startDate.add(13, 'day'));
        }
      } else {
        onDateChange(date, startDate);
      }
    } else if (startDate && endDate) {
      if (date.isSame(endDate, 'day')) {
        onDateChange(startDate, null);
      } else {
        onDateChange(date, null);
      }
    }
  };

  const generateDates = () => {
    const dates = [];
    const startOfMonth = currentMonth.startOf('month'); // 현재 달의 시작일
    const startDayOfWeek = startOfMonth.day(); // 현재 달의 시작 요일

    for (let i = 0; i < 35; i++) {
      const currentDate = startOfMonth.add(i - startDayOfWeek, 'day'); // 현재 달의 날짜
      const isCurrentMonth = currentDate.isSame(currentMonth, 'month'); // 현재 달인지 확인

      const isSelected =
        currentDate.isSame(startDate, 'day') || (endDate && currentDate.isSame(endDate, 'day')); // 선택된 날짜인지 확인
      const isInRange =
        startDate &&
        endDate &&
        currentDate.isAfter(startDate, 'day') &&
        currentDate.isBefore(endDate, 'day'); // 선택된 범위인지 확인
      const isRangeStart = startDate && currentDate.isSame(startDate, 'day'); // 선택된 범위의 시작일인지 확인
      const isRangeEnd = endDate && currentDate.isSame(endDate, 'day'); // 선택된 범위의 마지막일인지 확인
      const isDisabled =
        currentDate.isBefore(today) ||
        currentDate.isAfter(today.add(30, 'day')) ||
        (startDate && currentDate.isAfter(startDate.add(14, 'day'))); // 선택 불가능한 날짜인지 확인

      dates.push({
        date: currentDate,
        isCurrentMonth,
        isSelected: isSelected || false,
        isInRange: isInRange || false,
        isRangeStart: isRangeStart || false,
        isRangeEnd: isRangeEnd || false,
        isDisabled: isDisabled || false,
      });
    }

    return dates;
  };

  return {
    currentMonth,
    handleDateChange,
    handleDateSelect,
    generateDates,
    isCurrentMonth: currentMonth.isSame(currentMonthStart, 'month'),
  };
};
