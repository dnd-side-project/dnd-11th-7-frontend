import { Suspense, useState } from 'react';
import { css } from '@emotion/react';
import { useSuspenseQuery } from '@tanstack/react-query';
import { useParams, useNavigate } from 'react-router-dom';

import { queries } from '@/apis';
import { Border } from '@/components/common/Border';
import { Card } from '@/components/common/Card';
import { FixedBottomButton } from '@/components/common/FixedBottomButton';
import { FlexBox } from '@/components/common/FlexBox';
import { FormLayout } from '@/components/common/FormLayout';
import { Header } from '@/components/common/Header';
import { IconButton } from '@/components/common/IconButton';
import { SegmentedControl } from '@/components/common/SegmentedControl';
import { Body2 } from '@/components/common/Typography';
import { TotalScheduleList } from '@/components/features/TotalScheduleList/TotalScheduleList';
import { colors } from '@/styles/global';
import { isPastDate } from '@/utils/isPastDate';

export const TotalSchedule = () => {
  const { uuid } = useParams();
  const navigate = useNavigate();

  const [sortOption, setSortOption] = useState<'count' | 'latest'>('count');

  const { data: meetingData } = useSuspenseQuery(queries.meeting.info(uuid as string));

  return (
    <>
      <FormLayout
        header={
          <Header
            left={<IconButton iconName="back" onClick={() => navigate(`/${uuid}`)} />}
            middle={<Body2>전체보기</Body2>}
            // TODO : MY페이지 이동
            right={<IconButton iconName="user" />}
          />
        }
        // TODO: 추후 title 제거
        title=""
        content={
          <Card
            emojiPosition="top-left"
            css={css`
              margin-top: 15px;
            `}
          >
            <FlexBox
              width="100%"
              height="100%"
              justifyContent="flex-start"
              alignItems="normal"
              gap={5}
            >
              <FlexBox
                alignItems="normal"
                padding="0 0 10px 0"
                gap={10}
                css={css(`position: sticky; top: 0; z-index: 50; background-color: ${colors.WH};`)}
              >
                <Body2 color="purple">
                  {isPastDate(meetingData.dueDateTime)
                    ? '째깍! 완벽한 시간이 도착했습니다!'
                    : '째깍! 딱 맞는 시간을 찾기 위해 일정을 수집하고 있어요.'}
                </Body2>
                <SegmentedControl
                  variant="contained"
                  selectedValue={sortOption}
                  onChange={setSortOption}
                >
                  <SegmentedControl.Tab label="사람 많은 순" value="count" />
                  <SegmentedControl.Tab label="빠른 시간 순" value="latest" />
                </SegmentedControl>
                <Border borderStyle="dashed" color="GY5" />
              </FlexBox>

              <Suspense>
                <TotalScheduleList uuid={uuid as string} sortOption={sortOption} />
              </Suspense>
            </FlexBox>
          </Card>
        }
      />
      <FixedBottomButton onClick={() => navigate(`/${uuid}/schedules/overview`)}>
        일정 한눈에 보러가기
      </FixedBottomButton>
    </>
  );
};
