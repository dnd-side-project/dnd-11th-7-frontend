import { ReactElement, useCallback, useState } from 'react';

import { FunnelProgressContext } from '@/contexts/FunnelProgressContext';

type StepNames<T> = readonly T[];
type StepProps<T> = {
  name: T;
  children: React.ReactNode;
};

export const useFunnel = <T,>(stepNames: StepNames<T>) => {
  const [step, setStep] = useState(stepNames[0]);

  const FunnelComponent = useCallback(
    ({ children }: { children: ReactElement[] }) => {
      const stepComponentIndex = children.findIndex((child) => child.props.name === step);
      const StepComponent = children[stepComponentIndex];

      return (
        <FunnelProgressContext.Provider
          value={{ progress: stepComponentIndex + 1, maxProgress: children.length }}
        >
          {StepComponent}
        </FunnelProgressContext.Provider>
      );
    },
    [step]
  );

  const Step = useCallback(({ children }: StepProps<T>) => {
    return <>{children}</>;
  }, []);

  const Funnel = Object.assign(FunnelComponent, { Step });

  return { Funnel, step, setStep };
};
