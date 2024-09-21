import { useState } from 'react';
import { css } from '@emotion/react';

import { Border } from '@/components/common/Border';
import { Card } from '@/components/common/Card';
import { FlexBox } from '@/components/common/FlexBox';
import { FormLayout } from '@/components/common/FormLayout';
import { Header } from '@/components/common/Header';
import { IconButton } from '@/components/common/IconButton';
import { SegmentedControl } from '@/components/common/SegmentedControl';
import { Body2 } from '@/components/common/Typography';
import { ScheduleCard } from '@/components/features/ScheduleCard';
import { colors } from '@/styles/global';

export const TotalSchedule = () => {
  const [selectedValue, setSelectedValue] = useState('사람 많은 순');

  return (
    <>
      <FormLayout
        header={
          <Header
            left={<IconButton iconName="back" />}
            middle={<Body2>전체보기</Body2>}
            right={<IconButton iconName="user" />}
          />
        }
        // TODO: 추후 title 제거
        title=""
        content={
          <Card
            emojiPosition="top-left"
            css={css`
              margin-top: 30px;
              max-height: calc(100vh - 250px);
            `}
          >
            <FlexBox
              width="100%"
              height="100%"
              justifyContent="flex-start"
              alignItems="normal"
              gap={5}
              css={css`
                overflow-y: scroll;
              `}
            >
              <FlexBox
                alignItems="normal"
                padding="0 0 10px 0"
                gap={10}
                css={css(`position: sticky; top: 0; z-index: 50; background-color: ${colors.WH};`)}
              >
                {/* TODO: 완벽한 시간 이전 워딩 추가 필요 */}
                <Body2 color="purple">째깍! 완벽한 시간이 도착했습니다!</Body2>
                <SegmentedControl
                  variant="contained"
                  selectedValue={selectedValue}
                  onChange={setSelectedValue}
                >
                  <SegmentedControl.Tab label="사람 많은 순" value="사람 많은 순" />
                  <SegmentedControl.Tab label="빠른 시간 순" value="빠른 시간 순" />
                </SegmentedControl>
                <Border borderStyle="dashed" color="GY5" />
              </FlexBox>
              <FlexBox justifyContent="flex-start" alignItems="flex-start" gap={10}>
                {/* TODO : 추후 API 작업 진행 */}
                <ScheduleCard
                  variant="purple"
                  attendeeCount="6명중 3명"
                  dateTime="2024.08.03(토) 13:00"
                  attendees={['세빈']}
                />
              </FlexBox>
            </FlexBox>
          </Card>
        }
      />
    </>
  );
};
