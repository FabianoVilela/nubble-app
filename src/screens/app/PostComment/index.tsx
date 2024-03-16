import React from 'react';
import {
  FlatList,
  ListRenderItemInfo,
  StyleProp,
  ViewStyle,
} from 'react-native';

import { PostComment as PostCommentType, usePostCommentList } from '@domain';

import { EmptyState, EmptyStateMessages, Screen } from '@components';
import { useAppSafeArea } from '@hooks';
import { AppScreenProps } from '@routes';

import { PostCommentItem, PostCommentBottom } from './components';

export const PostComment = ({ route }: AppScreenProps<'PostCommentScreen'>) => {
  const postId = route.params?.postId;

  const messages: EmptyStateMessages = {
    empty: 'Não há comentários no seu post',
    error: 'Não foi possível carregar os comentários 😢',
  };

  const { list, fetchNextPage, hasNextPage, error, loading, refresh } =
    usePostCommentList(postId);

  const { bottom } = useAppSafeArea();

  const renderItem = ({ item }: ListRenderItemInfo<PostCommentType>) => {
    return <PostCommentItem postComment={item} />;
  };

  const keyExtractor = (item: { id: number }): string => item.id.toString();

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
    <Screen title="Comentários" canGoBack style={$screen}>
      <FlatList
        keyExtractor={keyExtractor}
        showsVerticalScrollIndicator={false}
        data={list}
        renderItem={renderItem}
        ListEmptyComponent={renderEmpty}
        contentContainerStyle={{
          flex: !list.length ? 1 : undefined,
          paddingBottom: bottom,
        }}
      />
      <PostCommentBottom
        hasNextPage={hasNextPage && !loading}
        fetchNextPage={fetchNextPage}
      />
    </Screen>
  );
};

const $screen: StyleProp<ViewStyle> = {
  flex: 1,
};
