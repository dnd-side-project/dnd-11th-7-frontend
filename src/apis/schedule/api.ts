import { instance } from '@/lib/axios';
import { Schedule, newSchedule } from '@/types/schedule';

import { CreateScheduleResponse, ScheduleTimeResponse } from './type';

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
   * @description 회원 일정 수정
   */
  editMemberSchedule: async (data: { dateOfScheduleList: Schedule[] }, uuid: string) => {
    const response = await instance.patch(`/meetings/${uuid}/schedules`, data, {
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
  /**
   * @description 비회원 일정 수정
   */
  editNonMemberSchedule: async (
    data: { dateOfScheduleList: Schedule[] },
    scheduleUuid: string,
    nonMemberUuid: string
  ) => {
    const response = await instance.patch(
      `/meetings/${scheduleUuid}/schedules/${nonMemberUuid}`,
      data
    );

    return response.data;
  },
  /**
   * @description 회원 일정 조회
   */
  member: async (scheduleUuid: string) => {
    const response = await instance.get<ScheduleTimeResponse>(
      `/meetings/${scheduleUuid}/schedules/members`,
      {
        withCredentials: true,
        headers: { Authorization: localStorage.getItem('accessToken') },
      }
    );
    return response.data;
  },
  /**
   * @description 비회원 일정 조회
   */
  guests: async (scheduleUuid: string, nonMemberUuid: string) => {
    const response = await instance.get<ScheduleTimeResponse>(
      `/meetings/${scheduleUuid}/schedules/guests?scheduleUuid=${nonMemberUuid}`
    );
    return response.data;
  },
};
