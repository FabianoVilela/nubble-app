import { useQuery } from '@tanstack/react-query';

import { userService } from '../service';

export const useGetUserById = (id: number) => {
  const { data, isLoading, isError, refetch, isFetching } = useQuery({
    queryKey: ['GetUserById', id],
    queryFn: () => userService.getById(id),
    staleTime: 1000 * 60 * 5, // 5 minutes
  });

  return {
    data,
    refetch,
    isLoading,
    isFetching,
    isError,
  };
};
