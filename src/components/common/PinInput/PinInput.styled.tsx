import styled from '@emotion/styled';

import { colors } from '@/styles/global';

export const StyledInputContainer = styled.div`
  width: 100%;
  max-width: 262px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 16px;
`;

export const StyledCharInput = styled.input`
  width: 30px;
  text-align: center;
  font-size: 24px;
  font-weight: 500;
  border: none;
  border-bottom: 2px solid ${colors.GY5};
  color: ${colors.BK};
  background-color: ${colors.GY6};

  &:focus {
    background-color: ${colors.GY6};
    outline: none;
  }
`;
