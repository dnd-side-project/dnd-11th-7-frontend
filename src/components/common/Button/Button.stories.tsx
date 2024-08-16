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
      <FlexBox flexDir="row" gap={8} alignItems="center" width="70%">
        <FlexBox
          flexDir="column"
          gap={8}
          justifyContent="space-between"
          alignItems="center"
          width="80%"
        >
          <Button variant="CTN">다음</Button>
          <Button variant="CTN" disabled>
            다음
          </Button>
        </FlexBox>
        <FlexBox
          flexDir="column"
          gap={8}
          justifyContent="space-between"
          alignItems="center"
          width="60%"
        >
          <Button variant="CTN">일정 생성하기</Button>
          <Button variant="CTN" disabled>
            일정 생성하기
          </Button>
        </FlexBox>
        <FlexBox
          flexDir="column"
          gap={8}
          justifyContent="space-between"
          alignItems="center"
          width="60%"
        >
          <Button variant="grey" fontSize="large">
            돌아가기
          </Button>
          <Button variant="grey" fontSize="large" disabled>
            돌아가기
          </Button>
        </FlexBox>
      </FlexBox>
      <FlexBox
        flexDir="row"
        gap={8}
        justifyContent="flex-start"
        alignItems="center"
        margin="10px 0 0 0"
      >
        <FlexBox flexDir="column" gap={8} alignItems="center" width="70%">
          <Button variant="grey" height={50} fontSize="medium">
            비회원으로 시작하기
          </Button>
          <Button variant="grey" height={50} fontSize="medium" disabled>
            비회원으로 시작하기
          </Button>
        </FlexBox>
      </FlexBox>
      <FlexBox flexDir="row" gap={8} alignItems="center" width="70%" margin="10px 0 0 0">
        <FlexBox flexDir="column" gap={8} alignItems="center" width="80%">
          <Button variant="box" height={55} fontSize="medium">
            전체보기
          </Button>
          <Button variant="box" height={55} fontSize="medium" disabled>
            전체보기
          </Button>
        </FlexBox>
        <FlexBox flexDir="column" gap={8} alignItems="center" width="80%">
          <Button variant="CTN" height={55} fontSize="medium">
            전체보기
          </Button>
          <Button variant="CTN" height={55} fontSize="medium" disabled>
            전체보기
          </Button>
        </FlexBox>
      </FlexBox>
    </>
  ),
};

export const CTN: Story = {
  render: () => (
    <FlexBox flexDir="row" gap={8} alignItems="center" width="60%">
      <FlexBox flexDir="column" gap={8} alignItems="center" width="60%">
        <Button variant="CTN">다음</Button>
        <Button variant="CTN" disabled>
          다음
        </Button>
      </FlexBox>
      <FlexBox flexDir="column" gap={8} alignItems="center" width="40%">
        <Button variant="CTN">일정 생성하기</Button>
        <Button variant="CTN" disabled>
          일정 생성하기
        </Button>
      </FlexBox>
    </FlexBox>
  ),
};

export const Grey: Story = {
  render: () => (
    <FlexBox flexDir="row" gap={8} justifyContent="flex-start" alignItems="center">
      <FlexBox flexDir="column" gap={8} alignItems="center" width="50%">
        <Button variant="grey" height={50} fontSize="medium">
          비회원으로 시작하기
        </Button>
        <Button variant="grey" height={50} fontSize="medium" disabled>
          비회원으로 시작하기
        </Button>
      </FlexBox>
      <FlexBox
        flexDir="column"
        gap={8}
        justifyContent="space-between"
        alignItems="center"
        width="20%"
      >
        <Button variant="grey" fontSize="large">
          돌아가기
        </Button>
        <Button variant="grey" fontSize="large" disabled>
          돌아가기
        </Button>
      </FlexBox>
    </FlexBox>
  ),
};

export const Box: Story = {
  render: () => (
    <FlexBox flexDir="row" gap={8} alignItems="center" width="70%">
      <FlexBox flexDir="column" gap={8} alignItems="center" width="80%">
        <Button variant="box" height={55} fontSize="medium">
          전체보기
        </Button>
        <Button variant="box" height={55} fontSize="medium" disabled>
          전체보기
        </Button>
      </FlexBox>
      <FlexBox flexDir="column" gap={8} alignItems="center" width="80%">
        <Button variant="CTN" height={55} fontSize="medium">
          전체보기
        </Button>
        <Button variant="CTN" height={55} fontSize="medium" disabled>
          전체보기
        </Button>
      </FlexBox>
    </FlexBox>
  ),
};
