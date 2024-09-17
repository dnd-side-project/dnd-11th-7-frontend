import { useMemo, useState } from 'react';
import dayjs from 'dayjs';

import { FixedBottomButton } from '@/components/common/FixedBottomButton';
import { FlexBox } from '@/components/common/FlexBox';
import { FormLayout } from '@/components/common/FormLayout';
import { Switch } from '@/components/common/Switch';
import { useMeetingFormProgressContext } from '@/hooks/useMeetingFormProgressContext';
import { MeetingForm } from '@/types/meeting';

import { CreateMeetingFormBaseProps, FormData } from './types';

type Props<T> = CreateMeetingFormBaseProps & FormData<T>;

export const DueDateForm = ({ context, onNext, onPrev }: Props<MeetingForm['dueDateTime']>) => {
  const { progress, maxProgress } = useMeetingFormProgressContext();
  const { state: dueDateTime, setState: setDueDateTime, others: meetingStartDate } = context;

  const [selectedDueDate, setSelectedDueDate] = useState(dueDateTime);

  const accessDate = dayjs().format('YYYY-MM-DDTHH'); // NOTE: 해당 페이지의 접속 날짜를 기준으로 +n일을 계산하기 위함
  const endDateOf = useMemo(
    () => ({
      // TODO 유틸화
      오늘: dayjs(accessDate).endOf('day').format('YYYY-MM-DDTHH:mm:ss'),
      내일: dayjs(accessDate).add(1, 'day').endOf('day').format('YYYY-MM-DDTHH:mm:ss'),
      '3일': dayjs(accessDate).add(3, 'day').endOf('day').format('YYYY-MM-DDTHH:mm:ss'),
      '5일': dayjs(accessDate).add(5, 'day').endOf('day').format('YYYY-MM-DDTHH:mm:ss'),
    }),
    [accessDate]
  );
  const endDates = Object.entries(endDateOf).filter(([, value]) =>
    dayjs(value).isBefore(dayjs(meetingStartDate))
  );

  return (
    <>
      <FormLayout
        header={<FormLayout.Header progress={progress} maxProgress={maxProgress} onPrev={onPrev} />}
        title={`일정 입력 마감 기한을\n기입해 주세요`}
        content={
          <FlexBox width="100%" padding="78px 0">
            <Switch selectedValue={selectedDueDate} onChange={setSelectedDueDate}>
              {endDates.map(([label, value]) => (
                <Switch.Button key={value} label={label} value={value} />
              ))}
            </Switch>
          </FlexBox>
        }
      />
      <FixedBottomButton
        onClick={() => {
          setDueDateTime(selectedDueDate);
          onNext();
        }}
        disabled={!selectedDueDate}
      >
        다음
      </FixedBottomButton>
    </>
  );
};
