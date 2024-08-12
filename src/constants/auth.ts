import { ENV } from '@/lib/env';

export const KAKAO_LOGIN_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${ENV.KAKAO_REST_API_KEY}&redirect_uri=${ENV.KAKAO_LOGIN_REDIRECT_URI}&response_type=code`;
