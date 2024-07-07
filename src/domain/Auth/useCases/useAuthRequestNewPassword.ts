import { MutationOptions } from '@infra';
import { useMutation } from '@tanstack/react-query';

import { authService } from '../service';

export const useAuthRequestNewPassword = (
  options?: MutationOptions<string>,
) => {
  const { mutate, isPending: isLoading } = useMutation<string, Error, string>({
    mutationFn: email => authService.requestNewPassword(email),
    retry: false,
    onError: error => {
      if (options?.onError) {
        options.onError(error.message);
      }
    },
    onSuccess: message => {
      if (options?.onSuccess) {
        options?.onSuccess(message);
      }
    },
  });

  return {
    requestNewPassword: (email: string) => mutate(email),
    isLoading,
  };
};
