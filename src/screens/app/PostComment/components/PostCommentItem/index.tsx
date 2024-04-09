import React from 'react';
import { Alert, Pressable } from 'react-native';

import { PostComment, usePostCommentRemove, postCommentService } from '@domain';
import { useToastService } from '@services';

import { Box, ProfileAvatar, Text } from '@components';

interface PostCommentItemProps {
  postId: number;
  postComment: PostComment;
  userId: number;
  postAuthorId: number;
}

export const PostCommentItem = ({
  postId,
  postComment,
  userId,
  postAuthorId,
}: PostCommentItemProps) => {
  const { showToast } = useToastService();
  const { author, message, createdAtRelative } = postComment;
  const { removeComment } = usePostCommentRemove(postId, {
    onSuccess: () =>
      showToast({
        message: 'Cometário deletado com sucesso',
        type: 'success',
      }),
    onError: () => {
      showToast({
        message: 'Falha ao deletar o comentário',
        type: 'error',
      });
    },
  });

  const isAllowToDelete = postCommentService.isAllowToDelete(
    postComment,
    userId,
    postAuthorId,
  );

  const confirmRemove = () => {
    Alert.alert('Deseja excluir o comentário?', 'pressione confirmar', [
      {
        text: 'Confirmar',
        onPress: () => {
          removeComment(postComment.id);
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
    <Pressable disabled={!isAllowToDelete} onLongPress={confirmRemove}>
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
