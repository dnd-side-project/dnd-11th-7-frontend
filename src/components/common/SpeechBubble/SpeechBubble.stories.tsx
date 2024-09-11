/* eslint-disable no-restricted-exports */
import type { Meta, StoryObj } from '@storybook/react';

import { SpeechBubble } from '.';

const meta = {
  title: 'components/common/SpeechBubble',
  component: SpeechBubble,
  tags: ['autodocs'],
  parameters: {
    backgrounds: {
      default: 'gray',
      values: [{ name: 'gray', value: '#999' }], // NOTE: 말풍선이 잘 보이도록 배경색을 어둡게 설정
    },
  },
} satisfies Meta<typeof SpeechBubble>;

export default meta;
type Story = StoryObj<typeof SpeechBubble>;

export const Basic: Story = {
  args: { children: '째깍! 완벽한 시간이 도착했습니다!' },
  argTypes: { children: { control: { type: 'text' } } },
  render: ({ children }) => <SpeechBubble>{children}</SpeechBubble>,
};

export const LongText: Story = {
  render: () => (
    <SpeechBubble>
      엄청나게 긴 문장이 말풍선 안에 들어갈 때에는 이렇게 보입니다. 엄청나게 긴 문장이 말풍선 안에
      들어갈 때에는 이렇게 보입니다. 엄청나게 긴 문장이 말풍선 안에 들어갈 때에는 이렇게 보입니다.
      엄청나게 긴 문장이 말풍선 안에 들어갈 때에는 이렇게 보입니다. 엄청나게 긴 문장이 말풍선 안에
      들어갈 때에는 이렇게 보입니다. 엄청나게 긴 문장이 말풍선 안에 들어갈 때에는 이렇게 보입니다.
      엄청나게 긴 문장이 말풍선 안에 들어갈 때에는 이렇게 보입니다. 엄청나게 긴 문장이 말풍선 안에
      들어갈 때에는 이렇게 보입니다.
    </SpeechBubble>
  ),
};
