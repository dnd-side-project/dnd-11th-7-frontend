import { ButtonHTMLAttributes } from 'react';

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
   * Disabled state of the button.
   * @default 'false'
   */
  disabled?: boolean;
  /**
   * Optional children for the button, typically a string.
   */
  children?: React.ReactNode;
};
