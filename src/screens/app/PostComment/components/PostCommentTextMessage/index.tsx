import React, { useState } from 'react';
import { Keyboard } from 'react-native';

import { usePostCommentCreate } from '@domain';

import { TextMessage } from '@components';

interface PostCommentTextMessageProps {
  postId: number;
  onAddComment: () => void;
}

export const PostCommentTextMessage = ({
  postId,
  onAddComment,
}: PostCommentTextMessageProps) => {
  const [message, setMessage] = useState('');

  const { createComment } = usePostCommentCreate(postId, {
    onSuccess: () => {
      setMessage('');
      Keyboard.dismiss();
      onAddComment();
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
