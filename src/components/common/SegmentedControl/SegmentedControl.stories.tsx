/* eslint-disable no-restricted-exports */
import { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';

import { SegmentedControl } from '.';

const meta = {
  title: 'components/common/SegmentedControl',
  component: SegmentedControl,
  tags: ['autodocs'],
} satisfies Meta<typeof SegmentedControl>;

export default meta;
type Story = StoryObj<typeof SegmentedControl>;

export const Basic: Story = {
  args: {
    variant: 'contained',
  },
  argTypes: {
    variant: {
      control: {
        type: 'inline-radio',
        options: ['contained', 'underline', 'textOnly'],
      },
    },
    selectedValue: { table: { disable: true } },
    onChange: { table: { disable: true } },
    children: { table: { disable: true } },
  },
  render: (args) => {
    const [selectedValue, setSelectedValue] = useState(1);

    return (
      <SegmentedControl
        variant={args.variant}
        selectedValue={selectedValue}
        onChange={setSelectedValue}
      >
        <SegmentedControl.Tab label="Tab 1" value={1} />
        <SegmentedControl.Tab label="Tab 2" value={2} />
        <SegmentedControl.Tab label="Tab 3" value={3} />
        <SegmentedControl.Tab label="Tab 4" value={4} />
        <SegmentedControl.Tab label="Tab 5" value={5} />
      </SegmentedControl>
    );
  },
};

export const Contained: Story = {
  render: () => {
    const [selectedValue, setSelectedValue] = useState('사람 많은 순');

    return (
      <SegmentedControl
        variant="contained"
        selectedValue={selectedValue}
        onChange={setSelectedValue}
      >
        <SegmentedControl.Tab label="사람 많은 순" value="사람 많은 순" />
        <SegmentedControl.Tab label="빠른 시간 순" value="빠른 시간 순" />
      </SegmentedControl>
    );
  },
};

export const Underline: Story = {
  render: () => {
    const [selectedValue, setSelectedValue] = useState('사람 많은 순');

    return (
      <SegmentedControl
        variant="underline"
        selectedValue={selectedValue}
        onChange={setSelectedValue}
      >
        <SegmentedControl.Tab label="사람 많은 순" value="사람 많은 순" />
        <SegmentedControl.Tab label="빠른 시간 순" value="빠른 시간 순" />
      </SegmentedControl>
    );
  },
};

export const TextOnly: Story = {
  render: () => {
    const [selectedValue, setSelectedValue] = useState('사람 많은 순');

    return (
      <SegmentedControl
        variant="textOnly"
        selectedValue={selectedValue}
        onChange={setSelectedValue}
      >
        <SegmentedControl.Tab label="사람 많은 순" value="사람 많은 순" />
        <SegmentedControl.Tab label="빠른 시간 순" value="빠른 시간 순" />
      </SegmentedControl>
    );
  },
};
