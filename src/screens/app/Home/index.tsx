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

import { Header } from './components/Header';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export function Home({ navigation }: AppTabScreenProps<'HomeScreen'>) {
  const [posts, setPosts] = React.useState<Post[]>([]);

  useEffect(() => {
    postService.getList().then(postList => setPosts(postList));
  }, []);

  function renderItem({ item: post }: ListRenderItemInfo<Post>) {
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
  }

  return (
    <Screen style={$screen}>
      <Header />
      <FlatList
        data={posts}
        keyExtractor={item => item.id}
        renderItem={renderItem}
        showsVerticalScrollIndicator={false}
        // ListHeaderComponent={<Header />}
      />
    </Screen>
  );
}

const $screen: StyleProp<ViewStyle> = {
  paddingTop: 0,
  paddingBottom: 0,
  paddingHorizontal: 0,
};
