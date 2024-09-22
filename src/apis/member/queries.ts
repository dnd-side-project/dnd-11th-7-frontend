import { member as memberApi } from './api';

export const member = {
  reissue: {
    queryKey: [],
    queryFn: memberApi.reissue,
  },
  check: (accessToken: string) => ({
    queryKey: ['check', accessToken],
    queryFn: () => memberApi.check(accessToken),
  }),
  info: (uuid: string) => ({
    queryKey: ['info', uuid],
    queryFn: () => memberApi.info(uuid),
  }),
  times: (uuid: string) => ({
    queryKey: ['times', uuid],
    queryFn: () => memberApi.times(uuid),
  }),
  participants: (uuid: string) => ({
    queryKey: ['participants', uuid],
    queryFn: () => memberApi.participants(uuid),
  }),
} as const;
