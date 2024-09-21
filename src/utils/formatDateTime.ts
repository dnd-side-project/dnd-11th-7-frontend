import dayjs from 'dayjs';
import localizedFormat from 'dayjs/plugin/localizedFormat';
import weekday from 'dayjs/plugin/weekday';
import 'dayjs/locale/ko';

dayjs.extend(weekday);
dayjs.extend(localizedFormat);
dayjs.locale('ko');

export const formatDateTime = (dateString: string): string => {
  const date = dayjs(dateString);

  return date.format('YYYY.MM.DD(ddd) HH:mm');
};
