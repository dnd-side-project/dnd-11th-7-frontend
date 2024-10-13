export type CreateMeetingResponse = {
  meetingUuid: string;
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
  requestTime: string;
  meetingTimeList: MeetingTimeList[];
};

export type PageInfoResponse = {
  page: number;
  size: number;
  totalPages: number;
  totalElements: number;
};

export type MeetingTimeResponse = {
  data: TimesResponse;
  pageInfo: PageInfoResponse;
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
