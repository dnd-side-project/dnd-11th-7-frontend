/* eslint-disable no-restricted-exports */
import { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';

import { TextField } from '.';

const meta = {
  title: 'components/common/TextField',
  component: TextField,
  parameters: {
    backgrounds: {
      default: 'light',
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof TextField>;

export default meta;
type Story = StoryObj<typeof TextField>;

export const Basic: Story = {
  args: {
    placeholder: '10글자까지 입력 가능합니다.',
    variant: 'filled',
    disabled: false,
  },
  argTypes: {
    placeholder: {
      control: 'text',
    },
    variant: {
      control: 'inline-radio',
      options: ['filled'],
    },
  },
  render: (args) => {
    const [value, setValue] = useState('');
    const validator = (target: string) => {
      if (target.length > 10) {
        return { isValid: false, message: '10글자까지 입력 가능합니다.' };
      }
      return { isValid: true };
    };

    const handleChange = (newValue: string) => {
      setValue(newValue);
    };
    const handleClickClear = () => {
      setValue('');
    };

    return (
      <TextField
        disabled
        value={value}
        onChange={(e) => handleChange(e.target.value)}
        onClickClear={handleClickClear}
        validator={validator}
        {...args}
      />
    );
  },
};

export const Disabled: Story = {
  render: () => <TextField disabled value="disabled" />,
};