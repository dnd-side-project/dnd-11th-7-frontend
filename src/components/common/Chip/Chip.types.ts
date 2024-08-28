import { ComponentPropsWithoutRef, ComponentPropsWithRef } from 'react';

type CompProps<T> =
  | ({ component?: 'span'; value?: never } & ComponentPropsWithoutRef<'span'>)
  | ({ component?: 'button'; value?: T } & ComponentPropsWithoutRef<'button'>);
type ChipCustomProps = {
  variant?: 'filled' | 'dimmed' | 'greyFilled';
};
export type Props<T> = ChipCustomProps & CompProps<T>;

export type GroupProps = ComponentPropsWithRef<'div'>;
