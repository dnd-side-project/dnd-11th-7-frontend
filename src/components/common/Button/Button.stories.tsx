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
  render: () => (
    <FlexBox flexDir="row" gap={10}>
      <FlexBox flexDir="column" gap={8} alignItem="center">
        <Button variant="primary" padding="17px 159px">
          다음
        </Button>
        <Button variant="primary" padding="17px 159px" disabled>
          다음
        </Button>
      </FlexBox>
      <FlexBox flexDir="column" gap={8} alignItem="center">
        <Button variant="primary" padding="17px 30px">
          일정 생성하기
        </Button>
        <Button variant="primary" padding="17px 30px" disabled>
          일정 생성하기
        </Button>
      </FlexBox>
      <FlexBox flexDir="column" gap={8} alignItem="center">
        <Button variant="primary" padding="17px 49.5px">
          돌아가기
        </Button>
        <Button variant="primary" padding="17px 49.5px" disabled>
          돌아가기
        </Button>
      </FlexBox>
    </FlexBox>
  ),
};
