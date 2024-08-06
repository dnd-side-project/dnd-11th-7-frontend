/* eslint-disable no-restricted-exports */
import type { Meta, StoryObj } from '@storybook/react';

import { Button } from '.';
import { FlexBox } from '../FlexBox';

const meta = {
  title: 'components/common/Button',
  component: Button,
  tags: ['autodocs'],
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof Button>;

export const Basic: Story = {
  args: {
    width: 'full',
    disabled: false,
  },
  argTypes: {
    width: {
      control: { type: 'radio' },
      options: ['full'], // 현재는 fit이 필요없어서 full만 추가
    },
    disabled: {
      control: { type: 'boolean' },
    },
  },
  render: (args) => (
    <FlexBox flexDir="column" gap={8} alignItem="center">
      <Button {...args}>버튼</Button>
      <Button {...args} disabled>
        버튼
      </Button>
    </FlexBox>
  ),
};
