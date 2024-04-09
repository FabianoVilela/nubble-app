import React, { useState } from 'react';
import { Keyboard } from 'react-native';

import { usePostCommentCreate } from '@domain';
import { useToastService } from '@services';

import { TextMessage } from '@components';

interface PostCommentTextMessageProps {
  postId: number;
}

export const PostCommentTextMessage = ({
  postId,
}: PostCommentTextMessageProps) => {
  const { showToast } = useToastService();

  const [message, setMessage] = useState('');

  const { createComment, isError } = usePostCommentCreate(postId, {
    onSuccess: () => {
      setMessage('');
      Keyboard.dismiss();

      showToast({
        message: isError
          ? 'Falha ao criar o comentário'
          : 'Cometário criado com sucesso',
        type: isError ? 'error' : 'success',
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
