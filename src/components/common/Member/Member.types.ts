import { ComponentPropsWithoutRef } from 'react';

export type Props = {
  /**
   * @default false
   */
  isData: boolean;
  /**
   * @default true
   */
  isChecked?: boolean;
  /**
   * @default false
   */
  isLeader?: boolean;
  /**
   * @default false
   */
  isAnonymous?: boolean;
  /**
   * @default null
   */
  anonymousNumber?: number | null;
  /**
   * 째깍 이모지
   */
  JJakkakEmoji: React.ReactNode;
} & ComponentPropsWithoutRef<'div'>;
