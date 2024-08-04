import { ComponentPropsWithoutRef } from 'react';

export type Props = {
  variant?: 'filled';
  width?: 'full';
} & ComponentPropsWithoutRef<'input'>;
