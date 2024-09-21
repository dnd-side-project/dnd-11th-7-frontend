/* eslint-disable no-restricted-exports */
import type { Meta, StoryObj } from '@storybook/react';

import { MeetingList } from '.';

const meta = {
  title: 'components/features/MeetingList',
  component: MeetingList,
  tags: ['autodocs'],
} satisfies Meta<typeof MeetingList>;

export default meta;
type Story = StoryObj<typeof MeetingList>;

export const Basic: Story = {
  render: () => <MeetingList data={dummyData} />,
};

export const Empty: Story = {
  render: () => <MeetingList data={[]} />,
};

const dummyData = [
  {
    categoryNames: ['학교'],
    meetingId: 3,
    meetingUuid: 'ee8c95fd',
    meetingName: 'DND 11기 7조 회의',
    meetingStartDate: '2024-09-30',
    meetingEndDate: '2024-09-31',
    dueDateTime: '2024-09-29T23:59:59',
    numberOfPeople: 6,
    isAnonymous: false,
    leaderName: '정승조',
  },
  {
    categoryNames: ['학교'],
    meetingId: 3,
    meetingUuid: 'ee8c95fd',
    meetingName: 'DND 11기 7조 회의',
    meetingStartDate: '2024-09-17',
    meetingEndDate: '2024-09-27',
    dueDateTime: '2024-09-16T23:59:59',
    numberOfPeople: 6,
    isAnonymous: false,
    leaderName: '정승조',
  },
];
