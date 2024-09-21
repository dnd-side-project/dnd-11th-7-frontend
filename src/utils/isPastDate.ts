import dayjs from 'dayjs';

export const isPastDate = (date: string) => dayjs(date).isBefore(dayjs());
