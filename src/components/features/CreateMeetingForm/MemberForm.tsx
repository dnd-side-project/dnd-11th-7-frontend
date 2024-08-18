import { Chip } from '@/components/common/Chip';
import { FixedBottomButton } from '@/components/common/FixedBottomButton';
import { FlexBox } from '@/components/common/FlexBox';
import { FormLayout } from '@/components/common/FormLayout';
import { Header } from '@/components/common/Header';
import { IconButton } from '@/components/common/IconButton';
import { Progress } from '@/components/common/Progress';
import { Slider } from '@/components/common/Slider';

import { CreateMeetingFormBaseProps } from './types';

type Props = CreateMeetingFormBaseProps;

export const MemberForm = ({ onNext, onPrev }: Props) => {
  return (
    <>
      <FormLayout
        header={
          <Header
            left={<IconButton iconName="back" onClick={onPrev} />}
            middle={<Progress min={0} max={6} value={4} />} // TODO 하드코딩 제거할 방법 고민
            right={<Chip variant="greyFilled">{`${4}/${6}`}</Chip>}
          />
        }
        title={`모임에 참가하는\n인원수를 설정해 주세요`}
        description="최대 10명까지 선택 가능합니다."
        content={
          <FlexBox width="100%" height="100%" padding="60px 0 0 0" justifyContent="flex-start">
            {/* TODO state 연결 */}
            <Slider value={2} max={10} min={2} showBubble onChange={() => {}} />
          </FlexBox>
        }
      />
      <FixedBottomButton onClick={onNext}>다음</FixedBottomButton>
    </>
  );
};
