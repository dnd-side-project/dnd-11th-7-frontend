import { ComponentPropsWithRef } from 'react';

export type Props = {
  /**
   * Minimum value of the slider.
   * @default 0
   */
  min: number;
  /**
   * Maximum value of the slider.
   * @default 10
   */
  max: number;
  /**
   * Current value of the slider.
   * @default 1
   */
  value: number;
  /**
   * Show or hide the bubble label.
   * @default true
   */
  showBubble?: boolean;
} & ComponentPropsWithRef<'input'>;
