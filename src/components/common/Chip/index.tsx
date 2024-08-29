import { forwardRef } from 'react';

import { StyledChip, StyledChipGroup } from './Chip.styled';
import { GroupProps, Props } from './Chip.types';

/**
 * @description button으로 사용하는 경우 component='button' 적용해 주세요.
 */
export const Chip = <T,>({
  component = 'span',
  variant = 'primary',
  shape = 'rounded',
  value,
  children,
  ...props
}: Props<T>) => {
  return (
    <>
      {component === 'button' ? (
        <StyledChip
          as="button"
          component="button"
          variant={variant}
          shape={shape}
          value={value}
          {...props}
        >
          {children}
        </StyledChip>
      ) : (
        <StyledChip as="span" component="span" variant={variant} shape={shape} {...props}>
          {children}
        </StyledChip>
      )}
    </>
  );
};

const Group = forwardRef<HTMLDivElement, GroupProps>(({ type = 'wrap', children }, ref) => {
  return (
    <StyledChipGroup type={type} ref={ref}>
      {children}
    </StyledChipGroup>
  );
});

Chip.Group = Group;
