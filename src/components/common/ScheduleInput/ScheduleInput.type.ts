import { ComponentPropsWithoutRef } from 'react';
import { Dayjs } from 'dayjs';

export type Props = {
  /**
   * The total number of people who have been scheduled for the meeting.
   * @example 4
   */
  totalPeopleNum?: number;
  /**
   * A list of meeting times that includes the names of participants and the startTime and endTime for each time slot.
   * @example
   * [
   *   { memberNames: ['John', 'Jane'], startTime: '2024-09-22T09:00', endTime: '2024-09-22T10:00' },
   *   { memberNames: ['Alice'], startTime: '2024-09-22T10:00', endTime: '2024-09-22T11:00' }
   * ]
   */
  meetingTimeList?: {
    memberNames: string[];
    startTime: string;
    endTime: string;
  }[];
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
  onTimeSlotClick: (rowIndex: number, colIndex: number) => void;
} & ComponentPropsWithoutRef<'div'>;
