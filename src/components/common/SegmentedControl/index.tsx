import { createContext, useContext, useId } from 'react';

import { StyledContainer, StyledTabButton, StyledIndicator } from './SegmentedControl.styled';
import {
  Props,
  SegmentedControlContextType,
  SegmentedControlTabProps,
} from './SegmentedControl.types';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const SegmentedControlContext = createContext<SegmentedControlContextType<any>>({
  variant: 'contained',
  selectedValue: '',
  onChange: () => {},
  layoutId: '',
});

export const SegmentedControl = <T,>({
  variant = 'contained',
  selectedValue,
  onChange,
  children,
}: Props<T>) => {
  const layoutId = useId();

  const value = { variant, selectedValue, onChange, layoutId };

  return (
    <SegmentedControlContext.Provider value={value}>
      <StyledContainer variant={variant}>{children}</StyledContainer>
    </SegmentedControlContext.Provider>
  );
};

const Tab = <T,>({ label, value }: SegmentedControlTabProps<T>) => {
  const { variant, selectedValue, onChange, layoutId } =
    useContext<SegmentedControlContextType<T>>(SegmentedControlContext);
  const isSelected = selectedValue === value;

  return (
    <StyledTabButton variant={variant} isSelected={isSelected} onClick={() => onChange(value)}>
      <span>{label}</span>
      {isSelected && <StyledIndicator layoutId={layoutId} variant={variant} />}
    </StyledTabButton>
  );
};

SegmentedControl.Tab = Tab;
