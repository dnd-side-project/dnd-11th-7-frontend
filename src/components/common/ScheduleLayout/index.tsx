import { StyledScheduleLayoutContainer } from './ScheduleLayout.styled';
import { Props } from './ScheduleLayout.types';

import { FlexBox } from '../FlexBox';
import { Header } from '../Header';
import { IconButton } from '../IconButton';

export const ScheduleLayout = ({ children }: Props) => {
  return (
    <StyledScheduleLayoutContainer>
      <FlexBox flexDir="column" justifyContent="flex-start" width="100%">
        <Header
          left={<IconButton iconName="jjakkakText" size={130} iconColor="WH" />}
          right={<IconButton iconName="user" size={28} iconColor="WH" />}
          backgroundColor="lightPurple"
        />
        {children}
      </FlexBox>
    </StyledScheduleLayoutContainer>
  );
};
