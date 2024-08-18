export type Props<T> = {
  selectedValue: T;
  onChange: (value: T) => void;
  children: React.ReactNode;
  /**
   * @default 'contained'
   */
  variant: 'contained' | 'underline' | 'textOnly';
};

export type SegmentedControlContextType<T> = Omit<Props<T>, 'children'> & {
  layoutId: string;
};

export type SegmentedControlTabProps<T> = {
  label: string;
  value: T;
};
