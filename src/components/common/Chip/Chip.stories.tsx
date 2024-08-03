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

export const ChipDisplay: Story = {
  render: () => (
    <FlexBox flexDir="row" gap={4} justifyContent="flex-start">
      <Chip>조율중</Chip>
      <Chip>일정 확정</Chip>
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
        <FlexBox flexDir="row" gap={4} justifyContent="flex-start">
          {categories.map((category) => (
            <Chip
              component="button"
              variant={selected.includes(category) ? 'filled' : 'dimmed'}
              onClick={() => handleToggle(category)}
            >
              {category}
            </Chip>
          ))}
        </FlexBox>
      </>
    );
  },
};
