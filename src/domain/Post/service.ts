import { postAdapter } from './adapter';
import { postApi } from './api';
import { Post } from './types';

const getList = async (): Promise<Post[]> => {
  const postPageAPI = await postApi.getList();

  return postPageAPI.data.map(postAPI => postAdapter.toPost(postAPI)); // FIXME: Argument of type 'Post' is not assignable to parameter of type 'PostAPI'.
};

export const postService = {
  getList,
};
