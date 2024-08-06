/* eslint-disable no-restricted-exports */
import type { Meta, StoryObj } from '@storybook/react';

import { Progress } from '.';

const meta = {
  title: 'components/common/Progress',
  component: Progress,
  tags: ['autodocs'],
} satisfies Meta<typeof Progress>;

export default meta;
type Story = StoryObj<typeof Progress>;

export const Basic: Story = {
  args: {
    min: 0,
    max: 8,
    value: 1,
  },
  argTypes: {
    min: {
      control: { type: 'number', min: 0, max: 10, step: 1 },
    },
    max: {
      control: { type: 'number', min: 0, max: 10, step: 1 },
    },
    value: {
      control: { type: 'number', min: 0, max: 10, step: 1 },
    },
  },
  render: (args) => <Progress {...args} />,
};
