import {
  StyledCircleCheckBox,
  StyledCircleContainer,
  StyledCircleIcon,
  StyledMemberButton,
  StyledText,
} from './Member.styled';
import { Props } from './Member.types';

import { FlexBox } from '../FlexBox';
import { Icon } from '../Icon';

export const Member = ({
  isData = false,
  isChecked = true,
  isLeader = false,
  isAnonymous = false,
  anonymousNumber = 0,
  iconName,
  children,
  ...props
}: Props) => {
  const displayName = isAnonymous ? `익명${anonymousNumber}` : children;

  return (
    <FlexBox flexDir="column" gap={4}>
      <StyledMemberButton {...props}>
        <StyledCircleContainer>
          <Icon
            name={isLeader ? 'circle2' : 'circle1'}
            size={52}
            color={isData ? 'purple' : 'GY4'}
          />
        </StyledCircleContainer>
        {isChecked && (
          <StyledCircleCheckBox>
            <Icon name="check" size={15} color={isData ? 'purple' : 'GY4'} />
          </StyledCircleCheckBox>
        )}
        <StyledCircleIcon>
          <Icon name={iconName} color={isData ? 'purple' : 'GY4'} size={27} />
        </StyledCircleIcon>
      </StyledMemberButton>
      <StyledText>{displayName}</StyledText>
    </FlexBox>
  );
};
