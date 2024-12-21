import {
  StyledBoxSkeleton,
  StyledSkeletonContainer,
  StyledTextLine,
  StyledTextSkeletonContainer,
} from './Skeleton.styled';
import { Props } from './Skeleton.types';

const TEXT_LINE_WIDTH = ['30%', '60%', '90%', '80%'];
export const Skeleton = ({ layout = 'box', width = '100%', height = '100%', ...props }: Props) => {
  if (layout === 'text') {
    return (
      <StyledTextSkeletonContainer width={width} height={height} {...props}>
        {TEXT_LINE_WIDTH.map((width) => (
          <StyledTextLine key={width} width={width} />
        ))}
      </StyledTextSkeletonContainer>
    );
  }

  return (
    <StyledSkeletonContainer width={width} height={height} {...props}>
      <StyledBoxSkeleton />
    </StyledSkeletonContainer>
  );
};
