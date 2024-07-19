---
to: src/components/common/<%= h.changeCase.pascal(component) %>/<%= h.changeCase.pascal(component) %>.stories.tsx
---
/* eslint-disable no-restricted-exports */
import type { Meta, StoryObj } from '@storybook/react';

import { <%= h.changeCase.pascal(component) %> } from '.';

const meta = {
  title: 'components/common/<%= h.changeCase.pascal(component) %>',
  component: <%= h.changeCase.pascal(component) %>,
  tags: ['autodocs'],
} satisfies Meta<typeof <%= h.changeCase.pascal(component) %>>;

export default meta;
type Story = StoryObj<typeof <%= h.changeCase.pascal(component) %>>;

export const Basic: Story = {
  render: () => <<%= h.changeCase.pascal(component) %> />,
};
