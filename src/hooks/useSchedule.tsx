import { useState, useEffect, useCallback, useMemo } from 'react';
import dayjs from 'dayjs';
import isSameOrAfter from 'dayjs/plugin/isSameOrAfter';
import isSameOrBefore from 'dayjs/plugin/isSameOrBefore';

dayjs.extend(isSameOrBefore);
dayjs.extend(isSameOrAfter);

export const useSchedule = (startDateStr: string, endDateStr: string) => {
  const MAX_DATE = 4;
  const TOTAL_TIME = 16;
  const startDate = useMemo(() => dayjs(startDateStr), [startDateStr]);
  const endDate = useMemo(() => dayjs(endDateStr), [endDateStr]);

  const [currentStartDate, setCurrentStartDate] = useState(startDate);
  const [currentDates, setCurrentDates] = useState<dayjs.Dayjs[]>([]);
  const [timeSlots, setTimeSlots] = useState<{ [key: string]: boolean[] }>({});
  const [selectedTime, setSelectedTime] = useState<string | null>(null);

  const updateDates = useCallback(() => {
    const dates: dayjs.Dayjs[] = [];
    let date = currentStartDate;
    for (let i = 0; i < MAX_DATE && date.isSameOrBefore(endDate); i++) {
      dates.push(date);
      date = date.add(1, 'day');
    }
    setCurrentDates(dates);
  }, [currentStartDate, endDate, MAX_DATE]);

  useEffect(() => {
    updateDates();
  }, [updateDates]);

  const initializeTimeSlots = useCallback(
    (date: dayjs.Dayjs) => {
      const dateKey = date.format('YYYY-MM-DD');
      setTimeSlots((prevSlots) => {
        if (!prevSlots[dateKey]) {
          return {
            ...prevSlots,
            [dateKey]: Array(TOTAL_TIME).fill(false),
          };
        }
        return prevSlots;
      });
    },
    [TOTAL_TIME]
  );

  useEffect(() => {
    currentDates.forEach(initializeTimeSlots);
  }, [currentDates, initializeTimeSlots]);

  const moveNext = useCallback(() => {
    const newStartDate = currentStartDate.add(1, 'day');
    if (newStartDate.add(MAX_DATE - 1, 'day').isSameOrBefore(endDate)) {
      setCurrentStartDate(newStartDate);
    }
  }, [currentStartDate, endDate, MAX_DATE]);

  const movePrev = useCallback(() => {
    const newStartDate = currentStartDate.subtract(1, 'day');
    if (newStartDate.isSameOrAfter(startDate)) {
      setCurrentStartDate(newStartDate);
    }
  }, [currentStartDate, startDate]);

  const handleTimeSlotClick = useCallback(
    (row: number, col: number) => {
      const dateKey = currentDates[col].format('YYYY-MM-DD');
      setTimeSlots((prevSlots) => ({
        ...prevSlots,
        [dateKey]: prevSlots[dateKey].map((time, index) => (index === row ? !time : time)),
      }));
      setSelectedTime(`${row + 9 < 10 ? '0' : ''}${row + 9}:00`);
    },
    [currentDates]
  );

  const formatTime = useCallback((hour: number) => {
    const formattedHour = (hour + 9).toString().padStart(2, '0');
    return `${formattedHour}:00`;
  }, []);

  const getSelectedTimeRanges = useCallback(() => {
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
  }, [timeSlots, formatTime]);

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
