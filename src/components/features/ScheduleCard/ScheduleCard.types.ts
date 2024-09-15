import { ComponentPropsWithoutRef } from 'react';

export type Props = {
  /**
   * The variant of the ScheduleCard.
   * @default 'default'
   */
  variant: 'default' | 'purple';
  /**
   * A string indicating the number of attendees.
   */
  attendeeCount: string;
  /**
   * A string representing the date and time.
   */
  dateTime: string;
  /**
   * An array of strings listing the attendees.
   */
  attendees?: string[];
} & ComponentPropsWithoutRef<'div'>;
