import { ComponentPropsWithoutRef } from 'react';

export type Props = {
  /**
   * The variant of the button.
   */
  variant: 'big' | 'grey' | 'p2'; // TODO variant명 수정
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
   * Optional children for the button, typically a string.
   */
  children?: React.ReactNode;
} & ComponentPropsWithoutRef<'button'>;
