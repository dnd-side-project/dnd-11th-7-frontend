import { createContext } from 'react';

type FunnelProgressContextType = {
  progress: number;
  maxProgress: number;
};

export const FunnelProgressContext = createContext<FunnelProgressContextType>({
  progress: 0,
  maxProgress: 0,
});
