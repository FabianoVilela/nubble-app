import { MutationOptions } from '@infra';
import { useAuthCredentials } from '@services';
import { useMutation } from '@tanstack/react-query';

import { authService } from '../service';
import { AuthCredentials } from '../types';

interface Variables {
  email: string;
  password: string;
}

export const useAuthSignIn = (options?: MutationOptions<AuthCredentials>) => {
  const { saveCredentials } = useAuthCredentials();

  const mutation = useMutation<AuthCredentials, Error, Variables>({
    mutationFn: ({ email, password }) => authService.signIn(email, password),
    retry: false,
    onError: error => {
      if (options?.onError) {
        options.onError(error.message);
      }
    },
    onSuccess: authCredentials => {
      authService.updateToken(authCredentials.token);
      saveCredentials(authCredentials);
    },
  });

  return {
    isLoading: mutation.isPending,
    signIn: (variables: Variables) => mutation.mutate(variables),
  };
};
