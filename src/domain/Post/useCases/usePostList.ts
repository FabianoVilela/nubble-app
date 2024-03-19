import { Post, postService } from '@domain';
import { usePaginatedList } from '@infra';

export const usePostList = () => {
  return usePaginatedList<Post>(postService.getList);
};
