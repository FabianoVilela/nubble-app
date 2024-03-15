import React from 'react';
import {
  FlatList,
  ListRenderItemInfo,
  RefreshControl,
  StyleProp,
  ViewStyle,
} from 'react-native';

import { Post, usePostList } from '@domain';
import { useScrollToTop } from '@react-navigation/native';

import { Screen, PostItem, EmptyState, EmptyStateMessages } from '@components';
import { AppTabScreenProps } from '@routes';

import { Header } from './components/Header';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const Home = ({ navigation }: AppTabScreenProps<'HomeScreen'>) => {
  const messages: EmptyStateMessages = {
    empty: 'Não há publicações no seu feed',
    error: 'Não foi possível carregar o feed 😢',
  };

  const {
    list: postList,
    refresh,
    error,
    loading,
    fetchNextPage,
  } = usePostList();

  const flatListRef = React.useRef<FlatList<Post>>(null);
  useScrollToTop(flatListRef);

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
          id={post.id}
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
        refetch={refresh}
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
        ref={flatListRef}
        data={postList}
        keyExtractor={keyExtractor}
        renderItem={renderItem}
        onEndReached={fetchNextPage}
        onEndReachedThreshold={0.1}
        refreshControl={
          <RefreshControl refreshing={loading} onRefresh={refresh} />
        }
        refreshing={loading}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={renderEmpty}
        contentContainerStyle={{ flex: !postList?.length ? 1 : undefined }}
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
