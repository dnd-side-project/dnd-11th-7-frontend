/* eslint-disable no-restricted-exports */
import type { Meta, StoryObj } from '@storybook/react';

import { Card } from '.';
import { AppLayout } from '../../common/AppLayout';
import { FlexBox } from '../../common/FlexBox';

const meta = {
  title: 'components/common/Card',
  component: Card,
  tags: ['autodocs'],
} satisfies Meta<typeof Card>;

export default meta;
type Story = StoryObj<typeof Card>;

export const Basic: Story = {
  args: {
    emojiPosition: 'top-right',
    children: 'DND 11기 세븐일레븐',
  },
  argTypes: {
    emojiPosition: {
      control: { type: 'inline-radio' },
      options: ['none', 'top-right', 'top-left'],
    },
    children: {
      control: 'text',
    },
  },
  render: (args) => (
    <AppLayout>
      <FlexBox justifyContent="center" alignItems="center" height="100vh" padding={20}>
        <Card {...args} />
      </FlexBox>
    </AppLayout>
  ),
};
