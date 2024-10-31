import { useCallback, useEffect, useRef } from 'react';
import { css } from '@emotion/react';
import { useInfiniteQuery } from '@tanstack/react-query';

import { queries } from '@/apis';
import { FlexBox } from '@/components/common/FlexBox';
import { formatDateTime } from '@/utils/formatDateTime';

import { Props } from './TotalScheduleList.type';

import { ScheduleCard } from '../ScheduleCard';

export const TotalScheduleList = ({ uuid, sortOption }: Props) => {
  const observerTarget = useRef<HTMLDivElement>(null);

  const {
    data: scheduleData,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
  } = useInfiniteQuery({
    ...queries.meeting.times(uuid, sortOption),
    initialPageParam: { page: 0, requestTime: '' },
    getNextPageParam: (lastPage) => {
      if (lastPage.pageInfo.page < lastPage.pageInfo.totalPages - 1) {
        return {
          page: lastPage.pageInfo.page + 1,
          requestTime: lastPage.data.requestTime,
        };
      }
      return undefined;
    },
  });

  const handleObserver = useCallback(
    (entries: IntersectionObserverEntry[]) => {
      const [target] = entries;

      if (target.isIntersecting && hasNextPage && !isFetchingNextPage) {
        fetchNextPage();
      }
    },
    [fetchNextPage, hasNextPage, isFetchingNextPage]
  );

  useEffect(() => {
    const observer = new IntersectionObserver(handleObserver, {
      root: null,
      rootMargin: '20px',
      threshold: 0.1,
    });

    if (observerTarget.current) {
      observer.observe(observerTarget.current);
    }
    return () => observer.disconnect();
  }, [handleObserver]);

  return (
    <FlexBox
      width="100%"
      height="100%"
      justifyContent="flex-start"
      gap={10}
      css={css`
        overflow-y: scroll;
        max-height: 55vh;
      `}
    >
      {scheduleData?.pages.map((schedule, pageIndex) => (
        <FlexBox key={pageIndex} width="100%" height="100%" gap={10}>
          {schedule.data.meetingTimeList.map(({ memberNames, ...items }, index) => (
            <ScheduleCard
              ref={observerTarget}
              key={`${pageIndex}-${index}`}
              variant={pageIndex == 0 && index === 0 ? 'purple' : 'default'}
              attendeeCount={`${schedule.data.numberOfPeople}중에 ${memberNames.length}명`}
              dateTime={formatDateTime(items.startTime)}
              attendees={memberNames}
            />
          ))}
        </FlexBox>
      ))}
    </FlexBox>
  );
};
