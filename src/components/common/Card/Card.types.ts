import { ComponentPropsWithoutRef } from 'react';

export type Props = {
  /**
   * The emoji position of the card
   * @default 'none'
   */
  emojiPosition?: 'none' | 'top-right' | 'top-left';
  /**
   * The children of the card
   */
  children: React.ReactNode;
} & ComponentPropsWithoutRef<'div'>;
