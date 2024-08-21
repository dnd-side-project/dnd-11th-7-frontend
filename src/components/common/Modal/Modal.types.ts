import { ComponentPropsWithoutRef } from 'react';

export type Props = {
  /**
   * Indicates whether the modal is open.
   * @default false
   */
  isOpen: boolean;
  /**
   * Indicates whether to show the close button.
   * @default true
   */
  showCloseButton?: boolean;
  /**
   * Function to close the modal.
   */
  onClose: () => void;
  /**
   * Ref for the modal.
   */
  modalRef: React.Ref<HTMLDivElement>;
  /**
   * The title of the modal.
   */
  title: string;
  /**
   * The content of the modal.
   */
  children: React.ReactNode;
} & ComponentPropsWithoutRef<'div'>;
