import type { Meta, StoryObj } from '@storybook/react';
import { css } from '@emotion/react';

import { TimeBox } from '.';
import { FlexBox } from '@/components/common/FlexBox';

const meta = {
  title: 'components/common/TimeBox',
  component: TimeBox,

  tags: ['autodocs'],
} satisfies Meta<typeof TimeBox>;

export default meta;
type Story = StoryObj<typeof TimeBox>;

const timeBoxVariations = [
  { slots: [true, false, false, false] },
  { slots: [true, true, false, false] },
  { slots: [true, true, true, false] },
  { slots: [true, true, true, true] },
  { slots: [true, true, false, true] },
];

export const Basic: Story = {
  render: () => (
    <FlexBox flexDir="row" alignItems="flex-start" width="250px">
      {timeBoxVariations.map(({ slots }, index) => (
        <TimeBox key={index} selectedSlots={slots} isDragging={false} />
      ))}
    </FlexBox>
  ),
};
