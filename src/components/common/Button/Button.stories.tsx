import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Button } from '.';
import { FlexBox } from '../FlexBox';

const meta = {
  title: 'components/common/Button',
  component: Button,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['CTN', 'grey', 'box'],
    },
    disabled: {
      control: 'boolean',
    },
    fontSize: {
      control: 'select',
      options: ['medium', 'large'],
    },
    height: {
      control: 'number',
    },
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof Button>;

const ButtonRow = ({ children }: { children: React.ReactNode }) => (
  <FlexBox flexDir="row" gap={8} alignItems="center" width="100%" margin="10px 0">
    {children}
  </FlexBox>
);

const ButtonColumn = ({ children }: { children: React.ReactNode }) => (
  <FlexBox flexDir="column" gap={8} alignItems="center" width="100%">
    {children}
  </FlexBox>
);

const ButtonTemplate: Story = {
  render: (args) => (
    <ButtonRow>
      <ButtonColumn>
        <Button {...args}>{args.children}</Button>
        <Button {...args} disabled>
          {args.children}
        </Button>
      </ButtonColumn>
    </ButtonRow>
  ),
};

export const CTN: Story = {
  ...ButtonTemplate,
  args: {
    variant: 'CTN',
    children: '다음',
  },
};

export const Grey: Story = {
  ...ButtonTemplate,
  args: {
    variant: 'grey',
    fontSize: 'large',
    children: '돌아가기',
  },
};

export const Box: Story = {
  ...ButtonTemplate,
  args: {
    variant: 'box',
    height: 55,
    fontSize: 'medium',
    children: '전체보기',
  },
};

export const AllVariants: Story = {
  render: () => (
    <>
      <ButtonRow>
        <ButtonColumn>
          <Button variant="CTN">CTN Button</Button>
          <Button variant="CTN" disabled>CTN Button (Disabled)</Button>
        </ButtonColumn>
        <ButtonColumn>
          <Button variant="grey" fontSize="large">Grey Button</Button>
          <Button variant="grey" fontSize="large" disabled>Grey Button (Disabled)</Button>
        </ButtonColumn>
        <ButtonColumn>
          <Button variant="box" height={55}>Box Button</Button>
          <Button variant="box" height={55} disabled>Box Button (Disabled)</Button>
        </ButtonColumn>
      </ButtonRow>
    </>
  ),
};
