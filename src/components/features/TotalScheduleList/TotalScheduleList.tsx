import { css } from '@emotion/react';
import { useSuspenseQuery } from '@tanstack/react-query';

import { queries } from '@/apis';
import { FlexBox } from '@/components/common/FlexBox';
import { formatDateTime } from '@/utils/formatDateTime';

import { Props } from './TotalScheduleList.type';

import { ScheduleCard } from '../ScheduleCard';

export const TotalScheduleList = ({ uuid, segmentValue }: Props) => {
  const { data: scheduleData } = useSuspenseQuery(queries.meeting.times(uuid, segmentValue));
  return (
    <FlexBox
      width="100%"
      height="100%"
      justifyContent="flex-start"
      gap={10}
      css={css`
        overflow-y: scroll;
        max-height: 50vh;
      `}
    >
      <FlexBox width="100%" height="100%" gap={10}>
        {scheduleData.meetingTimeList.map(({ memberNames, ...items }, index) => (
          <ScheduleCard
            key={index}
            variant={index === 0 ? 'purple' : 'default'}
            attendeeCount={`${scheduleData.numberOfPeople}중에 ${memberNames.length}명`}
            dateTime={formatDateTime(items.startTime)}
            attendees={memberNames}
          />
        ))}
      </FlexBox>
    </FlexBox>
  );
};
