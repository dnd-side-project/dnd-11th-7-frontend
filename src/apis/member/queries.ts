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
  meetings: {
    queryKey: ['members', 'meetings'],
    queryFn: memberApi.meetings,
  },
} as const;
