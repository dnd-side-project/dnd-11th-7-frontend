import { useState } from 'react';
import dayjs, { Dayjs } from 'dayjs';

import { Calendar } from '@/components/common/Calendar';
import { FixedBottomButton } from '@/components/common/FixedBottomButton';
import { FormLayout } from '@/components/common/FormLayout';
import { useMeetingFormProgressContext } from '@/hooks/useMeetingFormProgressContext';
import { MeetingForm } from '@/types/meeting';

import { CreateMeetingFormBaseProps, FormData } from './types';

type Props<T> = CreateMeetingFormBaseProps & FormData<T>;

export const MeetingDateRangeForm = ({
  context,
  onNext,
  onPrev,
}: Props<Pick<MeetingForm, 'meetingStartDate' | 'meetingEndDate'>>) => {
  const { progress, maxProgress } = useMeetingFormProgressContext();
  const { state, setState: setMeetingDateFormData } = context;
  const { meetingStartDate: meetingStartDateFormData, meetingEndDate: meetingEndDateFormData } =
    state;

  const [selectedStartDate, setSelectedStartDate] = useState<Dayjs | null>(() =>
    !!meetingStartDateFormData === true ? dayjs(meetingStartDateFormData) : null
  );
  const [selectedEndDate, setSelectedEndDate] = useState<Dayjs | null>(() =>
    !!meetingEndDateFormData === true ? dayjs(meetingEndDateFormData) : null
  );

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
        onClick={() => {
          onNext();
          setMeetingDateFormData({
            meetingStartDate: dayjs(selectedStartDate).format('YYYY-MM-DD'),
            meetingEndDate:
              selectedEndDate === null
                ? dayjs(selectedStartDate).format('YYYY-MM-DD')
                : dayjs(selectedEndDate).format('YYYY-MM-DD'),
          });
        }}
        disabled={selectedStartDate === null && selectedEndDate === null}
      >
        다음
      </FixedBottomButton>
    </>
  );
};
