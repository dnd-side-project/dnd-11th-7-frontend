import { ComponentPropsWithoutRef } from 'react';

export type Props = {
  /**
   * Current value.
   */
  value: string[];
  /**
   * Callback function to handle the change event.
   */
  onPinChange: (newValue: string[]) => void;
  /**
   * Optional message to be displayed.
   */
  message?: string;
} & ComponentPropsWithoutRef<'input'>;
