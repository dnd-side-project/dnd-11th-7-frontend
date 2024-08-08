import { forwardRef } from 'react';
import { css } from '@emotion/react';

import { Props } from './FixedBottomButton.types';

import { Button } from '../Button';
import { FlexBox } from '../FlexBox';

export const FixedBottomButton = forwardRef<HTMLDivElement, Props>(
  ({ left, right, children, ...props }, ref) => {
    return (
      <div css={css(`width:100%`)} ref={ref} {...props}>
        {left && right && (
          <FlexBox flexDir="row" justifyContent="space-between" alignItem="center" gap="15px">
            {left}
            {right}
          </FlexBox>
        )}
        {!left && !right && <Button>{children}</Button>}
      </div>
    );
  }
);
