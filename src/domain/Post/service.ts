import { postAdapter } from './adapter';
import { postApi } from './api';
import { Post } from './types';

const PER_PAGE = 10;

const getList = async (page: number): Promise<Post[]> => {
  const postPageAPI = await postApi.getList({ page, per_page: PER_PAGE });

  return postPageAPI.data.map(postAPI => postAdapter.toPost(postAPI)); // FIXME: Argument of type 'Post' is not assignable to parameter of type 'PostAPI'.
};

export const postService = {
  getList,
};
