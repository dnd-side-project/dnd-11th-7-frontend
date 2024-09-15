export const parseTimeRanges = (timeRanges: string[]): { [key: string]: boolean[] } => {
  const TOTAL_TIME = 16;
  const timeSlotMap: { [key: string]: boolean[] } = {};

  timeRanges.forEach((range) => {
    const [datePart, timePart] = range.split(' ');
    const [start, end] = timePart.split('~');

    const startHour = parseInt(start.split(':')[0], 10) - 9;
    const endHour = parseInt(end.split(':')[0], 10) - 9;

    if (!timeSlotMap[datePart]) {
      timeSlotMap[datePart] = Array(TOTAL_TIME).fill(false);
    }

    for (let i = startHour; i < endHour; i++) {
      timeSlotMap[datePart][i] = true;
    }
  });

  return timeSlotMap;
};
