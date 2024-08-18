import { Chip } from '@/components/common/Chip';
import { FixedBottomButton } from '@/components/common/FixedBottomButton';
import { FormLayout } from '@/components/common/FormLayout';
import { Header } from '@/components/common/Header';
import { IconButton } from '@/components/common/IconButton';
import { Progress } from '@/components/common/Progress';

import { CreateMeetingFormBaseProps } from './types';

type Props = CreateMeetingFormBaseProps;

export const AnonymousForm = ({ onNext, onPrev }: Props) => {
  return (
    <>
      <FormLayout
        header={
          <Header
            left={<IconButton iconName="back" onClick={onPrev} />}
            middle={<Progress min={0} max={6} value={5} />} // TODO 하드코딩 제거할 방법 고민
            right={<Chip variant="greyFilled">{`${5}/${6}`}</Chip>}
          />
        }
        title={`멤버들의 일정을\n어떻게 수집할까요?`}
        description="익명 여부를 선택해 주세요"
        content="세그먼티드 컨트롤 영역"
      />
      <FixedBottomButton onClick={onNext}>다음</FixedBottomButton>
    </>
  );
};
