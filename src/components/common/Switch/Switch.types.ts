import React from 'react';

export type Props<T> = {
  selectedValue: T;
  onChange: (value: T) => void;
  children: React.ReactNode;
};

export type SwitchContextType<T> = {
  selectedValue: T;
  onChange: (value: T) => void;
};

export type SwitchButtonProps<T> = {
  label: string;
  value: T;
  img?: React.ReactNode;
};
