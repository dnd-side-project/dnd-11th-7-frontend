/* eslint-disable no-restricted-exports */
import { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';

import { FlexBox } from '@/components/common/FlexBox';
import { Caption } from '@/components/common/Typography';

import { Chip } from '.';

const meta = {
  title: 'components/common/Chip',
  component: Chip,
  tags: ['autodocs'],
} satisfies Meta<typeof Chip>;

export default meta;
type Story = StoryObj<typeof Chip>;

export const Basic: Story = {
  args: {
    children: '예시',
    component: 'span',
    variant: 'filled',
  },
  argTypes: {
    children: {
      description: 'Chip에 표시할 텍스트',
      control: 'text',
    },
    component: {
      control: {
        type: 'inline-radio',
      },
      options: ['span', 'button'],
    },
    variant: {
      control: {
        type: 'inline-radio',
      },
      options: ['filled', 'greyFilled', 'dimmed'],
    },
  },
  render: (args) => <Chip {...args}>{args.children}</Chip>,
};

export const ChipDisplay: Story = {
  render: () => (
    <FlexBox gap={10} alignItem="flex-start">
      <Chip.Group>
        <Chip>조율중</Chip>
        <Chip>일정 확정</Chip>
      </Chip.Group>
      <Chip.Group>
        <Chip variant="greyFilled">1/5</Chip>
        <Chip variant="greyFilled">2/5</Chip>
        <Chip variant="greyFilled">3/5</Chip>
        <Chip variant="greyFilled">4/5</Chip>
        <Chip variant="greyFilled">5/5</Chip>
      </Chip.Group>
    </FlexBox>
  ),
};

const categories = ['회의', '스터디', '팀플', '기타'];
export const ChipButton: Story = {
  render: () => {
    const [selected, setSelected] = useState<string[]>([]);

    const handleToggle = (category: string) => {
      setSelected((prev) => {
        if (prev.includes(category)) {
          return prev.filter((item) => item !== category);
        }
        return [...prev, category];
      });
    };

    return (
      <>
        <Caption>카테고리를 선택해 주세요.</Caption>
        <Chip.Group>
          {categories.map((category) => (
            <Chip
              component="button"
              variant={selected.includes(category) ? 'filled' : 'dimmed'}
              onClick={() => handleToggle(category)}
            >
              {category}
            </Chip>
          ))}
        </Chip.Group>
      </>
    );
  },
};

export const ChipGroup: Story = {
  render: () => (
    <>
      <Caption>Case 1: 칩이 한 줄에 배치되는 경우</Caption>
      <Chip.Group>
        {Array(5)
          .fill(0)
          .map((_, index) => (
            <Chip>{`Chip ${index}`}</Chip>
          ))}
      </Chip.Group>

      <Caption>Case 2: 칩이 여러 줄에 걸쳐 배치되는 경우</Caption>
      <Chip.Group>
        {Array(20)
          .fill(0)
          .map((_, index) => (
            <Chip>{`Chip ${index}`}</Chip>
          ))}
      </Chip.Group>
    </>
  ),
};
