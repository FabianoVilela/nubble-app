import { apiAdapter } from '@api';
import { Page } from '@types';

import { postCommentAdapter } from './adapter';
import { postCommentApi } from './api';
import { PostComment } from './types';

const PER_PAGE = 10;
const getList = async (
  postId: number,
  page: number,
): Promise<Page<PostComment>> => {
  const postCommentPageAPI = await postCommentApi.getList(postId, {
    page,
    per_page: PER_PAGE,
  });

  return {
    data: postCommentPageAPI.data.map(postCommentAdapter.toPostComment),
    meta: apiAdapter.toMetaDataPage(postCommentPageAPI.meta),
  };
};

export const postCommentService = {
  getList,
};
