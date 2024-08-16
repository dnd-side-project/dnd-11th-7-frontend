/* eslint-disable no-restricted-exports */
import type { Meta, StoryObj } from '@storybook/react';

import { AppLayout } from '@/components/common/AppLayout';
import { Chip } from '@/components/common/Chip';
import { Header } from '@/components/common/Header';
import { IconButton } from '@/components/common/IconButton';
import { Progress } from '@/components/common/Progress';

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
        header={
          <Header
            left={<IconButton iconName="back" />}
            middle={<Progress min={0} max={6} value={1} />}
            right={<Chip variant="greyFilled">{`${1}/${6}`}</Chip>}
          />
        }
        title={args.title}
        description={args.description}
        content={undefined}
      />
    </AppLayout>
  ),
};
