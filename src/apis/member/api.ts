import { ENDPOINT } from '@/constants/endpoint';
import { instance } from '@/lib/axios';
import { Meeting } from '@/types/meeting';

import { CheckResponse, ReissueResponse } from './type';

export const member = {
  /**
   * @description 토큰 재발급
   */
  reissue: async () => {
    const response = await instance.get<ReissueResponse>(ENDPOINT.MEMBER.REISSUE, {
      withCredentials: true,
    });
    localStorage.setItem('accessToken', response.data.accessToken);
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
  /**
   * @description 회원이 속한 모임 조회
   */
  meetings: async () => {
    const response = await instance.get<Meeting[]>(ENDPOINT.MEMBER.MEETINGS, {
      withCredentials: true,
      headers: {
        Authorization: localStorage.getItem('accessToken'),
      },
    });
    return response.data;
  },
};
