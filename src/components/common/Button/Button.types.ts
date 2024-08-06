import { ButtonHTMLAttributes, ComponentPropsWithoutRef } from 'react';

export type Props = ButtonHTMLAttributes<HTMLButtonElement> & {
  /**
   * Button variant style.
   * @default 'primary'
   */
  variant?: 'primary' | 'secondary';
  /**
   * Button width style.
   * @default 'full'
   */
  width?: 'full' | 'fit';
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
