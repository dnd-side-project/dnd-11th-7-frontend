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
    variant: 'primary',
    width: 'fit',
    disabled: false,
  },
  argTypes: {
    variant: {
      control: { type: 'radio' },
      options: ['primary', 'secondary'], // 예시 옵션, 실제 Button 컴포넌트에 맞게 조정
    },
    width: {
      control: { type: 'text' },
      options: ['fit', 'full'], // 예시 옵션, 실제 Button 컴포넌트에 맞게 조정
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
