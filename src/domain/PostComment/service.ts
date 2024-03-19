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

const create = async (
  postId: number,
  message: string,
): Promise<PostComment> => {
  const postCommentAPI = await postCommentApi.create(postId, message);

  return postCommentAdapter.toPostComment(postCommentAPI);
};

const remove = async (postCommentId: number): Promise<string> => {
  const response = await postCommentApi.remove(postCommentId);
  return response.message;
};

/**
 * @description user can delete the comment if it is the post author or comment author
 *
 * @param postComment comment to be deleted
 * @param userId the current session user id
 * @param postAuthorId the id of the post author
 */
const isAllowToDelete = (
  postComment: PostComment,
  userId: number,
  postAuthorId: number,
): boolean => {
  if (postComment.author.id === userId) {
    return true;
  }

  return postAuthorId === userId;
};

export const postCommentService = {
  getList,
  create,
  remove,
  isAllowToDelete,
};
