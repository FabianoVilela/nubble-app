import { Post } from '@domain';

import { Box, Text, ProfileAvatar } from '@components';

interface PostItemProps extends Pick<Post, 'author'> {}

export const PostItemHeader = ({
  author: { profileURL, userName },
}: PostItemProps) => {
  return (
    <>
      <Box flexDirection="row" gap="s12" marginBottom="s16">
        <ProfileAvatar imageURL={profileURL} />
        <Text preset="paragraphMedium" semiBold>
          {userName}
        </Text>
      </Box>
    </>
  );
};
