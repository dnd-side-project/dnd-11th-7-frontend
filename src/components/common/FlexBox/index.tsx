import { StyledFlexBox } from './FlexBox.styled';
import { Props } from './FlexBox.types';

export const FlexBox = ({ ref, children, ...props }: Props) => {
  return (
    <StyledFlexBox ref={ref} {...props}>
      {children}
    </StyledFlexBox>
  );
};
