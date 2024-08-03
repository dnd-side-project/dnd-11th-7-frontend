import { StyledChip } from './Chip.styled';
import { Props } from './Chip.types';

/**
 * @description button으로 사용하는 경우 component='button' 적용해 주세요.
 */
export const Chip = ({ component = 'span', variant = 'filled', children, ...props }: Props) => {
  return (
    <StyledChip as={component} component={component} variant={variant} {...props}>
      {children}
    </StyledChip>
  );
};
