import React from 'react';
import { Alert, Pressable } from 'react-native';

import { PostComment, usePostCommentRemove, postCommentService } from '@domain';
import { useToast } from '@services';

import { Box, ProfileAvatar, Text } from '@components';

interface PostCommentItemProps {
  postComment: PostComment;
  userId: number;
  postAuthorId: number;
  onRemoveComment: () => void;
}

export const PostCommentItem = ({
  postComment,
  onRemoveComment,
  userId,
  postAuthorId,
}: PostCommentItemProps) => {
  const { showToast } = useToast();
  const { author, message, createdAtRelative } = postComment;
  const { mutate, error } = usePostCommentRemove({
    onSuccess: onRemoveComment,
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
          mutate({ postCommentId: postComment.id });
          showToast({
            message: error
              ? 'Falha ao deletar o comentário'
              : 'Cometário deletado com sucesso',
            type: error ? 'error' : 'success',
          });
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
