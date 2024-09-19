import { useState, forwardRef, useRef, useCallback } from 'react';
import { css } from '@emotion/react';
import dayjs from 'dayjs';
import 'dayjs/locale/ko';
import isSameOrAfter from 'dayjs/plugin/isSameOrAfter';
import isSameOrBefore from 'dayjs/plugin/isSameOrBefore';

import { FlexBox } from '@/components/common/FlexBox';
import { Body4, Caption } from '@/components/common/Typography';

import {
  StyledCardContainer,
  StyledDayContainer,
  StyledTimeContainer,
  StyledTimeBoxContainer,
  StyledTimeScrollContainer,
} from './ScheduleInput.styled';
import { Props } from './ScheduleInput.type';

import { TimeRangePicker } from '../../common/TimeRangePicker';
import { IconButton } from '../IconButton';

dayjs.extend(isSameOrBefore);
dayjs.extend(isSameOrAfter);
dayjs.locale('ko');

export const ScheduleInput = forwardRef<HTMLDivElement, Props>(
  (
    { startDate, endDate, currentDates, timeSlots, moveNext, movePrev, onTimeSlotClick, ...props },
    ref
  ) => {
    const [isDragging, setIsDragging] = useState(false);
    const lastTouchedCell = useRef<{ row: number; col: number } | null>(null);

    const isFirstPage = currentDates[0]?.isSameOrBefore(dayjs(startDate));
    const isLastPage = currentDates[currentDates.length - 1]?.isSameOrAfter(dayjs(endDate));

    const handleStart = useCallback(
      (rowIndex: number | React.DragEvent<HTMLDivElement>, colIndex: number) => {
        const index = typeof rowIndex === 'number' ? rowIndex : 0;
        setIsDragging(true);
        lastTouchedCell.current = { row: index, col: colIndex };
        onTimeSlotClick(index, colIndex);
      },
      [onTimeSlotClick]
    );

    const handleMove = useCallback(
      (rowIndex: number, colIndex: number) => {
        if (isDragging && lastTouchedCell.current) {
          const { row: lastRow, col: lastCol } = lastTouchedCell.current;
          if (lastRow !== rowIndex || lastCol !== colIndex) {
            onTimeSlotClick(rowIndex, colIndex);
            lastTouchedCell.current = { row: rowIndex, col: colIndex };
          }
        }
      },
      [isDragging, onTimeSlotClick]
    );

    const handleEnd = useCallback(() => {
      setIsDragging(false);
      lastTouchedCell.current = null;
    }, []);

    return (
      <StyledCardContainer ref={ref} onMouseUp={handleEnd} onTouchEnd={handleEnd} {...props}>
        <StyledDayContainer>
          <FlexBox width="10%" justifyContent="center" alignItems="flex-start">
            {!isFirstPage && <IconButton iconName="prev" size={20} onClick={movePrev} />}
          </FlexBox>
          <FlexBox flexDir="row" width="80%" justifyContent="center">
            {currentDates.map((date, index) => (
              <FlexBox gap={15} width="100%" key={index} justifyContent="center">
                <Body4>{date.format('ddd')}</Body4>
                <Body4>{date.date()}</Body4>
              </FlexBox>
            ))}
          </FlexBox>
          <FlexBox width="10%" justifyContent="center">
            {!isLastPage && <IconButton iconName="next" size={20} onClick={moveNext} />}
          </FlexBox>
        </StyledDayContainer>

        <StyledTimeScrollContainer>
          <StyledTimeContainer>
            {Array.from({ length: 16 }).map((_, rowIndex) => (
              <Caption
                key={rowIndex}
                regularWeight
                color="GY3"
                css={css(`margin-bottom: ${rowIndex !== 15 ? `${18 + rowIndex * 0.04}px` : '0'};`)}
              >
                {9 + rowIndex}
              </Caption>
            ))}
          </StyledTimeContainer>
          <StyledTimeBoxContainer>
            {currentDates.map((date, colIndex) => {
              const dateKey = date.format('YYYY-MM-DD');

              return (
                <TimeRangePicker
                  key={date.format('YYYY-MM-DD')}
                  selectedSlots={timeSlots[dateKey] || []}
                  onTimeSlotClick={(rowIndex: number, colIndex: number) =>
                    onTimeSlotClick(rowIndex, colIndex)
                  }
                  onDragStart={(rowIndex: number | React.DragEvent<HTMLDivElement>) =>
                    handleStart(rowIndex, colIndex)
                  }
                  onDragMove={(rowIndex: number, touchedColIndex: number) =>
                    handleMove(rowIndex, colIndex + touchedColIndex - colIndex)
                  }
                  onDragEnd={handleEnd}
                  colIndex={colIndex}
                />
              );
            })}
          </StyledTimeBoxContainer>
        </StyledTimeScrollContainer>
      </StyledCardContainer>
    );
  }
);
