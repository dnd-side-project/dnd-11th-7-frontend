/* eslint-disable no-restricted-exports */
import type { Meta, StoryObj } from '@storybook/react';

import { AppLayout } from '@/components/common/AppLayout';
import { Chip } from '@/components/common/Chip';
import { Icon } from '@/components/common/Icon';
import { IconButton } from '@/components/common/IconButton';
import { Progress } from '@/components/common/Progress';

import { Header } from '.';

const meta = {
  title: 'components/common/Header',
  component: Header,
  tags: ['autodocs'],
  parameters: { layout: 'fullscreen' },
  decorators: [
    (Story) => (
      <AppLayout>
        <Story />
      </AppLayout>
    ),
  ],
} satisfies Meta<typeof Header>;

export default meta;
type Story = StoryObj<typeof Header>;

export const Basic: Story = {
  render: () => (
    <Header
      left={<Icon name="JjakkakText" size={{ width: 131, height: 15 }} />}
      right={<IconButton iconName="user" />}
    />
  ),
};

export const Left: Story = {
  render: () => <Header left={<IconButton iconName="back" />} />,
};

export const LeftRight: Story = {
  render: () => (
    <Header left={<IconButton iconName="back" />} right={<IconButton iconName="user" />} />
  ),
};

export const LeftMiddleRight: Story = {
  render: () => (
    <Header
      left={<IconButton iconName="back" />}
      middle={<Progress min={0} max={10} value={6} />}
      right={<Chip variant="greyFilled">1/3</Chip>}
    />
  ),
};