import { useState } from 'react';

import { FixedBottomButton } from '@/components/common/FixedBottomButton';
import { FlexBox } from '@/components/common/FlexBox';
import { FormLayout } from '@/components/common/FormLayout';
import { Switch } from '@/components/common/Switch';
import { useFunnelProgressContext } from '@/hooks/useFunnelProgressContext';

import { CreateMeetingFormBaseProps } from './types';

type Props = CreateMeetingFormBaseProps;

export const AnonymousForm = ({ onNext, onPrev }: Props) => {
  const { progress, maxProgress } = useFunnelProgressContext();
  const [isAnonymous, setIsAnonymous] = useState(false);

  return (
    <>
      <FormLayout
        header={<FormLayout.Header progress={progress} maxProgress={maxProgress} onPrev={onPrev} />}
        title={`멤버들의 일정을\n어떻게 수집할까요?`}
        description="익명 여부를 선택해 주세요"
        content={
          <FlexBox width="100%" padding="60px 0">
            <Switch selectedValue={isAnonymous} onChange={setIsAnonymous}>
              <Switch.Button
                label="실명"
                value={false}
                img={<img src="/images/btn-jjakkak-3.svg" />}
              />
              <Switch.Button
                label="익명"
                value={true}
                img={<img src="/images/btn-anonymous.svg" />}
              />
            </Switch>
          </FlexBox>
        }
      />
      <FixedBottomButton onClick={onNext}>다음</FixedBottomButton>
    </>
  );
};
