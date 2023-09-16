import { Post } from '@domain';

import { Box, Text } from '@components';

interface PostItemFooterProps
  extends Pick<Post, 'author' | 'text' | 'commentCount'> {}

export function PostItemFooter({
  author: { userName },
  text,
  commentCount,
}: PostItemFooterProps) {
  function renderAmountCommentsText(amount: number) {
    if (amount > 0) {
      return (
        <Text bold preset="paragraphSmall" color="primary" mt="s8">
          {amount > 1 ? `ver ${amount} comentários` : 'ver comentário'}
        </Text>
      );
    }

    return null;
  }

  return (
    <Box mt="s16">
      <Text bold preset="paragraphMedium">
        {userName}
      </Text>
      <Text preset="paragraphMedium" color="gray1">
        {text}
      </Text>
      {renderAmountCommentsText(commentCount)}
    </Box>
  );
}
