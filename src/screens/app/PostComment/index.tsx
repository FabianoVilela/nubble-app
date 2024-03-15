import React from 'react';
import { FlatList, ListRenderItemInfo } from 'react-native';

import { PostComment as PostCommentType, usePostCommentList } from '@domain';

import { Screen } from '@components';
import { AppScreenProps } from '@routes';

import { PostCommentItem } from './components/PostCommentItem';

export const PostComment = ({ route }: AppScreenProps<'PostCommentScreen'>) => {
  const postId = route.params?.postId;
  const { list } = usePostCommentList(postId);

  const renderItem = ({ item }: ListRenderItemInfo<PostCommentType>) => {
    return <PostCommentItem postComment={item} />;
  };

  const keyExtractor = (item: { id: number }): string => item.id.toString();

  return (
    <Screen title="Comentários" canGoBack>
      <FlatList
        keyExtractor={keyExtractor}
        data={list}
        renderItem={renderItem}
      />
    </Screen>
  );
};
