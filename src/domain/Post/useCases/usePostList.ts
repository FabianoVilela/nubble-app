import { useEffect, useState } from 'react';

import { Post, postService } from '@domain';

export const usePostList = () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<boolean | null>(null);
  const [postList, setPostList] = useState<Post[]>([]);

  const fetchData = async () => {
    try {
      setError(null);
      setLoading(true);

      const posts = await postService.getList();
      setPostList(posts);
    } catch (er) {
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return {
    postList,
    error,
    loading,
    refetch: fetchData,
  };
};

// export default usePostList;
