import { ComponentPropsWithoutRef } from 'react';

export type Props = {
  /**
   * @default 'column'
   */
  flexDir?: 'row' | 'column';
  /**
   * @default 0
   * @description number를 입력하면 px로, string을 입력하면 그대로 적용됩니다.
   */
  gap?: number | string;
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
  /**
   * @default 'nowrap'
   */
  flexWrap?: 'nowrap' | 'wrap' | 'wrap-reverse';
  /**
   * @default 0
   * @description number를 입력하면 px로, string을 입력하면 그대로 적용됩니다.
   */
  margin?: number | string;
  /**
   * @default 0
   * @description number를 입력하면 px로, string을 입력하면 그대로 적용됩니다.
   */
  padding?: number | string;
} & ComponentPropsWithoutRef<'div'>;
