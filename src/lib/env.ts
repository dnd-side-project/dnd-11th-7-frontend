export const ENV = {
  IS_PRODUCTION: import.meta.env.PROD,
  API_BASE_URL: `${import.meta.env.VITE_API_BASE_URL}`,
  KAKAO_REST_API_KEY: `${import.meta.env.VITE_KAKAO_REST_API_KEY}`,
  KAKAO_LOGIN_REDIRECT_URI: `${import.meta.env.VITE_KAKAO_LOGIN_REDIRECT_URI}`,
} as const;
