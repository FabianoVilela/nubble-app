import { api, PageAPI, PageParams } from '@api';

import { PostCommentAPI } from './types';

const BASE_URL = 'user/post_comment';

interface RemoveCommentResponse {
  message: string;
}

const getList = async (
  post_id: number,
  pageParams?: PageParams,
): Promise<PageAPI<PostCommentAPI>> => {
  const response = await api.get<PageAPI<PostCommentAPI>>(BASE_URL, {
    params: {
      post_id,
      ...pageParams,
    },
  });

  return response.data;
};

const create = async (
  post_id: number,
  message: string,
): Promise<PostCommentAPI> => {
  const response = await api.post<PostCommentAPI>(BASE_URL, {
    post_id,
    message,
  });

  return response.data;
};

const remove = async (
  postCommentId: number,
): Promise<RemoveCommentResponse> => {
  const response = await api.delete<RemoveCommentResponse>(
    `${BASE_URL}/${postCommentId}`,
  );

  return response.data;
};

export const postCommentApi = {
  getList,
  create,
  remove,
};
