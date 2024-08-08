import { ComponentPropsWithoutRef } from 'react';

export type Props = {
  /**
   * The content to be displayed on the left button.
   */
  left?: React.ReactNode;

  /**
   * The content to be displayed on the right button.
   */
  right?: React.ReactNode;
  /**
   * Optional children for the button, typically a string.
   */
  children?: React.ReactNode;
} & ComponentPropsWithoutRef<'div'>;
