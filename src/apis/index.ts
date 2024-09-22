import { meeting as meetingApis } from './meeting/api';
import { meeting as meetingMutations } from './meeting/mutations';
import { meeting as meetingQueries } from './meeting/queries';
import { member as memberApis } from './member/api';
import { member as memberQueries } from './member/queries';

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
};
