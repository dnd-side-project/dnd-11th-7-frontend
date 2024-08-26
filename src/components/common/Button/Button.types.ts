import { ComponentPropsWithoutRef } from 'react';

export type Props = {
  /**
   * The variant of the button.
   */
  variant: 'primary' | 'secondary' | 'tertiary';
  /**
   * The height of the button.
   */
  height: 'large' | 'medium' | 'small';
  /**
   * Optional children for the button, typically a string.
   */
  children: React.ReactNode;
} & ComponentPropsWithoutRef<'button'>;
