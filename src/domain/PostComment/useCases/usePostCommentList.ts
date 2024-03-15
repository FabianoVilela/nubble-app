import { usePaginatedList } from '@domain';

import { postCommentService } from '../service';

export const usePostCommentList = (postId: number) => {
  const getList = (page: number) => {
    return postCommentService.getList(postId, page);
  };

  return usePaginatedList(getList);
};
