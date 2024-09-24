/* eslint-disable no-restricted-exports */
import type { Meta, StoryObj } from '@storybook/react';

import { ScheduleLayout } from '.';
import { AppLayout } from '../AppLayout';
import { Card } from '../Card';
import { Chip } from '../Chip';
import { FlexBox } from '../FlexBox';
import { SpeechBubble } from '../SpeechBubble';
import { Body3, Head3 } from '../Typography';

const meta = {
  title: 'components/common/ScheduleLayout',
  component: ScheduleLayout,
  tags: ['autodocs'],
} satisfies Meta<typeof ScheduleLayout>;

export default meta;
type Story = StoryObj<typeof ScheduleLayout>;

const dummyData = {
  meetingId: 5,
  categoryNames: ['학교'],
  meetingName: '240916',
  meetingStartDate: '2024-09-17',
  meetingEndDate: '2024-09-27',
  dueDateTime: '2024-09-16T23:59:59',
};

export const Basic: Story = {
  render: () => (
    <AppLayout>
      <ScheduleLayout>
        <FlexBox width="100%" alignItems="normal" gap={2} padding="10px 20px 0px 20px">
          <Chip.Group type="slide">
            {dummyData.categoryNames.map((item: string, index: number) => (
              <Chip key={index} variant="primaryReverse">
                {item}
              </Chip>
            ))}
          </Chip.Group>
          <Head3 color="WH" style={{ padding: '10px 0 0 0' }}>
            {dummyData.meetingName}
          </Head3>
          <Body3 regularWeight color="WH">
            {dummyData.meetingStartDate} - {dummyData.meetingEndDate}
          </Body3>
          <FlexBox alignItems="normal" width="73%" margin="20px 0 5px 0">
            <SpeechBubble>{dummyData.dueDateTime}</SpeechBubble>
          </FlexBox>
        </FlexBox>
        <FlexBox width="100%" padding="30px 20px 10px 20px">
          <Card emojiPosition="top-right">DND 7조 째깍</Card>
        </FlexBox>
        <FlexBox width="100%" padding="0 20px">
          <Card>
            <FlexBox justifyContent="flex-start" alignItems="start" gap={10}>
              <Chip shape="rectangle">실명</Chip>
            </FlexBox>
          </Card>
        </FlexBox>
      </ScheduleLayout>
    </AppLayout>
  ),
};
