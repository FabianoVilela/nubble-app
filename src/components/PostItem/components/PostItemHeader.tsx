import { Image } from 'react-native';

import { Post } from '@domain';

import { Box, Text } from '@components';

interface PostItemProps extends Pick<Post, 'author'> {}

export function PostItemHeader({
  author: { profileURL, userName },
}: PostItemProps) {
  return (
    <>
      <Box flexDirection="row" gap="s12" marginBottom="s16">
        <Image
          source={{ uri: profileURL }}
          style={{ width: 32, height: 32, borderRadius: 16 }}
        />
        <Text preset="paragraphMedium" semiBold>
          {userName}
        </Text>
      </Box>
    </>
  );
}
