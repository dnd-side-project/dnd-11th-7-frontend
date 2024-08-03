import { ComponentPropsWithRef } from 'react';

export type Props = {
  /**
   * @default 'column'
   */
  flexDir?: 'row' | 'column';
  /**
   * @default 0
   * @description px 값입니다.
   */
  gap?: number;
  /**
   * @default 'center'
   */
  alignItem?: 'center' | 'flex-start' | 'flex-end' | 'baseline' | 'stretch';
  /**
   * @default 'center'
   */
  justifyContent?:
    | 'center'
    | 'flex-start'
    | 'flex-end'
    | 'space-between'
    | 'space-around'
    | 'space-evenly';
} & ComponentPropsWithRef<'div'>;
