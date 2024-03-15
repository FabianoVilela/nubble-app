import { Post } from '@domain';
import { useNavigation } from '@react-navigation/native';

import { Box, Text } from '@components';

interface PostItemFooterProps
  extends Pick<Post, 'id' | 'author' | 'text' | 'commentCount'> {}

export const PostItemFooter = ({
  id,
  author: { userName },
  text,
  commentCount,
}: PostItemFooterProps) => {
  const navigation = useNavigation();

  const navigateToPostCommentScreen = () => {
    navigation.navigate('PostCommentScreen', { postId: id });
  };

  const renderAmountCommentsText = (amount: number) => {
    if (amount > 0) {
      return (
        <Text
          bold
          preset="paragraphSmall"
          color="primary"
          mt="s8"
          onPress={navigateToPostCommentScreen}>
          {amount > 1 ? `ver ${amount} comentários` : 'ver comentário'}
        </Text>
      );
    }

    return null;
  };

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
};
