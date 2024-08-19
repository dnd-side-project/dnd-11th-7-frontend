import { useContext } from 'react';

import { FunnelProgressContext } from '@/contexts/FunnelProgressContext';

export const useFunnelProgressContext = () => {
  return useContext(FunnelProgressContext);
};
