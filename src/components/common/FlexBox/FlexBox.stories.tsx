/* eslint-disable no-restricted-exports */
import { css } from '@emotion/react';
import type { Meta, StoryObj } from '@storybook/react';

import { FlexBox } from '.';

const meta = {
  title: 'components/common/FlexBox',
  component: FlexBox,
  tags: ['autodocs'],
} satisfies Meta<typeof FlexBox>;

export default meta;
type Story = StoryObj<typeof FlexBox>;

export const Basic: Story = {
  args: {
    flexDir: 'column',
    gap: 0,
    alignItem: 'center',
    justifyContent: 'center',
  },
  argTypes: {
    flexDir: {
      control: { type: 'inline-radio' },
      options: ['row', 'column'],
    },
    gap: {
      control: { type: 'number' },
    },
    alignItem: {
      control: { type: 'inline-radio' },
      options: ['center', 'flex-start', 'flex-end', 'baseline', 'stretch'],
    },
    justifyContent: {
      control: { type: 'inline-radio' },
      options: [
        'center',
        'flex-start',
        'flex-end',
        'space-between',
        'space-around',
        'space-evenly',
      ],
    },
  },
  render: (args) => (
    <FlexBox {...args}>
      <FlexBox css={css(`background-color: orange; width: 32px; height: 32px`)}>1</FlexBox>
      <FlexBox css={css(`background-color: green; width: 32px; height: 32px`)}>2</FlexBox>
      <FlexBox css={css(`background-color: blue; width: 32px; height: 32px`)}>3</FlexBox>
    </FlexBox>
  ),
};
