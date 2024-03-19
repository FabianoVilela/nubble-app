import { MutationOptions, useMutation } from '@infra';

import { postCommentService } from '../service';

export const usePostCommentRemove = (option?: MutationOptions<string>) => {
  return useMutation<{ postCommentId: number }, string>(
    ({ postCommentId }) => postCommentService.remove(postCommentId),
    option,
  );
};
