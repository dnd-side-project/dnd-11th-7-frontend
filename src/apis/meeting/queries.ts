import { meeting as meetingApi } from '../meeting/api';

export const meeting = {
  info: (uuid: string) => ({
    queryKey: ['info', uuid],
    queryFn: () => meetingApi.info(uuid),
  }),
  times: (uuid: string) => ({
    queryKey: ['times', uuid],
    queryFn: () => meetingApi.times(uuid),
  }),
  participants: (uuid: string) => ({
    queryKey: ['participants', uuid],
    queryFn: () => meetingApi.participants(uuid),
  }),
} as const;
