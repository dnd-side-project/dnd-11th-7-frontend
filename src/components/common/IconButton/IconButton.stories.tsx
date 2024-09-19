/* eslint-disable no-restricted-exports */
import type { Meta, StoryObj } from '@storybook/react';

import { iconNames } from '@/assets/icons';
import { FlexBox } from '@/components/common/FlexBox';
import { Caption } from '@/components/common/Typography';
import { colorNames } from '@/styles/global';

import { IconButton } from '.';

const meta = {
  title: 'components/common/IconButton',
  component: IconButton,
  tags: ['autodocs'],
} satisfies Meta<typeof IconButton>;

export default meta;
type Story = StoryObj<typeof IconButton>;

export const Basic: Story = {
  args: {
    variant: 'default',
    iconName: 'link',
    iconColor: 'GY1',
    label: '',
  },
  argTypes: {
    variant: {
      control: { type: 'inline-radio' },
      options: ['default', 'square'],
    },
    iconName: {
      control: { type: 'select' },
      options: iconNames,
    },
    iconColor: {
      control: { type: 'select' },
      options: colorNames,
    },
    label: {
      control: { type: 'text' },
    },
  },
  render: (args) => <IconButton {...args} />,
};

export const Default: Story = {
  render: () => {
    const handleClick = () => {
      alert('세븐일레븐 화이팅!');
    };

    return (
      <FlexBox gap={10} alignItems="flex-start">
        <Caption regularWeight>아래 아이콘 버튼을 클릭해 보세요.</Caption>
        <IconButton iconName="user" onClick={handleClick} />
      </FlexBox>
    );
  },
};

export const Square: Story = {
  render: () => {
    const handleClick = () => {
      alert('세븐일레븐 화이팅!');
    };

    return (
      <FlexBox gap={10} alignItems="flex-start">
        <Caption regularWeight>아래 아이콘 버튼을 클릭해 보세요.</Caption>
        <IconButton variant="square" iconName="link" label="링크 복사" onClick={handleClick} />
      </FlexBox>
    );
  },
};
