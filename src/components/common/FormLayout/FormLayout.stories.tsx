/* eslint-disable no-restricted-exports */
import type { Meta, StoryObj } from '@storybook/react';

import { AppLayout } from '@/components/common/AppLayout';

import { FormLayout } from '.';

const meta = {
  title: 'components/common/FormLayout',
  component: FormLayout,
  parameters: { layout: 'fullscreen' },
  tags: ['autodocs'],
} satisfies Meta<typeof FormLayout>;

export default meta;
type Story = StoryObj<typeof FormLayout>;

export const Basic: Story = {
  args: {
    title: '제목입니다.',
    description: '설명입니다.',
  },
  argTypes: {
    title: { control: 'text' },
    description: { control: 'text' },
  },
  render: (args) => (
    <AppLayout>
      <FormLayout
        header={<FormLayout.Header progress={1} maxProgress={6} onPrev={() => {}} />}
        title={args.title}
        description={args.description}
        content={undefined}
      />
    </AppLayout>
  ),
};
