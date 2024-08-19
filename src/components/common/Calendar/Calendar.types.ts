import { ComponentPropsWithoutRef } from 'react';
import { Dayjs } from 'dayjs';

export type Props = {
  /**
   * Start date for the selected range.
   */
  startDate: Dayjs | null;
  /**
   * End date for the selected range.
   */
  endDate: Dayjs | null;
  /**
   * Callback function for when the date is changed.
   */
  onDateChange: (start: Dayjs | null, end: Dayjs | null) => void;
} & ComponentPropsWithoutRef<'div'>;

export type ButtonProps = {
  /**
   * Whether the date is selected.
   * @default false
   */
  isSelected: boolean;
  /**
   * Whether the date is in the selected range.
   * @default false
   */
  isInRange: boolean;
  /**
   * Whether the date is the start of the selected range.
   * @default false
   */
  isRangeStart: boolean;
  /**
   * Whether the date is the end of the selected range.
   * @default false
   */
  isRangeEnd: boolean;
  /**
   * Whether the date is disabled.
   * @default false
   */
  isDisabled: boolean;
} & ComponentPropsWithoutRef<'button'>;
