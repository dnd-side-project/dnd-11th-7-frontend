import type { LoaderFunction } from 'react-router-dom';

import { queries } from '@/apis';
import { queryClient } from '@/lib/reactQuery';

// TODO pages 폴더 구조 정리 (colocation)
export const meetingLoader: LoaderFunction = () => {
  queryClient.prefetchQuery(queries.member.meetings);
  return null;
};
