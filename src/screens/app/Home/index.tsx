import React, { useEffect, useState } from 'react';
import {
  FlatList,
  ListRenderItemInfo,
  StyleProp,
  ViewStyle,
} from 'react-native';

import { Post, postService } from '@domain';

import { Screen, PostItem, EmptyState, EmptyStateMessages } from '@components';
import { AppTabScreenProps } from '@routes';

import { Header } from './components/Header';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const Home = ({ navigation }: AppTabScreenProps<'HomeScreen'>) => {
  const [posts, setPosts] = React.useState<Post[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<boolean | null>(null);

  const messages: EmptyStateMessages = {
    empty: 'Não há publicações no seu feed',
    error: 'Não foi possível carregar o feed 😢',
  };

  const fetchPosts = async () => {
    try {
      setError(null);
      setLoading(true);

      const data = await postService.getList();
      setPosts(data);
    } catch (er) {
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  const keyExtractor = (item: { id: number }): string => item.id.toString();

  const renderItem = ({ item: post }: ListRenderItemInfo<Post>) => {
    return (
      <PostItem.Root>
        <PostItem.Header author={post.author} />
        <PostItem.Content imageURL={post.imageURL} />
        <PostItem.Actions
          favoriteCount={post.favoriteCount}
          commentCount={post.commentCount}
          reactionCount={post.reactionCount}
        />
        <PostItem.Footer
          author={post.author}
          text={post.text}
          commentCount={post.commentCount}
        />
      </PostItem.Root>
    );
  };

  const renderEmpty = () => {
    return (
      <EmptyState
        refetch={fetchPosts}
        error={error}
        loading={loading}
        messages={messages}
      />
    );
  };

  return (
    <Screen style={$screen}>
      <Header />
      <FlatList
        data={posts}
        keyExtractor={keyExtractor}
        renderItem={renderItem}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={renderEmpty}
        contentContainerStyle={{ flex: !posts.length ? 1 : undefined }}
      />
    </Screen>
  );
};

const $screen: StyleProp<ViewStyle> = {
  flex: 1,
  paddingTop: 0,
  paddingBottom: 0,
  paddingHorizontal: 0,
};
