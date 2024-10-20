import { useEffect } from 'react';

import { ENV } from '@/lib/env';

export const useKakaoSdk = () => {
  useEffect(() => {
    if (!window.Kakao.isInitialized()) {
      window.Kakao.init(ENV.KAKAO_JAVASCRIPT_KEY);
    }
  }, []);
};
