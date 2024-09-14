import { forwardRef, useCallback, useState, useEffect, useRef } from 'react';

import { StyledTimeBoxContainer, TimeBoxSelector } from './TimeBox.styled';
import { Props } from './TimeBox.type';

export const TimeBox = forwardRef<HTMLDivElement, Props>(
  ({
    selectedSlots,
    onDragStart = () => {},
    onDragMove = () => {},
    onDragEnd = () => {},
    onTimeSlotClick = () => {},
    ...props
  }) => {
    const innerRef = useRef<HTMLDivElement>(null);
    const [, setIsDragging] = useState(false);
    const lastTouchedIndex = useRef<number | null>(null);

    const handleTouchStart = useCallback(
      (index: number) => {
        lastTouchedIndex.current = index;
        setIsDragging(false);
        onTimeSlotClick(index);
        onDragStart(index);
      },
      [onDragStart, onTimeSlotClick]
    );

    const handleTouchMove = useCallback(
      (event: TouchEvent) => {
        const touch = event.touches[0];
        const element = document.elementFromPoint(touch.clientX, touch.clientY) as HTMLElement;
        const index = element?.getAttribute('data-index');
        if (index !== null) {
          const newIndex = parseInt(index, 10);
          if (newIndex !== lastTouchedIndex.current) {
            lastTouchedIndex.current = newIndex;
            onDragMove(newIndex);
          }
        }
      },
      [onDragMove]
    );

    const handleTouchEnd = useCallback(() => {
      setIsDragging(false);
      onDragEnd();
    }, [onDragEnd]);

    useEffect(() => {
      const container = innerRef.current;
      if (container) {
        container.addEventListener('touchmove', handleTouchMove, { passive: true });
        container.addEventListener('touchend', handleTouchEnd);
        return () => {
          container.removeEventListener('touchmove', handleTouchMove);
          container.removeEventListener('touchend', handleTouchEnd);
        };
      }
    }, [handleTouchMove, handleTouchEnd]);

    return (
      <StyledTimeBoxContainer
        ref={innerRef}
        onMouseUp={onDragEnd}
        onTouchEnd={onDragEnd}
        {...props}
      >
        {Array.from({ length: 16 }).map((_, index) => {
          const isSelected = selectedSlots[index] || false;
          const prevSlot = selectedSlots[index - 1] || false;
          const nextSlot = selectedSlots[index + 1] || false;

          const isGroupStart = isSelected && !prevSlot;
          const isGroupEnd = isSelected && !nextSlot;

          return (
            <TimeBoxSelector
              key={index}
              index={index}
              isFirst={isGroupStart}
              isLast={isGroupEnd}
              isSelected={isSelected}
              onMouseDown={() => onDragStart(index)}
              onMouseEnter={() => onDragMove(index)}
              onTouchStart={() => handleTouchStart(index)}
            />
          );
        })}
      </StyledTimeBoxContainer>
    );
  }
);
