/**
 * @example {
    "categoryIds" : [ 1, 3 ],
    "meetingName" : "세븐일레븐짱",
    "meetingStartDate" : "2024-08-27",
    "meetingEndDate" : "2024-08-29",
    "numberOfPeople" : 6,
    "isAnonymous" : false,
    "dueDateTime" : "2024-08-26T23:59:59"
  }
 */
export type MeetingForm = {
  categoryIds: number[];
  meetingName: string;
  meetingStartDate: string;
  meetingEndDate: string;
  numberOfPeople: number;
  isAnonymous: boolean;
  dueDateTime: string;
};

/**
 * @example {
    categoryNames: ['학교'];
    meetingId: 3;
    meetingUuid: 'ee8c95fd';
    meetingName: 'DND 11기 7조 회의';
    meetingStartDate: '2024-09-17';
    meetingEndDate: '2024-09-27';
    dueDateTime: '2024-09-16T23:59:59';
    numberOfPeople: 6;
    isAnonymous: false;
  }
*/
export type Meeting = {
  categoryNames: string[];
  meetingId: number;
  meetingUuid: string;
  meetingName: string;
  meetingStartDate: string;
  meetingEndDate: string;
  dueDateTime: string;
  numberOfPeople: number;
  isAnonymous: boolean;
};
