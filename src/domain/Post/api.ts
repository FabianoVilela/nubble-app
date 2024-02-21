import { PageAPI, PageParams, api } from '@api';

import { Post } from './types';

async function getList(params?: PageParams): Promise<PageAPI<Post>> {
  const response = await api.get<PageAPI<Post>>('user/post', {
    params,
  });

  return response.data;
}

export const postApi = {
  getList,
};
