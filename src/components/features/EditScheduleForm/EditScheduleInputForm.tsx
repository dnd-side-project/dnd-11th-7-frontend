import { useState } from 'react';

import { FixedBottomButton } from '@/components/common/FixedBottomButton';
import { FlexBox } from '@/components/common/FlexBox';
import { FormLayout } from '@/components/common/FormLayout';
import { Header } from '@/components/common/Header';
import { IconButton } from '@/components/common/IconButton';
import { Body2 } from '@/components/common/Typography';

import { ScheduleEditInputFormProps } from './types';

import { useSchedule } from '../../../hooks/useSchedule';
import { ScheduleInput } from '../../common/ScheduleInput/index';

export const EditScheduleInputForm = ({ setValue, onNext, onPrev }: ScheduleEditInputFormProps) => {
  // TODO: data, dates API 연결 필요
  const data = [
    {
      startTime: '2024-09-01T10:00:00',
      endTime: '2024-09-01T16:00:00',
    },
  ];
  const [dates] = useState({ startDate: '2024-09-01', endDate: '2024-09-05' });

  const {
    currentDates,
    timeSlots,
    moveNext,
    movePrev,
    handleTimeSlotClick,
    getSelectedTimeRanges,
  } = useSchedule(dates.startDate, dates.endDate, data);

  const updatedSchedule = getSelectedTimeRanges();
  setValue(updatedSchedule);

  return (
    <>
      <FormLayout
        header={
          <Header
            left={<IconButton iconName="back" onClick={onPrev} />}
            middle={<Body2>일정 수정</Body2>}
          />
        }
        title=""
        content={
          <FlexBox
            flexDir="column"
            width="100%"
            height="calc(100vh - 200px)"
            alignItems="start"
            padding="0 0 60px 0"
          >
            <ScheduleInput
              startDate={dates.startDate}
              endDate={dates.endDate}
              currentDates={currentDates}
              timeSlots={timeSlots}
              moveNext={moveNext}
              movePrev={movePrev}
              onTimeSlotClick={handleTimeSlotClick}
            />
          </FlexBox>
        }
      />
      <FixedBottomButton onClick={onNext} disabled={updatedSchedule.length == 0}>
        확인
      </FixedBottomButton>
    </>
  );
};
