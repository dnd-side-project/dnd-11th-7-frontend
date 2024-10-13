import { meeting as meetingApi } from '../meeting/api';

export const meeting = {
  info: (uuid: string) => ({
    queryKey: ['info', uuid],
    queryFn: () => meetingApi.info(uuid),
  }),
  times: (uuid: string, sort: 'count' | 'latest', requestTime?: string, pageNum?: number) => ({
    queryKey: ['meeting', 'times', uuid, sort, requestTime, pageNum],
    queryFn: ({ pageParam = { page: 0, requestTime: '' } }) =>
      meetingApi.times(uuid, sort, pageParam.requestTime, pageParam.page),
  }),
  allTime: (uuid: string) => ({
    queryKey: ['times', 'all', uuid],
    queryFn: () => meetingApi.allTime(uuid),
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
