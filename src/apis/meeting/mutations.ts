import { meeting as meetingApi } from './api';

export const meeting = {
  createMeeting: {
    mutationFn: meetingApi.createMeeting,
  },
} as const;
