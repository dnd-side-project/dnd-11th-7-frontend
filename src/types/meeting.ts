/**
 * @example {
    "categoryIds" : [ 1, 3 ],
    "meetingName" : "세븐일레븐짱",
    "meetingStartDate" : "2024-08-27",
    "meetingEndDate" : "2024-08-29",
    "numberOfPeople" : 6,
    "isAnonymous" : false,
    "voteEndDate" : "2024-08-26T23:59:59"
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
