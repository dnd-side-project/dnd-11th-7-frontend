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
    <>
      <FlexBox flexDir="row" gap={8} alignItems="center" width="60%">
        <FlexBox
          flexDir="column"
          gap={8}
          justifyContent="space-between"
          alignItems="center"
          width="70%"
        >
          <Button variant="big">다음</Button>
          <Button variant="big" disabled>
            다음
          </Button>
        </FlexBox>
        <FlexBox
          flexDir="column"
          gap={8}
          justifyContent="space-between"
          alignItems="center"
          width="30%"
        >
          <Button variant="grey">돌아가기</Button>
          <Button variant="grey" disabled>
            돌아가기
          </Button>
        </FlexBox>
      </FlexBox>
      <FlexBox flexDir="column" gap={8} alignItems="center" width="60%" margin="10px 0 0 0">
        <Button variant="p2" height={55}>
          전체보기
        </Button>
        <Button variant="p2" height={55} disabled>
          전체보기
        </Button>
      </FlexBox>
      <FlexBox flexDir="row" gap={8} alignItems="center" width="60%" margin="10px 0 0 0">
        <FlexBox flexDir="column" gap={8} alignItems="center" width="100%">
          <Button variant="grey" height={50}>
            비회원으로 시작하기
          </Button>
          <Button variant="grey" height={50} disabled>
            비회원으로 시작하기
          </Button>
        </FlexBox>
      </FlexBox>
    </>
  ),
};

export const Big: Story = {
  render: () => (
    <FlexBox flexDir="column" gap={8} alignItems="center" width="60%">
      <Button variant="big">다음</Button>
      <Button variant="big" disabled>
        다음
      </Button>
    </FlexBox>
  ),
};

export const Grey: Story = {
  render: () => (
    <FlexBox flexDir="column" gap={8} alignItems="center" width="60%">
      <Button variant="grey" height={55}>
        돌아가기
      </Button>
      <Button variant="grey" height={55} disabled>
        돌아가기
      </Button>
    </FlexBox>
  ),
};

export const P2: Story = {
  render: () => (
    <FlexBox flexDir="column" gap={8} alignItems="center" width="60%">
      <Button variant="p2" height={50}>
        전체보기
      </Button>
      <Button variant="p2" height={50} disabled>
        전체보기
      </Button>
    </FlexBox>
  ),
};
