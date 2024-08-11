/* eslint-disable no-restricted-exports */
import type { Meta, StoryObj } from '@storybook/react';

import { KakaoLoginButton } from '.';
import { FlexBox } from '../../common/FlexBox';

const meta = {
  title: 'components/features/KakaoLoginButton',
  component: KakaoLoginButton,
  tags: ['autodocs'],
} satisfies Meta<typeof KakaoLoginButton>;

export default meta;
type Story = StoryObj<typeof KakaoLoginButton>;

export const Basic: Story = {
  render: () => (
    <FlexBox width="393px">
      <KakaoLoginButton />,
    </FlexBox>
  ),
};
