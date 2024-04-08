import { Pressable } from 'react-native';

import { Post } from '@domain';
import { useNavigation } from '@react-navigation/native';

import { Box, Text, ProfileAvatar } from '@components';

interface PostItemProps extends Pick<Post, 'author'> {}

export const PostItemHeader = ({
  author: { profileURL, userName, id },
}: PostItemProps) => {
  const navigation = useNavigation();

  function navigateTpProfile() {
    navigation.navigate('ProfileScreen', { userId: id });
  }

  return (
    <Pressable onPress={navigateTpProfile}>
      <Box flexDirection="row" gap="s12" marginBottom="s16">
        <ProfileAvatar imageURL={profileURL} />
        <Text preset="paragraphMedium" semiBold>
          {userName}
        </Text>
      </Box>
    </Pressable>
  );
};
