import React from 'react';
import {
  FlatList,
  ListRenderItemInfo,
  StyleProp,
  ViewStyle,
} from 'react-native';

import { Post, usePostList } from '@domain';

import { Screen, PostItem, EmptyState, EmptyStateMessages } from '@components';
import { AppTabScreenProps } from '@routes';

import { Header } from './components/Header';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const Home = ({ navigation }: AppTabScreenProps<'HomeScreen'>) => {
  const messages: EmptyStateMessages = {
    empty: 'Não há publicações no seu feed',
    error: 'Não foi possível carregar o feed 😢',
  };

  const { postList, refetch, error, loading } = usePostList();

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
        refetch={refetch}
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
        data={postList}
        keyExtractor={keyExtractor}
        renderItem={renderItem}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={renderEmpty}
        contentContainerStyle={{ flex: !postList.length ? 1 : undefined }}
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
