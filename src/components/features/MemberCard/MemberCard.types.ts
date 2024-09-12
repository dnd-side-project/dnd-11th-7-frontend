import { ComponentPropsWithoutRef } from 'react';

export type Props = {
  /**
   * The children of the card
   */
  children: React.ReactNode;
} & ComponentPropsWithoutRef<'div'>;
