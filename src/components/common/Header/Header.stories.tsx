/* eslint-disable no-restricted-exports */
import { css } from '@emotion/react';
import type { Meta, StoryObj } from '@storybook/react';

import { FlexBox } from '@/components/common/FlexBox';
import { Icon } from '@/components/common/Icon';
import { IconButton } from '@/components/common/IconButton';

import { Header } from '.';
import { Progress } from '../Progress';

const meta = {
  title: 'components/common/Header',
  component: Header,
  tags: ['autodocs'],
  parameters: { layout: '', backgrounds: { default: 'light' } },
  decorators: [
    (Story) => (
      // TODO Layout 컴포넌트 생기면 대응하기
      <FlexBox>
        <FlexBox
          justifyContent="flex-start"
          css={css`
            width: 393px;
            height: 100vh;
            background-color: white;
          `}
          padding={0}
        >
          <Story />
        </FlexBox>
      </FlexBox>
    ),
  ],
} satisfies Meta<typeof Header>;

export default meta;
type Story = StoryObj<typeof Header>;

export const Basic: Story = {
  render: () => (
    <Header
      left={
        <Icon
          name="logo"
          // size={{ width: 131 }} // TODO Icon 컴포넌트 사이즈 사용성 개선한 버전
        />
      }
      right={<IconButton iconName="user" />}
    />
  ),
};

export const Left: Story = {
  render: () => <Header left={<IconButton iconName="back" />} />,
};

export const LeftRight: Story = {
  render: () => (
    <Header left={<IconButton iconName="back" />} right={<IconButton iconName="user" />} />
  ),
};

export const LeftMiddleRight: Story = {
  render: () => (
    <Header
      left={<IconButton iconName="back" />}
      middle={<Progress min={0} max={10} value={6} />}
      // right={<Chip variant="greyFilled">1/3</Chip>} // TODO 칩 디자인 반영 후 수정 greyFilled로 pr 올린 상태
    />
  ),
};
