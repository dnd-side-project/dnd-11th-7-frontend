import { ComponentPropsWithoutRef } from 'react';

export type Props = {
  /**
   * An array of boolean values representing the selection state of each time slot.
   */
  selectedSlots: boolean[];
  /**
   * Function called when a time slot is clicked or drag starts.
   */
  onTimeSlotClick?: (index: number, colIndex: number) => void;
  /**
   * Optional function called when dragging starts.
   */
  onDragStart?: (index: number, colIndex: number) => void;
  /**
   * Optional function for drag movement.
   */
  onDragMove?: (index: number, colIndex: number) => void;
  /**
   * Optional function when dragging ends.
   */
  onDragEnd?: () => void;
  /**
   *  column index
   */
  colIndex: number;
} & ComponentPropsWithoutRef<'div'>;
