import React, { useState } from 'react';
import { Keyboard } from 'react-native';

import { usePostCommentCreate } from '@domain';
import { useToast } from '@services';

import { TextMessage } from '@components';

interface PostCommentTextMessageProps {
  postId: number;
  onAddComment: () => void;
}

export const PostCommentTextMessage = ({
  postId,
  onAddComment,
}: PostCommentTextMessageProps) => {
  const { showToast } = useToast();

  const [message, setMessage] = useState('');

  const { createComment, error } = usePostCommentCreate(postId, {
    onSuccess: () => {
      setMessage('');
      Keyboard.dismiss();
      onAddComment();

      showToast({
        message: error
          ? 'Falha ao criar o comentário'
          : 'Cometário criado com sucesso',
        type: error ? 'error' : 'success',
      });
    },
  });

  return (
    <TextMessage
      placeholder="Adicione um comentário"
      onPressSend={createComment}
      value={message}
      onChangeText={setMessage}
    />
  );
};
