export const ENV = {
  IS_PRODUCTION: import.meta.env.PROD,
  API_BASE_URL: `${import.meta.env.VITE_API_BASE_URL}`,
  KAKAO_JAVASCRIPT_KEY: `${import.meta.env.VITE_KAKAO_JAVASCRIPT_KEY}`,
} as const;
