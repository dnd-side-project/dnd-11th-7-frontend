import { useState } from 'react';

import { FixedBottomButton } from '@/components/common/FixedBottomButton';
import { FlexBox } from '@/components/common/FlexBox';
import { FormLayout } from '@/components/common/FormLayout';
import { Header } from '@/components/common/Header';
import { IconButton } from '@/components/common/IconButton';
import { Body2 } from '@/components/common/Typography';

import { ScheduleInputFormProps } from './types';

import { useSchedule } from '../../../hooks/useSchedule';
import { ScheduleInput } from '../../common/ScheduleInput/index';

export const ScheduleInputForm = ({ setValue, onNext, onPrev }: ScheduleInputFormProps) => {
  // TODO: API로 받은 시작일/마지막 날짜 입력
  const [dates] = useState({ startDate: '2024-09-01', endDate: '2024-09-05' });

  const {
    currentDates,
    timeSlots,
    moveNext,
    movePrev,
    handleTimeSlotClick,
    getSelectedTimeRanges,
  } = useSchedule(dates.startDate, dates.endDate);

  const updatedSchedule = getSelectedTimeRanges();

  setValue(updatedSchedule);

  return (
    <>
      <FormLayout
        header={
          <Header
            left={<IconButton iconName="back" onClick={onPrev} />}
            middle={<Body2>일정 입력</Body2>}
          />
        }
        // TODO : title 없는 경우 수정
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
