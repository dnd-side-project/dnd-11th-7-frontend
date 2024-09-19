import React from 'react';

export type Props = {
  categories: string[];
  meetingName: string;
  meetingStartDate: string;
  meetingEndDate: string;
  dueDateTime: string;
  children: React.ReactNode;
};
