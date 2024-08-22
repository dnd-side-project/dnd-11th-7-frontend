import { useState } from 'react';

import { FixedBottomButton } from '@/components/common/FixedBottomButton';
import { FlexBox } from '@/components/common/FlexBox';
import { FormLayout } from '@/components/common/FormLayout';
import { TextField } from '@/components/common/TextField';
import { useFunnelProgressContext } from '@/hooks/useFunnelProgressContext';
import { createIsInvalidInstance, createIsValidInstance } from '@/utils/validation';

import { CreateMeetingFormBaseProps } from './types';

type Props = CreateMeetingFormBaseProps;

const MAX_MEETING_NAME_LENGTH = 20;

export const MeetingNameForm = ({ onNext, onPrev }: Props) => {
  const { progress, maxProgress } = useFunnelProgressContext();
  const [meetingName, setMeetingName] = useState('');

  const isFieldEmpty = meetingName.length === 0;

  const validator = (value: string) => {
    if (value.length > MAX_MEETING_NAME_LENGTH) {
      return createIsInvalidInstance(`${MAX_MEETING_NAME_LENGTH}글자까지 입력 가능합니다.`);
    }
    return createIsValidInstance();
  };

  return (
    <>
      <FormLayout
        header={<FormLayout.Header progress={progress} maxProgress={maxProgress} onPrev={onPrev} />}
        title={`모임의 이름을\n입력해 주세요`}
        description={`${MAX_MEETING_NAME_LENGTH}글자까지 입력 가능합니다.`}
        content={
          <FlexBox width="100%" height="100%" padding="60px 0 0 0" justifyContent="flex-start">
            <TextField
              placeholder="모임의 이름을 입력해 주세요"
              value={meetingName}
              onChange={(e) => setMeetingName(e.target.value)}
              onClickClear={() => setMeetingName('')}
              validator={validator}
            />
          </FlexBox>
        }
      />
      <FixedBottomButton
        onClick={() => onNext(meetingName)}
        disabled={isFieldEmpty || validator(meetingName).isValid === false}
      >
        다음
      </FixedBottomButton>
    </>
  );
};
