import { MutationOptions, QueryKeys } from '@infra';
import { useMutation, useQueryClient } from '@tanstack/react-query';

import { postCommentService } from '../service';

export const usePostCommentRemove = (
  postId: number,
  options?: MutationOptions<string>,
) => {
  const queryClient = useQueryClient();

  const { mutate, isError, isPending } = useMutation<
    string,
    unknown,
    { postCommentId: number }
  >({
    mutationFn: ({ postCommentId }) => postCommentService.remove(postCommentId),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: [QueryKeys.PostCommentList, postId],
      });

      if (options?.onSuccess) {
        options.onSuccess(
          options?.errorMessage || 'Cometário deletado com sucesso',
        );
      }
    },
    onError: () => {
      if (options?.onError) {
        return options?.onError(options?.errorMessage || 'Ocorreu um erro');
      }
    },
  });

  const removeComment = async (postCommentId: number) => {
    mutate({ postCommentId });
  };

  return {
    removeComment,
    isPending,
    isError,
  };
};
