import { IconName } from '@/assets/icons';

export type Props = {
  selectedValue: string;
  onChange: (value: string) => void;
  children: React.ReactNode;
};

export type SwitchButtonProps = {
  label: string;
  icon: IconName;
};
