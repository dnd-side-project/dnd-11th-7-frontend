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
    progressValue: 3,
    progressMaxValue: 6,
  },
  argTypes: {
    title: { control: 'text' },
    description: { control: 'text' },
    progressValue: { control: 'number' },
    progressMaxValue: { control: 'number' },
  },
  render: (args) => (
    <AppLayout>
      <FormLayout
        title={args.title}
        description={args.description}
        progressValue={args.progressValue}
        progressMaxValue={args.progressMaxValue}
        content={undefined} // TODO
      />
    </AppLayout>
  ),
};

export const Category: Story = {
  render: () => (
    <AppLayout>
      <FormLayout
        title={`카테고리를\n선택해 주세요`}
        description="최대 3개까지 선택할 수 있습니다."
        progressValue={1}
        content={undefined} // TODO
      />
    </AppLayout>
  ),
};

export const Name: Story = {
  render: () => (
    <AppLayout>
      <FormLayout
        title={`모임의 이름을\n입력해 주세요`}
        description="20글자까지 입력 가능합니다."
        progressValue={2}
        content={undefined} // TODO
      />
    </AppLayout>
  ),
};

export const Date: Story = {
  render: () => (
    <AppLayout>
      <FormLayout
        title={`모임 일정 수집 기한을\n선택해 주세요`}
        description="최대 14일까지 선택 가능합니다."
        progressValue={3}
        content={undefined} // TODO
      />
    </AppLayout>
  ),
};

export const Number: Story = {
  render: () => (
    <AppLayout>
      <FormLayout
        title={`모임에 참가하는\n인원수를 설정해 주세요`}
        description="최대 10명까지 선택 가능합니다."
        progressValue={4}
        content={undefined} // TODO
      />
    </AppLayout>
  ),
};

export const Anonymous: Story = {
  render: () => (
    <AppLayout>
      <FormLayout
        title={`멤버들의 일정을\n어떻게 수집할까요?`}
        description="익명 여부를 선택해 주세요"
        progressValue={5}
        content={undefined} // TODO
      />
    </AppLayout>
  ),
};

export const DueDate: Story = {
  render: () => (
    <AppLayout>
      <FormLayout
        title={`일정 입력 마감 기한을\n기입해 주세요`}
        progressValue={6}
        content={undefined} // TODO
      />
    </AppLayout>
  ),
};
