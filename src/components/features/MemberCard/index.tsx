import { forwardRef } from 'react';

import { StyledMemberCard } from './MemberCard.styled';
import { Props } from './MemberCard.types';

export const MemberCard = forwardRef<HTMLDivElement, Props>(({ children, ...props }, ref) => {
  return (
    <StyledMemberCard ref={ref} {...props}>
      {children}
    </StyledMemberCard>
  );
});
