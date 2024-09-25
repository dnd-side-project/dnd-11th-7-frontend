import { useSuspenseQuery } from '@tanstack/react-query';
import { Navigate, useNavigate, useParams } from 'react-router-dom';

import { queries } from '@/apis';
import { FixedBottomButton } from '@/components/common/FixedBottomButton';
import { FlexBox } from '@/components/common/FlexBox';
import { FormLayout } from '@/components/common/FormLayout';
import { Header } from '@/components/common/Header';
import { IconButton } from '@/components/common/IconButton';
import { ScheduleInput } from '@/components/common/ScheduleInput';
import { Body2 } from '@/components/common/Typography';
import { useSchedule } from '@/hooks/useSchedule';

export const TimeCollection = () => {
  const { uuid } = useParams();
  const navigate = useNavigate();

  const { data: meetingData } = useSuspenseQuery(queries.meeting.info(uuid as string));
  const { data: scheduleData } = useSuspenseQuery(queries.meeting.times(uuid as string));

  const { currentDates, timeSlots, moveNext, movePrev } = useSchedule(
    meetingData.meetingStartDate,
    meetingData.meetingEndDate
  );

  if (uuid === undefined) {
    return <Navigate to="/" />;
  }

  return (
    <>
      <FormLayout
        header={
          <Header
            left={<IconButton iconName="back" onClick={() => navigate(`/${uuid}/schedules`)} />}
            middle={<Body2>일정 확인</Body2>}
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
              startDate={meetingData.meetingStartDate}
              endDate={meetingData.meetingEndDate}
              currentDates={currentDates}
              timeSlots={timeSlots}
              moveNext={moveNext}
              movePrev={movePrev}
              onTimeSlotClick={() => {}}
              totalPeopleNum={scheduleData.numberOfPeople}
              meetingTimeList={scheduleData.meetingTimeList}
            />
          </FlexBox>
        }
      />
      <FixedBottomButton onClick={() => navigate(`/${uuid}`)}>확인</FixedBottomButton>
    </>
  );
};
