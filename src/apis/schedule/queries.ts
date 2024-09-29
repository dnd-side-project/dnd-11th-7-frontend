import { schedule as scheduleApi } from './api';

export const schedule = {
  guests: (scheduleUuid: string, nonMemberUuid: string) => ({
    queryKey: ['guests', 'guestScheduleList', scheduleUuid, nonMemberUuid],
    queryFn: () => scheduleApi.guests(scheduleUuid, nonMemberUuid),
    enabled: false,
  }),

  member: (scheduleUuid: string) => ({
    queryKey: ['memberScheduleList', scheduleUuid],
    queryFn: () => scheduleApi.member(scheduleUuid),
  }),
} as const;
