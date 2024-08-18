import { ModalContent, StyledModal } from './Modal.styled';
import { Props } from './Modal.types';

import { FlexBox } from '../FlexBox';
import { Icon } from '../Icon';
import { Head4 } from '../Typography';

export const Modal = ({
  title,
  isOpen,
  onClose,
  modalRef,
  showCloseButton = true,
  children,
  ...modalProps
}: Props) => {
  if (!isOpen) return null;
  return (
    <StyledModal {...modalProps}>
      <ModalContent ref={modalRef}>
        <FlexBox flexDir="row" justifyContent="space-between" alignItems="center">
          <Head4>{title}</Head4>
          {showCloseButton && <Icon onClick={onClose} name="close" size={15} />}
        </FlexBox>
        {children}
      </ModalContent>
    </StyledModal>
  );
};
