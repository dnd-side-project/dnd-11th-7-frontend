import { schedule as scheduleApi } from './api';

export const memberSchedule = {
  createMemberSchedule: {
    mutationFn: scheduleApi.createMemberSchedule,
  },
} as const;

export const nonMemberSchedule = {
  createNonMemberSchedule: {
    mutationFn: scheduleApi.createNonMemberSchedule,
  },
} as const;
