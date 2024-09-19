import { Schedule } from '@/types/schedule';

export type NickNameFormProps = {
  value: string;
  onUpdateNickName: (nickName: string) => void;
  onNext: () => void;
  onPrev: () => void;
};

export type ScheduleInputFormProps = {
  onUpdateSchedule: (schedule: Schedule[]) => void;
  onNext: () => void;
  onPrev: () => void;
};
