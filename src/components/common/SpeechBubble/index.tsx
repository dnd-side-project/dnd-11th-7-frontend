import { Caption } from '@/components/common/Typography';

import { StyledSpeechBubble } from './SpeechBubble.styled';
import { Props } from './SpeechBubble.types';

export const SpeechBubble = ({ children }: Props) => {
  return (
    <StyledSpeechBubble>
      <svg width="9" height="16" viewBox="0 0 9 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M0.633711 7.44587C0.26996 7.86589 0.26996 8.48934 0.633711 8.90936L6.4205 15.5914C7.09802 16.3737 8.38321 15.8945 8.38321 14.8596L8.38321 1.4956C8.38321 0.460682 7.09802 -0.0184662 6.4205 0.763859L0.633711 7.44587Z"
          fill="#FEFEFE"
        />
      </svg>
      <Caption>{children}</Caption>
    </StyledSpeechBubble>
  );
};
