import { useState, forwardRef, useCallback } from 'react';
import dayjs from 'dayjs';
import { css } from '@emotion/react';
import isSameOrAfter from 'dayjs/plugin/isSameOrAfter';
import isSameOrBefore from 'dayjs/plugin/isSameOrBefore';

import { FlexBox } from '@/components/common/FlexBox';
import { Body4, Caption } from '@/components/common/Typography';

import {
  StyledCardContainer,
  StyledDayContainer,
  StyledTimeContainer,
  StyledTimeBoxContainer,
  StyledTimeLabel,
} from './ScheduleInput.styled';
import { Props } from './ScheduleInput.type';

import { Icon } from '../../common/Icon';
import { TimeBox } from '../../common/TimeBox';

dayjs.extend(isSameOrBefore);
dayjs.extend(isSameOrAfter);

export const ScheduleInput = forwardRef<HTMLDivElement, Props>(
  (
    { startDate, endDate, currentDates, timeSlots, moveNext, movePrev, onTimeSlotClick, ...props },
    ref
  ) => {
    const [isDragging, setIsDragging] = useState(false);

    const dayNames = ['일', '월', '화', '수', '목', '금', '토'];

    const isFirstPage = currentDates[0]?.isSameOrBefore(dayjs(startDate));
    const isLastPage = currentDates[currentDates.length - 1]?.isSameOrAfter(dayjs(endDate));

    const handleStart = (rowIndex: number, colIndex: number) => {
      setIsDragging(true);
      onTimeSlotClick(rowIndex, colIndex);
    };

    const handleMove = (rowIndex: number, colIndex: number) => {
      if (isDragging) {
        onTimeSlotClick(rowIndex, colIndex);
      }
    };

    const handleEnd = () => setIsDragging(false);

    return (
      <StyledCardContainer ref={ref} onMouseUp={handleEnd} onTouchEnd={handleEnd} {...props}>
        <StyledDayContainer>
          <FlexBox width="10%" justifyContent="center" alignItems="flex-start">
            {!isFirstPage && <Icon name="prev" onClick={movePrev} />}
          </FlexBox>
          <FlexBox flexDir="row" width="80%" justifyContent="center">
            {currentDates.map((date, index) => (
              <FlexBox gap={15} width="100%" key={index} justifyContent="center">
                <Body4>{dayNames[date.day()]}</Body4>
                <Body4>{date.date()}</Body4>
              </FlexBox>
            ))}
          </FlexBox>
          <FlexBox width="10%" justifyContent="center">
            {!isLastPage && <Icon name="next" color="purple" onClick={moveNext} />}
          </FlexBox>
        </StyledDayContainer>

        <FlexBox flexDir="row" height="560px">
          <StyledTimeContainer>
            {Array.from({ length: 16 }).map((_, rowIndex) => (
              <StyledTimeLabel key={rowIndex}>
                <Caption regularWeight color="GY3">
                  {9 + rowIndex}
                </Caption>
              </StyledTimeLabel>
            ))}
          </StyledTimeContainer>
          <StyledTimeBoxContainer>
            {currentDates.map((date, colIndex) => {
              const dateKey = date.format('YYYY-MM-DD');
              const selectedSlots = timeSlots[dateKey] || [];

              return (
                <TimeBox
                  key={date.format('YYYY-MM-DD')}
                  selectedSlots={timeSlots[dateKey] || []}
                  onTimeSlotClick={(rowIndex) => onTimeSlotClick(rowIndex, colIndex)}
                  onDragStart={(rowIndex) => handleStart(rowIndex, colIndex)}
                  onDragMove={(rowIndex) => handleMove(rowIndex, colIndex)}
                  onDragEnd={handleEnd}
                />
              );
            })}
          </StyledTimeBoxContainer>
        </FlexBox>
      </StyledCardContainer>
    );
  }
);