import { instance } from '@/lib/axios';
import { newSchedule } from '@/types/schedule';

import { CreateScheduleResponse } from './type';

export const schedule = {
  /**
   * @description 회원 일정 생성
   */
  createMemberSchedule: async (data: newSchedule, uuid: string) => {
    const response = await instance.post(`/meetings/${uuid}/schedules/members`, data, {
      withCredentials: true,
      headers: { Authorization: localStorage.getItem('accessToken') },
    });

    return response.data;
  },
  /**
   * @description 비회원 일정 생성
   */
  createNonMemberSchedule: async (data: newSchedule, uuid: string) => {
    const response = await instance.post<CreateScheduleResponse>(
      `/meetings/${uuid}/schedules/guests`,
      data
    );

    return response.data;
  },
};
