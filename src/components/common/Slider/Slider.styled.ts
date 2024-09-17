import styled from '@emotion/styled';

import { colors } from '@/styles/global';

import { Props } from './Slider.types';

export const SliderContainer = styled.div`
  width: 100%;
  position: relative;
  margin: 0 auto 3rem;
`;

export const StyledSlider = styled.input<Props>`
  width: 100%;
  height: 5px;
  margin-top: 80px;
  background: ${({ value, min, max }) =>
    `linear-gradient(
        to right,
        ${colors.purple} 0%,
        ${colors.purple} ${((value - min) / (max - min)) * 100}%,
        ${colors.GY5} ${((value - min) / (max - min)) * 100}%,
        ${colors.GY5} 100%
      )`};
  border-radius: 5px;
  -webkit-appearance: none;

  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    width: 14px;
    height: 14px;
    background-color: ${colors.purple};
    border-radius: 100%;
    cursor: pointer;
    position: relative;
  }
`;

export const SliderLabel = styled.span<Props>`
  color: ${colors.purple};
  font-size: 16px;
  white-space: nowrap;
  margin-top: 8px;
  display: block;
  position: absolute;
  left: ${({ value, min, max }) =>
    `calc(${((value - min) * 100) / (max - min)}% + (${8 - (value - min)}px))`};
  transform: translateX(-50%);
`;

export const BubbleLabel = styled.div<Props>`
  width: 68px;
  height: 32px;
  line-height: 32px;
  background-color: ${colors.purple};
  color: ${colors.WH};
  border-radius: 20px;
  font-size: 18px;
  font-weight: 400;
  text-align: center;
  position: absolute;
  left: ${({ value, min, max }) =>
    `calc(${((value - min) * 100) / (max - min)}% + (${9 - (value - min) / 0.7}px))`};
  transform: translateX(-50%);
  display: ${({ showBubble = true }) => (showBubble ? 'block' : 'none')};

  &::after {
    content: '';
    position: absolute;
    top: 100%;
    left: 50%;
    transform: translateX(-50%);
    border-width: 10px;
    border-style: solid;
    border-color: ${colors.purple} transparent transparent transparent;
  }
`;
