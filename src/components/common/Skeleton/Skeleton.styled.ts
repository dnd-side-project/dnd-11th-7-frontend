import { keyframes } from '@emotion/react';
import styled from '@emotion/styled';

import { Props } from './Skeleton.types';

export const pulseKeyframes = keyframes`
  50% {
    opacity: .5;
  }
`;

export const StyledSkeletonContainer = styled.div<Props>`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  width: ${({ width }) => width};
  height: ${({ height }) => height};
`;

export const StyledTextSkeletonContainer = styled.div<Props>`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 0.6rem;
  width: ${({ width }) => width};
  height: ${({ height }) => height};
`;

export const StyledTextLine = styled.div<{ width: string }>`
  height: 1rem;
  width: ${({ width }) => width};
  background-color: #f3f4f6;
  border-radius: 0.25rem;
  animation: ${pulseKeyframes} 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
`;

export const StyledBoxSkeleton = styled.div`
  width: 100%;
  height: 100%;
  padding-top: 10px;
  padding-bottom: 10px;
  background-color: #f3f4f6;
  border-radius: 0.5rem;
  animation: ${pulseKeyframes} 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
`;
