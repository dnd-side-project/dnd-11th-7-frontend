import { Schedule } from '@/types/schedule';

export type FormProps = {
  onNext: () => void;
  onPrev: () => void;
};

export type PinProps = FormProps & {
  pin: string[];
  setPin: (value: string[]) => void;
  message?: string;
};

export type ScheduleEditInputFormProps = FormProps & {
  setValue: (value: Schedule[]) => void;
};
