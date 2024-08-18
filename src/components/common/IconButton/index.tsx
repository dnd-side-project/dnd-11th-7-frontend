import { Icon } from '@/components/common/Icon';
import { Body2 } from '@/components/common/Typography';

import { StyledButton, IconWrapper } from './IconButton.styled';
import { Props } from './IconButton.types';

export const IconButton = ({
  variant = 'default',
  iconName,
  size = 28,
  label,
  ...buttonProps
}: Props) => {
  return (
    <StyledButton {...buttonProps}>
      <IconWrapper variant={variant}>
        <Icon name={iconName} size={size} color="GY1" />
      </IconWrapper>
      {label && (
        <Body2 regularWeight color="GY3">
          {label}
        </Body2>
      )}
    </StyledButton>
  );
};
