import axios, { AxiosError } from 'axios';

import { ReissueResponse } from '@/apis/member/type';

import { ENV } from './env';

export const instance = axios.create({
  baseURL: ENV.API_BASE_URL,
  timeout: 5000,
  headers: {
    'Content-Type': 'application/json',
  },
});

instance.interceptors.response.use(
  function onFulFilled(response) {
    if (response.status === 200 && response.config.url === '/auth/reissue') {
      const newAccessToken = response.data.accessToken;
      localStorage.setItem('accessToken', newAccessToken);
    }
    return response;
  },
  async function onRejected(error: AxiosError) {
    if (error.response?.status === 401 && error.response?.config.url === '/auth/check') {
      const staledAccessToken = localStorage.getItem('accessToken');
      localStorage.removeItem('accessToken');

      instance.get<ReissueResponse>('/auth/reissue', {
        withCredentials: true,
        headers: { Authorization: staledAccessToken },
      });
    }

    if (error.response?.status === 418 && error.response?.config.url === '/auth/reissue') {
      localStorage.removeItem('accessToken');
      if (confirm('로그인이 필요합니다.')) location.href = '/';
    }

    return Promise.reject(error);
  }
);
