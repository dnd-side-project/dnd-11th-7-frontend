import dayjs from 'dayjs';

export const parseTimeRanges = (
  timeRanges: { startTime: string; endTime: string }[]
): { [key: string]: boolean[] } => {
  const TOTAL_TIME = 15;
  const timeSlotMap: { [key: string]: boolean[] } = {};

  timeRanges.forEach(({ startTime, endTime }) => {
    const startDate = dayjs(startTime);
    const endDate = dayjs(endTime);

    const datePart = startDate.format('YYYY-MM-DD');
    const startHour = startDate.hour() - 9;
    let endHour = endDate.hour() - 9;

    if (endDate.hour() === 0 && endDate.minute() === 0 && endDate.second() === 0) {
      endHour = TOTAL_TIME - 1;
    }

    if (!timeSlotMap[datePart]) {
      timeSlotMap[datePart] = Array(TOTAL_TIME).fill(false);
    }

    for (let i = startHour; i <= endHour; i++) {
      if (
        i === endHour &&
        endDate.hour() !== 0 &&
        endDate.minute() === 0 &&
        endDate.second() === 0
      ) {
        break;
      }
      timeSlotMap[datePart][i] = true;
    }
  });

  return timeSlotMap;
};
