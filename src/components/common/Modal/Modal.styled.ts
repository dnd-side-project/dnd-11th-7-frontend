import styled from '@emotion/styled';

import { colors } from '@/styles/global';

export const StyledModal = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1000;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ModalContent = styled.div`
  width: 90%;
  max-width: 400px;
  padding: 20px;
  border-radius: 12px;
  background-color: ${colors.WH};
`;
