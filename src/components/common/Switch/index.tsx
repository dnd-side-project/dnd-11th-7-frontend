import { createContext, useContext } from 'react';
import { css } from '@emotion/react';

import { FlexBox } from '@/components/common/FlexBox';
import { Icon } from '@/components/common/Icon';
import { Body3 } from '@/components/common/Typography';
import { colors } from '@/styles/global';

import { StyeldButton } from './Switch.styled';
import { Props, SwitchButtonProps } from './Switch.types';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const SwitchContext = createContext({ selectedValue: '', onChange: (_value: string) => {} });
export const Switch = ({ selectedValue, onChange, children }: Props) => {
  return (
    <SwitchContext.Provider value={{ selectedValue, onChange }}>
      <FlexBox
        flexDir="row"
        gap={13}
        css={css`
          width: 100%;
        `}
      >
        {children}
      </FlexBox>
    </SwitchContext.Provider>
  );
};

const Button = ({ label, icon }: SwitchButtonProps) => {
  const { selectedValue, onChange } = useContext(SwitchContext);
  const isSelected = selectedValue === label;

  return (
    <StyeldButton
      label={label}
      icon={icon}
      css={css`
        border-color: ${isSelected ? `${colors.purple}` : `${colors.GY4}`};
      `}
      onClick={() => onChange(label)}
    >
      <Body3 color={isSelected ? 'purple' : 'GY4'}>{label}</Body3>
      <Icon name={icon} size={112} color={isSelected ? 'purple' : 'GY4'} />
    </StyeldButton>
  );
};

Switch.Button = Button;
