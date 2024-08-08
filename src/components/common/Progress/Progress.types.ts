import { ComponentPropsWithoutRef } from 'react';

export type Props = {
  /**
   * Minimum value of the progress.
   * @default 0
   */
  min: number;
  /**
   * Maximum value of the progress.
   * @default 6
   */
  max: number;
  /**
   * Current value of the progress.
   * @default 1
   */
  value: number;
} & ComponentPropsWithoutRef<'div'>;
