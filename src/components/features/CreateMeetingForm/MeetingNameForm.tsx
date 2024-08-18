import { Chip } from '@/components/common/Chip';
import { FixedBottomButton } from '@/components/common/FixedBottomButton';
import { FlexBox } from '@/components/common/FlexBox';
import { FormLayout } from '@/components/common/FormLayout';
import { Header } from '@/components/common/Header';
import { IconButton } from '@/components/common/IconButton';
import { Progress } from '@/components/common/Progress';
import { TextField } from '@/components/common/TextField';

import { CreateMeetingFormBaseProps } from './types';

type Props = CreateMeetingFormBaseProps;

export const MeetingNameForm = ({ onNext, onPrev }: Props) => {
  return (
    <>
      <FormLayout
        header={
          <Header
            left={<IconButton iconName="back" onClick={onPrev} />}
            middle={<Progress min={0} max={6} value={2} />} // TODO 하드코딩 제거할 방법 고민
            right={<Chip variant="greyFilled">{`${2}/${6}`}</Chip>}
          />
        }
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
