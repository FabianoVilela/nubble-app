import React from 'react';
import { Alert, Pressable } from 'react-native';

import { PostComment, usePostCommentRemove } from '@domain';

import { Box, ProfileAvatar, Text } from '@components';

interface PostCommentItemProps {
  postComment: PostComment;
}

export const PostCommentItem = ({ postComment }: PostCommentItemProps) => {
  const { author, message, createdAtRelative } = postComment;

  const { mutate } = usePostCommentRemove();

  const confirmRemove = () => {
    Alert.alert('Deseja excluir o comentário?', 'pressione confirmar', [
      {
        text: 'Confirmar',
        onPress: () => {
          mutate({ postCommentId: postComment.id });
        },
        style: 'destructive',
      },
      {
        text: 'Cancelar',
        style: 'cancel',
      },
    ]);
  };

  return (
    <Pressable onLongPress={confirmRemove}>
      <Box flexDirection="row" alignItems="center" mb="s16">
        <ProfileAvatar imageURL={author.profileURL} />
        <Box flex={1} ml="s12">
          <Text preset="paragraphSmall" bold>
            {author.userName}
          </Text>
          <Text preset="paragraphSmall" color="gray1">
            {message}
            <Text preset="paragraphSmall" color="gray3">
              {` ${createdAtRelative}`}
            </Text>
          </Text>
        </Box>
      </Box>
    </Pressable>
  );
};
