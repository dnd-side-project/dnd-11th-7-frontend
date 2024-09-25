import { useEffect, useState } from 'react';
import { useSuspenseQuery } from '@tanstack/react-query';

import { queries } from '@/apis';
import { FixedBottomButton } from '@/components/common/FixedBottomButton';
import { FlexBox } from '@/components/common/FlexBox';
import { FormLayout } from '@/components/common/FormLayout';
import { Header } from '@/components/common/Header';
import { IconButton } from '@/components/common/IconButton';
import { Body2 } from '@/components/common/Typography';
import { Schedule } from '@/types/schedule';

import { ScheduleInputFormProps } from './types';

import { useSchedule } from '../../../hooks/useSchedule';
import { ScheduleInput } from '../../common/ScheduleInput/index';

export const ScheduleInputForm = ({ uuid, setValue, onNext, onPrev }: ScheduleInputFormProps) => {
  const { data: meetingData } = useSuspenseQuery(queries.meeting.info(uuid));
  const [dates] = useState({
    startDate: meetingData.meetingStartDate,
    endDate: meetingData.meetingEndDate,
  });

  const {
    currentDates,
    timeSlots,
    moveNext,
    movePrev,
    handleTimeSlotClick,
    getSelectedTimeRanges,
  } = useSchedule(dates.startDate, dates.endDate);

  useEffect(() => {
    const newSchedule = getSelectedTimeRanges();
    setValue(newSchedule);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [timeSlots]);

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

      <FixedBottomButton onClick={onNext} disabled={getSelectedTimeRanges().length === 0}>
        확인
      </FixedBottomButton>
    </>
  );
};
