import { ComponentPropsWithoutRef } from 'react';

import { IconName } from '@/assets/icons';

export type Props = {
  /**
   * @default false
   */
  isSubmitted: boolean;
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
  iconName: IconName;
} & ComponentPropsWithoutRef<'div'>;
