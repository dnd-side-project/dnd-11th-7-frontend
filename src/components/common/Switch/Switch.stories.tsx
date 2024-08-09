/* eslint-disable no-restricted-exports */
import { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';

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
        <Switch.Button label="익명" icon="anonymous" />
        <Switch.Button label="실명" icon="jjakkakUncolored3" />
      </Switch>
    );
  },
};
