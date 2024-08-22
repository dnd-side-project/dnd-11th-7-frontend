import { useState } from 'react';

import { FixedBottomButton } from '@/components/common/FixedBottomButton';
import { FlexBox } from '@/components/common/FlexBox';
import { FormLayout } from '@/components/common/FormLayout';
import { Switch } from '@/components/common/Switch';
import { useFunnelProgressContext } from '@/hooks/useFunnelProgressContext';

import { CreateMeetingFormBaseProps } from './types';

type Props = CreateMeetingFormBaseProps;

export const DeadlineForm = ({ onNext, onPrev }: Props) => {
  const { progress, maxProgress } = useFunnelProgressContext();
  const [selectedDeadline, setSelectedDeadline] = useState('오늘'); // TODO 인터페이스 정의 필요

  return (
    <>
      <FormLayout
        header={<FormLayout.Header progress={progress} maxProgress={maxProgress} onPrev={onPrev} />}
        title={`일정 입력 마감 기한을\n기입해 주세요`}
        content={
          <FlexBox width="100%" padding="78px 0">
            <Switch selectedValue={selectedDeadline} onChange={setSelectedDeadline}>
              <Switch.Button label="오늘" value="오늘" />
              <Switch.Button label="내일" value="내일" />
              <Switch.Button label="3일" value="3일" />
              <Switch.Button label="5일" value="5일" />
            </Switch>
          </FlexBox>
        }
      />
      <FixedBottomButton onClick={onNext}>다음</FixedBottomButton>
    </>
  );
};
