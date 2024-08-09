import { ButtonHTMLAttributes, forwardRef } from 'react';
import { css } from '@emotion/react';

import { Props } from './FixedBottomButton.types';

import { Button } from '../Button';
import { FlexBox } from '../FlexBox';

export const FixedBottomButton = forwardRef<HTMLDivElement, Props>(
  ({ left, right, disabled, children, ...props }, ref) => {
    const buttonProps: ButtonHTMLAttributes<HTMLButtonElement> = {
      disabled,
      ...(props as ButtonHTMLAttributes<HTMLButtonElement>),
    };
    return (
      <div css={css(`width:100%`)} ref={ref} {...props}>
        {left && right ? (
          <FlexBox flexDir="row" justifyContent="space-between" alignItem="center" gap="15px">
            {left}
            {right}
          </FlexBox>
        ) : (
          <Button {...buttonProps}>{children}</Button>
        )}
      </div>
    );
  }
);
