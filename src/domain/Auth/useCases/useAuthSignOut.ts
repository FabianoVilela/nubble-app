import { useMutation } from '@tanstack/react-query';

import { authService } from '../service';

export const useAuthSignOut = () => {
  const mutation = useMutation<string, unknown, void>({
    mutationFn: authService.signOut,
    retry: false,
  });

  return {
    isLoading: mutation.isPending,
    signOut: () => mutation.mutate(),
  };
};
