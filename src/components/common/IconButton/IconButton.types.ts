import { ComponentPropsWithoutRef } from 'react';

import { IconName } from '@/assets/icons';

export type Props = {
  /**
   * @default default
   */
  variant?: 'default' | 'square';
  iconName: IconName;
  /**
   * @description 텍스트가 포함된 버튼일 때 사용합니다.
   */
  label?: string;
} & ComponentPropsWithoutRef<'button'>;
