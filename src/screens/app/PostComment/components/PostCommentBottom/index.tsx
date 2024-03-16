import React from 'react';
import { TouchableOpacity } from 'react-native';

import { Text } from '@components';

interface PostCommentBottomProps {
  fetchNextPage: () => void;
  hasNextPage: boolean;
}

export const PostCommentBottom = ({
  fetchNextPage,
  hasNextPage,
}: PostCommentBottomProps) => {
  if (hasNextPage) {
    return (
      <TouchableOpacity onPress={fetchNextPage} activeOpacity={0.7}>
        <Text bold color="primary" textAlign="center">
          Ver mais
        </Text>
      </TouchableOpacity>
    );
  }

  return null;
};
