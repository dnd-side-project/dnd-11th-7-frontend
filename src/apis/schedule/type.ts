import { Schedule } from '../../types/schedule';
export type CreateScheduleResponse = {
  scheduleUuid: string;
};

export type ScheduleTimeResponse = {
  scheduleNickname: string;
  scheduleUuid: string;
  meetingStartDate: string;
  meetingEndDate: string;
  dateOfScheduleList: Schedule[];
};
