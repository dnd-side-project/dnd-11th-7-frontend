import styled from '@emotion/styled';

import { colors } from '@/styles/global';

import { Caption } from '../Typography/index';

export const StyledInputContainer = styled.div`
  width: 100%;
  max-width: 262px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

export const StyledCharContainer = styled.div`
  width: 100%;
  justify-content: space-between;
  display: flex;
  align-items: center;
`;

export const StyledCharInput = styled.input`
  width: 30px;
  height: 100%;
  text-align: center;
  font-size: 24px;
  font-weight: 500;
  border: none;
  border-bottom: 2px solid ${colors.GY5};
  border-radius: 0;
  color: ${colors.BK};
  background-color: ${colors.GY6};
  -webkit-appearance: none;
  appearance: none;

  &:focus {
    outline: none;
    background-color: ${colors.GY6};
  }
`;

export const StyledHelperText = styled(Caption)`
  margin-top: 8px;
`;
