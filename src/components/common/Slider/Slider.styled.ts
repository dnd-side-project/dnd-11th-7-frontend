import styled from '@emotion/styled';

import { colors } from '@/styles/global';

import { Props } from './Slider.types';

export const StyledSlider = styled.input<Props>`
  width: 300px;
  height: 5px;
  background: ${({ value = 1, min = 1, max = 10 }) =>
    `linear-gradient(
        to right,
        ${colors.purple} 0%,
        ${colors.purple} ${((value - min) / (max - min)) * 100}%,
        ${colors.GY5} ${((value - min) / (max - min)) * 100}%,
        ${colors.GY5} 100%
      )`};
  border-radius: 5px;
  outline: none;
  transition: background-color 0.3s;
  cursor: pointer;
  -webkit-appearance: none;
  appearance: none;

  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    width: 14px;
    height: 14px;
    background-color: ${colors.purple};
    border-radius: 100%;
    cursor: pointer;
  }

  &:focus {
    outline: none;
  }

  ${(props) =>
    props.disabled &&
    `
      background-color: ${colors.GY5};
      cursor: not-allowed;
      &::-webkit-slider-thumb {
        background-color: ${colors.GY5};
      }
    `}
`;
