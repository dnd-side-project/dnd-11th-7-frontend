import { ComponentPropsWithoutRef } from 'react';

export type SingleButtonProps = {
  /**
   * The content to be displayed on the left button.
   */
  left?: never;
  /**
   * The content to be displayed on the right button.
   */
  right?: never;
  /**
   * Disabled state of the button.
   * @default 'false'
   */
  disabled?: boolean;
  /**
   * Optional children for the button, typically a string.
   */
  children: React.ReactNode;
} & ComponentPropsWithoutRef<'button'>;

export type DualButtonProps = {
  /**
   * The content to be displayed on the left button.
   */
  left: React.ReactNode;
  /**
   * The content to be displayed on the right button.
   */
  right: React.ReactNode;
  /**
   * Disabled state of the button.
   * @default 'false'
   */
  disabled?: boolean;
  /**
   * Optional children for the button, typically a string.
   */
  children?: never;
};

export type Props = SingleButtonProps | DualButtonProps;
