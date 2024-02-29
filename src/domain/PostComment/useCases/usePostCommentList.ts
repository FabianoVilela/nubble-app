import { usePaginatedList } from 'src/domain/hooks/usePaginatedList';

import { postCommentService } from '../service';

export const usePostCommentList = (postId: number) => {
  const getList = (page: number) => {
    return postCommentService.getList(postId, page);
  };

  return usePaginatedList(getList);
};
