import { forwardRef } from 'react';
import { css } from '@emotion/react';

import { StyledMemberCardContainer, StyledMemberInfoContainer } from './ScheduleCard.styled';
import { Props } from './ScheduleCard.types';

import { Chip } from '../../common/Chip/index';
import { FlexBox } from '../../common/FlexBox/index';
import { Caption, Body2 } from '../../common/Typography/index';

export const ScheduleCard = forwardRef<HTMLDivElement, Props>(
  ({ attendeeCount, dateTime, attendees = [], variant = 'default', ...props }, ref) => {
    return (
      <StyledMemberCardContainer ref={ref} variant={variant} {...props}>
        <FlexBox justifyContent="center" alignItems="flex-start">
          <Caption
            regularWeight
            color={variant === 'default' ? 'GY3' : 'WH'}
            css={css`
              margin-bottom: 4px;
            `}
          >
            {attendeeCount}
          </Caption>
          <Body2 color={variant === 'default' ? 'purple' : 'WH'}>{dateTime}</Body2>
          {attendees && attendees.length > 0 && (
            <StyledMemberInfoContainer>
              <Chip.Group type="slide">
                {attendees.map((item, index) => (
                  <Chip key={index} variant={variant === 'default' ? 'primary' : 'secondary'}>
                    {item}
                  </Chip>
                ))}
              </Chip.Group>
            </StyledMemberInfoContainer>
          )}
        </FlexBox>
      </StyledMemberCardContainer>
    );
  }
);
