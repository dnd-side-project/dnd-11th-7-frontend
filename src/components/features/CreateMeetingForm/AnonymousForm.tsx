import { useState } from 'react';

import { FixedBottomButton } from '@/components/common/FixedBottomButton';
import { FlexBox } from '@/components/common/FlexBox';
import { FormLayout } from '@/components/common/FormLayout';
import { Switch } from '@/components/common/Switch';
import { useMeetingFormProgressContext } from '@/hooks/useMeetingFormProgressContext';
import { MeetingForm } from '@/types/meeting';

import { CreateMeetingFormBaseProps, FormData } from './types';

type Props<T> = CreateMeetingFormBaseProps & FormData<T>;

export const AnonymousForm = ({ context, onNext, onPrev }: Props<MeetingForm['isAnonymous']>) => {
  const { progress, maxProgress } = useMeetingFormProgressContext();
  const { state: isAnonymousFormData, setState: setIsAnonymousFormData } = context;

  const [isAnonymous, setIsAnonymous] = useState(isAnonymousFormData);

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
      <FixedBottomButton
        onClick={() => {
          onNext();
          setIsAnonymousFormData(isAnonymous);
        }}
      >
        다음
      </FixedBottomButton>
    </>
  );
};
