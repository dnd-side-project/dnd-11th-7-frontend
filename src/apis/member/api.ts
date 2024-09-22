import { ENDPOINT } from '@/constants/endpoint';
import { instance } from '@/lib/axios';

import { CheckResponse, InfoResponse, ParticipantsResponse, TimesResponse } from './type';

export const member = {
  /**
   * @description 토큰 재발급
   */
  reissue: async () => {
    const response = await instance.get(ENDPOINT.MEMBER.REISSUE, { withCredentials: true });
    localStorage.setItem('accessToken', response.headers.authorization);
    return response.data;
  },
  /**
   * @description 로그인 체크
   */
  check: async (accessToken: string) => {
    const response = await instance.get<CheckResponse>(ENDPOINT.MEMBER.CHECK, {
      withCredentials: true,
      headers: { Authorization: accessToken },
    });
    return response.data;
  },
  info: async (uuid: string) => {
    const response = await instance.get<InfoResponse>(`meetings/${uuid}/info`, {});
    return response.data;
  },
  times: async (uuid: string) => {
    const response = await instance.get<TimesResponse>(`meetings/${uuid}/times`, {});
    return response.data;
  },
  participants: async (uuid: string) => {
    const response = await instance.get<ParticipantsResponse>(`meetings/${uuid}/participants`, {});
    return response.data;
  },
};
