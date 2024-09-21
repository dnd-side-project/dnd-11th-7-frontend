import { css } from '@emotion/react';

import { IconName } from '@/assets/icons';
import { Button } from '@/components/common/Button';
import { Card } from '@/components/common/Card';
import { Chip } from '@/components/common/Chip';
import { FlexBox } from '@/components/common/FlexBox';
import { Member } from '@/components/common/Member';
import { ScheduleLayout } from '@/components/common/ScheduleLayout';
import { Body2, Body3, Head3 } from '@/components/common/Typography';
import { formatDateTime } from '@/utils/formatDateTime';
import { isPastDate } from '@/utils/isPastDate';

export const MeetingDetail = () => {
  // TODO: 더미데이터 입니다. API 연결시 삭제할 예정입니다.
  const meetingData = {
    meetingId: 2,
    categoryNames: ['학교', '팀플'],
    meetingName: '세븐일레븐짱',
    meetingStartDate: '2024-08-27',
    meetingEndDate: '2024-08-27',
    dueDateTime: '2024-08-26T23:59:59',
  };
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const scheduleData: string | any[] = [
    {
      memberNames: ['몰라', '졸려', '배고파'],
      startTime: '2024-08-21T17:00:00',
      endTime: '2024-08-21T18:00:00',
    },
  ];
  const memberData = {
    anonymousStatus: false,
    participantInfoList: [
      {
        nickname: '정승조',
        votedStatus: true,
        leaderStatus: true,
      },
      {
        nickname: '정승조',
        votedStatus: true,
        leaderStatus: false,
      },
    ],
  };
  return (
    <ScheduleLayout
      categories={meetingData.categoryNames}
      meetingName={meetingData.meetingName}
      meetingStartDate={meetingData.meetingStartDate.replace('-', '.')}
      meetingEndDate={meetingData.meetingEndDate.replace('-', '.')}
      dueDateTime={
        scheduleData.length === 0
          ? '일정을 입력해주세요.'
          : isPastDate(meetingData.dueDateTime)
            ? '째깍! 완벽한 시간이 도착했습니다!'
            : '일정을 입력중이에요.'
      }
    >
      <FlexBox width="100%" padding="30px 20px 10px 20px">
        <Card emojiPosition="top-right">
          <FlexBox alignItems="normal" gap={6}>
            {scheduleData.length === 0 ? (
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
                <Head3 color="purple">{formatDateTime(scheduleData[0].startTime)}</Head3>
              </>
            )}
          </FlexBox>
          <FlexBox flexDir="row" gap={10} padding="20px 0 0 0">
            <Button variant="primary" height="medium">
              일정 입력하기
            </Button>
            <Button variant={scheduleData.length === 0 ? 'tertiary' : 'primary'} height="medium">
              전체보기
            </Button>
          </FlexBox>
        </Card>
      </FlexBox>
      <FlexBox width="100%" padding="0 20px">
        <Card>
          <FlexBox justifyContent="flex-start" alignItems="start" gap={10}>
            <Chip variant="primaryWeak" shape="rectangle">
              {memberData.anonymousStatus ? '실명' : '익명'}
            </Chip>
            <FlexBox flexDir="row" flexWrap="wrap" justifyContent="flex-start" gap={10}>
              {memberData.participantInfoList.map((member, index) => (
                <Member
                  key={index}
                  isSubmitted={member.votedStatus}
                  isLeader={member.leaderStatus}
                  iconName={`jjakkak${index + 1}` as IconName}
                >
                  {member.nickname}
                </Member>
              ))}
            </FlexBox>
          </FlexBox>
        </Card>
      </FlexBox>
      <FlexBox padding="14px">
        <Body3 regularWeight color="GY4">
          일정 수정하기
        </Body3>
      </FlexBox>
    </ScheduleLayout>
  );
};
