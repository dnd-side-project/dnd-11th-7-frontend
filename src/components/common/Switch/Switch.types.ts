import React from 'react';

export type Props = {
  selectedValue: string;
  onChange: (value: string) => void;
  children: React.ReactNode;
};

export type SwitchButtonProps = {
  label: string;
  img?: React.ReactNode;
};
