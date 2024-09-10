import { useState } from 'react';
import { Dayjs } from 'dayjs';

import { Calendar } from '@/components/common/Calendar';
import { FixedBottomButton } from '@/components/common/FixedBottomButton';
import { FormLayout } from '@/components/common/FormLayout';
import { useFunnelProgressContext } from '@/hooks/useFunnelProgressContext';

import { CreateMeetingFormBaseProps } from './types';

type Props = CreateMeetingFormBaseProps;

export const MeetingDateRangeForm = ({ onNext, onPrev }: Props) => {
  const { progress, maxProgress } = useFunnelProgressContext();
  const [selectedStartDate, setSelectedStartDate] = useState<Dayjs | null>(null);
  const [selectedEndDate, setSelectedEndDate] = useState<Dayjs | null>(null);

  const handleDateChange = (start: Dayjs | null, end: Dayjs | null) => {
    setSelectedStartDate(start);
    setSelectedEndDate(end);
  };

  return (
    <>
      <FormLayout
        header={<FormLayout.Header progress={progress} maxProgress={maxProgress} onPrev={onPrev} />}
        title={`모임 일정 수집 기한을\n선택해 주세요`}
        description="최대 14일까지 선택 가능합니다."
        content={
          <Calendar
            startDate={selectedStartDate}
            endDate={selectedEndDate}
            onDateChange={handleDateChange}
          />
        }
      />
      <FixedBottomButton
        onClick={() => onNext({ start: selectedStartDate, end: selectedEndDate })}
        disabled={selectedStartDate === null && selectedEndDate === null}
      >
        다음
      </FixedBottomButton>
    </>
  );
};
