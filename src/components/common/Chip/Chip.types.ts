import { ComponentPropsWithoutRef } from 'react';

type CompProps =
  | ({ component?: 'span' } & ComponentPropsWithoutRef<'span'>)
  | ({ component?: 'button' } & ComponentPropsWithoutRef<'button'>);
type ChipCustomProps = {
  variant?: 'filled' | 'dimmed';
};
export type Props = ChipCustomProps & CompProps;
