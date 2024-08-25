export type CreateMeetingFormBaseProps = {
  onNext: () => void;
  onPrev: () => void;
};

export type FormData<T> = {
  context: { state: T; setState: (newState: T) => void };
};
