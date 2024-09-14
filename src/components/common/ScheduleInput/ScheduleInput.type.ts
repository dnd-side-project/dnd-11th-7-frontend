import { ComponentPropsWithoutRef } from 'react';
import { Dayjs } from 'dayjs';

export type Props = {
  /**
   * The start date of the schedule in string format.
   */
  startDate: string;
  /**
   * The end date of the schedule in string format.
   */
  endDate: string;
  /**
   * Current dates to display
   */
  currentDates: Dayjs[];
  /**
   * Time slots for each date
   */
  timeSlots: { [key: string]: boolean[] };
  /**
   * Function to move to the next set of dates
   */
  moveNext: () => void;
  /**
   * Function to move to the previous set of dates
   */
  movePrev: () => void;
  /**
   * Function to handle time slot click
   */
  onTimeSlotClick?: (rowIndex: number, colIndex: number) => void;
} & ComponentPropsWithoutRef<'div'>;
