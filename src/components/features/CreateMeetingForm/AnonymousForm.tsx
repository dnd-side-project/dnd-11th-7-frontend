import { FixedBottomButton } from '@/components/common/FixedBottomButton';
import { FormLayout } from '@/components/common/FormLayout';

import { CreateMeetingFormBaseProps } from './types';

type Props = CreateMeetingFormBaseProps;

export const AnonymousForm = ({ onNext, onPrev }: Props) => {
  return (
    <>
      <FormLayout
        header={<FormLayout.Header progress={5} maxProgress={6} onPrev={onPrev} />}
        title={`멤버들의 일정을\n어떻게 수집할까요?`}
        description="익명 여부를 선택해 주세요"
        content="세그먼티드 컨트롤 영역"
      />
      <FixedBottomButton onClick={onNext}>다음</FixedBottomButton>
    </>
  );
};
