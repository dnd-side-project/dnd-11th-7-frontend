import { createContext, useContext } from 'react';
import { css } from '@emotion/react';

import { FlexBox } from '@/components/common/FlexBox';
import { Body3 } from '@/components/common/Typography';
import { colors } from '@/styles/global';

import { StyeldButton } from './Switch.styled';
import { Props, SwitchButtonProps } from './Switch.types';

const SwitchContext = createContext({
  selectedValue: '',
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  onChange: (_value: string) => {},
});
export const Switch = ({ selectedValue, onChange, children }: Props) => {
  return (
    <SwitchContext.Provider value={{ selectedValue, onChange }}>
      <FlexBox flexDir="row" gap={13} width="100%" flexWrap="wrap">
        {children}
      </FlexBox>
    </SwitchContext.Provider>
  );
};

const Button = ({ label, img }: SwitchButtonProps) => {
  const { selectedValue, onChange } = useContext(SwitchContext);
  const isSelected = selectedValue === label;

  return (
    <StyeldButton
      label={label}
      css={css`
        border: ${isSelected ? `2px solid ${colors.purple}` : `1px solid ${colors.GY4}`};
        & > img {
          filter: ${isSelected ? '' : 'grayscale(100%) brightness(1.27)'};
        }
      `}
      onClick={() => onChange(label)}
    >
      <Body3 color={isSelected ? 'purple' : 'GY4'}>{label}</Body3>
      {img}
    </StyeldButton>
  );
};

Switch.Button = Button;
