import { PageAPI, api } from '@api';

import { Post } from './types';

const getList = async (): Promise<PageAPI<Post>> => {
  const response = await api.get<PageAPI<Post>>('user/post');
  return response.data;
};

export const postApi = {
  getList,
};
