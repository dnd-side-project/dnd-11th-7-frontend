/* eslint-disable no-restricted-exports */
import { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';

import { Slider } from '.';

const meta = {
  title: 'components/common/Slider',
  component: Slider,
  tags: ['autodocs'],
} satisfies Meta<typeof Slider>;

export default meta;
type Story = StoryObj<typeof Slider>;

export const Basic: Story = {
  args: {
    min: 0,
    max: 10,
    showBubble: true,
  },
  argTypes: {
    min: {
      control: { type: 'number', min: 0, max: 10, step: 1 },
    },
    max: {
      control: { type: 'number', min: 0, max: 10, step: 1 },
    },
    showBubble: {
      control: { type: 'boolean' },
    },
  },
  render: (args) => {
    const [value, setValue] = useState<number>(args.value || 1);

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      setValue(Number(event.target.value));
    };

    return <Slider {...args} value={value} onChange={handleChange} />;
  },
};
