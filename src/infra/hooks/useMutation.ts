import { useState } from 'react';

export interface MutationOptions<TData> {
  onSuccess?: (data: TData) => void;
  onError?: (message: string) => void;
  errorMessage?: string;
}
export const useMutation = <TVariables, TData>(
  mutation: (variables: TVariables) => Promise<TData>,
  options?: MutationOptions<TData>,
) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<boolean | null>(null);

  const mutate = async (variables: TVariables) => {
    try {
      setLoading(true);
      setError(null);

      const data = await mutation(variables);

      if (options?.onSuccess) {
        options.onSuccess(data);
      }
    } catch (err) {
      if (options?.onError) {
        options.onError(options?.errorMessage || '');
      }

      setError(true);
    } finally {
      setLoading(false);
    }
  };

  return {
    mutate,
    loading,
    error,
  };
};
