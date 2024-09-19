import { ENDPOINT } from '@/constants/endpoint';
import { instance } from '@/lib/axios';

import { CheckResponse } from './type';

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
};
