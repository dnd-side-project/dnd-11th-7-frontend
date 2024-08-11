/* eslint-disable no-restricted-exports */
import { css } from '@emotion/react';
import type { Meta, StoryObj } from '@storybook/react';

import { FixedBottomButton } from '.';
import { Button } from '../Button';
import { FlexBox } from '../FlexBox';

const meta = {
  title: 'components/common/FixedBottomButton',
  component: FixedBottomButton,
  tags: ['autodocs'],
} satisfies Meta<typeof FixedBottomButton>;

export default meta;
type Story = StoryObj<typeof FixedBottomButton>;

export const Basic: Story = {
  render: () => (
    <FlexBox
      flexDir="column"
      alignItems="center"
      gap={10}
      css={css(`width: 393px; margin: 0 20px;`)}
    >
      <FixedBottomButton>다음</FixedBottomButton>
      <FixedBottomButton disabled>다음</FixedBottomButton>
      <FixedBottomButton left={<Button>돌아가기</Button>} right={<Button>일정 생성하기</Button>} />
      <FixedBottomButton
        left={<Button disabled>돌아가기</Button>}
        right={<Button>일정 생성하기</Button>}
      />
      <FixedBottomButton
        left={<Button>돌아가기</Button>}
        right={<Button disabled>일정 생성하기</Button>}
      />
    </FlexBox>
  ),
};
