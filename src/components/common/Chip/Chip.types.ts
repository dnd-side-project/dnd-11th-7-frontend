import { ComponentPropsWithoutRef, ComponentPropsWithRef } from 'react';

type CompProps<T> =
  | ({ component?: 'span'; value?: never } & ComponentPropsWithoutRef<'span'>)
  | ({ component?: 'button'; value?: T } & ComponentPropsWithoutRef<'button'>);
type ChipCustomProps = {
  /**
   * @default 'primary'
   */
  variant?: 'primary' | 'secondary' | 'primaryReverse' | 'grey' | 'greyWeak' | 'dimmed';
  /**
   * @default 'rounded'
   */
  shape?: 'rounded' | 'rectangle';
};
export type Props<T> = ChipCustomProps & CompProps<T>;

export type GroupProps = GroupCustomProps & ComponentPropsWithRef<'div'>;
type GroupCustomProps = {
  type?: 'wrap' | 'slide';
};
