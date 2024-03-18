import { useState } from 'react';

import { PostComment } from '@domain';

import { postCommentService } from '../service';

interface Options {
  onSuccess?: (data: PostComment) => void;
  onError?: (message: string) => void;
}

export const usePostCommentCreate = (postId: number, options?: Options) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<boolean | null>(null);

  const createComment = async (message: string) => {
    try {
      setLoading(true);
      setError(null);

      const postComment = await postCommentService.create(postId, message);

      if (options?.onSuccess) {
        options.onSuccess(postComment);
      }
    } catch (er) {
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  return {
    createComment,
    loading,
    error,
  };
};
