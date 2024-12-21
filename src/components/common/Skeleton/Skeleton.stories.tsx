/* eslint-disable no-restricted-exports */
import type { Meta, StoryObj } from '@storybook/react';

import { Skeleton } from '.';
import { FlexBox } from '../FlexBox';

const meta = {
  title: 'components/common/Skeleton',
  component: Skeleton,
  tags: ['autodocs'],
} satisfies Meta<typeof Skeleton>;

export default meta;
type Story = StoryObj<typeof Skeleton>;

export const Basic: Story = {
  args: {
    layout: 'box',
    width: '100%',
    height: '100%',
  },
  argTypes: {
    layout: {
      control: {
        type: 'inline-radio',
      },
      options: ['text', 'box'],
    },
    width: {
      control: {
        type: 'text',
      },
    },
    height: {
      control: {
        type: 'text',
      },
    },
  },
  render: (args) => (
    <FlexBox justifyContent="space-between" height="10rem">
      <Skeleton {...args} />
    </FlexBox>
  ),
};
