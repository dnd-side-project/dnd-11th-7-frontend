import axios, { AxiosError } from 'axios';

import { ReissueResponse } from '@/apis/member/type';
import { ENDPOINT } from '@/constants/endpoint';

import { ENV } from './env';

const ACCESS_TOKEN = 'accessToken';
export const instance = axios.create({
  baseURL: ENV.API_BASE_URL,
  timeout: 5000,
  headers: {
    'Content-Type': 'application/json',
  },
});

instance.interceptors.response.use(
  function onFulFilled(response) {
    if (response.status === 200 && response.config.url === ENDPOINT.MEMBER.REISSUE) {
      const newAccessToken = response.data.accessToken;
      localStorage.setItem(ACCESS_TOKEN, newAccessToken);
    }
    return response;
  },
  async function onRejected(error: AxiosError) {
    if (error.response?.status === 401 && error.response?.config.url === ENDPOINT.MEMBER.CHECK) {
      const staledAccessToken = localStorage.getItem(ACCESS_TOKEN);
      localStorage.removeItem(ACCESS_TOKEN);

      instance.get<ReissueResponse>(ENDPOINT.MEMBER.REISSUE, {
        withCredentials: true,
        headers: { Authorization: staledAccessToken },
      });
    }

    if (error.response?.status === 418 && error.response?.config.url === ENDPOINT.MEMBER.REISSUE) {
      localStorage.removeItem(ACCESS_TOKEN);
      if (confirm('로그인이 필요합니다.')) location.href = '/';
    }

    return Promise.reject(error);
  }
);
