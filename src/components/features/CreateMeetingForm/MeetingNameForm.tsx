import { FixedBottomButton } from '@/components/common/FixedBottomButton';
import { FlexBox } from '@/components/common/FlexBox';
import { FormLayout } from '@/components/common/FormLayout';
import { TextField } from '@/components/common/TextField';

import { CreateMeetingFormBaseProps } from './types';

type Props = CreateMeetingFormBaseProps;

export const MeetingNameForm = ({ onNext, onPrev }: Props) => {
  return (
    <>
      <FormLayout
        header={<FormLayout.Header progress={2} maxProgress={6} onPrev={onPrev} />}
        title={`모임의 이름을\n입력해 주세요`}
        description="20글자까지 입력 가능합니다."
        content={
          <FlexBox width="100%" height="100%" padding="60px 0 0 0" justifyContent="flex-start">
            <TextField placeholder="모임의 이름을 입력해 주세요" />
          </FlexBox>
        }
      />
      <FixedBottomButton onClick={onNext}>다음</FixedBottomButton>
    </>
  );
};
