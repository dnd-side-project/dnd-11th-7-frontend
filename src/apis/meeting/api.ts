import { ENDPOINT } from '@/constants/endpoint';
import { instance } from '@/lib/axios';
import { MeetingForm } from '@/types/meeting';

import {
  CreateMeetingResponse,
  InfoResponse,
  MeetingTimeResponse,
  ParticipantsResponse,
  TimesResponse,
} from './type';

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
  /**
   * @description 모임 정보 조회
   */
  info: async (uuid: string) => {
    const response = await instance.get<InfoResponse>(`/meetings/${uuid}/info`);
    return response.data;
  },
  /**
   * @description 모임 일정 시간 조회
   */
  times: async (
    uuid: string,
    sort: 'count' | 'latest',
    requestTime?: string,
    pageNum: number = 0
  ) => {
    const response = await instance.get<MeetingTimeResponse>(
      `/meetings/${uuid}/times?sort=${sort}&page=${pageNum.toString()}&size=10${requestTime && `&request_time=${requestTime}`}`
    );

    return response.data;
  },
  /**
   * @description 모임 일정 전체 시간 조회
   */
  allTime: async (uuid: string) => {
    const response = await instance.get<TimesResponse>(`/meetings/${uuid}/times/all`);
    return response.data;
  },
  /**
   * @description 최적의 모임 시간 시간 조회
   */
  bestTime: async (uuid: string) => {
    const response = await instance.get<string>(`/meetings/${uuid}/times/best`);
    return response.data;
  },
  /**
   * @description 모임 유저 목록 조회
   */
  participants: async (uuid: string) => {
    const response = await instance.get<ParticipantsResponse>(`/meetings/${uuid}/participants`);
    return response.data;
  },
  /**
   * @description 회원 일정 작성 여부 조회
   */
  checkSchedule: async (uuid: string) => {
    const response = await instance.get<boolean>(`/meetings/${uuid}/schedules/members/check`, {
      withCredentials: true,
      headers: { Authorization: localStorage.getItem('accessToken') },
    });
    return response.data;
  },
};
