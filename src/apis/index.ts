import { meeting as meetingApis } from './meeting/api';
import { meeting as meetingMutations } from './meeting/mutations';
import { meeting as meetingQueries } from './meeting/queries';
import { member as memberApis } from './member/api';
import { member as memberQueries } from './member/queries';
import {
  memberSchedule as memberScheduleMutations,
  nonMemberSchedule as nonMemberScheduleMutations,
} from './schedule/mutations';

export const apis = {
  member: memberApis,
  meeting: meetingApis,
};

export const queries = {
  member: memberQueries,
  meeting: meetingQueries,
};

export const mutations = {
  meeting: meetingMutations,
  memberSchedule: memberScheduleMutations,
  nonMemberSchedule: nonMemberScheduleMutations,
};
