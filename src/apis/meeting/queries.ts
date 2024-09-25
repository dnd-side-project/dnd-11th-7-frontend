import { meeting as meetingApi } from '../meeting/api';

export const meeting = {
  info: (uuid: string) => ({
    queryKey: ['info', uuid],
    queryFn: () => meetingApi.info(uuid),
  }),
  times: (uuid: string, sort?: 'DEFAULT' | 'LATEST') => ({
    queryKey: ['meeting', 'times', uuid, sort],
    queryFn: () => meetingApi.times(uuid, sort),
  }),
  participants: (uuid: string) => ({
    queryKey: ['participants', uuid],
    queryFn: () => meetingApi.participants(uuid),
  }),
} as const;
