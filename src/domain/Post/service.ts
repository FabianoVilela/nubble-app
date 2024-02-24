import { apiAdapter } from '@api';
import { Page } from '@types';

import { postAdapter } from './adapter';
import { postApi } from './api';
import { Post } from './types';

const PER_PAGE = 10;

const getList = async (page: number): Promise<Page<Post>> => {
  const postPageAPI = await postApi.getList({ page, per_page: PER_PAGE });

  return {
    data: postPageAPI.data.map(postAdapter.toPost),
    meta: apiAdapter.toMetaDataPage(postPageAPI.meta),
  };
};

export const postService = {
  getList,
};
