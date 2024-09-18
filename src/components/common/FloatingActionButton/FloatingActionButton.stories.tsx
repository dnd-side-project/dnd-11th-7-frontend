/* eslint-disable no-restricted-exports */
import type { Meta, StoryObj } from '@storybook/react';

import { FloatingActionButton } from '.';
import { AppLayout } from '../AppLayout';

const meta = {
  title: 'components/common/FloatingActionButton',
  component: FloatingActionButton,
  parameters: { layout: 'fullscreen' },
  tags: ['autodocs'],
} satisfies Meta<typeof FloatingActionButton>;

export default meta;
type Story = StoryObj<typeof FloatingActionButton>;

export const Basic: Story = {
  render: () => (
    <AppLayout>
      <FloatingActionButton />
    </AppLayout>
  ),
};
