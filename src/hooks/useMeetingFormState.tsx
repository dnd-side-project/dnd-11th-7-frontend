import { useReducer } from 'react';

import { MeetingForm } from '@/types/meeting';

type Action =
  | 'categoryIds'
  | 'meetingName'
  | 'meetingDate'
  | 'numberOfPeople'
  | 'isAnonymous'
  | 'dueDateTime';

export const useMeetingFormState = () => {
  const [formData, dispatch] = useReducer(reducer, createInitialFormState());

  return [formData, dispatch] as const;
};

const createInitialFormState = (): MeetingForm => ({
  categoryIds: [],
  meetingName: '',
  meetingStartDate: '',
  meetingEndDate: '',
  numberOfPeople: 2,
  isAnonymous: false,
  dueDateTime: '',
});

const reducer = (
  state: MeetingForm,
  action: { type: Action; payload: MeetingForm }
): MeetingForm => {
  switch (action.type) {
    case 'categoryIds': {
      return { ...state, categoryIds: action.payload.categoryIds };
    }
    case 'meetingName': {
      return { ...state, meetingName: action.payload.meetingName };
    }
    case 'meetingDate': {
      return {
        ...state,
        meetingStartDate: action.payload.meetingStartDate,
        meetingEndDate: action.payload.meetingEndDate,
      };
    }
    case 'numberOfPeople': {
      return { ...state, numberOfPeople: action.payload.numberOfPeople };
    }
    case 'isAnonymous': {
      return { ...state, isAnonymous: action.payload.isAnonymous };
    }
    case 'dueDateTime': {
      return { ...state, dueDateTime: action.payload.dueDateTime };
    }
    default: {
      return state;
    }
  }
};
