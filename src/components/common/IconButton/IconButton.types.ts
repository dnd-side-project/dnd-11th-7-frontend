import { ComponentPropsWithoutRef } from 'react';

import { IconName } from '@/assets/icons';
import { Colors } from '@/styles/global';

export type Props = {
  /**
   * @default default
   */
  variant?: 'default' | 'square';
  iconName: IconName;
  /**
   * @default GY1
   */
  iconColor?: Colors;
  /**
   * @description 텍스트가 포함된 버튼일 때 사용합니다.
   */
  label?: string;
  size?: number;
} & ComponentPropsWithoutRef<'button'>;
