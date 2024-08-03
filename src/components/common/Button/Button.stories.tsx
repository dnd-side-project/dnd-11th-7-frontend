/* eslint-disable no-restricted-exports */
import type { Meta, StoryObj } from '@storybook/react';

import { Button } from '.';
import { FlexBox } from '../FlexBox';

const meta = {
  title: 'components/common/Button',
  component: Button,
  tags: ['autodocs'],
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof Button>;

export const Basic: Story = {
  render: () => (
    <FlexBox flexDir="column" gap={8} alignItem="center">
      <Button variant="primary" width="full">
        버튼
      </Button>
      <Button variant="primary" width="full" disabled>
        버튼
      </Button>
    </FlexBox>
  ),
};
