import { Chip } from '@/components/common/Chip';
import { FixedBottomButton } from '@/components/common/FixedBottomButton';
import { FormLayout } from '@/components/common/FormLayout';
import { Header } from '@/components/common/Header';
import { IconButton } from '@/components/common/IconButton';
import { Progress } from '@/components/common/Progress';

import { CreateMeetingFormBaseProps } from './types';

type Props = CreateMeetingFormBaseProps;

export const PeriodForm = ({ onNext, onPrevious }: Props) => {
  return (
    <>
      <FormLayout
        header={
          <Header
            left={<IconButton iconName="back" onClick={onPrevious} />}
            middle={<Progress min={0} max={6} value={3} />} // TODO 하드코딩 제거할 방법 고민
            right={<Chip variant="greyFilled">{`${3}/${6}`}</Chip>}
          />
        }
        title={`모임 일정 수집 기한을\n선택해 주세요`}
        description="최대 14일까지 선택 가능합니다."
        content="기간선택영역"
      />
      <FixedBottomButton onClick={onNext}>다음</FixedBottomButton>
    </>
  );
};
