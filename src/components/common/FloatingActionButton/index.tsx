import { Icon } from '@/components/common/Icon';

import { StyledFAB } from './FloatingActionButton.styled';
import { Props } from './FloatingActionButton.types';

export const FloatingActionButton = ({ ...props }: Props) => {
  return (
    <StyledFAB type="button" {...props}>
      <Icon name="add" size={27} />
    </StyledFAB>
  );
};
