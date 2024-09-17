import { ENDPOINT } from '@/constants/endpoint';
import { instance } from '@/lib/axios';
import { MeetingForm } from '@/types/meeting';

import { CreateMeetingResponse } from './type';

export const meeting = {
  /**
   * @description 모임 생성
   */
  createMeeting: async (data: MeetingForm) => {
    const response = await instance.post<CreateMeetingResponse>(ENDPOINT.MEETING.CREATE, data, {
      withCredentials: true,
      headers: { Authorization: localStorage.getItem('accessToken') },
    });
    return response.data;
  },
};
