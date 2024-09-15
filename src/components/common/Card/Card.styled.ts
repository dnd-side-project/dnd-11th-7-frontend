import { css } from '@emotion/react';
import styled from '@emotion/styled';

import { colors } from '@/styles/global';

import { Props } from './Card.types';

const emojiStyles = {
  none: css`
    display: none;
  `,
  'top-right': css`
    right: 10px;
    top: -50px;
  `,
  'top-left': css`
    left: 45px;
    top: -50px;
    transform: translateX(-50%);
  `,
};

const jjakkakHandsStyles = {
  none: css`
    display: none;
  `,
  'top-right': css`
    right: 10px;
    top: -35px;
  `,
  'top-left': css`
    left: 45px;
    top: -35px;
    transform: translateX(-50%);
  `,
};

export const StyledCardContainer = styled.div<Props>`
  width: 100%;
  padding: 24px 20px;
  border-radius: 16px;
  background-color: ${colors.WH};
  box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.06);
  position: relative;
`;

export const EmojiWrapper = styled.div<Props>`
  position: absolute;
  height: 50px;
  overflow: hidden;
  ${({ emojiPosition }) => emojiStyles[emojiPosition || 'none']}
`;
export const HandsWrapper = styled.div<Props>`
  position: absolute;
  ${({ emojiPosition }) => jjakkakHandsStyles[emojiPosition || 'none']}
`;
