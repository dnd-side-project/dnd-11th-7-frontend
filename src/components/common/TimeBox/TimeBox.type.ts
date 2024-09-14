import { Dayjs } from 'dayjs';

export type Props = {
  /**
   * An array of boolean values representing the selection state of each time slot.
   */
  selectedSlots: boolean[];
  onDragStart?: (index: number) => void;
  onDragMove?: (index: number) => void;
  onDragEnd?: () => void;
  isDragging?: boolean;
  /**
   * Function to handle time slot click
   */
  onTimeSlotClick?: (index: number) => void;
};
