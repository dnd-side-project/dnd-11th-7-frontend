import { ComponentPropsWithoutRef } from 'react';

import { InvalidState, ValidState } from '@/utils/validation';

export type Props = ComponentPropsWithoutRef<'input'> & {
  value?: string;
  /**
   * @default 'filled'
   */
  variant?: 'filled';
  /**
   * @default 'full'
   */
  width?: 'full';
  /**
   * @description 입력값 검증 함수 (검증 실패 시, 에러 메시지가 노출됨)
   */
  validator?: (target: string) => ValidState | InvalidState;
  /**
   * @description 우측 x 버튼을 클릭했을 때 실행되는 핸들러 (이 함수를 구현해야만 x 버튼이 보임)
   * @example onClickClear={() => setValue('')}
   */
  onClickClear?: () => void;
};
