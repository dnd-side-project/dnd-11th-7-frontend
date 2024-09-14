import { useState, useEffect } from 'react';
import dayjs from 'dayjs';
import isSameOrAfter from 'dayjs/plugin/isSameOrAfter';
import isSameOrBefore from 'dayjs/plugin/isSameOrBefore';

dayjs.extend(isSameOrBefore);
dayjs.extend(isSameOrAfter);

export const useSchedule = (startDateStr: string, endDateStr: string) => {
  const MAX_DATE = 4;
  const TOTAL_TIME = 16;
  const startDate = dayjs(startDateStr);
  const endDate = dayjs(endDateStr);

  const [currentStartDate, setCurrentStartDate] = useState(startDate);
  const [currentDates, setCurrentDates] = useState<dayjs.Dayjs[]>([]);
  const [timeSlots, setTimeSlots] = useState<{ [key: string]: boolean[] }>({});
  const [selectedTime, setSelectedTime] = useState<string | null>(null);

  const updateDates = () => {
    const dates: dayjs.Dayjs[] = [];
    let date = currentStartDate;
    for (let i = 0; i < MAX_DATE && date.isSameOrBefore(endDate); i++) {
      dates.push(date);
      date = date.add(1, 'day');
    }

    setCurrentDates(dates);
  };

  useEffect(() => {
    updateDates();
  }, [currentStartDate]);

  const initializeTimeSlots = (date: dayjs.Dayjs) => {
    const dateKey = date.format('YYYY-MM-DD');
    if (!timeSlots[dateKey]) {
      setTimeSlots((prevSlots) => ({
        ...prevSlots,
        [dateKey]: Array(TOTAL_TIME).fill(false),
      }));
    }
  };

  useEffect(() => {
    currentDates.forEach(initializeTimeSlots);
  }, [currentDates]);

  const moveNext = () => {
    const newStartDate = currentStartDate.add(1, 'day');
    if (newStartDate.add(MAX_DATE - 1, 'day').isSameOrBefore(endDate)) {
      setCurrentStartDate(newStartDate);
    }
  };

  const movePrev = () => {
    const newStartDate = currentStartDate.subtract(1, 'day');
    if (newStartDate.isSameOrAfter(startDate)) {
      setCurrentStartDate(newStartDate);
    }
  };

  const handleTimeSlotClick = (row: number, col: number) => {
    const dateKey = currentDates[col].format('YYYY-MM-DD');
    setTimeSlots((prevSlots) => ({
      ...prevSlots,
      [dateKey]: prevSlots[dateKey].map((time, index) => (index === row ? !time : time)),
    }));
    setSelectedTime(`${row + 9 < 10 ? '0' : ''}${row + 9}:00`);
  };

  const getSelectedTimeRanges = () => {
    const selectedRanges: string[] = [];

    Object.entries(timeSlots).forEach(([dateKey, slots]) => {
      let startTime: number | null = null;
      let endTime: number | null = null;

      slots.forEach((isSelected, index) => {
        if (isSelected && startTime === null) {
          startTime = index;
        } else if (!isSelected && startTime !== null) {
          endTime = index;
          selectedRanges.push(`${dateKey} ${formatTime(startTime)}~${formatTime(endTime)}`);
          startTime = null;
          endTime = null;
        }
      });

      if (startTime !== null) {
        selectedRanges.push(`${dateKey} ${formatTime(startTime)}~${formatTime(slots.length)}`);
      }
    });

    return selectedRanges;
  };

  const formatTime = (hour: number) => {
    const formattedHour = (hour + 9).toString().padStart(2, '0');
    return `${formattedHour}:00`;
  };

  return {
    currentDates,
    timeSlots,
    moveNext,
    movePrev,
    handleTimeSlotClick,
    selectedTime,
    getSelectedTimeRanges,
  };
};
