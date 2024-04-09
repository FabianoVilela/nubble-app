import { useEffect, useState } from 'react';

import { useInfiniteQuery } from '@tanstack/react-query';
import { Page } from '@types';

export interface UsePaginatedListResult<T> {
  list: T[];
  isError: boolean | null;
  isLoading: boolean;
  isFetching: boolean;
  refresh: () => void;
  fetchNextPage: () => void;
  hasNextPage: boolean;
}

export const usePaginatedList = <T>(
  queryKey: readonly unknown[],
  getList: (page: number) => Promise<Page<T>>,
): UsePaginatedListResult<T> => {
  const [list, setList] = useState<T[]>([]);

  const query = useInfiniteQuery({
    queryKey,
    queryFn: ({ pageParam }) => getList(pageParam),
    initialPageParam: 1,
    getNextPageParam: ({ meta }) =>
      meta.hasNextPage ? meta.currentPage + 1 : undefined,
  });

  const {
    refetch: refresh,
    isLoading,
    isFetching,
    isError,
    data,
    fetchNextPage,
    hasNextPage,
  } = query;

  useEffect(() => {
    if (data) {
      const newList = data.pages.reduce<T[]>((prev, curr) => {
        return [...prev, ...curr.data];
      }, []);
      setList(newList);
    }
  }, [data]);

  return {
    list,
    isError,
    isLoading,
    isFetching,
    refresh,
    fetchNextPage,
    hasNextPage: !!hasNextPage,
  };
};
