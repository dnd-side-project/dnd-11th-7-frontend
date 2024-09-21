import { Schedule } from '@/types/schedule';

export type FormProps = {
  onNext: () => void;
  onPrev: () => void;
};

export type ScheduleEditInputFormProps = FormProps & {
  setValue: (value: Schedule[]) => void;
};
