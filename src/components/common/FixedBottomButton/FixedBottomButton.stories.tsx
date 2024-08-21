/* eslint-disable no-restricted-exports */
import { css } from '@emotion/react';
import type { Meta, StoryObj } from '@storybook/react';

import { AppLayout } from '@/components/common/AppLayout';
import { Button } from '@/components/common/Button';
import { FlexBox } from '@/components/common/FlexBox';

import { FixedBottomButton } from '.';
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
    <FlexBox
      flexDir="column"
      alignItems="center"
      gap={10}
      css={css(`width: 393px; margin: 0 20px;`)}
    >
      <FixedBottomButton>다음</FixedBottomButton>
      <FixedBottomButton disabled>다음</FixedBottomButton>
      <FixedBottomButton
        left={
          <Button variant="tertiary" height="large">
            돌아가기
          </Button>
        }
        right={
          <Button variant="primary" height="large">
            일정 생성하기
          </Button>
        }
      />
    </FlexBox>
  ),
};
