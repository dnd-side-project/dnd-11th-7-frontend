import { useState } from 'react';
import dayjs, { Dayjs } from 'dayjs';

import { Props } from './Calendar.types';

export const useCalendar = ({ startDate, endDate, onDateChange }: Props) => {
  const [currentMonth, setCurrentMonth] = useState(dayjs());

  const today = dayjs().startOf('day');
  const currentMonthStart = dayjs().startOf('month');

  const handleDateChange = (direction: string) => {
    setCurrentMonth((prev) => {
      const newMonth = direction === 'prev' ? prev.subtract(1, 'month') : prev.add(1, 'month');

      return newMonth.isBefore(currentMonthStart) ? currentMonthStart : newMonth;
    });
  };

  const handleDateSelect = (date: Dayjs) => {
    if (date.isBefore(today)) {
      return;
    }

    if (!startDate) {
      onDateChange(date, null);
      return;
    }

    if (endDate) {
      onDateChange(date.isSame(endDate, 'day') ? startDate : date, null);
      return;
    }

    if (date.isSame(startDate, 'day')) {
      onDateChange(null, null);
      return;
    }

    if (!date.isAfter(startDate)) {
      onDateChange(date, startDate);
      return;
    }

    if (date.diff(startDate, 'day') <= 14) {
      onDateChange(startDate, date);
      return;
    }

    onDateChange(startDate, startDate.add(13, 'day'));
  };

  const generateDates = () => {
    const dates = [];
    const startOfMonth = currentMonth.startOf('month');
    const startDayOfWeek = startOfMonth.day();

    for (let i = 0; i < 35; i++) {
      const currentDate = startOfMonth.add(i - startDayOfWeek, 'day');
      const isCurrentMonth = currentDate.isSame(currentMonth, 'month');

      const isSelected =
        currentDate.isSame(startDate, 'day') || (endDate && currentDate.isSame(endDate, 'day')); // 선택된 날짜인지 확인
      const isInRange =
        startDate &&
        endDate &&
        currentDate.isAfter(startDate, 'day') &&
        currentDate.isBefore(endDate, 'day');
      const isRangeStart = startDate && currentDate.isSame(startDate, 'day');
      const isRangeEnd = endDate && currentDate.isSame(endDate, 'day');
      const isDisabled =
        currentDate.isBefore(today) ||
        currentDate.isAfter(today.add(30, 'day')) ||
        (startDate && currentDate.isAfter(startDate.add(14, 'day')));

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
