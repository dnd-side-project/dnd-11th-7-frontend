import { schedule as scheduleApi } from './api';

export const memberSchedule = {
  createMemberSchedule: {
    mutationFn: scheduleApi.createMemberSchedule,
  },
  editMemberSchedule: {
    mutationFn: scheduleApi.editMemberSchedule,
  },
} as const;

export const nonMemberSchedule = {
  createNonMemberSchedule: {
    mutationFn: scheduleApi.createNonMemberSchedule,
  },
  editNonMemberSchedule: {
    mutationFn: scheduleApi.editNonMemberSchedule,
  },
} as const;
