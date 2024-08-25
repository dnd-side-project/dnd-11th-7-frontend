import { useState } from 'react';

import { FixedBottomButton } from '@/components/common/FixedBottomButton';
import { FlexBox } from '@/components/common/FlexBox';
import { FormLayout } from '@/components/common/FormLayout';
import { Slider } from '@/components/common/Slider';
import { useFunnelProgressContext } from '@/hooks/useFunnelProgressContext';
import { MeetingForm } from '@/types/meeting';

import { CreateMeetingFormBaseProps, FormData } from './types';

type Props<T> = CreateMeetingFormBaseProps & FormData<T>;

export const MemberCountForm = ({
  context,
  onNext,
  onPrev,
}: Props<MeetingForm['numberOfPeople']>) => {
  const { progress, maxProgress } = useFunnelProgressContext();
  const { state: memberCountFormData, setState: setMemberCountFormData } = context;

  const [memberCount, setMemberCount] = useState(memberCountFormData);

  return (
    <>
      <FormLayout
        header={<FormLayout.Header progress={progress} maxProgress={maxProgress} onPrev={onPrev} />}
        title={`모임에 참가하는\n인원수를 설정해 주세요`}
        description="최대 10명까지 선택 가능합니다."
        content={
          <FlexBox width="100%" height="100%" padding="60px 0 0 0" justifyContent="flex-start">
            <Slider
              value={memberCount}
              max={10}
              min={2}
              showBubble
              onChange={(e) => setMemberCount(Number(e.target.value))}
            />
          </FlexBox>
        }
      />
      <FixedBottomButton
        onClick={() => {
          onNext();
          setMemberCountFormData(memberCount);
        }}
      >
        다음
      </FixedBottomButton>
    </>
  );
};
