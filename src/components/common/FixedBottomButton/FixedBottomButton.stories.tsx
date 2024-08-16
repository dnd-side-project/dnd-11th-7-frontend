/* eslint-disable no-restricted-exports */
import type { Meta, StoryObj } from '@storybook/react';

import { FixedBottomButton } from '.';
import { AppLayout } from '../AppLayout';
import { Button } from '../Button';

const meta = {
  title: 'components/common/FixedBottomButton',
  component: FixedBottomButton,
  tags: ['autodocs'],
} satisfies Meta<typeof FixedBottomButton>;

export default meta;
type Story = StoryObj<typeof FixedBottomButton>;

export const Basic: Story = {
  args: { children: '다음', disabled: false },
  argTypes: { children: { control: 'text' }, disabled: { control: 'boolean' } },
  render: (args) => (
    <AppLayout>
      <FixedBottomButton disabled={args.disabled}>{args.children}</FixedBottomButton>
    </AppLayout>
  ),
};

export const Dual: Story = {
  render: () => (
    <AppLayout>
      <FixedBottomButton
        left={<Button disabled>돌아가기</Button>}
        right={<Button>일정 생성하기</Button>}
      />
    </AppLayout>
  ),
};
