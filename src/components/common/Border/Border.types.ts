import { Colors } from '@/styles/global';

export type Props = {
  /**
   * @default '100%'
   */
  width?: '25%' | '50%' | '75%' | '100%';
  /**
   * @description px 단위로 변환합니다.
   * @default 1
   */
  height?: number;
  color: Colors;
  /**
   * @default 'solid'
   */
  borderStyle?: 'solid' | 'dashed' | 'dotted';
};
