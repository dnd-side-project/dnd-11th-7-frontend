import { ComponentPropsWithoutRef } from 'react';

export type Props = {
  /**
   *  column index
   */
  colIndex: number;
  /**
   * An array of boolean values representing the selection state of each time slot.
   */
  selectedSlots: boolean[];
  /**
   * Function called when a time slot is clicked or drag starts.
   */
  onTimeSlotClick?: (index: number, colIndex: number) => void;
  /**
   * Optional function called when dragging starts.
   */
  onDragStart?: (index: number, colIndex: number) => void;
  /**
   * Optional function for drag movement.
   */
  onDragMove?: (index: number, colIndex: number) => void;
  /**
   * Optional function when dragging ends.
   */
  onDragEnd?: () => void;
  /**
   * The currently selected or displayed date in the time range picker.
   * @example new Date("2024-09-22")
   */
  currentDate?: Date;
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
} & ComponentPropsWithoutRef<'div'>;
