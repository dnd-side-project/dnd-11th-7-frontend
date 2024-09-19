/* eslint-disable no-restricted-exports */
import type { Meta, StoryObj } from '@storybook/react';

import { IconName } from '@/assets/icons';

import { ScheduleLayout } from '.';
import { AppLayout } from '../AppLayout';
import { Card } from '../Card';
import { Chip } from '../Chip';
import { FlexBox } from '../FlexBox';
import { Member } from '../Member';

const meta = {
  title: 'components/common/ScheduleLayout',
  component: ScheduleLayout,
  tags: ['autodocs'],
} satisfies Meta<typeof ScheduleLayout>;

export default meta;
type Story = StoryObj<typeof ScheduleLayout>;

const memberVariations: Array<{
  isSubmitted: boolean;
  isChecked?: boolean;
  isLeader?: boolean;
  emoji: IconName;
  name: string;
}> = [
  { isSubmitted: true, isLeader: true, emoji: 'jjakkak1', name: '리더' },
  { isSubmitted: true, emoji: 'jjakkak2', name: '승조' },
  { isSubmitted: true, emoji: 'jjakkak2', name: '승조' },
];
export const Basic: Story = {
  render: () => (
    <AppLayout>
      <ScheduleLayout
        categories={['스터디', '친구']}
        meetingName="DND 7조 세븐일레븐"
        meetingStartDate="2024-08-01"
        meetingEndDate="2024-08-13"
        dueDateTime="째깍! 완벽한 시간이 도착했습니다!"
      >
        <FlexBox width="100%" padding="30px 20px 10px 20px">
          <Card emojiPosition="top-right">DND 7조 째깍</Card>
        </FlexBox>
        <FlexBox width="100%" padding="0 20px">
          <Card>
            <FlexBox justifyContent="flex-start" alignItems="start" gap={10}>
              {/* TODO : 추후 맞는 variant 지정 */}
              <Chip shape="rectangle">실명</Chip>
              <FlexBox flexDir="row" flexWrap="wrap" justifyContent="flex-start" gap={10}>
                {memberVariations.map((member, index) => (
                  <Member
                    key={index}
                    isSubmitted={member.isSubmitted}
                    isChecked={member.isChecked}
                    isLeader={member.isLeader}
                    iconName={member.emoji}
                  >
                    {member.name}
                  </Member>
                ))}
              </FlexBox>
            </FlexBox>
          </Card>
        </FlexBox>
      </ScheduleLayout>
    </AppLayout>
  ),
};
