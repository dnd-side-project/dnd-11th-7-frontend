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
    alignItems: 'center',
    justifyContent: 'center',
    flexWrap: 'nowrap',
    margin: 0,
    padding: 0,
  },
  argTypes: {
    flexDir: {
      control: { type: 'inline-radio' },
      options: ['row', 'column'],
    },
    gap: {
      control: { type: 'number' },
    },
    alignItems: {
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
    flexWrap: {
      control: { type: 'inline-radio' },
      options: ['nowrap', 'wrap', 'wrap-reverse'],
    },
    margin: {
      control: { type: 'number' },
    },
    padding: {
      control: { type: 'number' },
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
