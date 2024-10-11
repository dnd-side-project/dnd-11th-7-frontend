import dayjs from 'dayjs';

export const formatDate = (dateString: string): string => {
  const date = dayjs(dateString);

  return date.format('YYYY. MM. DD');
};
