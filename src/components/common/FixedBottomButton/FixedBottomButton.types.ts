import { ComponentPropsWithoutRef } from 'react';

export type Props = {
  /**
   * The content to be displayed on the left button.
   */
  left?: never | React.ReactNode;
  /**
   * The content to be displayed on the right button.
   */
  right?: never | React.ReactNode;
  /**
   * Disabled state of the button.
   * @default 'false'
   */
  disabled?: boolean;
  /**
   * Optional children for the button, typically a string.
   */
  children?: never | React.ReactNode;
} & ComponentPropsWithoutRef<'button'>;
