import { useState } from 'react';

export interface MutationOptions<TData> {
  onSuccess?: (data: TData) => void;
  onError?: (message: string) => void;
  errorMessage?: string;
}

/**
 * @deprecated use useMutation from `@tanstack/react-query`
 */
export const useMutation = <TVariables, TData>(
  mutation: (variables: TVariables) => Promise<TData>,
  options?: MutationOptions<TData>,
) => {
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState<boolean | null>(null);

  const mutate = async (variables: TVariables) => {
    try {
      setIsLoading(true);
      setIsError(null);

      const data = await mutation(variables);

      if (options?.onSuccess) {
        options.onSuccess(data);
      }
    } catch (err) {
      if (options?.onError) {
        options.onError(options?.errorMessage || '');
      }

      setIsError(true);
    } finally {
      setIsLoading(false);
    }
  };

  return {
    mutate,
    isLoading,
    isError,
  };
};
