import { forwardRef, useCallback, useRef, useEffect } from 'react';

import { StyledTimeBoxContainer, TimeBoxSelector } from './TimeRangePicker.styled';
import { Props } from './TimeRangePicker.type';

export const TimeRangePicker = forwardRef<HTMLDivElement, Props>(
  ({
    selectedSlots,
    onDragStart = () => {},
    onDragMove = () => {},
    onDragEnd = () => {},
    onTimeSlotClick = () => {},
    colIndex,
    ...props
  }) => {
    const containerRef = useRef<HTMLDivElement>(null);

    const onTouchStart = useCallback(
      (index: number | React.DragEvent<HTMLDivElement>, colIndex: number) => {
        if (typeof index === 'number') {
          onTimeSlotClick(index, colIndex);
          onDragStart && onDragStart(index, colIndex);
        }
      },
      [onDragStart, onTimeSlotClick]
    );

    const onTouchMove = useCallback(
      (e: TouchEvent) => {
        const touch = e.touches[0];
        const element = document.elementFromPoint(touch.clientX, touch.clientY) as HTMLElement;
        const rowIndex = parseInt(element?.getAttribute('data-row-index') || '-1', 10);
        const touchedColIndex = parseInt(element?.getAttribute('data-col-index') || '-1', 10);
        if (rowIndex !== -1 && touchedColIndex !== -1) {
          onDragMove(rowIndex, touchedColIndex);
        }
      },
      [onDragMove]
    );

    useEffect(() => {
      const container = containerRef.current;
      if (container) {
        container.addEventListener('touchmove', onTouchMove, { passive: true });
        return () => {
          container.removeEventListener('touchmove', onTouchMove);
        };
      }
    }, [onTouchMove]);

    return (
      <StyledTimeBoxContainer
        ref={containerRef}
        onMouseUp={onDragEnd}
        onTouchEnd={onDragEnd}
        {...props}
      >
        {Array.from({ length: 15 }).map((_, index) => {
          const isSelected = selectedSlots[index] || false;
          const prevSlot = selectedSlots[index - 1] || false;
          const nextSlot = selectedSlots[index + 1] || false;

          const isGroupStart = isSelected && !prevSlot;
          const isGroupEnd = isSelected && !nextSlot;

          return (
            <TimeBoxSelector
              key={index}
              index={index}
              data-row-index={index}
              data-col-index={colIndex}
              isFirst={isGroupStart}
              isLast={isGroupEnd}
              isSelected={isSelected}
              onMouseDown={() => onDragStart(index, colIndex)}
              onMouseEnter={() => onDragMove(index, colIndex)}
              onTouchStart={() => onTouchStart(index - 1, colIndex)}
            />
          );
        })}
      </StyledTimeBoxContainer>
    );
  }
);
