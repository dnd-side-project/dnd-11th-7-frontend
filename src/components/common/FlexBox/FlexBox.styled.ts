import styled from '@emotion/styled';

import { Props } from './FlexBox.types';

export const StyledFlexBox = styled.div<Props>`
  display: flex;
  flex-direction: ${({ flexDir = 'column' }) => flexDir};
  gap: ${({ gap = 0 }) => (typeof gap === 'number' ? `${gap}px` : gap)};
  align-items: ${({ alignItems = 'center' }) => alignItems};
  justify-content: ${({ justifyContent = 'center' }) => justifyContent};
  flex-wrap: ${({ flexWrap = 'nowrap' }) => flexWrap};
  margin: ${({ margin = 0 }) => (typeof margin === 'number' ? `${margin}px` : margin)};
  padding: ${({ padding = 0 }) => (typeof padding === 'number' ? `${padding}px` : padding)};
`;
