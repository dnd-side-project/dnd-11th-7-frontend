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
    variant: 'primary',
    shape: 'rounded',
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
      options: ['primary', 'secondary', 'primaryReverse', 'dimmed', 'grey'],
    },
    shape: {
      control: {
        type: 'inline-radio',
      },
      options: ['rounded', 'rectangle'],
    },
  },
  render: (args) => <Chip {...args}>{args.children}</Chip>,
};

export const RoundedChipDisplay: Story = {
  render: () => (
    <FlexBox gap={10} alignItems="flex-start">
      <Chip.Group>
        <Chip>primary</Chip>
        <Chip>조율중</Chip>
        <Chip>일정 확정</Chip>
      </Chip.Group>
      <Chip.Group>
        <Chip variant="secondary">secondary</Chip>
        <Chip variant="secondary">승조</Chip>
        <Chip variant="secondary">태웅</Chip>
        <Chip variant="secondary">세빈</Chip>
        <Chip variant="secondary">지현</Chip>
        <Chip variant="secondary">채영</Chip>
        <Chip variant="secondary">경욱</Chip>
      </Chip.Group>
      <Chip.Group>
        <Chip variant="primaryReverse">primaryReverse</Chip>
        <Chip variant="primaryReverse">승조</Chip>
        <Chip variant="primaryReverse">태웅</Chip>
        <Chip variant="primaryReverse">세빈</Chip>
        <Chip variant="primaryReverse">지현</Chip>
        <Chip variant="primaryReverse">채영</Chip>
        <Chip variant="primaryReverse">경욱</Chip>
      </Chip.Group>
      <Chip.Group>
        <Chip variant="greyWeak">greyWeak</Chip>
        <Chip variant="greyWeak">승조</Chip>
        <Chip variant="greyWeak">태웅</Chip>
        <Chip variant="greyWeak">세빈</Chip>
        <Chip variant="greyWeak">지현</Chip>
        <Chip variant="greyWeak">채영</Chip>
        <Chip variant="greyWeak">경욱</Chip>
      </Chip.Group>
      <Chip.Group>
        <Chip variant="grey">grey</Chip>
        <Chip variant="grey">1/5</Chip>
        <Chip variant="grey">2/5</Chip>
        <Chip variant="grey">3/5</Chip>
        <Chip variant="grey">4/5</Chip>
        <Chip variant="grey">5/5</Chip>
      </Chip.Group>
      <Chip.Group>
        <Chip variant="dimmed">dimmed</Chip>
        <Chip variant="dimmed">주로</Chip>
        <Chip variant="dimmed">버튼에</Chip>
        <Chip variant="dimmed">쓰는</Chip>
        <Chip variant="dimmed">버라이언트</Chip>
      </Chip.Group>
    </FlexBox>
  ),
};

export const RectangleChipDisplay: Story = {
  render: () => (
    <FlexBox gap={10} alignItems="flex-start">
      <Chip.Group>
        <Chip shape="rectangle">primary</Chip>
        <Chip shape="rectangle">1순위</Chip>
        <Chip shape="rectangle">2순위</Chip>
        <Chip shape="rectangle">3순위</Chip>
      </Chip.Group>
      <Chip.Group>
        <Chip shape="rectangle" variant="secondary">
          secondary
        </Chip>
        <Chip shape="rectangle" variant="secondary">
          1순위
        </Chip>
        <Chip shape="rectangle" variant="secondary">
          2순위
        </Chip>
        <Chip shape="rectangle" variant="secondary">
          3순위
        </Chip>
      </Chip.Group>
      <Chip.Group>
        <Chip shape="rectangle" variant="primaryReverse">
          primaryReverse
        </Chip>
        <Chip shape="rectangle" variant="primaryReverse">
          1순위
        </Chip>
        <Chip shape="rectangle" variant="primaryReverse">
          2순위
        </Chip>
        <Chip shape="rectangle" variant="primaryReverse">
          3순위
        </Chip>
      </Chip.Group>
      <Chip.Group>
        <Chip shape="rectangle" variant="greyWeak">
          greyWeak
        </Chip>
        <Chip shape="rectangle" variant="greyWeak">
          1순위
        </Chip>
        <Chip shape="rectangle" variant="greyWeak">
          2순위
        </Chip>
        <Chip shape="rectangle" variant="greyWeak">
          3순위
        </Chip>
      </Chip.Group>
      <Chip.Group>
        <Chip shape="rectangle" variant="grey">
          grey
        </Chip>
        <Chip shape="rectangle" variant="grey">
          1순위
        </Chip>
        <Chip shape="rectangle" variant="grey">
          2순위
        </Chip>
        <Chip shape="rectangle" variant="grey">
          3순위
        </Chip>
      </Chip.Group>
      <Chip.Group>
        <Chip shape="rectangle" variant="dimmed">
          dimmed
        </Chip>
        <Chip shape="rectangle" variant="dimmed">
          1순위
        </Chip>
        <Chip shape="rectangle" variant="dimmed">
          2순위
        </Chip>
        <Chip shape="rectangle" variant="dimmed">
          3순위
        </Chip>
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
              variant={selected.includes(category) ? 'primary' : 'dimmed'}
              value={category}
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

export const ChipWrapGroup: Story = {
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

export const ChipSlideGroup: Story = {
  render: () => (
    <Chip.Group type="slide">
      {Array(30)
        .fill(0)
        .map((_, index) => (
          <Chip>{`Chip ${index}`}</Chip>
        ))}
    </Chip.Group>
  ),
};
