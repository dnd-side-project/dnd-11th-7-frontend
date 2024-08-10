import { IconName } from '@/assets/icons';
import { Colors } from '@/styles/global';

export type Props = {
  name: IconName;
  /**
   * @default 'BK'
   */
  color?: Colors;
  /**
   * @description px 단위로 변환합니다.
   * @default 20
   */
  size?: number | { width: number; height: number };
} & React.SVGProps<SVGSVGElement>;
