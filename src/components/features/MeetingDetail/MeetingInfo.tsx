import { useSuspenseQuery } from '@tanstack/react-query';

import { queries } from '@/apis';
import { Chip } from '@/components/common/Chip';
import { FlexBox } from '@/components/common/FlexBox';
import { SpeechBubble } from '@/components/common/SpeechBubble';
import { isPastDate } from '@/utils/isPastDate';

import { UuidProps } from './MeetingDetail.type';

import { Body3, Head3 } from '../../common/Typography/index';
export const MeetingInfo = ({ uuid }: UuidProps) => {
  const { data: meetingData } = useSuspenseQuery(queries.meeting.info(uuid));
  return (
    <FlexBox width="100%" alignItems="normal" gap={2} padding="10px 20px 0px 20px">
      <Chip.Group type="slide">
        {meetingData.categoryNames.map((item: string, index: number) => (
          <Chip key={index} variant="primaryReverse">
            {item}
          </Chip>
        ))}
      </Chip.Group>
      <Head3 color="WH" style={{ padding: '10px 0 0 0' }}>
        {meetingData.meetingName}
      </Head3>
      <Body3 regularWeight color="WH">
        {meetingData.meetingStartDate} - {meetingData.meetingEndDate}
      </Body3>
      <FlexBox alignItems="normal" width="73%" margin="20px 0 5px 0">
        {/* TODO : 길이가 길어지는 경우 flex 조절 필요 */}
        <SpeechBubble>
          {isPastDate(meetingData.dueDateTime)
            ? '째깍! 완벽한 시간이 도착했습니다!'
            : '째깍! 딱 맞는 시간을 찾기 위해\n일정을 수집하고 있어요.'}
        </SpeechBubble>
      </FlexBox>
    </FlexBox>
  );
};
