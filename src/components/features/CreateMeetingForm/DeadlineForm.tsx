import { FixedBottomButton } from '@/components/common/FixedBottomButton';
import { FormLayout } from '@/components/common/FormLayout';

import { CreateMeetingFormBaseProps } from './types';

type Props = CreateMeetingFormBaseProps;

export const DeadlineForm = ({ onNext, onPrev }: Props) => {
  return (
    <>
      <FormLayout
        header={<FormLayout.Header progress={6} maxProgress={6} onPrev={onPrev} />}
        title={`일정 입력 마감 기한을\n기입해 주세요`}
        content="마감 기한 입력 영역"
      />
      <FixedBottomButton onClick={onNext}>다음</FixedBottomButton>
    </>
  );
};
