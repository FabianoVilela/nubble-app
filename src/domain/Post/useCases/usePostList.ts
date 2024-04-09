import { Post, postService } from '@domain';
import { QueryKeys, usePaginatedList } from '@infra';

export const usePostList = () => {
  return usePaginatedList<Post>([QueryKeys.PostList], postService.getList);
};
