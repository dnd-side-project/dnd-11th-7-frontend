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
    step: 1,
    value: 1,
    disabled: false,
  },
  argTypes: {
    min: {
      control: { type: 'number' },
      options: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    },
    max: {
      control: { type: 'number' },
      options: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    },
    step: {
      control: { type: 'number' },
      options: [1, 2, 5, 10],
    },
    value: {
      control: { type: 'number' },
      options: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    },
    disabled: {
      control: { type: 'boolean' },
      options: [true, false],
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
