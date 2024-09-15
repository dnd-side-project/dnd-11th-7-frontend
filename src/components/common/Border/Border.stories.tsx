/* eslint-disable no-restricted-exports */
import type { Meta, StoryObj } from '@storybook/react';

import { Border } from '.';

const meta = {
  title: 'components/common/Border',
  component: Border,
  tags: ['autodocs'],
} satisfies Meta<typeof Border>;

export default meta;
type Story = StoryObj<typeof Border>;

export const Basic: Story = {
  args: {
    width: '100%',
    height: 1,
    color: 'GY4',
    borderStyle: 'solid',
  },
  argTypes: {
    width: {
      control: {
        type: 'inline-radio',
        options: ['25%', '50%', '75%', '100%'],
      },
    },
    height: {
      control: {
        type: 'number',
      },
    },
    color: {
      control: {
        type: 'select',
        options: ['BK', 'GY4', 'GY8', 'GY9', 'RD', 'BL', 'WT'],
      },
    },
    borderStyle: {
      control: {
        type: 'inline-radio',
        options: ['solid', 'dashed', 'dotted'],
      },
    },
  },
  render: (args) => <Border {...args} />,
};
