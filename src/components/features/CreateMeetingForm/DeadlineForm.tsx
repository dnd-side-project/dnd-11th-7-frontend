import { Chip } from '@/components/common/Chip';
import { FixedBottomButton } from '@/components/common/FixedBottomButton';
import { FormLayout } from '@/components/common/FormLayout';
import { Header } from '@/components/common/Header';
import { IconButton } from '@/components/common/IconButton';
import { Progress } from '@/components/common/Progress';

import { CreateMeetingFormBaseProps } from './types';

type Props = CreateMeetingFormBaseProps;

export const DeadlineForm = ({ onNext, onPrevious }: Props) => {
  return (
    <>
      <FormLayout
        header={
          <Header
            left={<IconButton iconName="back" onClick={onPrevious} />}
            middle={<Progress min={0} max={6} value={6} />} // TODO 하드코딩 제거할 방법 고민
            right={<Chip variant="greyFilled">{`${6}/${6}`}</Chip>}
          />
        }
        title={`일정 입력 마감 기한을\n기입해 주세요`}
        content="마감 기한 입력 영역"
      />
      <FixedBottomButton onClick={onNext}>다음</FixedBottomButton>
    </>
  );
};
