import { FixedBottomButton } from '@/components/common/FixedBottomButton';
import { FormLayout } from '@/components/common/FormLayout';
import { useFunnelProgressContext } from '@/hooks/useFunnelProgressContext';

import { CreateMeetingFormBaseProps } from './types';

type Props = CreateMeetingFormBaseProps;

export const AnonymousForm = ({ onNext, onPrev }: Props) => {
  const { progress, maxProgress } = useFunnelProgressContext();

  return (
    <>
      <FormLayout
        header={<FormLayout.Header progress={progress} maxProgress={maxProgress} onPrev={onPrev} />}
        title={`멤버들의 일정을\n어떻게 수집할까요?`}
        description="익명 여부를 선택해 주세요"
        content="세그먼티드 컨트롤 영역"
      />
      <FixedBottomButton onClick={onNext}>다음</FixedBottomButton>
    </>
  );
};