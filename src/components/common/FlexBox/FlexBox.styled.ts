import styled from '@emotion/styled';

import { Props } from './FlexBox.types';

export const StyledFlexBox = styled.div<Props>`
  display: flex;
  flex-direction: ${({ flexDir = 'column' }) => flexDir};
  gap: ${({ gap = 0 }) => (typeof gap === 'number' ? `${gap}px` : gap)};
  align-items: ${({ alignItem = 'center' }) => alignItem};
  justify-content: ${({ justifyContent = 'center' }) => justifyContent};
`;
