import { forwardRef } from 'react';

import { StyledTimeBoxContainer, TimeBoxSelector } from './TimeBox.styled';
import { Props } from './TimeBox.type';

export const TimeBox = forwardRef<HTMLDivElement, Props>(
  (
    {
      selectedSlots,
      onDragStart = () => {},
      onDragMove = () => {},
      onDragEnd = () => {},
      ...props
    },
    ref
  ) => {
    const handleMouseDown = (index: number) => {
      if (typeof onDragStart === 'function') {
        onDragStart(index);
      }
    };

    const handleMouseEnter = (index: number) => {
      onDragMove(index);
    };

    const handleTouchStart = (index: number) => {
      if (typeof onDragStart === 'function') {
        onDragStart(index);
      }
    };

    const handleDragStart = (event: React.DragEvent<HTMLDivElement>) => {
      if (typeof onDragStart === 'function') {
        onDragStart(event);
      }
    };

    return (
      <StyledTimeBoxContainer
        ref={ref}
        onDragStart={handleDragStart}
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
              onMouseDown={() => handleMouseDown(index)}
              onMouseEnter={() => handleMouseEnter(index)}
              onTouchStart={(e) => {
                e.preventDefault();
                handleTouchStart(index);
              }}
            />
          );
        })}
      </StyledTimeBoxContainer>
    );
  }
);
