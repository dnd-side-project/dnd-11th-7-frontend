import { ComponentPropsWithoutRef } from 'react';

export type Props = {
  /**
   * An array of boolean values representing the selection state of each time slot.
   */
  selectedSlots: boolean[];
  /**
   * Function called when a time slot is clicked or drag starts.
   */
  onTimeSlotClick?: (index: number) => void;
  /**
   * Optional function called when dragging starts.
   */
  onDragStart?: (index: number) => void | React.DragEventHandler<HTMLDivElement>;
  /**
   * Optional function for drag movement.
   */
  onDragMove?: (index: number) => void;
  /**
   * Optional function when dragging ends.
   */
  onDragEnd?: () => void;
} & ComponentPropsWithoutRef<'div'>;
