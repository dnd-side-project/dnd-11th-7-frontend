import { ReactElement, useState } from 'react';

import { FlexBox } from '@/components/common/FlexBox';

type StepProps = {
  name: string;
  children: React.ReactNode;
};

export const useFunnel = () => {
  const [step, setStep] = useState<string>('카테고리');

  const Funnel = ({ children }: { children: ReactElement[] }) => {
    const Step = children.find((child) => child.props.name === step);
    return <>{Step}</>;
  };

  const Step = ({ children }: StepProps) => {
    return <FlexBox>{children}</FlexBox>;
  };

  Funnel.Step = Step;

  return { Funnel, setStep };
};
