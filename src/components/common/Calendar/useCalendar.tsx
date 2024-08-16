import { useState } from 'react';
import dayjs, { Dayjs } from 'dayjs';

import { CALENDAR } from '@/constants/calendar';

import { Props } from './Calendar.types';

export const useCalendar = ({ startDate, endDate, onDateChange }: Props) => {
  const [currentMonth, setCurrentMonth] = useState(dayjs());

  const today = dayjs().startOf('day');
  const currentMonthStart = dayjs().startOf('month');

  const handleDateChange = (direction: 'prev' | 'next') => {
    setCurrentMonth((prev) => {
      const newMonth =
        direction === 'prev'
          ? prev.subtract(CALENDAR.MAX_MONTHS, 'month')
          : prev.add(CALENDAR.MAX_MONTHS, 'month');

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

    if (date.diff(startDate, 'day') <= CALENDAR.MAX_RANGE) {
      onDateChange(startDate, date);
      return;
    }

    onDateChange(startDate, startDate.add(CALENDAR.MAX_RANGE, 'day'));
  };

  const isDateInRange = (date: dayjs.Dayjs, start: dayjs.Dayjs, end: dayjs.Dayjs) =>
    start && end && date.isAfter(start, 'day') && date.isBefore(end, 'day');

  const isDateDisabled = (date: dayjs.Dayjs, today: dayjs.Dayjs, startDate: dayjs.Dayjs) =>
    date.isBefore(today) ||
    date.isAfter(today.add(CALENDAR.MAX_MONTH_DAYS, 'day')) ||
    (startDate && date.isAfter(startDate.add(CALENDAR.MAX_RANGE, 'day'))) ||
    (startDate && date.isBefore(startDate.subtract(CALENDAR.MAX_RANGE, 'day')));

  const createDateObject = (currentDate: dayjs.Dayjs) => ({
    date: currentDate,
    isCurrentMonth: currentDate.isSame(currentMonth, 'month'),
    isSelected:
      currentDate.isSame(startDate, 'day') || (endDate && currentDate.isSame(endDate, 'day')),
    isInRange: startDate && endDate && isDateInRange(currentDate, startDate, endDate),
    isRangeStart: startDate && currentDate.isSame(startDate, 'day'),
    isRangeEnd: endDate && currentDate.isSame(endDate, 'day'),
    isDisabled: startDate && isDateDisabled(currentDate, today, startDate),
  });

  const generateDates = () => {
    const startOfMonth = currentMonth.startOf('month');
    const startDayOfWeek = startOfMonth.day();

    return Array.from({ length: CALENDAR.TOTAL_DAYS }, (_, i) => {
      const currentDate = startOfMonth.add(i - startDayOfWeek, 'day');
      return createDateObject(currentDate);
    });
  };

  return {
    currentMonth,
    handleDateChange,
    handleDateSelect,
    generateDates,
    isCurrentMonth: currentMonth.isSame(currentMonthStart, 'month'),
  };
};
