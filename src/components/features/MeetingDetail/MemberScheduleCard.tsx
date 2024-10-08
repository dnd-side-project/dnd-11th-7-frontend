import { useEffect, useState } from 'react';
import { css } from '@emotion/react';
import { useQuery, useSuspenseQuery } from '@tanstack/react-query';

import { queries } from '@/apis';
import { Button } from '@/components/common/Button';
import { Card } from '@/components/common/Card';
import { FlexBox } from '@/components/common/FlexBox';
import { Body2, Body3, Head3 } from '@/components/common/Typography';
import { formatDateTime } from '@/utils/formatDateTime';

import { UuidProps, NavigateProps } from './MeetingDetail.type';
export type MemberScheduleProps = UuidProps & NavigateProps;

export const MemberScheduleCard = ({ uuid, onNavigate }: MemberScheduleProps) => {
  const accessToken = localStorage.getItem('accessToken');

  const { data: checkScheduleData, isLoading: isScheduleLoading } = useQuery({
    ...queries.meeting.checkSchedule(uuid as string),
    enabled: !!accessToken,
  });
  const { data: bestTime } = useSuspenseQuery(queries.meeting.bestTime(uuid));

  const renderButton = () => {
    // TODO : 버튼에 로딩뷰 추가되면 변경
    if (isScheduleLoading) {
      return (
        <Button variant="primary" height="medium" disabled>
          로딩 중..
        </Button>
      );
    }

    const buttonText = checkScheduleData ? '일정 수정하기' : '일정 입력하기';
    const navigatePath = checkScheduleData ? `/${uuid}/edit` : `/${uuid}/new`;

    return (
      <Button variant="primary" height="medium" onClick={() => onNavigate(navigatePath)}>
        {buttonText}
      </Button>
    );
  };

  return (
    <FlexBox width="100%" padding="30px 20px 10px 20px">
      <Card emojiPosition="top-right">
        <FlexBox alignItems="normal" gap={6}>
          {bestTime ? (
            <>
              <Body3 regularWeight color="GY3">
                가장 많은 선택을 받은 날짜는
              </Body3>
              <Head3 color="purple">{formatDateTime(bestTime)}</Head3>
            </>
          ) : (
            <Body2
              css={css`
                text-align: center;
              `}
            >{`아직 일정을 입력한 사람이 없어요.\n일정을 입력해주세요!`}</Body2>
          )}
        </FlexBox>
        <FlexBox flexDir="row" gap={10} padding="20px 0 0 0">
          {renderButton()}
          <Button
            variant={bestTime ? 'tertiary' : 'primary'}
            height="medium"
            disabled={!bestTime}
            onClick={() => {
              if (bestTime) {
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
