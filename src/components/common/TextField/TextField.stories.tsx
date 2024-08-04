/* eslint-disable no-restricted-exports */
import { css } from '@emotion/react';
import type { Meta, StoryObj } from '@storybook/react';

import { FlexBox } from '@/components/common/FlexBox';

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
    placeholder: '입력해 주세요.',
    variant: 'filled',
    width: 'full',
  },
  argTypes: {
    placeholder: {
      control: 'text',
    },
    variant: {
      control: 'inline-radio',
      options: ['filled'],
    },
    width: {
      control: 'inline-radio',
      options: ['full'],
    },
  },
  render: (args) => (
    <FlexBox
      css={css`
        padding: 20px;
      `}
    >
      <TextField {...args} />
    </FlexBox>
  ),
};
