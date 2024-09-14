import { ComponentPropsWithoutRef } from 'react';
import { Dayjs } from 'dayjs';

export type Props = {
  /**
   * An array of boolean values representing the selection state of each time slot.
   */
  selectedSlots: boolean[];
  /**
   * Optional function called when dragging starts.
   */
  onDragStart?: (index: number) => void;
  /**
   * Optional function for drag movement.
   */
  onDragMove?: (index: number) => void;
  /**
   * Optional function when dragging ends.
   */
  onDragEnd?: () => void;
  /**
   *  Optional boolean for drag state.
   */
  isDragging: boolean;
  /**
   * Function to handle time slot click
   */
  onTimeSlotClick?: (index: number) => void;
} & ComponentPropsWithoutRef<'div'>;
