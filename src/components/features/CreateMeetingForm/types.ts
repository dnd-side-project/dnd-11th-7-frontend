export type CreateMeetingFormBaseProps = {
  onNext: () => void;
  onPrev: () => void;
};

export type FormData<T> = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  context: { state: T; setState: (newState: T) => void; others?: any };
};
