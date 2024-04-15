import { useAuthCredentials } from '@services';
import { useMutation } from '@tanstack/react-query';

import { authService } from '../service';

export const useAuthSignOut = () => {
  const { removeCredentials } = useAuthCredentials();

  const mutation = useMutation<string, unknown, void>({
    mutationFn: authService.signOut,
    retry: false,
    onSuccess: () => {
      authService.removeToken();
      removeCredentials();
    },
  });

  return {
    isLoading: mutation.isPending,
    signOut: () => mutation.mutate(),
  };
};
