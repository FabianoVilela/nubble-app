import React, { useEffect } from 'react';
import {
  FlatList,
  ListRenderItemInfo,
  StyleProp,
  ViewStyle,
} from 'react-native';

import { Post, postService } from '@domain';

import { Screen, PostItem } from '@components';
import { AppTabScreenProps } from '@routes';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export function Home({ navigation }: AppTabScreenProps<'HomeScreen'>) {
  const [posts, setPosts] = React.useState<Post[]>([]);

  useEffect(() => {
    postService.getList().then(postList => setPosts(postList));
  }, []);

  function renderItem({ item }: ListRenderItemInfo<Post>) {
    return (
      <PostItem.Root>
        <PostItem.Header author={item.author} />
        <PostItem.Content imageURL={item.imageURL} />
        <PostItem.Actions
          favoriteCount={item.favoriteCount}
          commentCount={item.commentCount}
          reactionCount={item.reactionCount}
        />
      </PostItem.Root>
    );
  }

  return (
    <Screen style={$screen}>
      <FlatList
        data={posts}
        keyExtractor={item => item.id}
        renderItem={renderItem}
        showsVerticalScrollIndicator={false}
      />
    </Screen>
  );
}

const $screen: StyleProp<ViewStyle> = {
  paddingTop: 0,
  paddingBottom: 0,
  paddingHorizontal: 0,
};
