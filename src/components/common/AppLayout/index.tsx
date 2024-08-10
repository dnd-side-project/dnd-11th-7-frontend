import { StyledAppLayout } from './AppLayout.styled';
import { Props } from './AppLayout.types';

export const AppLayout = ({ children }: Props) => {
  return <StyledAppLayout>{children}</StyledAppLayout>;
};
