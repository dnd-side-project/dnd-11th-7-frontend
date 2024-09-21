/* eslint-disable no-restricted-exports */
import type { Meta, StoryObj } from '@storybook/react';

import { AppLayout } from '@/components/common/AppLayout';

import { MeetingDetail } from '.';

const meta = {
  title: 'components/features/MeetingDetail',
  component: MeetingDetail,
  tags: ['autodocs'],
} satisfies Meta<typeof MeetingDetail>;

export default meta;
type Story = StoryObj<typeof MeetingDetail>;

export const Basic: Story = {
  render: () => (
    <AppLayout>
      <MeetingDetail />
    </AppLayout>
  ),
};
