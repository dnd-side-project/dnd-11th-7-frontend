/* eslint-disable react-hooks/rules-of-hooks */
import { css } from '@emotion/react';
import { useSuspenseQuery } from '@tanstack/react-query';
import { useParams, useNavigate } from 'react-router-dom';

import { queries } from '@/apis';
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
  const { uuid } = useParams();
  const navigate = useNavigate();

  // TODO : 잘못된 uuid가 들어올 경우 ERROR페이지로 redirect
  if (uuid === undefined) {
    navigate('/');
    return;
  }

  const { data: meetingData } = useSuspenseQuery(queries.meeting.info(uuid as string));
  const { data: scheduleData } = useSuspenseQuery(queries.meeting.times(uuid as string));
  const { data: memberData } = useSuspenseQuery(queries.meeting.participants(uuid as string));

  return (
    <>
      <ScheduleLayout
        categories={meetingData.categoryNames}
        meetingName={meetingData.meetingName}
        meetingStartDate={meetingData.meetingStartDate.replace('-', '.')}
        meetingEndDate={meetingData.meetingEndDate.replace('-', '.')}
        dueDateTime={
          scheduleData.meetingTimeList.length === 0
            ? '일정을 입력해주세요.'
            : isPastDate(meetingData.dueDateTime)
              ? '째깍! 완벽한 시간이 도착했습니다!'
              : '째깍! 딱 맞는 시간을 찾기 위해\n일정을 수집하고 있어요.'
        }
      >
        <FlexBox width="100%" padding="30px 20px 10px 20px">
          <Card emojiPosition="top-right">
            <FlexBox alignItems="normal" gap={6}>
              {scheduleData.meetingTimeList.length === 0 ? (
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
                    {formatDateTime(scheduleData.meetingTimeList[0].startTime)}
                  </Head3>
                </>
              )}
            </FlexBox>
            <FlexBox flexDir="row" gap={10} padding="20px 0 0 0">
              <Button variant="primary" height="medium" onClick={() => navigate(`/${uuid}/new`)}>
                일정 입력하기
              </Button>
              <Button
                variant={scheduleData.meetingTimeList.length === 0 ? 'tertiary' : 'primary'}
                height="medium"
                disabled={scheduleData.meetingTimeList.length === 0}
                onClick={() => {
                  if (scheduleData.meetingTimeList.length !== 0) {
                    navigate(`/${uuid}/totalTime`);
                  }
                }}
              >
                전체보기
              </Button>
            </FlexBox>
          </Card>
        </FlexBox>
        <FlexBox width="100%" padding="0 20px">
          <Card>
            <FlexBox justifyContent="flex-start" alignItems="start" gap={10}>
              <Chip variant="primaryWeak" shape="rectangle">
                {memberData.isAnonymous ? '익명' : '실명'}
              </Chip>
              <FlexBox flexDir="row" flexWrap="wrap" justifyContent="flex-start" gap={10}>
                {memberData.participantInfoList.map((member, index) => (
                  <Member
                    key={index}
                    isSubmitted={member.isAssigned}
                    isLeader={member.isLeader}
                    iconName={`jjakkak${index + 1}` as IconName}
                  >
                    {memberData.isAnonymous ? `멤버${index + 1}` : member.nickname}
                  </Member>
                ))}
              </FlexBox>
            </FlexBox>
          </Card>
        </FlexBox>
        <FlexBox padding="14px">
          <Body3
            regularWeight
            color="GY4"
            onClick={() => navigate(`/${uuid}/edit`)}
            style={{ cursor: 'pointer' }}
          >
            일정 수정하기
          </Body3>
        </FlexBox>
      </ScheduleLayout>
    </>
  );
};
