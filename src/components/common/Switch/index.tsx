import { createContext, useContext } from 'react';
import { css } from '@emotion/react';

import { FlexBox } from '@/components/common/FlexBox';
import { Body3 } from '@/components/common/Typography';
import { colors } from '@/styles/global';

import { StyeldButton } from './Switch.styled';
import { Props, SwitchButtonProps, SwitchContextType } from './Switch.types';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const SwitchContext = createContext<SwitchContextType<any>>({
  selectedValue: '',
  onChange: () => {},
});
export const Switch = <T,>({ selectedValue, onChange, children }: Props<T>) => {
  return (
    <SwitchContext.Provider value={{ selectedValue, onChange }}>
      <FlexBox flexDir="row" gap={13} width="100%" flexWrap="wrap">
        {children}
      </FlexBox>
    </SwitchContext.Provider>
  );
};

const Button = <T,>({ label, value, img }: SwitchButtonProps<T>) => {
  const { selectedValue, onChange } = useContext<SwitchContextType<T>>(SwitchContext);
  const isSelected = selectedValue === value;

  return (
    <StyeldButton
      label={label}
      value={value}
      css={css`
        border: ${isSelected ? `2px solid ${colors.purple}` : `1px solid ${colors.GY4}`};
        & > img {
          filter: ${isSelected ? '' : 'grayscale(100%) brightness(1.27)'};
        }
      `}
      onClick={() => onChange(value)}
    >
      <Body3 color={isSelected ? 'purple' : 'GY4'}>{label}</Body3>
      {img}
    </StyeldButton>
  );
};

Switch.Button = Button;
