/* eslint-disable no-restricted-exports */
import { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';

import { AppLayout } from '@/components/common/AppLayout';

import { Switch } from '.';

const meta = {
  title: 'components/common/Switch',
  component: Switch,
  tags: ['autodocs'],
} satisfies Meta<typeof Switch>;

export default meta;
type Story = StoryObj<typeof Switch>;

export const Basic: Story = {
  render: () => {
    const [selected, setSelected] = useState('익명');

    const handleChange = (string: string) => setSelected(string);

    return (
      <Switch selectedValue={selected} onChange={handleChange}>
        <Switch.Button label="익명" img={<img src="/images/btn-anonymous.svg" />} />
        <Switch.Button label="실명" img={<img src="/images/btn-jjakkak-3.svg" />} />
      </Switch>
    );
  },
};

export const TextOnly: Story = {
  render: () => {
    const [selected, setSelected] = useState('익명');

    const handleChange = (string: string) => setSelected(string);

    return (
      <AppLayout>
        <Switch selectedValue={selected} onChange={handleChange}>
          <Switch.Button label="오늘" />
          <Switch.Button label="내일" />
          <Switch.Button label="3일" />
          <Switch.Button label="5일" />
        </Switch>
      </AppLayout>
    );
  },
};
