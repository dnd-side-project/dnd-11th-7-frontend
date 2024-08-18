export type Props = {
  title: string;
  description?: string;
  header: React.ReactNode;
  content: React.ReactNode;
};

export type HeaderProps = {
  progress: number;
  maxProgress: number;
  onPrev: () => void;
};
