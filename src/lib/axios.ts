import axios, { AxiosError } from 'axios';

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
    return response;
  },
  async function onRejected(error: AxiosError) {
    const originalRequest = error.config;

    if (error.response?.status === 401 && originalRequest && originalRequest.headers._retry === 0) {
      try {
        const response = await instance.get('/auth/reissue'); // 순환 참조 방지 위해 apis 함수 사용 X
        const newAccessToken = response.headers.Authorization;
        localStorage.setItem('accessToken', newAccessToken);

        originalRequest.withCredentials = true;
        originalRequest.headers.Authorization = newAccessToken;
        originalRequest.headers._retry = 1;

        return await instance(originalRequest);
      } catch (reissueError) {
        alert('로그인이 필요합니다.');
        return Promise.reject(reissueError);
      }
    }
  }
);
