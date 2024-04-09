import { useQuery } from '@tanstack/react-query';

import { userService } from '../service';

export const useGetUserById = (id: number) => {
  const { data, isLoading, isError } = useQuery({
    queryKey: ['GetUserById', id],
    queryFn: () => userService.getById(id),
  });

  return {
    data,
    isLoading,
    isError,
  };
};
