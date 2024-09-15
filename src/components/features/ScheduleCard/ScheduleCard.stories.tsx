/* eslint-disable no-restricted-exports */
import type { Meta, StoryObj } from '@storybook/react';

import { ScheduleCard } from '.';
import { AppLayout } from '../../common/AppLayout/index';
import { Card } from '../../common/Card/index';
import { FlexBox } from '../../common/FlexBox/index';

const meta = {
  title: 'components/features/ScheduleCard',
  component: ScheduleCard,
  tags: ['autodocs'],
} satisfies Meta<typeof ScheduleCard>;

export default meta;
type Story = StoryObj<typeof ScheduleCard>;

export const Basic: Story = {
  args: {
    variant: 'default',
    attendeeCount: '투표 인원 수',
    dateTime: '2024.08.03(토) 12:00',
    attendees: ['지현', '세빈', '승조', '태웅', '경욱', '채영', '째깍이1', '째깍이2'],
  },
  argTypes: {
    variant: {
      control: { type: 'inline-radio' },
      options: ['default', 'purple'],
    },
    attendees: {
      control: { type: 'object' },
    },
  },
  render: (args) => (
    <AppLayout>
      <FlexBox
        flexDir="column"
        justifyContent="center"
        alignItems="center"
        height="100vh"
        padding={20}
      >
        <Card>
          <ScheduleCard {...args} />
        </Card>
      </FlexBox>
    </AppLayout>
  ),
};
