import { useState, useEffect, useCallback, useMemo } from 'react';
import dayjs from 'dayjs';
import isSameOrAfter from 'dayjs/plugin/isSameOrAfter';
import isSameOrBefore from 'dayjs/plugin/isSameOrBefore';

import { formatTime } from '../utils/formatTime';
import { parseTimeRanges } from '../utils/parseTimeRanges';

dayjs.extend(isSameOrBefore);
dayjs.extend(isSameOrAfter);

export const useSchedule = (
  startDateStr: string,
  endDateStr: string,
  savedRanges: string[] = []
) => {
  const MAX_DATE = 4;
  const TOTAL_TIME = 15;

  const startDate = useMemo(() => dayjs(startDateStr), [startDateStr]);
  const endDate = useMemo(() => dayjs(endDateStr), [endDateStr]);

  const [currentStartDate, setCurrentStartDate] = useState(startDate);
  const [currentDates, setCurrentDates] = useState<dayjs.Dayjs[]>([]);
  const [timeSlots, setTimeSlots] = useState<{ [key: string]: boolean[] }>({});
  const [selectedTime, setSelectedTime] = useState<string | null>(null);

  const savedTimeSlots = useMemo(() => parseTimeRanges(savedRanges), [savedRanges]);

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

  const initializeTimeSlots = useCallback((dates: dayjs.Dayjs[]) => {
    setTimeSlots((prevSlots) => {
      const newSlots = { ...prevSlots };
      dates.forEach((date) => {
        const dateKey = date.format('YYYY-MM-DD');
        if (!newSlots[dateKey]) {
          newSlots[dateKey] = Array(TOTAL_TIME).fill(false);
        }
      });
      Object.keys(savedTimeSlots).forEach((dateKey) => {
        if (newSlots[dateKey]) {
          newSlots[dateKey] = savedTimeSlots[dateKey];
        }
      });
      return newSlots;
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    initializeTimeSlots(currentDates);
  }, [currentDates, initializeTimeSlots]);

  const moveNext = useCallback(() => {
    setCurrentStartDate((prev) => {
      const newStartDate = prev.add(1, 'day');
      return newStartDate.add(MAX_DATE - 1, 'day').isSameOrBefore(endDate) ? newStartDate : prev;
    });
  }, [endDate, MAX_DATE]);

  const movePrev = useCallback(() => {
    setCurrentStartDate((prev) => {
      const newStartDate = prev.subtract(1, 'day');
      return newStartDate.isSameOrAfter(startDate) ? newStartDate : prev;
    });
  }, [startDate]);

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
  }, [timeSlots]);

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
