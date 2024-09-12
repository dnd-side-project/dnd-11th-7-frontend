/* eslint-disable no-restricted-exports */
import type { Meta, StoryObj } from '@storybook/react';

import { iconNames } from '@/assets/icons';
import { FlexBox } from '@/components/common/FlexBox';
import { colorNames } from '@/styles/global';

import { Icon } from '.';

const meta = {
  title: 'components/common/Icon',
  component: Icon,
  tags: ['autodocs'],
} satisfies Meta<typeof Icon>;

export default meta;
type Story = StoryObj<typeof Icon>;

export const Basic: Story = {
  args: {
    color: 'purple',
    size: 20,
  },
  argTypes: {
    name: { table: { disable: true } },
    color: { control: { type: 'select' }, options: colorNames },
    size: { control: { type: 'number' } },
  },
  render: (args) => {
    return (
      <FlexBox flexDir="row" gap={10} justifyContent="flex-start" flexWrap="wrap">
        {iconNames.map((icon) => (
          <Icon key={icon} {...args} name={icon} />
        ))}
      </FlexBox>
    );
  },
};
