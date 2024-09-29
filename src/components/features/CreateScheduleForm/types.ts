import { Schedule } from '@/types/schedule';

export type FormProps<T> = {
  onNext: () => void;
  onPrev: () => void;
} & T;

export type NickNameFormProps = FormProps<{
  value: string;
  setValue: (nickName: string) => void;
}>;

export type ScheduleInputFormProps = FormProps<{
  uuid: string;
  edit: boolean;
  dateOfScheduleList?: Schedule[];
  setValue: (schedule: Schedule[]) => void;
}>;
