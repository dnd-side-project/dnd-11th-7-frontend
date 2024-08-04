import { ButtonHTMLAttributes, ComponentPropsWithRef } from 'react';

export type Props = ButtonHTMLAttributes<HTMLButtonElement> & {
  /**
   * Button variant style.
   * @default 'primary'
   */
  variant?: 'primary' | 'secondary';
  /**
   * Button width style.
   * @default 'fit'
   */
  width?: 'full' | 'fit';
  /**
   * Button padding style.
   * @default 0
   * @example 8, '8px', '8px 16px', '8px 16px 24px 32px'
   */
  padding?: number | string;
  /**
   * Disabled state of the button.
   * @default 'false'
   */
  disabled?: boolean;
  /**
   * Optional children for the button, typically a string.
   */
  children?: React.ReactNode;
} & ComponentPropsWithRef<'button'>;
