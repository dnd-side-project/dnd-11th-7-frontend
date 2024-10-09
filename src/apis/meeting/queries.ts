import { meeting as meetingApi } from '../meeting/api';

export const meeting = {
  info: (uuid: string) => ({
    queryKey: ['info', uuid],
    queryFn: () => meetingApi.info(uuid),
  }),
  times: (uuid: string, sort?: 'COUNT' | 'LATEST') => ({
    queryKey: ['meeting', 'times', uuid, sort],
    queryFn: () => meetingApi.times(uuid, sort),
  }),
  bestTime: (uuid: string) => ({
    queryKey: ['best-tome', uuid],
    queryFn: () => meetingApi.bestTime(uuid),
  }),
  participants: (uuid: string) => ({
    queryKey: ['participants', uuid],
    queryFn: () => meetingApi.participants(uuid),
  }),
  checkSchedule: (uuid: string) => ({
    queryKey: ['check-schedule', uuid],
    queryFn: () => meetingApi.checkSchedule(uuid),
  }),
} as const;
