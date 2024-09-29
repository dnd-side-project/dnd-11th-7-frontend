import { meeting as meetingApis } from './meeting/api';
import { meeting as meetingMutations } from './meeting/mutations';
import { meeting as meetingQueries } from './meeting/queries';
import { member as memberApis } from './member/api';
import { member as memberQueries } from './member/queries';
import { schedule as scheduleApis } from './schedule/api';
import {
  memberSchedule as memberScheduleMutations,
  nonMemberSchedule as nonMemberScheduleMutations,
} from './schedule/mutations';
import { schedule as scheduleQueries } from './schedule/queries';

export const apis = {
  member: memberApis,
  meeting: meetingApis,
  schedule: scheduleApis,
};

export const queries = {
  member: memberQueries,
  meeting: meetingQueries,
  schedule: scheduleQueries,
};

export const mutations = {
  meeting: meetingMutations,
  memberSchedule: memberScheduleMutations,
  nonMemberSchedule: nonMemberScheduleMutations,
};
