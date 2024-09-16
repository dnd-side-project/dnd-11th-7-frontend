import { useContext } from 'react';

import { FunnelProgressContext } from '@/contexts/FunnelProgressContext';

export const useMeetingFormProgressContext = () => {
  const { progress, maxProgress } = useContext(FunnelProgressContext);

  return { progress, maxProgress: maxProgress - 1 }; // NOTE: 마지막 Summary 페이지는 스텝에서 제외
};
