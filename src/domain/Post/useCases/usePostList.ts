import { useEffect, useState } from 'react';

import { Post, postService } from '@domain';

export const usePostList = () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<boolean | null>(null);
  const [postList, setPostList] = useState<Post[]>([]);
  const [page, setPage] = useState(1);

  const fetchData = async () => {
    try {
      setError(null);
      setLoading(true);

      const posts = await postService.getList(page);
      setPostList(prev => [...prev, ...posts]);
      setPage(prev => prev + 1);
    } catch (er) {
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  const fetchNextPage = () => {
    if (!loading) {
      fetchData();
    }
  };

  useEffect(() => {
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return {
    postList,
    error,
    loading,
    refetch: fetchData,
    fetchNextPage,
  };
};
