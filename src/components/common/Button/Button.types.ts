import { ButtonHTMLAttributes, ComponentPropsWithoutRef } from 'react';

export type Props = ButtonHTMLAttributes<HTMLButtonElement> & {
  /**
   * Disabled state of the button.
   * @default 'false'
   */
  disabled?: boolean;
  /**
   * Optional children for the button, typically a string.
   */
  children?: React.ReactNode;
} & ComponentPropsWithoutRef<'button'>;
