import { forwardRef } from 'react';

import { Container } from './FixedBottomButton.styled';
import { Props } from './FixedBottomButton.types';

import { Button } from '../Button';
import { FlexBox } from '../FlexBox';

export const FixedBottomButton = forwardRef<HTMLButtonElement, Props>(
  ({ left, right, children, ...props }, ref) => {
    return (
      <Container>
        {left && right ? (
          <FlexBox flexDir="row" justifyContent="space-between" alignItem="center" gap="15px">
            {left}
            {right}
          </FlexBox>
        ) : (
          <Button ref={ref} {...props}>
            {children}
          </Button>
        )}
      </Container>
    );
  }
);
