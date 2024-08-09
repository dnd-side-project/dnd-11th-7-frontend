import { ComponentPropsWithoutRef, ComponentPropsWithRef } from 'react';

type CompProps =
  | ({ component?: 'span' } & ComponentPropsWithoutRef<'span'>)
  | ({ component?: 'button' } & ComponentPropsWithoutRef<'button'>);
type ChipCustomProps = {
  variant?: 'filled' | 'dimmed' | 'greyFilled';
};
export type Props = ChipCustomProps & CompProps;

export type GroupProps = ComponentPropsWithRef<'div'>;
