export type CheckResponse = {
  isAuthenticated: boolean;
};

export type InfoResponse = {
  meetingId: number;
  categoryNames: string[];
  meetingName: string;
  meetingStartDate: string;
  meetingEndDate: string;
  dueDateTime: string;
};

export type TimesResponse = {
  length: number;
  numberOfPeople: number;
  isAnonymous: boolean;
  meetingTimeList: MeetingTimeList[];
};

export type MeetingTimeList = {
  memberNames: string[];
  startTime: string;
  endTime: string;
};

export type ParticipantsResponse = {
  numberOfPeople: number;
  isAnonymous: boolean;
  participantInfoList: Participant[];
};

export type Participant = {
  nickname: string;
  isAssigned: boolean;
  isLeader: boolean;
};
