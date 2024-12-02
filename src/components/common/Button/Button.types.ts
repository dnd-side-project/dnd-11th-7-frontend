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
   * Whether the button is disabled.
   * @default false
   */
  isLoading?: boolean;
  /**
   * Optional children for the button, typically a string.
   */
  children: React.ReactNode;
} & ComponentPropsWithoutRef<'button'>;
