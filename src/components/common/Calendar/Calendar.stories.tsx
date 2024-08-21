/* eslint-disable no-restricted-exports */
import { useState } from 'react';
import { css } from '@emotion/react';
import type { Meta, StoryObj } from '@storybook/react';
import { Dayjs } from 'dayjs';

import { Calendar } from '.';

const meta = {
  title: 'components/common/Calendar',
  component: Calendar,
  tags: ['autodocs'],
} satisfies Meta<typeof Calendar>;

export default meta;
type Story = StoryObj<typeof Calendar>;

export const Basic: Story = {
  render: () => {
    const [selectedStartDate, setSelectedStartDate] = useState<Dayjs | null>(null);
    const [selectedEndDate, setSelectedEndDate] = useState<Dayjs | null>(null);

    const handleDateChange = (start: Dayjs | null, end: Dayjs | null) => {
      setSelectedStartDate(start);
      setSelectedEndDate(end);
    };
    return (
      <div css={css(`width: 393px; padding: 20px; background-color: #F6F6F6;`)}>
        <Calendar
          startDate={selectedStartDate}
          endDate={selectedEndDate}
          onDateChange={handleDateChange}
        />
      </div>
    );
  },
};
