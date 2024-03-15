import React from 'react';

import { PostComment } from '@domain';

import { Box, ProfileAvatar, Text } from '@components';

interface PostCommentItemProps {
  postComment: PostComment;
}

export const PostCommentItem = ({ postComment }: PostCommentItemProps) => {
  const { author, message } = postComment;

  return (
    <Box flexDirection="row" alignItems="center" mb="s16">
      <ProfileAvatar imageURL={author.profileURL} />
      <Box ml="s12">
        <Text preset="paragraphSmall" bold>
          {author.userName}
        </Text>
        <Text preset="paragraphSmall" color="gray1">
          {message}
        </Text>
      </Box>
    </Box>
  );
};
