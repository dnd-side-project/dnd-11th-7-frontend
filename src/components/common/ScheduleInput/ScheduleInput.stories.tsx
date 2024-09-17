/* eslint-disable no-restricted-exports */
import { useState } from 'react';
import { css } from '@emotion/react';
import type { Meta, StoryObj } from '@storybook/react';

import { AppLayout } from '@/components/common/AppLayout';
import { useSchedule } from '@/hooks/useSchedule';

import { ScheduleInput } from '.';
import { FlexBox } from '../FlexBox/index';

const meta = {
  title: 'components/common/ScheduleInput',
  component: ScheduleInput,
  tags: ['autodocs'],
} satisfies Meta<typeof ScheduleInput>;

export default meta;
type Story = StoryObj<typeof ScheduleInput>;

const ScheduleInputWrapper: React.FC<{ startDate: string; endDate: string }> = ({
  startDate,
  endDate,
}) => {
  const [dates] = useState({ startDate, endDate });

  const { currentDates, timeSlots, moveNext, movePrev, handleTimeSlotClick } = useSchedule(
    dates.startDate,
    dates.endDate
  );

  return (
    <AppLayout>
      <FlexBox flexDir="column" width="100%" height="100vh" alignItems="start" padding="80px 20px">
        <ScheduleInput
          startDate={dates.startDate}
          endDate={dates.endDate}
          currentDates={currentDates}
          timeSlots={timeSlots}
          moveNext={moveNext}
          movePrev={movePrev}
          onTimeSlotClick={handleTimeSlotClick}
        />
      </FlexBox>
    </AppLayout>
  );
};

export const Basic: Story = {
  args: {
    startDate: '2024-09-01',
    endDate: '2024-09-05',
  },
  render: (args) => <ScheduleInputWrapper startDate={args.startDate} endDate={args.endDate} />,
};

export const OneDaySchedule: Story = {
  args: {
    startDate: '2024-09-01',
    endDate: '2024-09-01',
  },
  render: (args) => <ScheduleInputWrapper startDate={args.startDate} endDate={args.endDate} />,
};
export const TwoDaySchedule: Story = {
  args: {
    startDate: '2024-09-01',
    endDate: '2024-09-02',
  },
  render: (args) => <ScheduleInputWrapper startDate={args.startDate} endDate={args.endDate} />,
};
export const ThreeDaySchedule: Story = {
  args: {
    startDate: '2024-09-01',
    endDate: '2024-09-03',
  },
  render: (args) => <ScheduleInputWrapper startDate={args.startDate} endDate={args.endDate} />,
};
