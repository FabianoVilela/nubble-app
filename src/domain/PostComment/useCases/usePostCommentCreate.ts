import { PostComment } from '@domain';
import { MutationOptions, QueryKeys } from '@infra';
import { useMutation, useQueryClient } from '@tanstack/react-query';

import { postCommentService } from '../service';

export const usePostCommentCreate = (
  postId: number,
  options?: MutationOptions<PostComment>,
) => {
  const queryClient = useQueryClient();

  const { mutate, isPending, isError } = useMutation<
    PostComment,
    unknown,
    { message: string }
  >({
    mutationFn: variables =>
      postCommentService.create(postId, variables.message),
    onSuccess: data => {
      queryClient.invalidateQueries({
        queryKey: [QueryKeys.PostCommentList, postId],
      });

      if (options?.onSuccess) {
        options.onSuccess(data);
      }
    },
    onError: () => {
      if (options?.onError) {
        options.onError(options?.errorMessage || 'ocorreu um erro');
      }
    },
  });

  const createComment = async (message: string) => {
    mutate({ message });
  };

  return {
    createComment,
    isPending,
    isError,
  };
};
