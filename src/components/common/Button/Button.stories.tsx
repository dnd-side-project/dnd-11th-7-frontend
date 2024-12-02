/* eslint-disable no-restricted-exports */
import React from 'react';
import { css } from '@emotion/react';
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

const ButtonRow = ({ children }: { children: React.ReactNode }) => (
  <FlexBox flexDir="row" gap={8} alignItems="center" width="100%" margin="10px 0">
    {children}
  </FlexBox>
);

const ButtonColumn = ({ children }: { children: React.ReactNode }) => (
  <FlexBox width="100%" flexDir="column" alignItems="center" gap={8} margin="10px 0">
    {children}
  </FlexBox>
);

const ButtonTemplate: Story = {
  render: (args) => (
    <FlexBox margin="0 20px" css={css(`width: 393px;`)}>
      <ButtonColumn>
        <Button {...args}>{args.children}</Button>
        <Button {...args} disabled>
          {args.children}
        </Button>
      </ButtonColumn>
    </FlexBox>
  ),
};

export const Basic: Story = {
  args: {
    variant: 'primary',
    height: 'large',
    isLoading: false,
    children: '다음',
    disabled: false,
  },
  argTypes: {
    variant: {
      control: {
        type: 'inline-radio',
      },
      options: ['primary', 'secondary', 'tertiary'],
    },
    height: {
      control: {
        type: 'inline-radio',
      },
      options: ['large', 'medium', 'small'],
    },
    isLoading: {
      control: 'boolean',
    },
    disabled: {
      control: 'boolean',
    },
  },
  render: (args) => (
    <FlexBox css={css(`width: 393px; `)}>
      <Button {...args}>{args.children}</Button>
    </FlexBox>
  ),
};

export const Default: Story = {
  args: {
    variant: 'primary',
    height: 'large',
    children: '다음',
  },
  render: () => (
    <>
      <ButtonRow>
        <ButtonColumn>
          <Button variant="primary" height="large">
            Primary Button
          </Button>
          <Button variant="primary" height="large" disabled>
            (Disabled)
          </Button>
        </ButtonColumn>
        <ButtonColumn>
          <Button variant="secondary" height="medium">
            Secondary Button
          </Button>
          <Button variant="secondary" height="medium" disabled>
            (Disabled)
          </Button>
        </ButtonColumn>
        <ButtonColumn>
          <Button variant="tertiary" height="small">
            Tertiary Button
          </Button>
          <Button variant="tertiary" height="small" disabled>
            (Disabled)
          </Button>
        </ButtonColumn>
      </ButtonRow>
    </>
  ),
};

export const Primary: Story = {
  ...ButtonTemplate,
  args: {
    variant: 'primary',
    height: 'large',
    children: '다음',
  },
};

export const Secondary: Story = {
  ...ButtonTemplate,
  args: {
    variant: 'secondary',
    height: 'medium',
    children: '돌아가기',
  },
};

export const Tertiary: Story = {
  ...ButtonTemplate,
  args: {
    variant: 'tertiary',
    height: 'small',
    children: '비회원으로 시작하기',
  },
};
