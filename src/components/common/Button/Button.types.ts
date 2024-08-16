import { ComponentPropsWithoutRef } from 'react';

export type Props = {
  /**
   * The variant of the button.
   */
  variant: 'CTN' | 'grey' | 'box'; // TODO variant명 수정
  /**
   * The height of the button.
   */
  height?: number;
  /**
   * Disabled state of the button.
   * @default 'false'
   */
  disabled?: boolean;
  /**
   * fontSize of the button.
   * @default 'large'
   */
  fontSize?: 'small' | 'medium' | 'large';
  /**
   * Optional children for the button, typically a string.
   */
  children?: React.ReactNode;
} & ComponentPropsWithoutRef<'button'>;
