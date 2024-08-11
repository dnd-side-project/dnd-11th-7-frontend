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
    disabled: false,
  },
  argTypes: {
    disabled: {
      control: { type: 'boolean' },
    },
  },
  render: (args) => (
    <FlexBox flexDir="column" gap={8} alignItems="center">
      <Button {...args}>버튼</Button>
      <Button {...args} disabled>
        버튼
      </Button>
    </FlexBox>
  ),
};
