/**
 * @example {
    "startTime": "2024-09-19T10:00:00",
    "endTime": "2024-09-19T11:00:00",
  }
 */
export type Schedule = {
  startTime: string;
  endTime: string;
};

/**
 * @example {
    "dateOfScheduleList" : [
      {
        "startTime": "2024-09-19T10:00:00",
        "endTime": "2024-09-19T11:00:00",
      },
    ],
    "nickname": "태웅",
  }
 */
export type newSchedule = {
  nickName: string;
  dateOfScheduleList: Schedule[];
};
