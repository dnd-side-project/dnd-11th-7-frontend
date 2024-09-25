import { css } from '@emotion/react';
import { useSuspenseQuery } from '@tanstack/react-query';

import { queries } from '@/apis';
import { Button } from '@/components/common/Button';
import { Card } from '@/components/common/Card';
import { FlexBox } from '@/components/common/FlexBox';
import { Body2, Body3, Head3 } from '@/components/common/Typography';
import { formatDateTime } from '@/utils/formatDateTime';

import { UuidProps, NavigateProps } from './MeetingDetail.type';
export type MemberScheduleProps = UuidProps & NavigateProps;

export const MemberScheduleCard = ({ uuid, onNavigate }: MemberScheduleProps) => {
  const { data: scheduleTimeData } = useSuspenseQuery(queries.meeting.times(uuid));

  return (
    <FlexBox width="100%" padding="30px 20px 10px 20px">
      <Card emojiPosition="top-right">
        <FlexBox alignItems="normal" gap={6}>
          {scheduleTimeData.meetingTimeList.length === 0 ? (
            <Body2
              css={css`
                text-align: center;
              `}
            >{`아직 일정을 입력한 사람이 없어요.\n일정을 입력해주세요!`}</Body2>
          ) : (
            <>
              <Body3 regularWeight color="GY3">
                가장 많은 선택을 받은 날짜는
              </Body3>
              <Head3 color="purple">
                {formatDateTime(scheduleTimeData.meetingTimeList[0].startTime)}
              </Head3>
            </>
          )}
        </FlexBox>
        <FlexBox flexDir="row" gap={10} padding="20px 0 0 0">
          <Button variant="primary" height="medium" onClick={() => onNavigate(`/${uuid}/new`)}>
            일정 입력하기
          </Button>
          <Button
            variant={scheduleTimeData.meetingTimeList.length === 0 ? 'tertiary' : 'primary'}
            height="medium"
            disabled={scheduleTimeData.meetingTimeList.length === 0}
            onClick={() => {
              if (scheduleTimeData.meetingTimeList.length !== 0) {
                onNavigate(`/${uuid}/schedules`);
              }
            }}
          >
            전체보기
          </Button>
        </FlexBox>
      </Card>
    </FlexBox>
  );
};
