import { PageAPI } from '@api';

import { postApi } from './api';
import { Post } from './types';

async function getList(): Promise<PageAPI<Post>> {
  const postList = await postApi.getList();

  return postList;
}

export const postService = {
  getList,
};
