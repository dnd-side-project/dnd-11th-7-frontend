/* eslint-disable no-restricted-exports */
import { css } from '@emotion/react';
import type { Meta, StoryObj } from '@storybook/react';

import { colors } from '@/styles/global';

import { PinInput } from '.';
import { usePinState } from '../../../hooks/usePinState';
import { FlexBox } from '../FlexBox';

const meta = {
  title: 'components/common/PinInput',
  component: PinInput,
  tags: ['autodocs'],
} satisfies Meta<typeof PinInput>;

export default meta;
type Story = StoryObj<typeof PinInput>;

export const Basic: Story = {
  render: () => {
    const { pin, setPin } = usePinState();

    return (
      <FlexBox
        flexDir="column"
        justifyContent="center"
        alignItems="center"
        width="300px"
        height="100px"
        css={css(`background-color: ${colors.GY6}`)}
      >
        <PinInput value={pin} onPinChange={setPin} />
      </FlexBox>
    );
  },
};
