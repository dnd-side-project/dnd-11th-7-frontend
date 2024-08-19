import { ReactElement, useState } from 'react';

import { FlexBox } from '@/components/common/FlexBox';
import { FunnelProgressContext } from '@/contexts/FunnelProgressContext';

type StepNames<T> = readonly T[];
type StepProps<T> = {
  name: T;
  children: React.ReactNode;
};

export const useFunnel = <T,>(stepNames: StepNames<T>) => {
  const [step, setStep] = useState(stepNames[0]);

  const Funnel = ({ children }: { children: ReactElement[] }) => {
    const stepComponentIndex = children.findIndex((child) => child.props.name === step);
    const StepComponent = children[stepComponentIndex];

    return (
      <FunnelProgressContext.Provider
        value={{ progress: stepComponentIndex + 1, maxProgress: children.length }}
      >
        {StepComponent}
      </FunnelProgressContext.Provider>
    );
  };

  const Step = ({ children }: StepProps<T>) => {
    return <FlexBox>{children}</FlexBox>;
  };

  Funnel.Step = Step;

  return { Funnel, setStep };
};
