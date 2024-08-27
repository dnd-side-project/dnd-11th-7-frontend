import { forwardRef } from 'react';

import { EmojiWrapper, HandsWrapper, StyledCardContainer } from './Card.styled';
import { Props } from './Card.types';

import { Icon } from '../../common/Icon';

export const Card = forwardRef<HTMLDivElement, Props>(
  ({ emojiPosition = 'top-right', children, ...props }, ref) => {
    return (
      <StyledCardContainer ref={ref} {...props}>
        {emojiPosition !== 'none' && (
          <>
            <EmojiWrapper emojiPosition={emojiPosition}>
              <Icon name="jjakkakBody" size={70} />
            </EmojiWrapper>
            <HandsWrapper emojiPosition={emojiPosition}>
              <Icon name="jjakkakHands" size={70} />
            </HandsWrapper>
          </>
        )}
        {children}
      </StyledCardContainer>
    );
  }
);
