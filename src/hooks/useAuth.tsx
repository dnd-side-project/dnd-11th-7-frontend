import { useSuspenseQuery } from '@tanstack/react-query';

import { queries } from '@/apis';

export const useAuth = () => {
  const accessToken = localStorage.getItem('accessToken') ?? '';

  const { data } = useSuspenseQuery({ ...queries.member.check(accessToken) });

  const isAuthenticated = data.isAuthenticated;

  return { accessToken, isAuthenticated };
};
