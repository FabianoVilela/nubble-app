import React, { useState } from 'react';
import { Keyboard } from 'react-native';

import { usePostCommentCreate } from '@domain';

import { TextMessage } from '@components';

interface PostCommentTextMessageProps {
  postId: number;
}

export const PostCommentTextMessage = ({
  postId,
}: PostCommentTextMessageProps) => {
  const [message, setMessage] = useState('');
  const { createComment } = usePostCommentCreate(postId);

  const onPressSend = async () => {
    await createComment(message);
    setMessage('');
    Keyboard.dismiss();
  };

  return (
    <TextMessage
      placeholder="Adicione um comentário"
      onPressSend={onPressSend}
      value={message}
      onChangeText={setMessage}
    />
  );
};
