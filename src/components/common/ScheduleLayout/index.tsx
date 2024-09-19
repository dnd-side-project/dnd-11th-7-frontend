import { StyledScheduleLayoutContainer } from './ScheduleLayout.styled';
import { Props } from './ScheduleLayout.types';

import { Chip } from '../Chip';
import { FlexBox } from '../FlexBox';
import { Header } from '../Header';
import { IconButton } from '../IconButton';
import { SpeechBubble } from '../SpeechBubble';
import { Body3, Head3 } from '../Typography';

export const ScheduleLayout = ({
  categories,
  meetingName,
  meetingStartDate,
  meetingEndDate,
  dueDateTime,
  children,
}: Props) => {
  return (
    <StyledScheduleLayoutContainer>
      <FlexBox flexDir="column" justifyContent="flex-start" width="100%">
        <Header
          left={<IconButton iconName="jjakkakText" size={130} iconColor="WH" />}
          right={<IconButton iconName="user" size={28} iconColor="WH" />}
        />
        <FlexBox width="100%" alignItems="flex-start" gap={2} padding="10px 20px 0px 20px">
          <Chip.Group type="slide">
            {categories.map((item: string) => (
              <Chip variant="primaryReverse">{item}</Chip>
            ))}
          </Chip.Group>
          <Head3 color="WH" style={{ padding: '10px 0 0 0' }}>
            {meetingName}
          </Head3>
          <Body3 regularWeight color="WH">
            {meetingStartDate} - {meetingEndDate}
          </Body3>
          <FlexBox alignItems="normal" width="73%" margin="20px 0 5px 0">
            <SpeechBubble>{dueDateTime}</SpeechBubble>
          </FlexBox>
        </FlexBox>
        {children}
      </FlexBox>
    </StyledScheduleLayoutContainer>
  );
};
