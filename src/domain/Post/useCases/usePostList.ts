import { Post, postService, usePaginatedList } from '@domain';

export const usePostList = () => {
  return usePaginatedList<Post>(postService.getList);
};
